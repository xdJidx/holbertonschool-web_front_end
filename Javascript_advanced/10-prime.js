function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
  }
  
  // Measure the execution time for running countPrimeNumbers 100 times
  const startTime = performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  
  console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
  