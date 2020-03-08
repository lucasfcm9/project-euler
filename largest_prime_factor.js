/* The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143? */
let largestPrime = (n) => {

    let lst = [];
    let d = 2;
    while(n > 1) {
        while(n % d == 0) {
            lst.push(d);
            n /= d;
        }
        d += 1;
    }
    return lst;
}
let value = 600851475143;
let lst = largestPrime(value);
let hi = 0;
lst.forEach(function(value, idx) {
    if(value > hi)
        hi = value;
});

console.log(hi); //6857
