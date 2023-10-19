const express = require('express');
const routes  = express.Router();
const client  = require('../connPostgree');
const auth    = require('../src/auth');

const UserControler = require('./Controller/UserController');

routes.get('/', UserControler.find);
routes.post('/', UserControler.save);
routes.delete('/user', UserControler.exclude);
routes.put('/', UserControler.update);


module.exports = routes;
