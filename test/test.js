var request = require('supertest');
baseUrl = 'http://localhost:3000/v1/auth';
describe('Testing tinderAuth', function() {

  it('empty post', function(done){
      request(baseUrl)
      .get('/tinder')
      .expect(400, done);
  });
  //
  it('no email', function(done){
    testUser = {
      password: 'fakePassword'
    };

      request(baseUrl )
      .get('/tinder')
      .send(testUser)
      .expect(400, done);
  });

  it('no password', function(done){
    testUser = {
      email: 'fakeEmail@email.com'
    };

      request(baseUrl)
      .get('/tinder')
      .send(testUser)
      .expect(400, done);
  });


  it('invalid facebook login', function(done){
    this.timeout(8000);
    testUser = {
      email: 'fakeUser@fakeUser.com',
      password: 'fakePassword.com'
    };

    request(baseUrl)
    .get('/tinder')
    .send(testUser)
    .expect(200, done);
  });

});
