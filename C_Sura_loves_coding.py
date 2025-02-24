num = int(input())
word = input()
arr = []
start = 0
end = -1
for n in range(num):
    word = list(word)
    # if n % 2 == 0:
    #     arr.append(word[int(n/2 - 1)])
    #     word.remove(word[int(n/2 -1)])
    # elif n <= 3:
    #     arr.append(word[0])
    #     word.remove(word[0])
    # else:
        
    #     arr.append(word[(int((n+1)/2))])
    #     word.remove(word[int((n+1)/2)])
    
      
    if n % 2 == 0:
        arr.insert(start, word.pop())
        start += 1
    
        
    else:
        arr.insert(end, word.pop())
        end += -1

print(''.join(arr))