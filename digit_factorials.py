def digits(n):
    x = str(n)
    sum = 0
    for i in x:
        sum += fac(int(i))
    if sum == n:
        print(n)

def fac(n):
    dp = []
    dp.insert(0, 1)
    
    for i in range(1, n + 1):
        dp.insert(i, i * dp[i - 1])
    return dp[n]

n = 1
while n != 0:
    digits(n)
    n += 1

# 40730

