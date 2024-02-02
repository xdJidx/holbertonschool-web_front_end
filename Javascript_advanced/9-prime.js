function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    const startTime = performance.now();
  
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    const endTime = performance.now();
    const executionTime = endTime - startTime;
  
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  
    return count;
  }
  
  // Call the function
  countPrimeNumbers();
  