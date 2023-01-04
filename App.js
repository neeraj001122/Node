const http = require('http');
const bodyParser = require('body-parser')

const express = require('express')

const adminFile = require('./routes/admin')
const shopFile = require('./routes/shop')
const errorPage = require('./routes/404')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminFile);
app.use('/shop',shopFile);  

app.use(errorPage);


app.listen(3000)    
