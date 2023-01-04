const http = require('http');
const bodyParser = require('body-parser')

const express = require('express')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next) => {
    res.send('<form action = "/" method="POST"><input type="text" name="title"/><input type="Number" name="Number"/><button>Send</button></form>')
    res.redirect('/')
})  

app.use('/',(req,res,next) => {
    res.send('<h1>Welcome to the application</h1>')
    console.log(req.body)
})

app.listen(3000)    
