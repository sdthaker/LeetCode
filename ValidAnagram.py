# https://leetcode.com/problems/valid-anagram

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        first = {}
        second = {}

        if(len(s) == len(t)):
            for i in s:
                if i in first:
                    first[i] = first[i] + 1
                else:
                    first[i] = 1
            
            for i in t:
                if i in second:
                    second[i] = second[i] + 1
                else:
                    second[i] = 1
            
            return first == second
        else:
            return False
