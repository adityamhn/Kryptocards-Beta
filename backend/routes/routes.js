const express = require('express');
const router = express.Router();
const multer =require('multer');
const MailController = require('../controllers/MailerController');
const NewsletterController = require('../controllers/newsletters.controller');
const ApplicationController = require("../controllers/applicants.controller");


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


 //application uploading;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/applications')

  },
  filename: function (req, file, cb) {
      if (file.mimetype !== 'file/pdf') {
          var err = new Error();
          err.code = 'filetype';
          return cb(err);
      } else {
          console.log(file.originalname);
          cb(null, file.originalname);
      }
  }
})
const upload = multer({  
  storage:storage,
  limits: { fieldSize: 5 * 1024 * 1024 }
});


router.post('/upload-application',upload.single("CV"),ApplicationController.submitApplication);


module.exports = router;