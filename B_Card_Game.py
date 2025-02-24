
n = int(input())

cards = list(map(int, input().split()))

cards = [(cards[i], i + 1) for i in range(len(cards))]

cards.sort(key=lambda x: x[0])

for i in range(n // 2):

    print(*(cards[i][1], cards[n - i - 1][1]))



