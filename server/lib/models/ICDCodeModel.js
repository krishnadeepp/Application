'use strict'
var db = require('../database/connection');
var collection  = 'ICDCodes';

exports.save = function(data,cb) {

 
  db.get().collection(collection).insert(data,function(err,data){
  	if(err)
  		console.log(err);
  	cb(data); 

  });
  
  
}

exports.get = function(cb) {
 var items  = db.get().collection(collection).find().toArray(function(err,docs){
 	cb( err,docs);
 });

 exports.getItem = function(id,cb) {
 var items  = db.get().collection(collection).find().toArray(function(err,docs){
 	cb( err,docs);
 });
 
}

  
  


  
  
