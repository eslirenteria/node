// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.
let counter = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;

  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);
