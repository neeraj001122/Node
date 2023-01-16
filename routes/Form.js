const express = require('express');


const router = express.Router();

const form = require('../controller/contactFormController')

router.use("/contactus" ,form.showForm);

router.use("/success" ,form.submitSuccessfull)


module.exports = router;