const http = require('http');

const express = require('express')

const app = express();

app.use((req,res,next) => {
    next();
})

app.use((req,res,next) => {
    res.send({ key1: 1 })
})

app.listen(3000)    
