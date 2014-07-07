//Fibonacci sequence Euler problem 2;
//adds even terms from the Fibonacci sequence to a running total
//up through 4 million.
var termA=1;
var termB=1;
sum = 0;

while (termB < 4000000) {
	if (termB % 2 === 0) {
		sum += termB;
	}
	var temp = termB+termA;
	termA = termB;
	termB = temp;
};
console.log(sum);