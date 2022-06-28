var express = require('express');
var app = express();
var port = 3000;
var userRouter = require('./routers/user.router');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('/users', userRouter)
app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
	});
})
app.set('view engine', 'pug')
app.set('views', './views')
app.listen(port, function() {
	console.log('server listening on port' + port);
})


