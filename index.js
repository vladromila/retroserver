const express = require('express')
const app = express()
const port = 445
const path = require("path");

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')))
app.get('/downloadApk', function (req, res) {
    const file = `${__dirname}/apk.apk`;
    res.download(file); // Set disposition and send it.
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))