var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/TrelloDriveChat';
// Connection mongo
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

   insertProject(db, function()  {
    //  updateProject(db, function() {
    //   deleteProject(db, function() {
        findProjects(db, function() {
            db.close();
             });
        //   });
        // });
     });
});

// INSERT A PROJECT ( DOCUMENT )
var insertProject = function(db, callback) {
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
    callback(result);
  });
}

// UPDATE A PROJECT ( DOCUMENT )
var updateProject = function(db, callback) {
  // Get the documents collection 
  var projectCollection = db.collection('Projects');
  // Update document where name = 1
  var datedebut = new Date();
  projectCollection.updateOne({ name : 1 }
    , { $set: { startingdate : datedebut } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document");
    callback(result);
  });  
}

// DELETE A PROJECT ( DOCUMENT )
var deleteProject = function(db, callback) {
  // Get the documents collection 
  var projectCollection = db.collection('Projects');
  // Insert some documents 
  projectCollection.deleteOne({ b : 1 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field b equal to 1");
    callback(result);
  });
}

// FIND ALL PROJECTS ( DOCUMENT )
var findProjects = function(db, callback) {
  // Get the documents collection 
  var projectCollection = db.collection('Projects');
  // Find some documents 
  projectCollection.find({}).toArray(function(err, docs) { // renvoi tous les documents. Sinon findOne({name : 1}) par exemple
    assert.equal(err, null);
    console.log("Found the following projects");
    console.dir(docs);
    callback(docs);
  });
}