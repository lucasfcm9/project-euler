/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2, For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

let a, b, c;
for(let i = 1; i <= 999; i++) {
    for(let j = 1; j <= 999; j++) {
        for(let k = 1; k <= 999; k++) {

            if(i + j + k == 1000) {
                if(i < j && j < k) {
                    if(Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
                        a = i;
                        b = j;
                        c = k;
                    }
                }
            }
        }
    }
}

console.log(a * b * c); //31875000
