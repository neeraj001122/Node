const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

const login = require('./routes/login');
const messageForm = require('./routes/message');
const errorPage = require('./routes/404');
const contactUs = require('./routes/Form');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(login)
app.use(contactUs)
app.use(messageForm)
app.use(errorPage)

app.listen(3000)