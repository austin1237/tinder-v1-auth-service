var casper = require('casper').create();
var tinderAuthUrl = "https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token";
var email = casper.cli.get('email');
var password = casper.cli.get('password');


// console.log('about to start casper functions');
casper.start('https://facebook.com', function() {
  firstTitle = this.getTitle();
});

//Logs in
casper.then(function(){
  // Weird you pass the params to the bottom of the evaluate
    this.evaluate(function(email, password){
      document.getElementById("email").value = email;
      document.getElementById("pass").value = password;
      document.getElementById("loginbutton").children[0].click();
    }, email , password);
});

//Redirect to the homepage finished
casper.then(function(){
  // Title should be the same as an unloged in user if it user log in failed
  if (firstTitle === this.getTitle()){

  }

});

//get the auth token from facebook for tinder.
casper.thenOpen(tinderAuthUrl, function() {
  this.echo(this.getCurrentUrl());
});

casper.run();
