const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/signup.html`)
})

app.listen(3000, function() {
    console.log("Server is now running");
})