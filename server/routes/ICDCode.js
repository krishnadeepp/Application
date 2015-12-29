


var icdCode = (function(){
	
	var icdmodel = require('../lib/models/ICDCodeModel.js'); 
	var ICDCodeSave  = function(req, res)
	{
		
		 console.log("req body" + req);
		
		icdmodel.save(req.body,function(data){
			res.send();
		});
	}

	var ICDCodeGet  = function(req, res)
	{
		
		icdmodel.get(function(err,docs){
			res.send(docs);
		});
		


	}
	return {
		Route : function(app){
			app.post('/ICDCode', ICDCodeSave);
			app.get('/ICDCode', ICDCodeGet);
		}
	}
})();

module.exports = icdCode;