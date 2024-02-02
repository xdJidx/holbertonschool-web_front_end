const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',
  };
  
  function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
  }
  
  const bindLogWelcomeUser = logWelcomeUser.bind(user);
  
  // Test the bound function
  bindLogWelcomeUser('Hello'); // Should log Hello, Buillaume. Your occupation is: Engineer
  