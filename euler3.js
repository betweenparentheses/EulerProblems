//third Euler Problem
//brute force, not a true solution to Euler #3 (too slow)
//but solves the Odin Project request of answering up through 1,000

//function checks if a number is prime
//by looping through every integer from 2 to that number
//and returning false if you can divide that integer evenly
//into the number
var isPrime = function(number) {
	for (i = 2; i < number; i++) {
		if (number % i === 0)
		return false;
	}
	return true;
}



//function counts down from the number you are factoring
//for each countdown of i, returns true if i is prime 
//AND i divides into number evenly, which finds the top
//prime factor
var topPrimeFactors = function(number) {
	var i = number - 1;
  var found = false;
	while (found===false && i > 0) {
		if (isPrime(i) & (number % i === 0)) {
			found = true;
			return i;
		}
		i--;
	}
};
