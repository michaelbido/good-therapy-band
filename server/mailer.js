const nodemailer = require('nodemailer');
const { mailInfo } = require('../variables');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailInfo.from,
    pass: mailInfo.pass
  }
});

function sendMail(name, returnEmail, message) {

  var nameFixed  = name.replace(/<+|>+/gu, "!danger!");
  var returnEmailFixed = returnEmail.replace(/<+|>+/gu, "!danger!");
  var messageFixed  = message.replace(/<+|>+/gu, "!danger!");

  var body =
    "<h1>NEW CONTACT SUBMISSION (no reply)</h1>" +
    "<h3>Name of sender: </h3>" +
    "<p>" + nameFixed + "</p>" +
    "<h3>Entered return email: </h3>" +
    "<p>" + returnEmailFixed + "</p>" +
    "<h3>Message (do not click links): </h3>" +
    "<p>" + messageFixed + "</p>" +
    "<p><strong>Please be cautious with every message, as senders may be trying to do something malicious. Do not click links.</strong></p>" +
    "<p>Do not reply to this email.</p>"

  // console.log(body);
  var date = new Date();

  var mailOptions = {
    from: mailInfo.from,
    to: mailInfo.from,
    subject: 'New Contact Query from GoodTherapyBandtx.com, ' + date,
    html: body
  }

  transporter.sendMail(mailOptions,(err, info) => {
    if (err) {
      //console.log(err)
    }
    else {
      //console.log(info);
    }
  })
}

module.exports.mailer = sendMail;