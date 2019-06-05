const http = require('http');
const port = 8080;
const MongoClient = require('mongodb').MongoClient;
const dbName = 'mongoDb';
const url = 'mongodb://localhost:27017';
let globalDb = null;
MongoClient.connect(url + '/' + dbName, {useNewUrlParser: true}, function (err, db) {
    globalDb = db.db(dbName);
});

const getData = require('./get-data');
const setData = require('./set-data');
const delData = require('./del-data');
const updateData = require('./update-data');
console.log(globalDb);

http.createServer((req, res) => {
    if (req.method === 'GET') {
        getData.getData(req, res, globalDb);
    } else if (req.method === 'POST') {
        setData.setData(req, res, globalDb, 'testData');
    } else if (req.method === 'DELETE') {
        delData.delData(req, res, globalDb, 'testData');
    } else if (req.method === 'PATCH') {
        updateData.updateData(req, res, globalDb, 'testData');
    }


}).listen(port);










