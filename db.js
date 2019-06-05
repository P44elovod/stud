const MongoClient = require('mongodb').MongoClient;
const dbName = 'mongoDb';
const url = 'mongodb://localhost:27017';
let globalDb = null;
MongoClient.connect(url + '/' + dbName, {useNewUrlParser: true}, function (err, db) {
 globalDb = db.db(dbName);
 if (err) console.log('err');
  console.log('connected');

});


exports.dbo = globalDb;
// console.log(globalDb);
