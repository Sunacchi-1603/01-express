var express = require('express');
var bodyParser=require('body-parser')
var app = express();
var port = 3000;

// bai 1
// app.get('/', function(req,res) {
// 	res.send('<h1>hello wrold</h1><a href="/user">user</a>');
// });
// app.get('/user', function(req, res) {
// 	res.send('user list')
// })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users = [
			{ id: 1, name: 'thinh'},
			{ id: 2, name: 'hung'}
		]
app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
	});
})
app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users
	})
})
app.get('/users/search', function(req, res) {
 	var q = req.query.q
 	var mathchedUsers = users.filter(function(user) {
 		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
 	})
 	res.render('users/index', {
 		users : mathchedUsers
 	})
})
app.get('/users/create', function(req, res) {
	res.render('users/create')
})
app.post('/users/create', function(req, res) {
	users.push(req.body);
	res.redirect("/users");
});
app.set('view engine', 'pug')
app.set('views', './views')
app.listen(port, function() {
	console.log('server listening on port' + port);
})


