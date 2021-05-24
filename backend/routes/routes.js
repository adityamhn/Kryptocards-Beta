const express = require('express');
const router = express.Router();
const MailController = require('../controllers/MailerController');


router.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })

router.post('/contact-form-submission',MailController.sendContactFormMail)






module.exports = router;