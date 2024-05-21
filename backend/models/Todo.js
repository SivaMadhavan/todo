// models/Todo.js
const db = require('../config/db');

const Todo = {};

Todo.getAll = (result) => {
  db.query('SELECT * FROM todos', (err, res) => {
    if (err) {
      console.error('Error getting todos:', err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Todo.create = (newTodo, result) => {
  db.query('INSERT INTO todos SET ?', newTodo, (err, res) => {
    if (err) {
      console.error('Error creating todo:', err);
      result(null, err);
      return;
    }
    result(null, { id: res.insertId, ...newTodo });
  });
};

Todo.deleteById = (id, result) => {
  db.query('DELETE FROM todos WHERE id = ?', id, (err, res) => {
    if (err) {
      console.error('Error deleting todo:', err);
      result(null, err);
      return;
    }
    result(null, res.affectedRows);
  });
};

Todo.getById = (id, result) => {
    db.query('SELECT * FROM todos WHERE id = ?', id, (err, res) => {
      if (err) {
        console.error('Error deleting todo:', err);
        result(null, err);
        return;
      }
      res = res[0]
      result(null, res);
    });
  };

module.exports = Todo;
