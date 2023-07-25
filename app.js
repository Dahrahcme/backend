var http = require('http');
// var myLogModule = require('./log.js')
// var msg = require('./message.js')
var maths = require('./number.js')

var server = http.createServer(function(req, res){
    console.log("My server is working");
});

// myLogModule.info('Node.js started.')
// myLogModule.warning('Node.js is giving warnings.')
// myLogModule.error('Node.js is giving errors.')

// console.log(msg);

console.log(maths.add(2,3));


server.listen(5000);