var assert = require('assert');

var app = require('../app.js');

describe('Extreme Startup App', function() {
    it('should return our name', function() {
        assert.equal(app('308f59b0: What is your name?'), 'MiraGreg');
    });
    it('should return our name for another question', function() {
        assert.equal(app('308f59b0: my name is hob. what is my name'), 'MiraGreg');
    });
    it('should return adition result', function() {
        assert.equal(app('308f59b0: what is 9 plus 0'), '9');
    });
    it('should return another adition result', function() {
        assert.equal(app('babfbd50: what is 9 plus 10'), '19');
    });
    it('should return minus result', function() {
        assert.equal(app('308f59b0: what is 9 minus 2'), '7');
    });
    it('should return multiply result', function() {
        assert.equal(app('308f59b0: what is 9 multiplied by 2'), '18');
    });
    it('should return another multiply result', function() {
        assert.equal(app('babfbd50: what is 11 multiplied by 33'), '363');
    });
    it('should return largest number', function() {
        assert.equal(app('32413g4e: which of theses is the largest: 88, 879, 866, 44'), '879');
    });
    it('should return nb both square and a cube', function() {
        assert.equal(app('1d7b16f0: which of the following numbers is both a square and a cube: 666, 25'), '');
    });
    it('should return fibonacci result for 4', function() {
        assert.equal(app("2c1e1c10: what is the 4th number in the Fibonacci sequence"), "3");
    });
    it('should return fibonacci result for 6', function() {
        assert.equal(app("2c1e1c10: what is the 6th number in the Fibonacci sequence"), "8");
    });
    it('should return Spain currency', function() {
        assert.equal(app('593ef490: what currency did Spain use before the Euro'), "peseta");
    });
    it('should return answer to prime number', function() {
        assert.equal(app("308f59b0: which of the following numbers are primes: 151, 542"), '151');
    });
    it('should return color of a banana', function() {
        assert.equal(app('308f59b0: What is the color of a banana ?'), "yellow");
    });
});


