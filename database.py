import sqlite3
import hashlib
from config import Config

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
    
    admin = cursor.execute('SELECT id FROM users WHERE username = ?', ('admin',)).fetchone()
    if not admin:
        cursor.execute(
            'INSERT INTO users (username, password, name, is_admin) VALUES (?, ?, ?, 1)',
            ('admin', hash_password('admin123'), 'Администратор')
        )
    
    conn.commit()
    conn.close()