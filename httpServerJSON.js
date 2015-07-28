var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);
var endPoint1 =  '\/api\/parsetime';
var endPoint2 =  '\/api\/unixtime';

var server = http.createServer(function(req, res){
								var datos='';
								if (req.method != 'GET') {
									return res.end('it is not a GET');
								} 
								
								var parsedURL = url.parse(req.url,true);
								var date = new Date(parsedURL.query.iso);
								var jsonstring;
								if (endPoint1==parsedURL.pathname) {									
									jsonstring = JSON.stringify({'hour':date.getHours(),'minute':date.getMinutes(),'second':date.getSeconds()});									
								}
								if (endPoint2==parsedURL.pathname) {
									jsonstring = JSON.stringify({'unixtime':date.getTime()});
								}
								
								if (jsonstring) {
									res.writeHead(200, { 'Content-Type': 'application/json' });							
									res.end(jsonstring);										
								} else {
									res.writeHead(404);
									res.end();
								}
								
								});
server.listen(port);								