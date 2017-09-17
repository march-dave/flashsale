"use strict";

const express = require("express");
const router = express.Router();
const twilio = require('twilio');

router.post("/", (req, res) => {

    const TWILIO_TEST_ACCOUNTSID = process.env.TWILIO_TEST_ACCOUNTSID;
    const TWILIO_TEST_AUTHTOKEN = process.env.TWILIO_TEST_AUTHTOKEN;
    const TWILIO_TEST_FROM = process.env.TWILIO_TEST_FROM;

    const client = require('twilio')(TWILIO_TEST_ACCOUNTSID, TWILIO_TEST_AUTHTOKEN);
    // let twilioto = req.body.twilioto;
    // let twiliobody = req.body.twiliobody;
    let twilioto = '+12019892302';
    let twiliobody = 'Book your Flight NOW NOW NOW! https://warm-plateau-59585.herokuapp.com/html/book.html';

    client.messages.create({
        to: twilioto,
        from: TWILIO_TEST_FROM,
        body: twiliobody
    }, (err, message) => {
        // res.status(err ? 400 : 200).send(err || message);
    });


    // var options = {
    //     method: 'POST',
    //     url: 'https://api-dev.fareportallabs.com/air/api/search/searchflightavailability',
    //     headers: {
    //         'postman-token': '00950b9f-68f4-4fe2-0dfe-6a347d3deada',
    //         'cache-control': 'no-cache',
    //         authorization: 'Basic eXNhbmd5QGdtYWlsLmNvbTpDNjcwMjc0OQ==',
    //         'content-type': 'application/json'
    //     },
    //     body: {
    //         FlightSearchRequest: {
    //             Adults: 1,
    //             Child: 0,
    //             Seniors: 0,
    //             InfantInLap: 0,
    //             InfantOnSeat: 0,
    //             Youths: 0,
    //             Kid: 0,
    //             TypeOfTrip: 'ONEWAYTRIP',
    //             ClassOfService: 'ECONOMY',
    //             SearchAlternateDates: false,
    //             FromTime: null,
    //             ToTime: null,
    //             SegmentDetails: [{
    //                 Origin: 'NYC',
    //                 Destination: 'LON',
    //                 DepartureDate: '2017-10-16T00:00:00',
    //                 DepartureTime: '1100'
    //             }]
    //         },
    //         ResponseVersion: 'VERSION41'
    //     },
    //     json: true
    // };

    // request(options, function(error, response, body) {
    //     if (error) throw new Error(error);

    //     // console.log(body);
    //     res.send(body);
    // });



});

module.exports = router;