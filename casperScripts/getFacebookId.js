var casper = require('casper').create();
var email = casper.cli.get('email');
var password = casper.cli.get('password');

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

//click profile pic to get to homepage
casper.then(function(){
  // Weird you pass the params to the bottom of the evaluate
    this.evaluate(function(email, password){
      document.getElementById("profile_pic_header_100002261440732").click();
    });
});

// get the facebook id from the href of the homepages profile picture
casper.then(function(){
  this.echo(this.getElementAttribute('.profilePicThumb','href'));
});

casper.run();
