const express = require('express');
const path = require('path')

const router = express.Router();

router.use("/contactus" ,(req,res,next) => {
    res.sendFile(path.join(__dirname ,'../' ,'views' ,'contactUs.html'));
});

router.use("/success" , (req,res,next) => {
    res.send('<h1>Form submitted succesfully<h1/>')
})


module.exports = router;