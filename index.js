var express = require('express')
var app = express()
var port = 3000;
app.get('/', function(req, res) {
	res.send('Hello Word')
})
app.listen(port, () => console.log("wellcome" + port))