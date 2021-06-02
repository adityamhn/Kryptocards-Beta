const express = require('express');
const router = express.Router();
const MailController = require('../controllers/MailerController');
const NewsletterController = require('../controllers/newsletters.controller');

router.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })

router.post('/contact-form-submission',MailController.sendContactFormMail);

router.post('/subscribe-newsletter',NewsletterController.subscribeToNewsletter);

router.get("/unsubscribe-newsletter/:id",NewsletterController.unsubscribeToNewsletter);




module.exports = router;