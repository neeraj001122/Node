const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    res.status(404).send('<h1>wrong directry errore 404<h1/>')
})

module.exports = router