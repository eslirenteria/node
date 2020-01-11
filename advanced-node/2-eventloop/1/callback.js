const slowAdd = (a, b) => {
  setTimeout(() => {
    console.log(a + b);
  }, 5000);
}

slowAdd(2,2);
slowAdd(4,4);