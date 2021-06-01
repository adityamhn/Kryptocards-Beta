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
  

exports.sendUnsubscribeMail = (name,email)=>{
  var mainOptions = {
    from: nodeMailerUser,
    to: email,
    subject: "Hello from Kryptocards",
    html: `
    <h1>Greetings frorm Kryptocards</h1>
<p>
<bold>Hello ${name}!</bold>
You have been added to our newsletter list, thank you for subscribing!
</p>
<p>Warm Regards,</p>
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
        subject: "Hello from Kryptocards",
        html: `
        <h1>Greetings frorm Kryptocards</h1>
    <p>
    <bold>Hello ${name}!</bold>
    We have recieved your contact request and would reach out to you
    as soon as possible.
    </p>
    <p>Warm Regards,</p>
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
        to: teamMailList,
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