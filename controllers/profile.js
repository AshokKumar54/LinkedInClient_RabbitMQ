var mq_client = require('../rpc/client');

////homepage

function getuserprofiledetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 14 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getuserfollowingcompanies(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 15 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getuserrecommendations(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 16 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getuserprojectdetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 17 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function geteducationdetails_home(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 18 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getuserexperiencedetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 19 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getendorsedskilldetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 20 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getlastlogindetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 21 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

////Companies following

function getcompanies(req, res){
	var userid = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userid, "token": token, "apiId": 22 };	
	console.log("In POST Request = userId:"+ userid+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function followcompanies(req, res){
	var companyId = parseInt(req.param("companyId"));
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var msg_payload = { "userid": userId, "token": token, "companyId": companyId, "apiId": 23 };	
	console.log("In POST Request = userId:"+ userId+" "+token + " " +companyId);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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


////Recommendations

function recommendations(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var otheruserId = req.param("otheruserid");
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "otheruserid": otheruserId, "description": description, "apiId": 24 };	
	console.log("In POST Request = userId:"+ userId+" "+token + " " + otheruserId + " " + description);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

////User profile

function updateuserprofile(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var firstname = req.param("firstname");
	var lastname = req.param("lastname");
	var city = req.param("city");
	var state = req.param("state");
	var shortDetail = req.param("shortdetail");
	var summary = req.param("summary");
	var interest = req.param("interest");
	var birthday = req.param("month") + "|" + req.param("day") + "|" + req.param("year");
	var maritalStatus = req.param("maritalstatus");
	var phonenumber = req.param("phonenumber");
	var emailId = req.param("emailId");
	var msg_payload = { "userid": userId, "token": token, "firstname": firstname, "lastname": lastname, "city": city, "state": state, "shortdetail": shortDetail, "summary": summary, "interest": interest, "birthday": birthday, "maritalstatus": maritalStatus, "phonenumber": phonenumber, "emailid": emailId, "apiId": 26 };	
	console.log("In POST Request = userId:"+ userId+" "+token + " " + firstname + " " + lastname + " " + city + " " + state + " " + shortDetail + " " + summary + " " + interest + " " + birthday + " " + maritalStatus + " " + phonenumber + " " + emailId);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getuserdetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 25 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

////Skills

function addskill(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var skillName = req.param("skillname");
	var msg_payload = { "userid": userId, "token": token, "skillName": skillName, "apiId": 27 };	
	console.log("In POST Request = userId:"+ userId+" "+token + " " + skillName);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getskills(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 28 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function reloadskills(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var msg_payload = { "userid": userId, "token": token, "apiId": 29 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function deleteskills(req, res){
	var skillId = parseInt(req.params.skillid);
	var token = req.params.token;
	var msg_payload = { "skillid": skillId, "token": token, "apiId": 30 };	
	console.log("In POST Request = skillId:"+ skillId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getusers(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 31 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function loadskills(req, res){
	var otheruserId = parseInt(req.param("otheruserid"));
	var token = req.param("token");
	var msg_payload = { "otheruserid": otheruserId, "token": token, "apiId": 32 };	
	console.log("In POST Request = otheruserid:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function endorseskills(req, res){
	var otheruserId = parseInt(req.param("otheruserid"));
	var token = req.param("token");
	var skillid = parseInt(req.param("skillid"));
	var userid = parseInt(req.param("userid"));
	var msg_payload = { "userid": userId, "token": token, "otheruserid": otheruserId, "skillid": skillid, "apiId": 33 };	
	console.log("In POST Request = userId:"+ userId+" "+token + " " + skillid + " " + otheruserId);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

/////////////////////////////////////////////////////////////////////
////Experience

function addexperience(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var companyName = req.param("companyname");
	var title = req.param("title");
	var location = req.param("location");
	var startdatemonth = req.param("startdatemonth");
	var startdateyear = req.param("startdateyear");
	var enddatemonth = req.param("enddatemonth");
	var enddateyear = req.param("enddateyear");
	var islatest = parseInt(req.param("islatest"));
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "companyname": companyName, "title": title, "location": location, "startdatemonth": startdatemonth, "startdateyear": startdateyear, "enddatemonth": enddatemonth, "enddateyear": enddateyear, "islatest": islatest, "description": description, "apiId": 34 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getexperiencedetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 35 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getexperiencedetailsbyid(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var experienceId = req.param("experienceid");
	var msg_payload = { "userid": userId, "token": token, "experienceid": experienceId, "apiId": 36 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function updateexperience(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var experienceId = req.param("experienceid");
	var companyName = req.param("companyname");
	var title = req.param("title");
	var location = req.param("location");
	var startdatemonth = req.param("startdatemonth");
	var startdateyear = req.param("startdateyear");
	var enddatemonth = req.param("enddatemonth");
	var enddateyear = req.param("enddateyear");
	var islatest = parseInt(req.param("islatest"));
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "companyname": companyName, "title": title, "location": location, "startdatemonth": startdatemonth, "startdateyear": startdateyear, "enddatemonth": enddatemonth, "enddateyear": enddateyear, "islatest": islatest, "description": description, "experienceid": experienceId, "apiId": 37 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function deleteexperience(req, res){
	var token = req.params.token;
	var experienceId = parseInt(req.params.experienceId);
	var msg_payload = { "experienceid": experienceId, "token": token, "apiId": 38 };	
	console.log("In POST Request = experienceid:"+ experienceId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

////Education

function addeducation(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var school = req.param("school");
	var startdateyear = req.param("startdateyear");
	var enddateyear = req.param("enddateyear");
	var degree = req.param("degree");
	var grades = req.param("grades");
	var fieldofstudy = req.param("fieldofstudy");
	var activitiesandsocieties = req.param("activitiesandsocieties");
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "school": school, "startdateyear": startdateyear, "enddateyear": enddateyear, "degree": degree, "grades": grades, "fieldofstudy": fieldofstudy, "activitiesandsocieties": activitiesandsocieties, "description": description, "apiId": 39 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getusereducationdetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 40 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function geteducationbyid(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var educationid = req.param("educationid");
	var msg_payload = { "userid": userId, "token": token, "educationid": educationid, "apiId": 41 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function updateeduation(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var educationid = req.param("educationid");
	var school = req.param("school");
	var startdateyear = req.param("startdateyear");
	var enddateyear = req.param("enddateyear");
	var degree = req.param("degree");
	var grades = req.param("grades");
	var fieldofstudy = req.param("fieldofstudy");
	var activitiesandsocieties = req.param("activitiesandsocieties");
	var description = req.param("description");
	var msg_payload = { "userid": userId, "educationid": educationid, "token": token, "school": school, "startdateyear": startdateyear, "enddateyear": enddateyear, "degree": degree, "grades": grades, "fieldofstudy": fieldofstudy, "activitiesandsocieties": activitiesandsocieties, "description": description, "apiId": 42 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function deleteeducation(req, res){
	var token = req.params.token;
	var educationid = req.params.educationid;
	var msg_payload = { "educationid": educationid, "token": token, "apiId": 43 };	
	console.log("In POST Request = educationid:"+ educationid+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

////Project

function addproject(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var experienceid = parseInt(req.param("experienceid"));
	var projectname = req.param("projectname");
	var startdatemonth = req.param("startdatemonth");
	var startdateyear = req.param("startdateyear");
	var enddatemonth = req.param("enddatemonth");
	var enddateyear = req.param("enddateyear");
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "experienceid":experienceid, "projectname":projectname, "startdatemonth":startdatemonth, "startdateyear":startdateyear, "enddatemonth":enddatemonth, "enddateyear":enddateyear, "description":description, "apiId": 44 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getallexperiencedetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var msg_payload = { "userid": userId, "token": token, "apiId": 45 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function getprojectdetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var experienceId = req.params.experienceid;
	var msg_payload = { "userid": userId, "token": token, "experienceid":experienceId, "apiId": 46 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function loadprojectdetails(req, res){
	var userId = parseInt(req.params.id);
	var token = req.params.token;
	var projectId = req.params.projectid;
	var msg_payload = { "userid": userId, "token": token, "projectid": projectId, "apiId": 47 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function updateproject(req, res){
	var userId = parseInt(req.param("userid"));
	var token = req.param("token");
	var projectid = req.param("projectid");
	var name = req.param("projectname");
	var experienceid = req.param("experienceid");
	var startdatemonth = req.param("startdatemonth");
	var startdateyear = req.param("startdateyear");
	var enddatemonth = req.param("enddatemonth");
	var enddateyear = req.param("enddateyear");
	var description = req.param("description");
	var msg_payload = { "userid": userId, "token": token, "projectid": projectid, "experienceid":experienceid, "projectname":projectname, "startdatemonth":startdatemonth, "startdateyear":startdateyear, "enddatemonth":enddatemonth, "enddateyear":enddateyear, "description":description, "apiId": 48 };	
	console.log("In POST Request = userId:"+ userId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

function deleteproject(req, res){
	var token = req.params.token;
	var projectId = req.params.projectid;
	var msg_payload = { "projectid": projectId, "token": token, "apiId": 49 };	
	console.log("In POST Request = projectid:"+ projectId+" "+token);
	mq_client.make_request('profile_queue',msg_payload, function(err,results){		
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

exports.getuserprofiledetails=getuserprofiledetails;
exports.getuserfollowingcompanies=getuserfollowingcompanies;
exports.getuserrecommendations=getuserrecommendations;
exports.getuserprojectdetails=getuserprojectdetails;
exports.geteducationdetails_home=geteducationdetails_home;
exports.getuserexperiencedetails=getuserexperiencedetails;
exports.getendorsedskilldetails=getendorsedskilldetails;
exports.getlastlogindetails=getlastlogindetails;

exports.getcompanies=getcompanies;
exports.followcompanies=followcompanies;

exports.recommendations=recommendations;

exports.updateuserprofile=updateuserprofile;
exports.getuserdetails=getuserdetails;

exports.addskill=addskill;
exports.getskills=getskills;
exports.reloadskills=reloadskills;
exports.deleteskills=deleteskills;
exports.getusers=getusers;
exports.loadskills=loadskills;
exports.endorseskills=endorseskills;

exports.addexperience=addexperience;
exports.getexperiencedetails=getexperiencedetails;
exports.getexperiencedetailsbyid=getexperiencedetailsbyid;
exports.updateexperience=updateexperience;
exports.deleteexperience=deleteexperience;

exports.addeducation=addeducation;
exports.getusereducationdetails=getusereducationdetails;
exports.geteducationbyid=geteducationbyid;
exports.updateeduation=updateeduation;
exports.deleteeducation=deleteeducation;

exports.addproject=addproject;
exports.getallexperiencedetails=getallexperiencedetails;
exports.getprojectdetails=getprojectdetails;
exports.loadprojectdetails=loadprojectdetails;
exports.updateproject=updateproject;
exports.deleteproject=deleteproject;

