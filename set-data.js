let data = '';

exports.setData = function (req, res, db, colName) {
    req.on("data", function (chunk) {
        data += chunk.toString();
    })
    req.on("end", function () {
        insertData(data, db, colName, () => {
            console.log(data);
            res.end();
        });
    });
}

const insertData = function (data, db, colName, callback) {
    const collection = db.collection(colName);
    collection.insertOne({a: data}, function (err, result) {
        console.log('data added');
        callback(result);

    });
}