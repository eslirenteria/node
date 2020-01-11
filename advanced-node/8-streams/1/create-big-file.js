const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i = 0; 1 <= 1e6; i++)
file.write('Pepe pecas pica papas con un pico pica papas pepe pecas');

file.end();