const { spawn } = require('child_process');

const child = spawn('find', ['.', '-type', 'f']); 

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited code ${code}, signal ${signal}`);
});
