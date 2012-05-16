var assert = require('assert');

require('../src/array.js');

describe('Array#prototype', function() {
    it('should return the first element of my array', function() {
        assert.equal([1,2,3,4,5].first(), 1);
    });
    it('should return the last element of my array', function() {
        assert.equal([1,2,3,4,5].last(), 5);
    });
    it('should return the middle element of my array', function() {
        assert.equal([1,2,3,4,5].middle(), 3);
    });
});
