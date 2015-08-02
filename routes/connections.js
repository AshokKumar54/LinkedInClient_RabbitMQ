exports.addconnection = function(req, res){
  res.render('addconnections', { title: "Check Connections | LinkedIn" });
};

exports.deleteconnection = function(req, res){
	  res.render('deleteconnections', { title: "Delete Connections | LinkedIn" });
};

exports.searchconnection = function(req, res){
	res.render('searchconnections', { title: "Search/Invite Connections | LinkedIn"});
} 

/*var ejs = require("ejs");

function addconnection(req,res) {

	ejs.renderFile('./views/addconnections.ejs', { title: "Add Connections | LinkedIn" },function(err, result) {
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

function deleteconnection(req,res) {

	ejs.renderFile('./views/deleteconnections.ejs', { title: "Delete Connections | LinkedIn" },function(err, result) {
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

exports.addconnection=addconnection;
exports.deleteconnection=deleteconnection;*/