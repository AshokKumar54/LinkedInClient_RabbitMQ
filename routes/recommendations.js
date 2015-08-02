exports.recommendations = function(req, res){
	  res.render('recommendation', { title: 'Recommendations | LinkedIn' });
};
/*var ejs = require("ejs");

function recommendations(req,res)
{
	ejs.renderFile('./views/recommendation.ejs',function(err, result) {
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

exports.recommendations=recommendations;*/