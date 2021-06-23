var url = "mongodb://localhost:27017/shops";
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var assert = require('assert');

function connect(callback) {
    MongoClient.connect(url, callback);
};

//Cache the mongodb connection
var dbCache = {};
connect(function (err, client) {
    if (!err) {
        console.log("Connection with mongodb successful");
        dbCache.db = client.db("shops");
    } else {
        console.log("Error while connecting to Mongo DB " + err);
        dbCache = {};
    }
});

module.exports.getDb = function() {
    return dbCache.db;
}

module.exports.getMongodb = function() {
    return mongodb;    
}

module.exports.connect = connect;

module.exports.ObjectID = mongodb.ObjectID;