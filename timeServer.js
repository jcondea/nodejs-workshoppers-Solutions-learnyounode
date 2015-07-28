var net = require('net');
var port = Number(process.argv[2]);

function zeroFill(valor){
	valor = '' + valor;
	if (valor.length < 2){
		valor = '0' + valor;
	}	
	return valor;
}

var server = net.createServer(function (socket) {
 							var date = new Date();
							var data = date.getFullYear() + '-' +
										zeroFill(date.getMonth()+1) + '-' +
										zeroFill(date.getDate()) + ' ' +
										zeroFill(date.getHours()) + ':'+
										zeroFill(date.getMinutes());
							
							socket.end(data+'\n');
 						});
							
server.listen(port);						