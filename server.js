const express = require('express');
const session = require('express-session');
const router = require('./routes');
const sequelize = require('./config/connection');
const { Sequelize } = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Express App Setup
const PORT = process.env.PORT || 3000;
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.json());
app.use(router);
app.use(express.static('public'));

server.listen(PORT, function() {
  console.log('Trails App server running');
});