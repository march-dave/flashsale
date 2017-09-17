"use strict";

const express = require("express");
const request = require("request");
const router = express.Router();

router.post("/", (req, res) => {

    var options = {
        method: 'POST',
        url: 'https://api-dev.fareportallabs.com/air/api/search/searchflightavailability',
        headers: {
            'postman-token': '00950b9f-68f4-4fe2-0dfe-6a347d3deada',
            'cache-control': 'no-cache',
            authorization: 'Basic eXNhbmd5QGdtYWlsLmNvbTpDNjcwMjc0OQ==',
            'content-type': 'application/json'
        },
        body: {
            FlightSearchRequest: {
                Adults: 1,
                Child: 0,
                Seniors: 0,
                InfantInLap: 0,
                InfantOnSeat: 0,
                Youths: 0,
                Kid: 0,
                TypeOfTrip: 'ONEWAYTRIP',
                ClassOfService: 'ECONOMY',
                SearchAlternateDates: false,
                FromTime: null,
                ToTime: null,
                SegmentDetails: [{
                    Origin: 'NYC',
                    Destination: 'LON',
                    DepartureDate: '2017-10-16T00:00:00',
                    DepartureTime: '1100'
                }]
            },
            ResponseVersion: 'VERSION41'
        },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });


});

module.exports = router;