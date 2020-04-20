const { DB_USER, DB_PASSWORD } = require('./config.js');

const Promise = require('bluebird');
const initOptions = {
  promiseLib: Promise,
};
var pgp = require('pg-promise')(initOptions);

const dbConnection = {
  host: '3.16.40.83',
  port: 5432,
  database: 'sdc-dummy',
  user: DB_USER,
  password: DB_PASSWORD,
};

var db = pgp(dbConnection);

module.exports = db;
