exports.editprofile = function(req, res){
  res.render('editprofile', { title: "Edit Profile | LinkedIn" });
};


/*var ejs = require("ejs");

function editprofile(req,res)
{
	ejs.renderFile('./views/editprofile.ejs',function(err, result) {
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

exports.editprofile=editprofile;*/