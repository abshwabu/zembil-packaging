goal = input()
n = int(input())
comps = []


for _ in range(n):
  comps.append(input())

ans = "NO"
for i in range(n):
  for j in range(n):
    if comps[i] == goal or comps[j] == goal or (comps[i][1] == goal[0] and comps[j][0] == goal[1]):
      ans = "YES"
print(ans)