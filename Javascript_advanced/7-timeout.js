console.log("Start of the execution queue");

// Using setTimeout to simulate asynchronous behavior
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);

// Loop that logs iteration numbers
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");
