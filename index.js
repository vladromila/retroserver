const express = require('express')
const app = express()
const port = 8080
const path = require("path");

app.get('/', (req, res) => {
    res.redirect("/retrup")
})
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/silvia'));

app.get('/retrup', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')))
app.get('/retrup/googleplay', (req, res) => res.redirect("https://play.google.com/store/apps/details?id=smarty.retrup.com"))
app.get('/silvia', (req, res) => res.sendFile(path.join(__dirname + '/silvia/index.html')))
app.get('/silviadownload', function(req, res){
    const file = `${__dirname}/silvia/Atestat_PorcarasuSilvia.rar`;
    res.download(file); // Set disposition and send it.
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))