var assert = require('assert');
require('../../../test/test-helpers');

// Loads the module we want to test
require('../goEuroTaskApp');

describe('get repos service', function() {
  beforeEach(ngModule('goEuroTaskApp'));

  it('should return a list of repos', inject(function(getUserRepos) {
    assert.equal(getUserRepos.getData().status, 404);
  }));

  it('should return a list of repos', inject(function(getUserRepos) {
    assert.equal(getUserRepos.getData().status, 200);
  }));

  it('should return a list of repos', inject(function(getUserRepos) {
    assert.equal(getUserRepos.getData().length, 0);
  }));


});
