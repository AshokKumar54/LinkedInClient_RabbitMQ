
/*
 * GET home page.
 */

exports.index = function(req, res){  
  res.render('index', { title: "World's Largest Professional Network | LinkedIn" });
};

exports.homepage = function(req, res){
	res.render('homepage', { title: 'Welcome! | LinkedIn' });
};

exports.logout = function(req, res){
	  res.render('index', { title: "World's Largest Professional Network | LinkedIn" });
};
/*var ejs = require("ejs");

function index(req,res)
{
	ejs.renderFile('./views/index.ejs',function(err, result) {
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

function homepage(req,res)
{
	ejs.renderFile('./views/homepage.ejs',function(err, result) {
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
	
function logout(req,res)
{
	ejs.renderFile('./views/index.ejs',function(err, result) {
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

exports.index=index;
exports.homepage=homepage;
exports.logout=logout;*/