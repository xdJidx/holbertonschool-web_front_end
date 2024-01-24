// Function named changeMode
function changeMode(size, weight, transform, background, color) {
    // Using closure, it changes the style of the entire page
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }

  // Function named main
  function main() {
    // Set a variable named spooky that passes the arguments to changeMode
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');

    // Set a variable named darkMode that passes the arguments to changeMode
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');

    // Set a variable named screamMode that passes the arguments to changeMode
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph to the body of the page
    var welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);

    // Add buttons to the body with event listeners
    var spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);

    var darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);

    var screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);

    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screamModeButton);
  }

  // Call the main function
  main();