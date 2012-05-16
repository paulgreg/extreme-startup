var express = require('express');

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {
    return "MiraGreg";
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "bodilpwnz"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    var a = answer(q, req, res);
    var response = "Q: \"" + q + "\" A:\"" + a + "\"";
    console.log(response);
    res.end(a);
});

app.listen(3000, "0.0.0.0");
console.log("Server running on http://0.0.0.0:3000/");

