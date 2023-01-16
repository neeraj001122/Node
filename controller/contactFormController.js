const path = require('path')

exports.showForm = (req,res,next) => {
    res.sendFile(path.join(__dirname ,'../' ,'views' ,'contactUs.html'));
};

exports.submitSuccessfull = (req,res,next) => {
    res.send('<h1>Form submitted succesfully<h1/>')
};