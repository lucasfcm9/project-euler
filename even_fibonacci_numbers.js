function fibonacci(n) {
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for(var i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

let sum = 0;

for(var i = 0; i < 33; ++i) {
    if(fibonacci(i) % 2 == 0) {
        sum += fibonacci(i);
    }
}
console.log(sum)
