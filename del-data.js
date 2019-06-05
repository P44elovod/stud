exports.delData = function (req, res, db, colName) {
    let query = {a: 'vvvvvvv'};
    const collection = db.collection(colName);
    collection.deleteOne(query, function (err, obj) {
        console.log('deleted');
    });

};