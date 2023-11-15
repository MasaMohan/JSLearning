const array = [11, 3, 6, 10, 43, 29, 50];

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;

  
}

const primeNumbers = array.filter(isPrime);
const primeCount = primeNumbers.length;

console.log("Prime numbers in the array:", primeNumbers);
console.log("Count of prime numbers:", primeCount);
