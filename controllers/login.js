var mq_client = require('../rpc/client');

function signin(req, res){
	var password = replaceUnwantedCharacters(req.params.password);
	var username = replaceUnwantedCharacters(req.params.username);
	var msg_payload = { "username": username, "password": password, "apiId": 1 };	
	console.log("In POST Request = UserName:"+ username+" "+password);
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
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

function signout(req, res){
	var userid = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userid, "token": token, "apiId": 2 };	
	console.log("In POST Request = userid:"+ userid+" "+token);
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			msg_payload = { "userid": userid, "apiId": 4 };	
			mq_client.make_request('login_queue',msg_payload, function(err,result){		
				console.log(result);
				if(err){
					res.status(500).json(err.message);
				}
				else 
				{
					res.status(results.code).json(results);
				}  
			});
		}  
	});
}

function signup(req, res){
	var firstname = req.param("firstname");
	var lastname = req.param("lastname");
	var password = req.param("password");
	var emailId = req.param("emailId");
	var salt = parseInt(Math.random() * 10000000000);
	var date = dateNow("/");
	var msg_payload = { "firstname": firstname, "lastname": lastname, "password": password, "emailId": emailId, "salt": salt, "date": date, "apiId": 3 };	
	console.log("In POST Request = firstname:"+ firstname+" "+lastname+ " " + password+ " " + emailId+ " " + salt + " " + date);
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
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

function updatelastlogin(req, res){
	var userid = parseInt(req.params.id);
	var msg_payload = { "userid": userid, "apiId": 4 };	
	console.log("In POST Request = userid:"+ userid);
	mq_client.make_request('login_queue',msg_payload, function(err,results){		
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

function dateNow(splinter){
	var set = new Date(); 
	  var getDate = set.getDate().toString();
	  if (getDate.length == 1){ //example if 1 change to 01
	   getDate = "0"+getDate;
	  }
	  var getMonth = (set.getMonth()+1).toString();
	  if (getMonth.length == 1){
	   getMonth = "0"+getMonth;
	  }
	  var getYear = set.getFullYear().toString();
	  var gethrs = set.getHours();
	  if(gethrs < 10){
		gethrs = "0" + gethrs;
	  }
	  var getminutes = set.getMinutes();
	  if(getminutes < 10){
		getminutes = "0" + getminutes;
	  }
	  var getseconds = set.getSeconds();
	  if(getseconds < 10){
		getseconds = "0" + getseconds;
	  }
	  var dateNow = getMonth +splinter+ getDate +splinter+ getYear+ " "+gethrs+":"+getminutes+":"+getseconds; //today
	  return dateNow;
}

function replaceUnwantedCharacters(n) {
	var parameter = n;
	var desired = parameter.replace(/<script>/gi, "");
	desired = desired.replace(/\/script>/gi, "");
	return desired
}

exports.signin=signin;
exports.signout=signout;
exports.signup=signup;
exports.updatelastlogin=updatelastlogin;