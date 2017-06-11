var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// INSERT A PROJECT ( DOCUMENT )
var insertProject = function(db, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var projectCollection = db.collection('Projects');  // Il y a une collection Projects dans la DB TrelloDriveChat
    // Insert some documents 
    var datedebut = new Date(2017, 6, 8);
    var datefin = new Date(2017, 6, 13);
    var note = "a faire";
    var des = "Un Beau Projet";
    var taches = 1;
    var collab = 1;
    projectCollection.insertMany([
      {name : 1 , startingdate : datedebut , finaldate : datefin , description : des , notes : note , tasks : taches , collaborateurs : collab}
    ], function(err, result) {
      assert.equal(err, null); // affiche une erreur si (err != null)
      console.log("Inserted 1 project into the TrelloDriveChat/Projects database");
      db.close;
      callback(result);
    });
  });
}

// UPDATE A PROJECT ( DOCUMENT )
var updateProject = function(db, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var projectCollection = db.collection('Projects');
    // Update document
    var datedebut = new Date();
    projectCollection.updateOne({ name : 1 }
      , { $set: { startingdate : datedebut } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document");
      db.close;
      callback(result);
    });  
  }); 
}

// DELETE A PROJECT ( DOCUMENT )
var deleteProject = function(db, mail, callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var projectCollection = db.collection('Projects');
    // Insert some documents 
    projectCollection.deleteOne({email : mail}, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // console.log("Removed the document");
      callback(result);
    });
  });
}

// FIND ALL PROJECTS ( DOCUMENT )
var findProjects = function(callback) {
  var url = 'mongodb://localhost:27017/TrelloDriveChat';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to mongoDB server");
    // Get the documents collection 
    var projectCollection = db.collection('Projects');
    // Find some documents 
    projectCollection.find({}).toArray(function(err, docs) { // renvoi tous les documents. Sinon findOne({name : 1}) par exemple
      assert.equal(err, null);
      console.log("Found the following projects");
      console.dir(docs);
      callback(docs);
    }); 
  });
}


module.exports = {
  insertProject : insertProject,
  deleteProject : deleteProject,
  udpateProject : updateProject,
  findProjects : findProjects
}