// Function named welcomeMessage
function welcomeMessage(fullName) {
    // Closure for an alert displaying Welcome <fullName>
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create three variables with calls to welcomeMessage
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');