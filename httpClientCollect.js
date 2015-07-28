var http = require('http');

http.get(process.argv[2], function (response) {	
	var datos='';
	response.setEncoding("utf8");
	response.on("data", function (data) {datos+=data;});
	response.on("end", function () {console.log(datos.length); console.log(datos)});
	response.on("error", console.error);
});