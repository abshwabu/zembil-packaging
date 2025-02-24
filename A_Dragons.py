def can_kirito_move_on(s, dragons):
    dragons.sort(key=lambda x: x[0])
    
    for dragon in dragons:
        if s > dragon[0]:
            s += dragon[1]
        else:
            return "NO"
    
    return "YES"


s, n = map(int, input().split())
dragons = [tuple(map(int, input().split())) for _ in range(n)]


result = can_kirito_move_on(s, dragons)
print(result)