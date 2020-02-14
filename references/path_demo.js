const path = require('path');
const os = require('os')

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

// concatinate paths
console.log(path.join(__dirname,"Hello","Test.html"));

//CPUS CORES
console.log(os.cpus());