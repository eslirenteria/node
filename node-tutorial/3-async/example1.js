const fs = require('fs');
let content;
try {
  content = fs.readFileSync('example2.js', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content);