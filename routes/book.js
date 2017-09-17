"use strict";

const express = require("express");
const request = require("request");
const router = express.Router();

router.post("/", (req, res) => {

    var options = {
        method: 'POST',
        url: 'https://api-dev.fareportallabs.com/air/api/book/BookFlightAvailibilty',
        headers: {
            'postman-token': '18ffa330-754f-5a0f-84df-548af6f13271',
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body: {
            BookingVersion: 'VERSION24',
            FlightBookRequest: {
                BillingInfo: {
                    Address1: '123 Main Street',
                    City: 'Newyork',
                    ContactPhone: '222222222222222',
                    Email: 'rahul.agrawal.tech+ac@fareportal.com',
                    Country: 'United states',
                    Phone: '222222222222222',
                    State: 'NY',
                    Zip: '10001'
                },
                CCExpirationDate: '2017-2-01T00:00:00',
                CVNumber: '111',
                CardCode: 'VI',
                CardHolderName: 'steve roberts',
                CardNumber: '4222222222222222',
                ContractId: 1152,
                ContractLocatorKey: 'd99c0af3-ed87-42e3-8267-4a2d0b040241',
                IsInsuranceSelected: true,
                IsRebookFare: false,
                IsTravelAssistSelected: false,
                IsUpgradeFareAccepted: 'false',
                traveler: [{
                    AssociatedOrderID: '1',
                    BirthDate: '1985-1-22T00:00:00',
                    Gender: 'Male',
                    FirstName: 'Tom',
                    LastName: 'Robinson',
                    MiddleInitial: '',
                    PaxOrder: 0,
                    PaxType: 'ADULT',
                    TSARedressNumber: '',
                    Title: 'Mr',
                    PassportDetail: {
                        ExpirationDate: '22-02-2025T00:00:00',
                        IssueDate: '22-02-2005T00:00:00',
                        IssuingCity: 'London',
                        IssuingCounty: 'UK',
                        Number: 'passportabc'
                    }
                }]
            }
        },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });


});

module.exports = router;