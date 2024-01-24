function welcome(firstName, lastName) {
    // Combine first name and last name
    var fullName = firstName + ' ' + lastName;

    // Define displayFullName function
    function displayFullName() {
        // Display welcome message with the full name
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}
