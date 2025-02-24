from collections import defaultdict


t = int(input())  

for _ in range(t):
    n = int(input())  
    a = list(map(int, input().split()))  
    
    freq_map = defaultdict(int)
    result = 0
    
    
    for i in range(n):
        transformed_value = a[i] - (i + 1)  
        result += freq_map[transformed_value]  
        freq_map[transformed_value] += 1  
    
    print(result)



