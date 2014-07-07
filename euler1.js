//if a number is divisible by either 3 or 5, it adds that number to the running sum. solves Euler problem #1 in JavaScript

var runningCount = 0;

for (var i = 1; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        runningCount += i;
    }
}

console.log(runningCount);