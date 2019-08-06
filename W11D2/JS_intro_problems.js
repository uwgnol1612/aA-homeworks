function madLib(verb, adj, noun) {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

function isSubstring(searchString, subString) {
    return searchString.includes(subString); 
}

function FizzBuzz(array) {
    const arr = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            arr.push(el);
        }
    });

    return arr; 
}

function isPrime(number) {
    if (number < 2) {return false;}
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true;
}

function sumOfNPrimes(n) {
    let sum = 0;
    let num = 2;
    let count = 0;

    while (count < n) {
        if (isPrime(num)) {
            sum += num;
            count++;
        }
        num++;
    }
    return sum;
}