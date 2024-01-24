// Function divideBy
function divideBy(firstNumber) {
    // Returns a function that takes into argument secondNumber (number)
    return function(secondNumber) {
      // Returns the second number divided by the first number
      return secondNumber / firstNumber;
    };
  }
  
  // Function addBy
  function addBy(firstNumber) {
    // Returns a function that takes into argument secondNumber (number)
    return function(secondNumber) {
      // Returns the sum of the two numbers
      return firstNumber + secondNumber;
    };
  }
  
  // Create four closures
  var addBy100 = addBy(100);
  var addBy1000 = addBy(1000);
  var divideBy10 = divideBy(10);
  var divideBy100 = divideBy(100);