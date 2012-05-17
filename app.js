var express = require('express');

function is_int(value){
    return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
}

var getNumbers = function(question) {
    var parts = /((, )?(\d+))*$/.exec(question);
    return parts[0].split(',');
}

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {

    if(question.indexOf('name') != -1) {
        return "MiraGreg";
    }

    if(question.indexOf('plus') != -1) {
        var nb= /(\d+)\D+(\d+)$/.exec(question);
        return ''+(parseInt(nb[1], 10) + parseInt(nb[2], 10));
    }

    if(question.indexOf('minus') != -1) {
        var nb = /(\d+)\D+(\d+)$/.exec(question);
        return ''+(parseInt(nb[1], 10) - parseInt(nb[2], 10));
    }

    if(question.indexOf('multiplied') != -1) {
        var nb = /(\d+)\D*(\d+)$/.exec(question);
        return ''+ (parseInt(nb[1], 10) * parseInt(nb[2], 10));
    }

    if(question.indexOf('largest') != -1) {
        var nb = getNumbers(question);
        var largest = 0;
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            largest = n > largest ? n : largest;
        }
        return ''+largest;
    }

    if(question.indexOf('square and a cube') != -1) {
        var nb = getNumbers(question);
        var largest = 0;
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            var sqr = Math.sqrt(n);
            var isSqr = is_int(sqr);
            var cube = Math.pow(n, 1/3);
            var isCube = is_int(cube);
            if (isSqr && isCube) return ''+n;
        }
        return '';
    }

    if(question.indexOf('primes') != -1) {
        var nb = getNumbers(question);
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            var isPrime = true;
            if (n > 1) {
                for(var i = 2; i <= n/2; i++) {
                    if (n != i && n % i == 0)
                        isPrime = false;
                        break;
                }
            }
            if (isPrime) {
                return n;
            }
        }
        return '';
    }

    if(question.indexOf('Fibonacci') != -1) {
        var nb = /(\d+)th/g.exec(question);
        var fibo = function(i) {
            return (i < 2) ?  i : fibo(i-2) + fibo(i-1);
        }
        return ''+fibo(nb[1]);
    }

    if(question.indexOf('Spain') != -1) {
        return "peseta";
    }
    if(question.indexOf('banana') != -1) {
        return "yellow";
    }
    if(question.indexOf('Eiffel') != -1) {
        return "Paris";
    }

    return 'I dont know';
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "bodilpwnz"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    console.log(q);
    var a = answer(q, req, res);
    var response = "Q: \"" + q + "\" A:\"" + a + "\"";
    console.log(response);
    res.end(a);
});

app.listen(3000, "0.0.0.0");
console.log("Server running on http://0.0.0.0:3000/");

module.exports = answer;
