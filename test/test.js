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
        assert.equal(app('babfbd50 what is 9 plus 10'), '19');
    });
    it('should return minus result', function() {
        assert.equal(app('what is 9 minus 2'), '7');
    });
    it('should return multiply result', function() {
        assert.equal(app('what is 9 multiplied by 2'), '18');
    });
    it('should return multiply result', function() {
        assert.equal(app('babfbd50: what is 11 multiplied by 33'), '363');
    });
    it('should return largest number', function() {
        assert.equal(app('blablabla largest: 88, 879, 866, 44'), '879');
    });
    it('should return nb both square and a cube', function() {
        assert.equal(app('1d7b16f0: which of the following numbers is both a square and a cube: 666, 25'), '');
    });
    it('should return peseta', function() {
        assert.equal(app('593ef490: what currency did Spain use before the Euro'), "peseta");
    });
    it('should return prime number', function() {
        assert.equal(app("308f59b0: which of the following numbers are primes: 151, 542"), '151');
    });
    it('should return banana', function() {
        assert.equal(app('banana'), "yellow");
    });
    it('should return fibonacci', function() {
        assert.equal(app("2c1e1c10: what is the 6th number in the Fibonacci sequence"), "");
    });
});


