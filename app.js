var express = require('express');

function is_int(value){
    return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
}

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {

    if(question.indexOf('name') != -1) {
        return "MiraGreg";
    }

    if(question.indexOf('plus') != -1) {
        var re = /([0-9]+) plus ([0-9]+)/ 
        var nb = re.exec(question);
        return ''+(parseInt(nb[1], 10) + parseInt(nb[2], 10));
    }

    if(question.indexOf('minus') != -1) {
        var re = /([0-9]+) minus ([0-9]+)/ 
        var nb = re.exec(question);
        return ''+(parseInt(nb[1], 10) - parseInt(nb[2], 10));
    }

    if(question.indexOf('multiplied') != -1) {
        var re = /([0-9]+)\D*([0-9]+)$/ 
        var nb = re.exec(question);
        return ''+ (parseInt(nb[1], 10) * parseInt(nb[2], 10));
    }

    if(question.indexOf('largest') != -1) {
        var nb = question.split(' ');
        var largest = 0;
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            largest = n > largest ? n : largest;
        }
        return ''+largest;
    }

    if(question.indexOf('square and a cube') != -1) {
        var q = question.split(':')[1];
        var nb = q.split(' ');
        console.log('length', nb.length, 'nb', nb);
        var largest = 0;
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            if (!isNaN(n)) {
                var sqr = Math.sqrt(n);
                var isSqr = is_int(sqr);
                var cube = Math.pow(n, 1/3);
                var isCube = is_int(cube);

                console.log('n', n, sqr, cube, isSqr, isCube);

                if (isSqr && isCube) return ''+n;
            }
        }
        return '';
    }

    if(question.indexOf('primes') != -1) {
        var q = question.split('primes:')[1];
        var nb = q.split(',');
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            if (!isNaN(n)) {
                //console.log(question, 'prime', n);
                var isPrime = true;
                if (n > 1) {
                    for(var i = 2; i <= n/2; i++) {
                        if (n != i && n % i == 0)
                            isPrime = false;
                            break;
                    }
                }
                if (isPrime)
                    return n;
            }
        }
        return '';
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
    if(question.indexOf('Fibonacci') != -1) {
        var q = question.split(':')[1];
        var nb = q.split(' ');
        console.log('length', nb.length, 'nb', nb);
        var largest = 0;
        for(var i = 0; i < nb.length; i++) {
            var n = parseInt(nb[i], 10);
            if (!isNaN(n)) {
                var fibo = function(i){
                    switch(i){
                        case 0: return '0';
                        case 1: return '1';
                        case 2: return '1';
                        case 3: return '2';
                        case 4: return '3';
                        case 5: return '5';
                        case 6: return '8';
                        case 7: return '13';
                        case 6: return '8';
                        case 6: return '8';
                    }
                }
            }
        }
        return '';
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
