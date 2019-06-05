exports.updateData = function (req, res, db, colName) {
    let query = {a: ''};
    const collection = db.collection(colName);
    const newValue = {$set: {a: 'new'}};
    collection.updateOne(query, newValue, function (err, res) {
        console.log('updated');
    });

};
