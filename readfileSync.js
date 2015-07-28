var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var lineas = data.toString().split('\n');
console.log(lineas.length-1);