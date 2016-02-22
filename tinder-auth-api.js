var casper = require('casper').create();
//includes web server modules
var server = require('webserver').create();
var port = 3000;
var tinderAuthUrl = "https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token";

//start web server
server.listen(port, function(request, response) {
  var params = JSON.parse(request.post);
  var email = params.email;
  var password = params.password;
  var authUrl;

  console.log('email is', email);
  console.log('password is', password);
  // Opens facebook
  casper.start('https://facebook.com', function() {
      this.echo(this.getTitle());
  });

  //Logs in
  casper.then(function(){
    // Weird you pass the params to the bottom of the evaluate
      this.evaluate(function(email, password){
        document.getElementById("email").value=email;
    		document.getElementById("pass").value=password;
    		document.getElementById("loginbutton").children[0].click();
      }, email , password);
  });

  //Redirect to the homepage finished
  casper.then(function(){
    this.echo(this.getTitle());
  });

  //get the auth token from facebook for tinder.
  casper.thenOpen(tinderAuthUrl).then(function(){
    authUrl = this.getCurrentUrl();
    this.echo(authUrl);
  });

  casper.run(function(){
    response.statusCode = 200;
    //sends results as JSON object
    response.write(JSON.stringify(authUrl), null, null);
    response.close();
  });
});
console.log('Capser server listening on port', port);
