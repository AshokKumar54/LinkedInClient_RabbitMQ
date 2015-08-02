	
exports.addexperience = function(req, res){
		res.render('addexperience', { title: 'Add Experience | LinkedIn' });
};
	
exports.editexperience = function(req, res){
		res.render('editexperience', { title: 'Edit Experience | LinkedIn' });
};

exports.addproject = function(req, res){
	res.render('addproject', { title: 'Add Project | LinkedIn' });
};

exports.editproject = function(req, res){
	res.render('editproject', { title: 'Edit Project | LinkedIn' });
};

exports.skills = function(req, res){
	res.render('skills', { title: 'Skills | LinkedIn' });
};
/*var ejs = require("ejs");

function addexperience(req,res) {

	ejs.renderFile('./views/addexperience.ejs', { title: "Add Experience | LinkedIn" },function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function editexperience(req,res) {

	ejs.renderFile('./views/editexperience.ejs', { title: "Edit Experience | LinkedIn" },function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function addproject(req,res) {

	ejs.renderFile('./views/addproject.ejs', { title: "Add Project | LinkedIn" },function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function editproject(req,res) {

	ejs.renderFile('./views/editproject.ejs', { title: "Edit Project | LinkedIn" },function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function skills(req,res) {

	ejs.renderFile('./views/skills.ejs', { title: "Skills | LinkedIn" },function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

exports.addexperience=addexperience;
exports.editexperience=editexperience;
exports.addproject=addproject;
exports.editproject=editproject;
exports.skills=skills;*/