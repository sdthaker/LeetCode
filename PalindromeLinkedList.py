# https://leetcode.com/problems/palindrome-linked-list

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """

        arr = []
        
        while True:
            arr.append(head.val)
            if head.next == None:
                break
            head = head.next

        if len(arr) == 0 or len(arr) == 1:
            return True
        else:
            endIdx = -1
            for i in arr:
                if i != arr[endIdx]:
                    return False
                endIdx += -1
        return True
