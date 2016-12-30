var express = require('express');
var router = express.Router();
var Info = require('../models/info');

/* GET home page. */
var income = {};
var outlay = {};
var bank = {};
var cash = {};
var incometotal = 0;
var outlaytotal = 0;
var banktotal = 0;
var cashtotal = 0;
router.get('/', function(req, res, next) {
    res.render('main/index', { title: 'pda', income: income, outlay: outlay, bank: bank, cash: cash, incometotal: incometotal, outlaytotal: outlaytotal, banktotal: banktotal, cashtotal: cashtotal });
});


Info.find({ sort: 1 },function(err, docs) {
    income = docs;
    for (var i in docs) {
        var item = docs[i];
        incometotal += item.dollar;
    }
});
Info.find({ sort: 2 },function(err, docs) {
    outlay = docs;
    for (var i in docs) {
        var item = docs[i];
        outlaytotal += item.dollar;
    }
});
Info.find({ sort: 3 },function(err, docs) {
    bank = docs;
    for (var i in docs) {
        var item = docs[i];
        banktotal += item.dollar;
    }
});
Info.find({ sort: 4 },function(err, docs) {
    cash = docs;
    for (var i in docs) {
        var item = docs[i];
        cashtotal += item.dollar;
    }
});
module.exports = router;
