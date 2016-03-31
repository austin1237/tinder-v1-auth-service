# tinder-v1-auth-service
![](https://media.giphy.com/media/9yeStKuX0qhmo/giphy.gif)<br>
[![Build Status](https://travis-ci.org/austin1237/tinder-v1-auth-service.svg?branch=master)](https://travis-ci.org/austin1237/tinder-v1-auth-service)<br>
A web service that returns a tinder access token when provided with facebook credentials.

# Getting Started
## Installation
Use npm to install the following dependencies<br>
npm install -g phantomjs<br>
npm install -g casperjs

## How to get started
to run the server just type
casperjs tinder-auth-api

send a post request to the port set on the service with the body
{email: 'your email', password: 'your password'}

and the service should respond with accessToken

## Contributions
Feel free to contribute!

Fork it ( https://github.com/austin1237/tinder-v1-auth-service/fork )<br>
Create your feature branch (git checkout -b my-new-feature)<br>
Commit your changes (git commit -am 'Add/Fix something')<br>
Push to the branch (git push origin my-sweet-new-feature)<br>
Create a new Pull Request

## Props
Credit to https://github.com/jvenezia/tinderbot for providing the facebook link
the webscaper uses to get the authToken.
