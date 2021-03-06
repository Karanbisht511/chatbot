
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/publc/index");
});

app.listen(port, function () {
    console.log("server is running on port:" + port);
});