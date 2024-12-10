require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');

const port = 3000;

const http = require('http');
const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(morgan('dev'));

const run_server = async() => {
    await connectDB();
    // connect to server
    server.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
};

run_server();

app.use('/events', eventRoutes);
app.use('/auth', authRoutes);

// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).json({ status: 404, message: 'Route not found' });
  });
  