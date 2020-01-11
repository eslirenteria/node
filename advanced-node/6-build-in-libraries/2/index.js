const fs = require('fs');
// Async form
fs.readFile(__filename, function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
//sync form
const data = fs.readFileSync(__filename);