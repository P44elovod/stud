exports.getData = function (req, res, db) {
    const collection = db.collection('testData');
    collection.find({}).toArray(function (err, data) {
        console.log(data);
    });

};

