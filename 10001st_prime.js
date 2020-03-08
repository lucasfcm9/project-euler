/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number? */
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

let j = 1;
for(let i = 1; i <= 1e6; i++) {
    if(isPrime(i)) {
        if(j == 10001) {
            ans = i;
            break;
        }
        j++;
    }
}

console.log(ans); //104743
