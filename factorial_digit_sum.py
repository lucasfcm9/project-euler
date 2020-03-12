def fac(n):
    dp = []
    dp.insert(0, 1)
    
    for i in range(1, n + 1):
        dp.insert(i, i * dp[i - 1])
    return dp[n]
    
x = str(fac(100))
sum = 0
for i in x:
    sum += int(i)
print(sum)



#5 * 4 * 3 * 2 * 1
#
#dp[1] = 1
#dp[2] = 2 * dp[1]
#dp[3] = 3 * dp[2]
#dp[4] = 4 * dp[3]


