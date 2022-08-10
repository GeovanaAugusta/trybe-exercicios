const db = require('./connection');

// Exercício 4
const User = {
  checkIfExists: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [[user]] = await db.query(sql, [id]);
    return user;
  },

  // Exercício 1 - inserir dados do array
  create: async (user) => {
    const { firstName, lastName, email, password } = user;
    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
    const [{ insertId }] = await db.query(sql, [firstName, lastName, email, password]);
    return insertId;
  },

  // Exercício 2 - mostrar o array com dados do user
  findAll: async () => {
    const sql = 'SELECT * FROM users';
    const [users] = await db.query(sql);
    return users;
  },

  // Exercício 3
  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [[user]] = await db.query(sql, [id])
    return user;
  },

  // Exercício 4
  update: async (id, user) => {
    const { firstName, lastName, password, email } = user;
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'
    await db.query(sql, [firstName, lastName, email, password, id]);
  },

  delete: async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    await db.query(sql, [id]);
  },
};

module.exports = User;