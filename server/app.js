const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const scheduler = require('node-schedule');
const app = express();

const { serverPort } = require('../variables');
const { firebase } = require('./firebase');

var db =  {
  contacts: firebase.database().ref("contact"),
  events: firebase.database().ref("events")
}

var events = { };

db.events.once("value").then(snapshot => {
  events = snapshot.val();
  // console.log(snapshot.val());
  console.log('Events fetched from Firebase, inital')
  console.log(`Data fetch time: ${new Date().toLocaleString()}`);
})

var j = scheduler.scheduleJob('30 */4 * * *', function(){
  db.events.once("value").then(snapshot => {
    events = snapshot.val();
    console.log('Events fetched from Firebase, repeated every 4 hours');
    console.log(`Data fetch time: ${new Date().toLocaleString()}`);
  })
});


var contact = [ ];

const PORT_ADDR = serverPort;

// var eventsTest = {
//   info: [
//     {
//       date: "Oct. 21, 2018",
//       title: "Louisiana Festival",
//       location: "New Orleans",
//     },
//     {
//       date: "Oct. 22, 2018",
//       title: "Texas Harvest",
//       location: "Dallas, TX",
//     },
//     {
//       date: "Nov. 11, 2018",
//       title: "Rock and Roll Along",
//       location: "New York",
//     },
//   ]
// }

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmailRegexValid(email) {
  //console.log(email);
  return !email_regex.test(email);
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/events', cors(), function(req, res, next) {
  res.send(events);
  console.log("A user requested event data");
});

app.post('/api/newcontact', function(req, res, next) {
  
  if (req.body === undefined) {
    console.log("User req undefined");
    res.sendStatus(400);
  }
  else if (req.body.message.length > 260) {
    console.log("User sent message too long");
    res.sendStatus(400);
  }
  
  else if (req.body.name.length < 3) {
    console.log("User name Length Invalid");
    res.sendStatus(400);
  }
  else if (isEmailRegexValid(req.body.email)) {
    console.log("User email Invalid");
    res.sendStatus(400);
  }
  else {
    //contact.push(req.body);
    res.send("Message sent");
  }
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
});

app.listen(PORT_ADDR, function() {
  console.log(`GT BAND Server booted up on port ${PORT_ADDR}!`);
  console.log(`Server Start time: ${new Date().toLocaleString()}`);
});

app.all('*', function(req, res) {
  res.redirect("https://www.goodtherapybandtx.com/");
});