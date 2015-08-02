exports.followcompany = function(req, res){
  res.render('followcompany', { title: "Follow Company | LinkedIn" });
};

exports.endorseskills = function(req, res){
	  res.render('endorseskills', { title: "Endorse Skills | LinkedIn" });
	};
/*var ejs = require("ejs");

	function endorseskills(req,res)
	{
		ejs.renderFile('./views/endorseskills.ejs',function(err, result) {
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
	
	function followcompany(req,res)
	{
		ejs.renderFile('./views/followcompany.ejs',function(err, result) {
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

	exports.endorseskills=endorseskills;
	exports.followcompany=followcompany;	*/