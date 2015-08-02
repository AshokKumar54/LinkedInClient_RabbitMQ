	
exports.addeducation = function(req, res){
		res.render('addeducation', { title: 'Add Education | LinkedIn' });
};
	
exports.editeducation = function(req, res){
		res.render('editeducation', { title: 'Edit Education | LinkedIn' });
};

/*var ejs = require("ejs");

function addeducation(req,res) {

	ejs.renderFile('./views/addeducation.ejs', { title: "Add Education | LinkedIn" },function(err, result) {
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

function editeducation(req,res) {

	ejs.renderFile('./views/editeducation.ejs', { title: "Edit Education | LinkedIn" },function(err, result) {
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

exports.addeducation=addeducation;
exports.editeducation=editeducation;*/