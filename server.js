var fs = require("fs");
var host = process.env.HOST;
var port = process.env.PORT;
var express = require("express");
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test.tst.onez@gmail.com', // magicnumbersmath@gmail.com
    pass: '123qweQWE'
  }
});

app.use(express.static(__dirname + "/"));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.post('/sendEmail', function(req, res) {
    var mailOptions = {
      from: 'test.tst.onez@gmail.com',
      to: 'magicnumbersmath@gmail.com',
      subject: 'New Client of Magic Numbers math',
        
      text: 'email: ' + req.body.email + '!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send("Sent!");
});

app.listen(port, host);