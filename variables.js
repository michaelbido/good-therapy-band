require('dotenv').config();

module.exports.fb = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

module.exports.serverPort = parseInt(process.env.SERVER_PORT, 10);

module.exports.mailInfo = {
  from: process.env.MAIL_USERNAME,
  pass: process.env.MAIL_PASS,
  to: process.env.MAIL_TO
}

