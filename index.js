var express = require('express');
var bodyParser=require('body-parser');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')
var db = low(adapter)
var app = express();
var port = 3000;
db.defaults({ users: []}).write()


// bai 1
// app.get('/', function(req,res) {
// 	res.send('<h1>hello wrold</h1><a href="/user">user</a>');
// });
// app.get('/user', function(req, res) {
// 	res.send('user list')
// })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', function(req, res) {
	res.render('index', {
		name: 'AAA'
	});
})
app.get('/users', function(req, res) {
	res.render('users/index', {
		users: db.get('users').value()
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
	db.get('users').push(req.body).write()
	res.redirect("/users");
});
app.set('view engine', 'pug')
app.set('views', './views')
app.listen(port, function() {
	console.log('server listening on port' + port);
})


