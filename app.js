var csv = require('csv');
fs = require('fs');

var csvOptions = {
};

var fileLocation = process.argv[2];
console.log(fileLocation);

var fileText = fs.readFileSync(fileLocation);

csv.parse(fileText, csvOptions, function(err, parsedCsv) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(parsedCsv);
  }
})