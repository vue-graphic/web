 #!/usr/bin/env python3

class Module:
  def printFib(n):    # write Fibonacci series up to n
    a, b = 0, 1
    while b < n:
            print(b),
            a, b = b, a+b

  def fib(n):   # return Fibonacci series up to n
    result = []
    a, b = 0, 1
    while b < n:
            result.append(b)
            a, b = b, a+b
    return result