var assert = require('assert');

var app = require('../app.js');

describe('App', function() {
    it('should return our name', function() {
        assert.equal(app('What is your name?'), 'MiraGreg');
    });
    it('should return our name for another question', function() {
        assert.equal(app('my name is hob. what is my name'), 'MiraGreg');
    });
    it('should return adition result', function() {
        assert.equal(app('what is 9 plus 0'), '9');
    });
    it('should return another adition result', function() {
        assert.equal(app('what is 9 plus 10'), '19');
    });
});


