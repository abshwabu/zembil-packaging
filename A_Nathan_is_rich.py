for _ in range(int(input())):
    n = int(input())
    cars = n//4
    n-=cars*4
    bikes = n//2
    print(cars + bikes)