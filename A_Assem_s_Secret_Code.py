num = int(input())

for _ in range(num):
    word = input()
    capital = word.upper()
    if capital == 'YES':
        print('YES')
    else:
        print('NO')