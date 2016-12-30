var Info = require('../models/info');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/pda');

var infos = [
    new Info({
        date: '2016/12/11',
        sort: 2,
        title: 'watch movie',
        detail: 'with lunch',
        dollar: 350
    }),
    new Info({
        date: '2016/12/13',
        sort: 2,
        title: 'dinner',
        detail: 'no',
        dollar: 200
    }),
    new Info({
        date: '2016/12/15',
        sort: 2,
        title: 'Drink',
        detail: 'no',
        dollar: 250
    }),
    new Info({
        date: '2016/12/15',
        sort: 2,
        title: 'Go to doctor',
        detail: 'no',
        dollar: 250
    }),
    new Info({
        date: '2016/12/15',
        sort: 2,
        title: 'Supper',
        detail: 'no',
        dollar: 250
    }),
    new Info({
        date: '2016/12/15',
        sort: 3,
        title: 'bank',
        detail: 'no',
        dollar: 90088
    }),
    new Info({
        date: '2016/12/15',
        sort: 4,
        title: 'Cash',
        detail: 'no',
        dollar: 250
    }),
    new Info({
        date: '2016/12/15',
        sort: 2,
        title: 'ADSL Bill',
        detail: 'no',
        dollar: 250
    }),
    new Info({
        date: '2016/12/15',
        sort: 1,
        title: 'Parent',
        detail: 'no',
        dollar: 6000
    }),
    new Info({
        date: '2016/12/15',
        sort: 1,
        title: 'Part-time job salary',
        detail: 'no',
        dollar: 250
    })
];

var done = 0;
for (var i = 0; i < infos.length; i++){
    infos[i].save(function (err, result) {
        done++;
        if (done === infos.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}