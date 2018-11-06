const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const email_regex = /^([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))/;

var contact = [ ];

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

function isEmailRegexValid(email) {
  return email_regex.test(email);
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/events', cors(), function(req, res, next) {
  res.send(eventsTest);
  console.log("data was requested");
});

app.post('/api/newcontact', function(req, res, next) {
  contact.push(req.body);
  if (req.body.message.length > 260) {
    res.sendStatus(400);
  }
  else if (req.body === undefined) {
    res.sendStatus(400);
  }
  else if (req.body.name.length < 3) {
    res.sendStatus(400);
  }
  else if (isEmailRegexValid(req.body.email)) {
    res.sendStatus(400);
  }
  else {
    res.send("Message sent");
  }
});

app.listen(8081, function() {
  console.log('Server magic booted up on port 8081!');
});