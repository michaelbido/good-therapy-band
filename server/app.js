const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();

const eventsTest = {
  info: [
    {
      date: "Oct. 21, 2018",
      title: "Louisiana Festival",
      location: "New Orleans",
    },
    {
      date: "Oct. 22, 2018",
      title: "Texas Harvest",
      location: "Dallas, TX",
    },
    {
      date: "Nov. 11, 2018",
      title: "Rock and Roll Along",
      location: "New York",
    },
  ]
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/events', cors(), function(req, res, next) {
  res.send(eventsTest);
  console.log("data was requested");
});

app.listen(8081, function() {
  console.log('Server magic booted up on port 8081!');
});