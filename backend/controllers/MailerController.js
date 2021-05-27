const Mailer = require('../middleware/Mailer');
const ContactFormModel = require('../models/ContactFormModel');





exports.sendContactFormMail = (req,res,next)=>{
    const {name,email,phoneNumber,message} = req.body;
    if (!name || !email || !phoneNumber || !message){

        return res.status(500).json({
            success:false,
            message:"Required Values Not Filled!"
        })

    };
    try{
        Mailer.sendEmailToRecipient(name,email);
        Mailer.sendEmailToTeam(req.body);
        const newContactForm = new ContactFormModel(req.body);
        newContactForm.save()
        .then(n=>{
            console.log("Contact form saved!");
             res.status(200).json({
                success:true,
                
            })
            next();
        })
        .catch(err=>{
            console.log("Error saving the contact form!");
            console.log(err);
            return res.status(500)
            .send({
                success:false,
                message:"Unknown Error!"
            })
        })
        
    }catch (e){
        console.log("Error sending the mails!");
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
    

}