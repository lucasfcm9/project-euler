# What is the sum of the digits of the number 21000?

value = 2**1000

lst = []
for i in str(value):
    lst.append(i)

sum = 0
for i in lst:
    sum += int(i)
print(sum) # 1366
