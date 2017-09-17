'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {



    // Transaction.getAll((err, transactions) => {
    //     if (err) return res.status(400).send(err);
    //     res.send(transactions);
    // });
});

router.post('/', (req, res) => {
    // Transaction.create(req.body, (err, transaction) => {
    //     if (err) return res.status(400).send(err);
    //     res.send(transaction);
    // })
});

module.exports = router;


module.exports = router;