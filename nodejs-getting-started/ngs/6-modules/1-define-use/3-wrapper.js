//  function (exports, module, require, __filename, __dirname){

let g = 1;

console.log(arguments);

exports.a = 42;
module.exports.b = 37;

// exports = () => {}; //not ok

module.exports = () => {};
// return module.exports
// } (modeule.exports, )
