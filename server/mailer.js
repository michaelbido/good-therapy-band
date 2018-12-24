var nodemailer = require('nodemailer');
var { mailInfo }= require('../variables');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailInfo.login,
    pass: mailInfo.pass
  }
});

module.exports.mailer = transporter;