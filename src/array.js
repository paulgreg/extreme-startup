module.exports = (function() {
    Array.prototype.first = function() {
        return this[0];
    };
    Array.prototype.last= function() {
        return this[this.length-1];
    };
    Array.prototype.middle = function() {
        return this[(this.length-1)/2];
    };
})();
