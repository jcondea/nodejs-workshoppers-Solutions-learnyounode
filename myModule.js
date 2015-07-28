var fs = require('fs');
var path = require('path');

module.exports = function (pathName, ext, callback) {
                    fs.readdir(pathName, function (err, list) { 
                         if (err) {
							callback(err, null);  
						 } else {
							 result = [];
							 list.forEach(function (file) {
									 if (path.extname(file)==='.'+ext){
										 result.push(file);
									 }
								 }
							 );
							 callback(null,result); 
						 }
                     });	
                 }


