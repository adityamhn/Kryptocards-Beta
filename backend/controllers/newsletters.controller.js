const Mailer = require('../middleware/Mailer');
const NewsletterEmail = require('../models/NewsletterEmail');


exports.unsubscribeToNewsletter = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.status(500)
            .json({
                success: false,
                message: "Id not found!"
            })
    };
    try {
        NewsletterEmail.deleteOne({
                _id: id
            })
            .then(response => {
                console.log("Unsubscribed!")
                res.status(200)
                    .json({
                        success: true
                    })
                next();
            })
            .catch(err => {
                console.log("Error deleting the model!");
                console.log(err);
                return res.status(500)
                    .json({
                        success: false,
                        message: "Unknown Error!"
                    })
            })




    } catch (err) {
        console.log(err);
        return res.status(500)
            .json({
                success: false,
                message: "Error unsubscribing!"
            })
    }

}




exports.subscribeToNewsletter = async (req, res, next) => {
    const email = req.body.email;
    if (!email) {
        return res.status(500)
            .json({
                success: false,
                message: "Email not provided!"
            })
    };
    try {
        const test = await NewsletterEmail.findOne({
            email: email
        });
        if (test) {
            res.status(200)
                .json({
                    success: true,
                })
                await  Mailer.sendSubscribeMail(email);
            next();
            return;
        }
        const newNewsletterEmail = new NewsletterEmail({
            email: email
        });
        newNewsletterEmail.save()
            .then(async (response) => {
                console.log(`${email} added to list!!)`);
                res.status(200)
                    .json({
                        success: true,
                    })
                   await Mailer.sendSubscribeMail(email);
                next();

            })
            .catch(err => {
                console.log(`Error adding ${email} to the list!`);
                console.log(err);
                return res.status(500)
                    .json({
                        success: false,
                        message: "Server Error!"
                    })
            })



    } catch (err) {
        console.log(err);
        return res.status(500)
            .json({
                success: false,
                message: "Server Error!"
            })
    }



}