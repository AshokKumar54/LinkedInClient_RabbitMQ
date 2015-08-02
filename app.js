var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , education = require('./routes/education')
  , experience = require('./routes/experience')
  , recommendation = require('./routes/recommendations')
  , connection = require('./routes/connections')
  , profile = require('./routes/userprofile')
  , usertask = require('./routes/usertask')
  , loginController = require('./controllers/login')
  , membersController = require('./controllers/members')
  , profileController = require('./controllers/profile')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/homepage', routes.homepage);
app.get('/logout', routes.logout);
app.get('/recommendations', recommendation.recommendations);
app.get('/addeducation', education.addeducation);
app.get('/editeducation', education.editeducation);
app.get('/addexperience', experience.addexperience);
app.get('/editexperience', experience.editexperience);
app.get('/addproject', experience.addproject);
app.get('/editproject', experience.editproject);
app.get('/skill', experience.skills);
app.get('/addconnection', connection.addconnection);
app.get('/deleteconnection', connection.deleteconnection);
app.get('/searchconnection', connection.searchconnection);
app.get('/userprofile', profile.editprofile);
app.get('/followcompany', usertask.followcompany);
app.get('/endorseskills', usertask.endorseskills);
app.get('/users', user.list);

//login controller methods

app.get('/signin/username/:username/password/:password', loginController.signin);
app.get('/logout/id/:id/token/:token', loginController.signout);
app.post('/signup', loginController.signup);
app.post('/updateLastLogin/id/:id', loginController.updatelastlogin);

//members controller methods

app.post('/adduserconnections', membersController.addconnections);
app.get('/showaddedconnections/id/:id/token/:token', membersController.showaddedconnections);
app.get('/showinvitedconnections/id/:id/token/:token', membersController.showinvitedconnections);
app.get('/showinvitations/id/:id/token/:token', membersController.showinvitations);
app.get('/showconnectionsfordelete/id/:id/token/:token', membersController.showconnectionsfordelete);
app.delete('/deleteconnections/id/:id/token/:token', membersController.deleteconnections);
app.post('/acceptinvitation', membersController.acceptinvitations);
app.get('/showavailableconnections/id/:id/token/:token', membersController.showavailableconnection);
app.get('/searchconnection/id/:id/token/:token/searchstring/:searchstring', membersController.searchconnection);

//profile controller methods

////homepage

app.get('/getuserprofiledetails/id/:id/token/:token', profileController.getuserprofiledetails);
app.get('/getuserfollowingcompanies/id/:id/token/:token', profileController.getuserfollowingcompanies);
app.get('/getuserrecommendationdetails/id/:id/token/:token', profileController.getuserrecommendations);
app.get('/getuserprojectdetails/id/:id/token/:token', profileController.getuserprojectdetails);
app.get('/getusereducationdetails/id/:id/token/:token', profileController.geteducationdetails_home);
app.get('/getuserexperiencedetails/id/:id/token/:token', profileController.getuserexperiencedetails);
app.get('/getendorsedskilldetails/id/:id/token/:token', profileController.getendorsedskilldetails);
app.get('/getlastlogindetails/id/:id/token/:token', profileController.getlastlogindetails);

////Companies following

app.get('/getcompanies/id/:id/token/:token', profileController.getcompanies);
app.post('/followcompanies', profileController.followcompanies);

////Recommendations

app.post('/recommenduser', profileController.recommendations);

////User profile

app.post('/updateuserprofile', profileController.updateuserprofile);
app.get('/getuserdetails/id/:id/token/:token', profileController.getuserdetails);

////Skills

app.post('/addskill', profileController.addskill);
app.get('/getskills/id/:id/token/:token', profileController.getskills);
app.post('/getskills', profileController.reloadskills);
app.delete('/deleteskill/skillid/:skillid/token/:token', profileController.deleteskills);
app.get('/getusers/id/:id/token/:token', profileController.getusers);
app.post('/loadskills', profileController.loadskills);
app.post('/endorseSkill', profileController.endorseskills);

////Experience

app.post('/addexperience', profileController.addexperience);
app.get('/getexperiencedetails/id/:id/token/:token', profileController.getexperiencedetails);
app.post('/getexperiencedetailsById', profileController.getexperiencedetailsbyid);
app.post('/updateexperience', profileController.updateexperience);
app.delete('/deleteexperience/experienceId/:experienceId/token/:token', profileController.deleteexperience);

////Educations

app.post('/addeducation', profileController.addeducation);
app.get('/geteducationdetails/id/:id/token/:token', profileController.getusereducationdetails);
app.post('/geteducationdetailsById', profileController.geteducationbyid);
app.post('/updateeducation', profileController.updateeduation);
app.delete('/deleteeducation/educationid/:educationid/token/:token', profileController.deleteeducation);

////Project

app.post('/addproject', profileController.addproject);
app.get('/getallexperiencedetails/id/:id/token/:token', profileController.getallexperiencedetails);
app.get('/getallprojectdetails/experienceid/:experienceid/id/:id/token/:token', profileController.getprojectdetails);
app.get('/loadprojectdetails/projectid/:projectid/id/:id/token/:token', profileController.loadprojectdetails);
app.post('/updateproject', profileController.updateproject);
app.delete('/deleteproject/projectid/:projectid/token/:token', profileController.deleteproject);


// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('LinkedIn client listening on port ' + app.get('port'));
});

