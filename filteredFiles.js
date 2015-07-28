var fs = require('fs');
var path = require('path');
var pathName = process.argv[2];
var ext = process.argv[3];
fs.readdir(pathName, function (err, list) { 
                         if (err) throw err; 
						 list.forEach(function (file) {
							     if (path.extname(file)==='.'+ext){
								     console.log(file); 
							     }
							 }
						 );
							 
                     });