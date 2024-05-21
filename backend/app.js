// app.js
const express = require('express');
const db = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const { PORT } = require('./config/config');






const app = express();



const cors = require('cors');  
app.use(cors());


// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
