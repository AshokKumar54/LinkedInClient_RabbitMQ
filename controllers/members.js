var mq_client = require('../rpc/client');


function addconnections(req, res){
		var otheruserId = parseInt(req.param("otheruserid"));
		var userId = parseInt(req.param("userid"));
		var token = req.param("token");
		var msg_payload = { "otheruserid": otheruserId, "userid": userId, "token": token, "apiId": 5 };	
		console.log("In POST Request = userid:"+ userId+" "+otheruserId + " " + token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function showaddedconnections(req, res){
		var userId = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 6 };
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function showinvitedconnections(req, res){
		var userId = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 7 };
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function showinvitations(req, res){
		var userId = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 8 };
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function showconnectionsfordelete(req, res){
		var userid = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 9 };	
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function deleteconnections(req, res){
		var id = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 10 };
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function acceptinvitations(req, res){
		var otheruserId = parseInt(req.param("otheruserid"));
		var userId = parseInt(req.param("userid"));
		var token = req.param("token");
		var msg_payload = { "userid": userId, "otheruserid": otheruserId, "token": token, "apiId": 12 };
		console.log("In POST Request = userId:"+ userId+" "+otheruserId + " " + token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


function showavailableconnection(req, res){
		var userId = parseInt(req.params.id);
		var token = req.params.token;
		var msg_payload = { "userid": userId, "token": token, "apiId": 11 };
		console.log("In POST Request = userId:"+ userId+" "+token);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}

function searchconnection(req, res){	
		var userId = parseInt(req.params.id);
		var token = req.params.token;
		var searchquery = req.params.searchstring;
		var msg_payload = { "userid": userId, "token": token, "searchquery": searchquery, "apiId": 13 };	
		console.log("In POST Request = userId:"+ userId+" "+token+" "+searchquery);
		mq_client.make_request('members_queue',msg_payload, function(err,results){		
			console.log(results);
			if(err){
				res.status(500).json(err.message);
			}
			else 
			{
				res.status(results.code).json(results);
			}  
		});
}


exports.searchconnection=searchconnection;
exports.showavailableconnection=showavailableconnection;
exports.acceptinvitations=acceptinvitations;
exports.deleteconnections=deleteconnections;
exports.showconnectionsfordelete=showconnectionsfordelete;
exports.showinvitations=showinvitations;
exports.showinvitedconnections=showinvitedconnections;
exports.showaddedconnections=showaddedconnections;
exports.addconnections=addconnections;