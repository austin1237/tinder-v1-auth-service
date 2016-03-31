var request = require('supertest');

describe('Testing tinderAuth', function() {
  before(function(){
    // this.timeout(2000);
  });

  it('simple testcase', function(done){
    this.timeout(8000);
    // setTimeout(function(){
      request('http://localhost:4000')
      .post('/')
      .expect(400, done);
    // },2000);
  });

});
