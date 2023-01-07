# https://leetcode.com/problems/fizz-buzz

class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """

        fizzbuzzArray = []

        for i in range(1,n+1):
            if i % 3 == 0 and i % 5 == 0:
                fizzbuzzArray.append("FizzBuzz")
            elif i % 3 == 0:
                fizzbuzzArray.append("Fizz")
            elif i % 5 == 0:
                fizzbuzzArray.append("Buzz")
            else:
                fizzbuzzArray.append(str(i))
        
        return fizzbuzzArray
