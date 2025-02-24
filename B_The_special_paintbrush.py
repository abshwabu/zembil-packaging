def min_paint_length(t, test_cases):
    results = []
    for i in range(t):
        n = test_cases[i][0]
        s = test_cases[i][1]
        
        
        first_black = s.find('B')
        last_black = s.rfind('B')
        
        
        min_length = last_black - first_black + 1
        results.append(min_length)
    
    return results

t = int(input())
test_cases = []
for _ in range(t):
    n = int(input())
    s = input()
    test_cases.append((n, s))


results = min_paint_length(t, test_cases)

for result in results:
    print(result)