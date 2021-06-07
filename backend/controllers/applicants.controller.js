const ApplicationModel = require('../models/ApplicationModel');
const Mailer = require('../middleware/Mailer');





exports.submitApplication = (req, res, next) => {
    const {
        name,
        phone,
        email,
        position,
        message
    } = req.body;

    if (!name || !phone || !email || !position) {
        console.log("Required fields missing!");
        return res.status(500).json({
            success: false,
            message: "Required fields missing!"
        })
    };
    const newApplication = new ApplicationModel({
        name,
        phone,
        email,
        position,
        message,
        CV: (req.file ? req.file.path : null)
    })
    newApplication.save()
        .then(a => {
            console.log("New application saved");
            Mailer.sendMailToApplicant(name, email,position);
            Mailer.sendApplicationEmailToTeam(req.body);
            res.status(200)
                .json({
                    success: true,
                })
            next();
        })
        .catch(err => {
            console.log("Error saving the application!");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Internal server Error!"
                })
        })



}