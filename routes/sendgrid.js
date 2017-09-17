'use strict';
var router = require('express').Router();
// require("sendgrid");

// var SendGrid = require('../lib/sendgrid');

router.post('/', (req, res) => {

    // console.log(req.body.email);

    // let userEmail = req.body.email;
    // let subject = req.body.subject
    // let message = req.body.message

    // let jobAppArr = {};

    // jobAppArr = {
    //     userEmail: req.body.email,
    //     subject: req.body.subject,
    //     message: req.body.message
    // };

    console.log('Test!!!');

    // SendGrid.sendGridNotification(jobAppArr, (err, returnValue) => {
    //     res.status(err ? 400 : 200).send(err || returnValue);
    // });



    // var sendgrid = require("sendgrid")(process.env.SENDGRID_JMS_API_KEY);
    // var email = new sendgrid.Email();

    // email.addTo("test@sendgrid.com");
    // email.setFrom("you@youremail.com");
    // email.setSubject("Sending with SendGrid is Fun");
    // email.setHtml("and easy to do anywhere, even with Node.js");

    // sendgrid.send(email);

    // let userEmail = req.body.email;
    // let subject = req.body.subject
    // let message = req.body.message


    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email('davedvlee@gmail.com');
    // var toEmail = new helper.Email(userEmail);



    // var toEmail = new helper.Email('2019892302@tmomail.net');
    var toEmail = new helper.Email('9292253456@vtext.com');
    // var toEmail = new helper.Email(userEmail);



    var subject2 = 'Sending with SendGrid is Fun';


    var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
    var mail = new helper.Mail(fromEmail, subject2, toEmail, content);



    var sg = require('sendgrid')('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');
    // var sg = require('sendgrid')(process.env.SENDGRID_JMS_API_KEY);

    console.log('111111');

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    });

    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_JMS_API_KEY);
    // const msg = {
    //     to: userEmail,
    //     from: userEmail,
    //     subject: 'Sending with SendGrid is Fun',
    //     text: 'and easy to do anywhere, even with Node.js',
    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);


})

module.exports = router;