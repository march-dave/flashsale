"use strict";

const express = require("express");
const router = express.Router();
const twilio = require('twilio');

router.post("/", (req, res) => {


    // +13023141051



    const TWILIO_TEST_ACCOUNTSID = process.env.TWILIO_TEST_ACCOUNTSID;
    const TWILIO_TEST_AUTHTOKEN = process.env.TWILIO_TEST_AUTHTOKEN;
    const TWILIO_TEST_FROM = process.env.TWILIO_TEST_FROM;

    const client = require('twilio')(TWILIO_TEST_ACCOUNTSID, TWILIO_TEST_AUTHTOKEN);
    // let twilioto = req.body.twilioto;
    // let twiliobody = req.body.twiliobody;
    let twilioto = '+19292253456';
    let twiliobody = 'Test';

    client.messages.create({
        to: twilioto,
        from: TWILIO_TEST_FROM,
        body: twiliobody
    }, (err, message) => {
        // res.status(err ? 400 : 200).send(err || message);
    });
});

module.exports = router;