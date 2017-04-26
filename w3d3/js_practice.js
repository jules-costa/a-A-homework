function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// isSubstring("time to program", "time");
// isSubstring("Jump for joy", "joys");

function fizzBuzz(array) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      continue;
    } else if (array[i] % 3 === 0) {
      result.push(array[i]);
    } else if (array[i] % 5 === 0) {
      result.push(array[i]);
    } else {
      continue;
    }
  }
  console.log(result);
}

// function fizzBuzz(array) {
//   const fizzBuzzArr = [];
//
//   array.forEach(el => {
//     if ((el % 3 === 0) ^ (el % 5 === 0)) {
//       fizzBuzzArr.push(el);
//     }
//   });
//
//   return fizzBuzzArr;
// }

// fizzBuzz([1, 2, 3, 4, 5, 15, 12, 10]);

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }
  return sum;
}

// function firstNPrimes(n) {
//   let primes = [];
//
//   for (var i = 2; primes.length <= n; i++)
//     primes.push(i) if (isPrime(i) === true);
//   }
//
//   return primes;
// }
//
// function sumOfNPrimes(n) {
//   let primes = firstNPrimes(n)
//
//   let total = 0;
//
//   function addPrime(num) {
//     total += num;
//   }
//
//   for (let i = 0; i <= primes.length; i++) {
//     addPrime(primes[i]);
//   }
//
//   return total;
// }
