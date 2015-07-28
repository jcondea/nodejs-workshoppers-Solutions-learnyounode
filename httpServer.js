var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(req, res){
									var readStream = fs.createReadStream(file);
									res.writeHead(200);
									readStream.on('open', function () {
													readStream.pipe(res);
												});
									readStream.on('error', function(err) {
										res.end(err);
									  });												
								});
server.listen(port);								