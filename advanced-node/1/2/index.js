// exports.id = 1; // this is ok

// exports = { id: 1 }; // this is not ok

// module.exports = { id: 1 }; // this is ok

// // why?

// var h = 12; //local to this file

require = function() {
  return { mocked: true };
};

const fs = require('fs');
console.log(fs);
