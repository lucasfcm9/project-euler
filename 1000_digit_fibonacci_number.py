def fib(n):
    dp = []
    dp.insert(0, 0);
    dp.insert(1, 1);
    
    for i in range(2, n + 1):
        dp.insert(i, dp[i - 1] + dp[i - 2])
    return dp[n]
    

lst = []
for i in range(0, 2**10000):
    if(len(str(fib(i))) == 1000):
        print(i, " ", fib(i))
        break
