var express = require('express');
var router = express.Router();
var url = require('url');
var app = require('../app');
//var mongoose = require('mongoose');
var offerCollection = require('./schema.js');
var mongodb = require("mongodb");

//Connection for mongoLAB
var mongoURL = "mongodb://heroku_app32785437:f393769d47o6ngu47jl4frnl90@ds039411.mongolab.com:39411/heroku_app32785437";
//connection for DoupMongo
//var mongoURL = "mongodb://OMNmudOQNeFd:UUhwzKRtJQhm@mongosoup-cont002.mongosoup.de:31322/cc_OMNmudOQNeFd";
//Connection local mongo
//var mongoURL = "mongodb://127.0.0.1/mydb";

router.post('/submitjson*', function(req, res) {
	var jsonReq = req.body.xorequest;
	var userName  = req.body.username;
    var MongoClient = mongodb.MongoClient;
    
    if(userName == 'undefined'
    	|| userName == ""){
    	res.render('index',{ jsonresponse: { 'jsonReq' : jsonReq, 'userName': "Please enter UserName"}});
    	return;
    }
    
    if(jsonReq == 'undefined'
    	|| jsonReq == ""){
    	res.render('index',{ jsonresponse: { 'jsonReq' : "Please enter json to save please...!!!", 'userName': userName}});
    	return;
    }
    
    MongoClient.connect(mongoURL, function(err, db) {
        if (!err) {
        	
        	db.collection("test").update(
        			{username: userName},
        			   {jsonstr: jsonReq, username: userName, inuse : 0}, { upsert: true }, function(error, updatedValue){
        				   try{
        				   
	        					if(error) {
	        						console.log("There is an error");
	        					}
	        					console.log("updated value" + updatedValue);
	        					db.collection("test").findOne({ username: userName}, function(err, thor) {
	        						  if (err){
	        						  res.render('index',{ jsonresponse: { 'jsonReq' : "could not save json", 'userName': userName}});
	        						  }else{
	        						  res.render('index',{ jsonresponse: { 'jsonReq' : jsonReq, 'userName': userName}});
	        						  }
	        						 // console.dir(thor);
	        						});	
        				   }catch(error){
        		        		  console.dir(error.message);
        		        	  }
        					
        					}
        			);
        }else{
        	console.log("Error connectiong to mongodb");
        }
    });
});

router.post('/loadjson*', function(req, res) {
	console.log("this is load in post function");
	var userName  = req.body.username;
    var MongoClient = mongodb.MongoClient;
    
    MongoClient.connect(mongoURL, function(err, db) {
        if (!err) {
        	db.collection("test").findOne({ 'username' : userName}, function(err, dbresponse) {
        		try{
	      		  if (err) return console.error(err);
	      		  var jsonStr = dbresponse == 'undefined' || dbresponse == null ?"You dont have JSON for this user":dbresponse.jsonstr;
	      		  res.render('index',{ jsonresponse: { 'jsonReq' : jsonStr, 'userName': userName}}); 
        		}catch(error){
          		  console.dir(error.message +"Exception in post of loadjson");
          	  }
      		});
        }else{
        	console.log("error connectiong to mongodb");
        }
    });
});

router.get('/loadjson*', function(req, res) {
	console.log("this is load get function");
	var userName = req.query.username;
    var MongoClient = mongodb.MongoClient;
    
    MongoClient.connect(mongoURL, function(err, db) {
        if (!err) {
        	db.collection("test").findOne({ 'username' : userName}, function(err, dbresponse) {
        	  try{
	      		  if (err) return console.error(err);
		      		  console.dir(dbresponse);
		      		  var nullResponse = dbresponse == 'undefined' || dbresponse == null ?"true":"false";
		      		  var jsonStr = nullResponse == "true" ?"You dont have JSON for this user ":dbresponse.jsonstr;
		      		  var formattedStr = jsonStr.replace(/[\n\t\r]/g,"");
		      		  console.dir(formattedStr);
		      		  
		      		if(nullResponse == "true"){
		      			res.render('index',{ jsonresponse: { 'jsonReq' : formattedStr, 'userName': userName}});
		      			return;
		      		}else{
		      		  res.send(formattedStr);
		      		}
        	  } catch(error){
        		  console.dir(error.message +"Exception in get of loadjson");        	  }
      		});
        }
    });
});

  router.get('/createjson*', function(req, res) {
	  console.log("in createjson");
	  res.render('index');
	//res.redirect('index');
  });
  
  router.get('/deletejson*', function(req, res) {
	  console.log("in deletejson");
	  var MongoClient = mongodb.MongoClient;
	  
	    MongoClient.connect(mongoURL, function(err, db) {
	        if (!err) {
	        	 db.collection("test").remove({}, function(err, dbresponse){
	        		 
	        	 });
	        }
	    });
  });
  
module.exports = router;
