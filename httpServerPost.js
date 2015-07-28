var http = require('http');
var port = Number(process.argv[2]);

var server = http.createServer(function(req, res){
								var datos='';
								if (req.method != 'POST') {
									return res.end('it is not a POST');
								} 
								req.on('data',function (data) {
																
																datos+= data;
																});
								req.on('end',function() { 															
															res.end(datos.toUpperCase());})
								
								});
server.listen(port);								