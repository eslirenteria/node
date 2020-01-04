const fs = require('fs');
fs.readFile('example1.js', 'utf-8', function (err, content) {
  if (err) {
    return console.log(err)
  }

  console.log(content)
})