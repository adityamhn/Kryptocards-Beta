const nodemailer = require('nodemailer');

const nodeMailerUser = process.env.GOOGLE_EMAIL;
const nodeMailerPassword = process.env.GOOGLE_PASSWORD;

const teamMailList = [
    'aryamannsingh9@gmail.com',
    'arnavagr22@gmail.com',
    'aditya530026@gmail.com',
    'kunal18042002@gmail.com'
]

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
      user: nodeMailerUser,
      pass: nodeMailerPassword,
    },


  });
  

exports.sendSubscribeMail = (email)=>{
  var mainOptions = {
    from: nodeMailerUser,
    to: email,
    subject: "You are now subscribed!",
    html: `
    <h1>Greetings from Krypto Cards!</h1>

<p>You have now successfully subscribed to Krypto Cards Newsletter.</p>

<p>For any queries, please write to <a href="mailto:kryptocards@gmail.com">kryptocards@gmail.com</a> </p>

<p>Thank you for showing your interest into Krypto Cards.</p>

<p style="font-weight:bold;">Stay safe. Stay healthy</p>

<p>Team Kryptocards</p>
    `
  };

  transporter.sendMail(mainOptions, async (err, info) => {
    if (err) {
      console.log(err)
      return res.status(500).send({ message: "ERROR_SENDING_EMAIL" })
    }
    else{
        console.log("Mail sent to " + email);
    }

  })
}

 



exports.sendEmailToRecipient = (name,email)=>{
    var mainOptions = {
        from: nodeMailerUser,
        to: email,
        subject: "Thank you for contacting us! - Krypto Cards",
        html: `
        <h1>Dear ${name}</h1>,

  <p>We have received your contact request and your message. We will shortly go through it and will definitely get back to you.<p>

<p>For any queries, please write to <a href="mailto:kryptocards@gmail.com">kryptocards@gmail.com</a> <p>

<p>Thank you for showing your interest into Krypto Cards.</p>

<p style="font-weight:bold;">Stay safe. Stay healthy</p>

<p>Team Kryptocards</p>
        `
      };

      transporter.sendMail(mainOptions, async (err, info) => {
        if (err) {
          console.log(err)
          return res.status(500).send({ message: "ERROR_SENDING_EMAIL" })
        }
        else{
            console.log("Mail sent to " + email);
        }
  
      })


};



exports.sendEmailToTeam = ({name,email,phoneNumber,message})=>{


    var mainOptions = {

        from: nodeMailerUser,
        to: 'kryptocards@gmail.com',
        subject: "You got a new contact request!",
        html: `
        <h1>Yo Bitch</h1>
    <p>
    You got a message from ${name}  |  ${email} | ${phoneNumber}.
    Message : ${message}
    </p>
    <p>Check it out.</p>
    <p>Peace</p>
        `
      };

      transporter.sendMail(mainOptions, async (err, info) => {
        if (err) {
          console.log(err)
          console.log("Error sending mail to the team.")
           throw new Error("Error sending the mail!");
        }
        else{
            console.log("Mail sent to the team.");
        }
  
      })
}




exports.sendMailToApplicant = (name,email,position)=>{


    var mainOptions = {

        from: nodeMailerUser,
        to: email,
        subject: "Greetings from Kryptocards!",
        html: `
        Dear ${name},

        <p>Thank you for applying for the position of "${position}". We have received your application and will be reviewing it.
         The position is vacant and we will be contacting you 
         for the interview after reviewing your application.</p>
        
        <p>For any queries, please write to kryptocards@gmail.com </p>
        
        <p>Thank you for showing your interest into Krypto Cards.</p>
        
        <p style="font-weight:bold">Stay safe. Stay healthy</p>
        
        <p>Team Kryptocards</p>
        `
      };

      transporter.sendMail(mainOptions, async (err, info) => {
        if (err) {
          console.log(err)
          console.log("Error sending mail to applicant")
           throw new Error("Error sending the mail!");
        }
        else{
            console.log("Mail sent to the team.");
        }
  
      })

}


exports.sendApplicationEmailToTeam = ({name,email,position,phone,message})=>{

  var mainOptions = {

    from: nodeMailerUser,
    to: 'kryptocards@gmail.com',
    subject: "You got a new contact request!",
    html: `
    <h1>Yo Bitch</h1>
<p>
You got a new application from ${name}  |  ${email} | ${phone} for  position : ${position}
Message : ${message}
</p>
<p>Check it out.</p>
<p>Peace</p>
    `
  };

  transporter.sendMail(mainOptions, async (err, info) => {
    if (err) {
      console.log(err)
      console.log("Error sending mail to the team.")
       throw new Error("Error sending the mail!");
    }
    else{
        console.log("Mail sent to the team.");
    }

  })
}