# https://leetcode.com/problems/valid-parentheses

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        parens = []

        if len(s) > 1:
            for letter in s:
                if letter == ']' and len(parens) > 0 and parens[-1] == '[':
                    parens.pop()
                elif letter == ')' and len(parens) > 0 and parens[-1] == '(':
                    parens.pop()
                elif letter == '}' and len(parens) > 0 and parens[-1] == '{':
                    parens.pop()
                else:
                    parens.append(letter)
        else:
            return False
        
        if len(parens) > 0:
            return False
        return True
