var koa = require('koa');
var app = koa();
var request = require('request');

app.use(function *(){
	this.body = 'hello';
});

app.listen(3000);
