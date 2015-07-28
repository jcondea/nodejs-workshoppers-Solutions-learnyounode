var http = require('http');
var datosURL = [];
var contador = 0;

/*  for (var i = 0; i < 3; i++){
	http.get(process.argv[2 + i], function (response) {	
		var datos='';
		
		response.setEncoding("utf8");
		response.on("data", function (data) {datos+=data;});
		response.on("end", function () {datosURL[contador]=datos; 
										contador+=1;
										if (contador===3){
											console.log(datosURL[0]);
											console.log(datosURL[1]);
											console.log(datosURL[2]);
										}
										});
		response.on("error", console.error);
		
	});
}
 */ 
 	http.get(process.argv[2], function (response) {	
		var datos='';
		response.setEncoding("utf8");
		response.on("data", function (data) {datos+=data;});
		response.on("end", function () {datosURL[0]=datos; 
										contador+=1;
										if (contador===3){
											console.log(datosURL[0]);
											console.log(datosURL[1]);
											console.log(datosURL[2]);
										}
										});
		response.on("error", console.error);
	});

 http.get(process.argv[3], function (response) {	
		var datos='';
		response.setEncoding("utf8");
		response.on("data", function (data) {datos+=data;});
		response.on("end", function () {datosURL[1]=datos; 
										contador+=1;
										if (contador===3){
											console.log(datosURL[0]);
											console.log(datosURL[1]);
											console.log(datosURL[2]);
										}
										});
		response.on("error", console.error);
	});

		http.get(process.argv[4], function (response) {	
		var datos='';
		response.setEncoding("utf8");
		response.on("data", function (data) {datos+=data;});
		response.on("end", function () {datosURL[2]=datos; 
										contador+=1;
										if (contador===3){
											console.log(datosURL[0]);
											console.log(datosURL[1]);
											console.log(datosURL[2]);
										}
										});
		response.on("error", console.error);
	});
  