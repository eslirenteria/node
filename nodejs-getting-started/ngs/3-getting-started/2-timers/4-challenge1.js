const theOneFunc = function(delay){
    console.log("Hello:" + delay);
};

setTimeout(theOneFunc, 4 * 1000, '4 sec');
setTimeout(theOneFunc, 8 * 1000, '8 sec');


// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
