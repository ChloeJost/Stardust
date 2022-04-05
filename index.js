const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

connectDB();

app.use(cors('*'));
app.use(express.json({ extended: false }));

app.get('/stardust', (req, res) => res.send('Welcome to the Stardust app'));

const register = require('./routes/register');
const login = require('./routes/login');
const constellations = require('./routes/constellations');
const threads = require('./routes/threads');
const users = require('./routes/users');

// Define routes

app.use('/register', register);
app.use('/login', login);
app.use('/constellations', constellations);
app.use('/forum', threads);
app.use('/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
