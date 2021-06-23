var mongodb = require('./MongodDbUtil');
var ObjectID = mongodb.ObjectID;

module.exports.create = function(data, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.insert(data, function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports.getById = function(id, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    var query = {_id: ObjectID(id)};
    collection.find(query).limit(1).toArray(function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports.getByQuery = function(query, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.find(query).toArray(function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports.find = function(collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.find().toArray(function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports.updateById = function(id, record, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.updateOne({_id: ObjectID(id)},
    { $set: record },
    function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}

module.exports.removeProductById = function(id, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    var query = {_id: ObjectID(id)};
    collection.remove(query, function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
}
