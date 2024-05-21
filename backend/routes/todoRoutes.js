// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', (req, res) => {
  Todo.getAll((err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(data);
  });
});

// Read a ToDo
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Todo.getById(id, (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }
      res.json(data);
    });
  });


// Create a new todo
router.post('/', (req, res) => {
  const newTodo = { title: req.body.title };
  Todo.create(newTodo, (err, data) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(201).json(data);
  });
});

// Delete a todo
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Todo.deleteById(id, (err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (data === 0) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.json({ message: 'Todo deleted' });
  });
});

module.exports = router;
