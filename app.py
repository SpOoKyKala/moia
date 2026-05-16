import json
from flask import Flask, render_template, request, session, redirect, url_for, jsonify, flash
from functools import wraps
from config import Config
import hashlib
import sqlite3

app = Flask(__name__)
app.config.from_object(Config)

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def get_db_connection():
    conn = sqlite3.connect(Config.DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            name TEXT,
            is_admin INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            icon TEXT,
            order_num INTEGER DEFAULT 0
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS lessons (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            course_id INTEGER,
            title TEXT NOT NULL,
            content TEXT,
            order_num INTEGER DEFAULT 0,
            FOREIGN KEY (course_id) REFERENCES courses (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS quizzes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lesson_id INTEGER,
            question TEXT NOT NULL,
            options TEXT,
            correct INTEGER DEFAULT 0,
            FOREIGN KEY (lesson_id) REFERENCES lessons (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            lesson_id INTEGER,
            completed BOOLEAN DEFAULT 0,
            score INTEGER DEFAULT 0,
            completed_at TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (lesson_id) REFERENCES lessons (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_state (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE,
            visited_components TEXT,
            completed_lessons TEXT,
            quest_stats TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            quiz_id TEXT,
            score INTEGER,
            total INTEGER,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS presentations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            cover_image TEXT,
            pptx_filename TEXT,
            slides_json TEXT,
            order_num INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    try:
        cursor.execute('ALTER TABLE presentations ADD COLUMN slides_json TEXT')
    except:
        pass
    
    admin = cursor.execute('SELECT id FROM users WHERE username = ?', ('admin',)).fetchone()
    if not admin:
        cursor.execute(
            'INSERT INTO users (username, password, name, is_admin) VALUES (?, ?, ?, 1)',
            ('admin', hash_password('admin123'), 'Администратор')
        )
    
    conn.commit()
    conn.close()

init_db()

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        if not session.get('is_admin'):
            flash('Доступ только для администратора', 'error')
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    conn = get_db_connection()
    pres = conn.execute('SELECT id, title, description, cover_image, pptx_filename FROM presentations ORDER BY order_num, created_at DESC').fetchall()
    conn.close()
    presentations_data = [{'id': p['id'], 'title': p['title'], 'description': p['description'], 'cover_image': p['cover_image'], 'pptx_filename': p['pptx_filename']} for p in pres]
    return render_template('index.html', presentations_json=json.dumps(presentations_data, ensure_ascii=False))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '').strip()
        
        if not username or not password:
            flash('Введите логин и пароль', 'error')
            return render_template('login.html')
        
        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username = ? AND password = ?', 
                          (username, hash_password(password))).fetchone()
        conn.close()
        
        if user:
            session['user_id'] = user['id']
            session['username'] = user['username']
            session['is_admin'] = user['is_admin'] == 1
            flash('Успешный вход!', 'success')
            return redirect(url_for('admin' if session['is_admin'] else 'index'))
        else:
            flash('Неверный логин или пароль', 'error')
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '').strip()
        name = request.form.get('name', '').strip()
        
        if not username or not password:
            flash('Введите логин и пароль', 'error')
            return render_template('register.html')
        
        if len(password) < 4:
            flash('Пароль должен быть минимум 4 символа', 'error')
            return render_template('register.html')
        
        conn = get_db_connection()
        existing = conn.execute('SELECT id FROM users WHERE username = ?', (username,)).fetchone()
        
        if existing:
            conn.close()
            flash('Пользователь уже существует', 'error')
            return render_template('register.html')
        
        try:
            cursor = conn.cursor()
            cursor.execute(
                'INSERT INTO users (username, password, name, is_admin) VALUES (?, ?, ?, 0)',
                (username, hash_password(password), name or username)
            )
            conn.commit()
            user_id = cursor.lastrowid
            conn.close()
            
            session['user_id'] = user_id
            session['username'] = username
            session['is_admin'] = False
            flash('Регистрация успешна!', 'success')
            return redirect(url_for('index'))
        except Exception as e:
            conn.close()
            flash('Ошибка регистрации', 'error')
    
    return render_template('register.html')

@app.route('/logout')
def logout():
    session.clear()
    flash('Вы вышли из системы', 'info')
    return redirect(url_for('index'))

@app.route('/course/<int:course_id>')
def course(course_id):
    return render_template('course.html', course_id=course_id)

@app.route('/lesson/<int:lesson_id>')
def lesson(lesson_id):
    return render_template('lesson.html', lesson_id=lesson_id)

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/admin')
@admin_required
def admin():
    conn = get_db_connection()
    
    users_count = conn.execute('SELECT COUNT(*) as count FROM users').fetchone()['count']
    completions_count = conn.execute('SELECT COUNT(*) as count FROM progress WHERE completed = 1').fetchone()['count']
    avg_result = conn.execute('SELECT AVG(score) as avg FROM user_results').fetchone()
    avg_score = int(avg_result['avg'] or 0)
    
    users = conn.execute('SELECT * FROM users ORDER BY created_at DESC LIMIT 50').fetchall()
    recent_activity = conn.execute('''
        SELECT u.username, r.score, r.total, r.completed_at 
        FROM user_results r 
        JOIN users u ON r.user_id = u.id 
        ORDER BY r.completed_at DESC LIMIT 10
    ''').fetchall()
    
    courses = conn.execute('SELECT * FROM courses ORDER BY order_num').fetchall()
    conn.close()

    with open('static/js/main.js', 'r', encoding='utf-8') as f:
        main_js = f.read()
    
    idx = main_js.find('const LEARNING_MODULES = [')
    if idx != -1:
        start = idx + len('const LEARNING_MODULES = ')
        depth = 0
        end = start
        for i in range(start, len(main_js)):
            if main_js[i] == '[':
                depth += 1
            elif main_js[i] == ']':
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        raw_json = main_js[start:end].replace('\r', '')
        result = []
        i = 0
        in_string = False
        escaped = False
        while i < len(raw_json):
            c = raw_json[i]
            if escaped:
                result.append(c)
                escaped = False
            elif c == '\\':
                result.append(c)
                escaped = True
            elif c == '"':
                result.append(c)
                in_string = not in_string
            elif c == '\n' and in_string:
                result.append('\\n')
            else:
                result.append(c)
            i += 1
        fixed = ''.join(result)
        try:
            parsed = json.loads(fixed)
            courses_json = json.dumps(parsed, ensure_ascii=False)
        except:
            courses_json = '[]'
    else:
        courses_json = '[]'
    
    return render_template('admin.html', 
                         users_count=users_count,
                         completions_count=completions_count,
                         avg_score=avg_score,
                         users=users,
                         recent_activity=recent_activity,
                         courses=courses,
                         courses_json=courses_json)

@app.route('/admin/add_user', methods=['POST'])
@admin_required
def admin_add_user():
    username = request.form.get('username', '').strip()
    password = request.form.get('password', '').strip()
    name = request.form.get('name', '').strip()
    is_admin = 1 if request.form.get('is_admin') else 0
    
    if not username or not password:
        return redirect(url_for('admin', error='Заполните обязательные поля'))
    
    conn = get_db_connection()
    existing = conn.execute('SELECT id FROM users WHERE username = ?', (username,)).fetchone()
    if existing:
        conn.close()
        return redirect(url_for('admin', error='Пользователь уже существует'))
    
    conn.execute(
        'INSERT INTO users (username, password, name, is_admin, created_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)',
        (username, hash_password(password), name, is_admin)
    )
    conn.commit()
    conn.close()
    return redirect(url_for('admin'))

@app.route('/admin/toggle_admin/<int:user_id>', methods=['POST'])
@admin_required
def admin_toggle_admin(user_id):
    if user_id == session.get('user_id'):
        return redirect(url_for('admin', error='Нельзя изменить свою роль'))
    
    conn = get_db_connection()
    conn.execute('UPDATE users SET is_admin = NOT is_admin WHERE id = ?', (user_id,))
    conn.commit()
    conn.close()
    return redirect(url_for('admin'))

@app.route('/admin/delete_user/<int:user_id>', methods=['POST'])
@admin_required
def admin_delete_user(user_id):
    if user_id == session.get('user_id'):
        return redirect(url_for('admin', error='Нельзя удалить себя'))
    
    conn = get_db_connection()
    conn.execute('DELETE FROM user_results WHERE user_id = ?', (user_id,))
    conn.execute('DELETE FROM progress WHERE user_id = ?', (user_id,))
    conn.execute('DELETE FROM users WHERE id = ?', (user_id,))
    conn.commit()
    conn.close()
    return redirect(url_for('admin'))

@app.route('/api/progress', methods=['GET', 'POST'])
def progress_api():
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    conn = get_db_connection()
    
    if request.method == 'GET':
        user_state = conn.execute('SELECT * FROM user_state WHERE user_id = ?', (session['user_id'],)).fetchone()
        conn.close()
        if user_state:
            return jsonify({
                'visited_components': json.loads(user_state['visited_components']) if user_state['visited_components'] else [],
                'completed_lessons': json.loads(user_state['completed_lessons']) if user_state['completed_lessons'] else [],
                'quest_stats': json.loads(user_state['quest_stats']) if user_state['quest_stats'] else {'solved': 0, 'correct': 0}
            })
        return jsonify({
            'visited_components': [],
            'completed_lessons': [],
            'quest_stats': {'solved': 0, 'correct': 0}
        })
    
    data = request.get_json()
    cursor = conn.cursor()
    
    visited = json.dumps(data.get('visited_components', []), ensure_ascii=False)
    completed = json.dumps(data.get('completed_lessons', []), ensure_ascii=False)
    quest = json.dumps(data.get('quest_stats', {'solved': 0, 'correct': 0}), ensure_ascii=False)
    
    cursor.execute('''
        INSERT OR REPLACE INTO user_state (user_id, visited_components, completed_lessons, quest_stats, updated_at)
        VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    ''', (session['user_id'], visited, completed, quest))
    
    if data.get('lesson_id'):
        cursor.execute('''
            INSERT OR REPLACE INTO progress (user_id, lesson_id, completed, score, completed_at)
            VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
        ''', (session['user_id'], data.get('lesson_id'), data.get('completed', 0), data.get('score', 0)))
    
    conn.commit()
    conn.close()
    return jsonify({'status': 'ok'})

@app.route('/admin/save_courses', methods=['POST'])
@admin_required
def admin_save_courses():
    data = request.get_json()
    
    with open('static/js/main.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    idx = content.find('const LEARNING_MODULES = [')
    if idx == -1:
        return jsonify({'error': 'LEARNING_MODULES not found'}), 500
    
    start = idx + len('const LEARNING_MODULES = ')
    depth = 0
    end = start
    for i in range(start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    
    new_modules = []
    for mod in data:
        mod_str = json.dumps(mod, ensure_ascii=False, indent=4)
        new_modules.append(mod_str)
    new_array = '[\n  ' + ',\n  '.join(new_modules) + '\n]'
    
    new_content = (content[:start] + new_array + content[end:]).replace('\r\n', '\n').replace('\r', '\n')
    
    with open('static/js/main.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return jsonify({'status': 'ok', 'message': 'Файл сохранён'})

@app.route('/upload_img', methods=['POST'])
def upload_img():
    import os, uuid
    os.makedirs('static/uploads/lessons', exist_ok=True)
    if 'image' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    file = request.files['image']
    ext = file.filename.rsplit('.', 1)[-1].lower() if '.' in file.filename else 'jpg'
    filename = uuid.uuid4().hex[:16] + '.' + ext
    file.save('static/uploads/lessons/' + filename)
    return jsonify({'url': '/static/uploads/lessons/' + filename, 'filename': filename})

@app.route('/delete_img', methods=['POST'])
def delete_img():
    import os
    data = request.get_json()
    filepath = 'static/uploads/lessons/' + data.get('filename', '')
    if os.path.exists(filepath):
        os.remove(filepath)
    return jsonify({'status': 'ok'})

@app.route('/download_img', methods=['POST'])
def download_img():
    import os, uuid
    os.makedirs('static/uploads/lessons', exist_ok=True)
    data = request.get_json()
    url = data.get('url', '')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400
    try:
        import urllib.request
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            img_data = response.read()
            content_type = response.headers.get('Content-Type', '')
            ext = 'jpg'
            if 'png' in content_type.lower():
                ext = 'png'
            elif 'gif' in content_type.lower():
                ext = 'gif'
            elif 'webp' in content_type.lower():
                ext = 'webp'
            filename = uuid.uuid4().hex[:16] + '.' + ext
            filepath = os.path.join('static/uploads/lessons', filename)
            with open(filepath, 'wb') as f:
                f.write(img_data)
            return jsonify({'url': '/static/uploads/lessons/' + filename, 'filename': filename})
    except Exception as e:
        err_msg = str(e)
        return jsonify({'error': err_msg}), 500

@app.route('/test_download', methods=['GET'])
def test_download():
    return jsonify({'status': 'ok', 'message': 'test route works'})

@app.route('/upload_base64', methods=['POST'])
def upload_base64():
    import os, uuid, base64
    os.makedirs('static/uploads/lessons', exist_ok=True)
    data = request.get_json(silent=True)
    if data is None:
        return jsonify({'error': 'Invalid JSON'}), 400
    b64 = data.get('data', '')
    ext = data.get('ext', 'png')
    if not b64:
        return jsonify({'error': 'No data'}), 400
    try:
        img_data = base64.b64decode(b64)
        filename = uuid.uuid4().hex[:16] + '.' + ext
        with open('static/uploads/lessons/' + filename, 'wb') as f:
            f.write(img_data)
        return jsonify({'url': '/static/uploads/lessons/' + filename, 'filename': filename})
    except Exception as e:
        return jsonify({'error': type(e).__name__ + ': ' + str(e)}), 500

@app.route('/presentations')
def presentations():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    conn = get_db_connection()
    pres = conn.execute('SELECT * FROM presentations ORDER BY order_num, created_at DESC').fetchall()
    conn.close()
    return render_template('presentations.html', presentations=pres)

@app.route('/presentation/<int:pres_id>')
def presentation_view(pres_id):
    if 'user_id' not in session:
        return redirect(url_for('login'))
    conn = get_db_connection()
    pres = conn.execute('SELECT * FROM presentations WHERE id = ?', (pres_id,)).fetchone()
    conn.close()
    if not pres:
        flash('Презентация не найдена', 'error')
        return redirect(url_for('presentations'))
    return render_template('presentation_view.html', presentation=pres)

@app.route('/admin/presentations')
@admin_required
def admin_presentations():
    conn = get_db_connection()
    pres = conn.execute('SELECT * FROM presentations ORDER BY order_num, created_at DESC').fetchall()
    conn.close()
    return render_template('admin_presentations.html', presentations=pres)

@app.route('/admin/presentation/add', methods=['POST'])
@admin_required
def admin_add_presentation():
    title = request.form.get('title', '').strip()
    description = request.form.get('description', '').strip()
    cover_image = request.form.get('cover_image', '').strip()
    pptx_filename = request.form.get('pptx_filename', '').strip()
    slides_json = request.form.get('slides_json', '').strip()
    order_num = request.form.get('order_num', '0').strip()
    
    if not title:
        flash('Введите название', 'error')
        return redirect(url_for('admin_presentations'))
    
    conn = get_db_connection()
    conn.execute(
        'INSERT INTO presentations (title, description, cover_image, pptx_filename, slides_json, order_num) VALUES (?, ?, ?, ?, ?, ?)',
        (title, description, cover_image, pptx_filename, slides_json, order_num or 0)
    )
    conn.commit()
    conn.close()
    flash('Презентация добавлена', 'success')
    return redirect(url_for('admin_presentations'))

@app.route('/admin/presentation/edit/<int:pres_id>', methods=['POST'])
@admin_required
def admin_edit_presentation(pres_id):
    title = request.form.get('title', '').strip()
    description = request.form.get('description', '').strip()
    cover_image = request.form.get('cover_image', '').strip()
    pptx_filename = request.form.get('pptx_filename', '').strip()
    slides_json = request.form.get('slides_json', '').strip()
    order_num = request.form.get('order_num', '0').strip()
    
    if not title:
        flash('Введите название', 'error')
        return redirect(url_for('admin_presentations'))
    
    conn = get_db_connection()
    conn.execute(
        'UPDATE presentations SET title = ?, description = ?, cover_image = ?, pptx_filename = ?, slides_json = ?, order_num = ? WHERE id = ?',
        (title, description, cover_image, pptx_filename, slides_json, order_num or 0, pres_id)
    )
    conn.commit()
    conn.close()
    flash('Презентация обновлена', 'success')
    return redirect(url_for('admin_presentations'))

@app.route('/admin/presentation/delete/<int:pres_id>', methods=['POST'])
@admin_required
def admin_delete_presentation(pres_id):
    import os
    conn = get_db_connection()
    pres = conn.execute('SELECT cover_image, pptx_filename FROM presentations WHERE id = ?', (pres_id,)).fetchone()
    if pres:
        if pres['cover_image']:
            cover_path = 'static/uploads/lessons/' + pres['cover_image']
            if os.path.exists(cover_path):
                os.remove(cover_path)
        if pres['pptx_filename']:
            pptx_path = 'static/uploads/presentations/' + pres['pptx_filename']
            if os.path.exists(pptx_path):
                os.remove(pptx_path)
    conn.execute('DELETE FROM presentations WHERE id = ?', (pres_id,))
    conn.commit()
    conn.close()
    flash('Презентация удалена', 'success')
    return redirect(url_for('admin_presentations'))

@app.route('/upload_pptx', methods=['POST'])
def upload_pptx():
    import os, uuid
    
    os.makedirs('static/uploads/presentations', exist_ok=True)
    
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    file = request.files['file']
    if not file.filename:
        return jsonify({'error': 'No file selected'}), 400
    ext = file.filename.rsplit('.', 1)[-1].lower() if '.' in file.filename else 'pptx'
    if ext not in ['pptx', 'ppt']:
        return jsonify({'error': 'Only pptx/ppt files allowed'}), 400
    
    filename = uuid.uuid4().hex[:16] + '.' + ext
    file.save('static/uploads/presentations/' + filename)
    
    return jsonify({'filename': filename, 'url': '/static/uploads/presentations/' + filename})

if __name__ == '__main__':
    import os
    os.makedirs('static/uploads/lessons', exist_ok=True)
    os.makedirs('static/uploads/presentations', exist_ok=True)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)