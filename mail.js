const nodemailer = require('nodemailer');
const express =require('express');
const app = express();


let transporter = nodemailer.createTransport({
    service:'gmail', 
    auth:{
        user:'glorysonmohendiar@gmail.com',
        pass:'your password'
    }
});

const mailOptions = {
  from: 'glorysonmohendiar@gmail.com',
  to: 'mgckvinith@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});