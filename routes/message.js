const express = require('express');
const path = require('path')

const router = express.Router();

const data = [];

router.get('/', (req,res,next) => {
   res.sendFile(path.join(__dirname , '../' , 'views' , 'message.html'))
})

router.post('/',(req,res) => {  
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data)
    res.redirect('/')
})


module.exports = router 