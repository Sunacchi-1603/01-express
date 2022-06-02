var express = require('express');
var app = express();
var port = 3000;

// bai 1
// app.get('/', function(req,res) {
// 	res.send('<h1>hello wrold</h1><a href="/user">user</a>');
// });
// app.get('/user', function(req, res) {
// 	res.send('user list')
// })
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
app.set('view engine', 'pug')
app.set('views', './views')
app.listen(port, function() {
	console.log('server listening on port' + port);
})


