const Mailer = require('../middleware/Mailer');





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
        return res.status(200).json({
            success:true,
            
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