var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


// INSERT AN USER ( DOCUMENT )
var insertUser = function(usrname, mail, psw, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var userCollection = db.collection('Users');  // Il y a une collection Projects dans la DB TrelloDriveChat
    // Insert some documents 
    userCollection.insertMany([{username : usrname , password : psw , email : mail}], function(err, result) {
      assert.equal(err, null); // affiche une erreur si le cb err != null
      // console.log(err);
      console.log("Inserted 1 user into the TrelloDriveChat/Users database");
      db.close;
      callback(err);
    });
  });
}

// UPDATE AN USER ( DOCUMENT )
var updateUser = function(db, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
  // Get the documents collection 
  var userCollection = db.collection('Users');
  // Update document where email = machin@enib.fr
  userCollection.updateOne({ email : "machin@enib.fr" }
    , { $set: { username : "machine" } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the user");
    callback(result);
    });
  });  
}

// DELETE AN USER ( DOCUMENT )
var deleteUser = function() {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var userCollection = db.collection('Users');
    // Insert some documents 
    userCollection.deleteOne({ username : "machin" }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed an user");
    });
  });
}

// FIND ALL USERS ( DOCUMENT )
var findUsers = function(callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var userCollection = db.collection('Users');
    // Find some documents 
    userCollection.find({}).toArray(function(err, docs) { // renvoi tous les documents. Sinon findOne({name : "machin"}) par exemple
      assert.equal(err, null);
      // console.log("Found the following users");
      // console.dir(docs);
      db.close
      callback(docs);
    }); 
  });
}

// FIND AN USER ( DOCUMENT )
var findUser = function(mail, psw, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var userCollection = db.collection('Users');
    // Find some documents 
    userCollection.find({email : mail , password : psw}).toArray(function(err, docs) {
      assert.equal(err, null);
      db.close;
      callback(docs);
    });
  }); 
}

module.exports = {
  insertUser : insertUser,
  deleteUser : deleteUser,
  udpateUser : updateUser,
  findUsers : findUsers,
  findUser : findUser
}