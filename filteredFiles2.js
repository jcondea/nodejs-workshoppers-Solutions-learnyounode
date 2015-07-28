var myModule = require('./myModule.js');
myModule(process.argv[2],process.argv[3],function (err, list){
													if (err)  return console.error('there was an error', error);
	                                               list.forEach(function (file){console.log(file);})
											   });

