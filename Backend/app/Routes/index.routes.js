
module.exports = function (app, url) {
    require('./Users.routes')(app, url);
    require('./Admin.routes')(app, url);
    require('./Account.routes')(app, url);
    require('./Transactions.routes')(app, url);
};