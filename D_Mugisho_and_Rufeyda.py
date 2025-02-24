nums = input().split()

n = int(nums[0])
t = int(nums[1])

num = 10 ** (n-1)
if num % 2 == 0:
    print(num)
else:
    multiple = num + (t - (num % t))
    if multiple < 10**n:
        print(multiple)
    else:
        print(-1)