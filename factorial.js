const calculator = {
  factorial: (n) => {
    if (n === 0) {
      return 1; // Base case: factorial of 0 is 1
    } else {
      return n * calculator.factorial(n - 1); 
    }
  }
};

// Example usage
console.log(calculator.factorial(5)); 
console.log(calculator.factorial(0));
