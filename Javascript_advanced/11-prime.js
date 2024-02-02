function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    let count = 0;
  
    const calculatePrimes = (start, end) => {
      for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
          count++;
        }
      }
    };
  
    // Divide the loop into smaller chunks using setTimeout
    const chunkSize = 10;
    let index = 0;
  
    const calculateChunk = () => {
      const start = index * chunkSize + 2;
      const end = start + chunkSize - 1;
  
      calculatePrimes(start, end);
  
      index++;
  
      if (start <= 100) {
        // Schedule the next chunk
        setTimeout(calculateChunk, 0);
      } else {
        // Log the final result when done
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
      }
    };
  
    calculateChunk(); // Start the process
  
    return count;
  }
  
  // Measure the execution time for running countPrimeNumbers 100 times
  const startTime = performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  