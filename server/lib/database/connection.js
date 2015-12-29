var config = require('../config/conf.js');
var MongoClient = require('mongodb').MongoClient
var state = {
  db: null,
}

exports.connect = function(url,done){
	if(state.db) return done();
	MongoClient.connect(url,function(err,db){
		if(err) done(err);
		state.db = db;
		done()
	})
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      console.log('mongoclosed');
      done(err)
    })
  }
}



