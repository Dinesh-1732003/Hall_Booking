import nodemailer from "nodemailer";
import twilio from 'twilio';

// const client = require('twilio')(accountSid, authToken);
export const sendMail = async(mailPerson,type)=>{
  console.log("mail event triggered")
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "primostepz@gmail.com",
      pass: "bscyddmvawffmkxh",
    },
    secure: true,
  });

  const mailData1 = {
    from: "primostepz@gmail.com",
    to: "kavinnishanthan2004@gmail.com",
    subject: "Message From KHB",
    text: `Dear ${mailPerson} Faculty Coordinator ,you have to accept or reject the booking request for ${type}
    `,

  };
  const mailData2 = {
    from: "primostepz@gmail.com",
    to: "dineshk.21cse@kongu.edu",
    subject: "Message From KHB",
    text: `Dear ${mailPerson} Hall Incharge,you have to accept or reject the booking request for ${type}
    `,

  };
  const accountSid = 'AC04272af826279389fbc4803162e85630';
const authToken = '75bca8878d3291e62b3cfd1cf7e19834';
// Function to send SMS using Twilio
const client = twilio(accountSid, authToken);
 const sendSMS = async () => {
    client.messages
    .create({
        body: `Message From KHB\nFaculty coordinator,There is an Booking Request in the ${type}\n To Accept or Reject this request, kindly login to our portal`,
        from: '+18317080095',
        to: '+919363005039'
    })
    .then(message => console.log("meassge sent by sms ",message.sid))
    .catch((err)=>console.log("sms error",err))
    console.log('SMS')
    client.messages
    .create({
        body: `Message From KHB\nDear Hall Incharge, There is an Booking Request in the ${type}\n To Accept or Reject this request, kindly login to our portal`,
        from: '+18317080095',
        to: '+919025000054'
    })
    .then(message => console.log("meassge sent by sms ",message.sid))
    .catch((err)=>console.log("sms error",err))
    console.log('SMS')
};
  sendSMS();
  await transporter.sendMail(mailData1, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  await transporter.sendMail(mailData2, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return false;
  console.log(req.body);
}