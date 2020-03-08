/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million. */

let isPrime = (n) => {

    if(n == 2)
        return true;
    if(n < 2 || !(n & 1))
        return false;

    for(let d = 3; d * d <= n; d += 2)
        if(!(n % d))
            return false;
    return true;
}

let sum = 0;
for(let i = 1; i < 2e6; ++i) {
    if(isPrime(i)) {
        sum += i;
    }
}
console.log(sum); //142913828922
