if __name__ == '__main__':
    N = int(input())
    for n in range(N):
        string = input()
        s = string.split()
        if s[0] == 'insert':
            i = int(s[1])
            e = int(s[2])
            list.insert(i,e)
        elif s[0] == 'print':
            print(list)
        elif s[0] == 'remove':
            e = int(s[1])
            list.remove(e)
        elif s[0] == 'append':
            e = int(s[1])
            list.append(e)
        elif s[0] == 'sort':
            list.sort()
        elif s[0] == 'pop':
            list.pop()
        elif s[0] == 'reverse':
            list.reverse()
