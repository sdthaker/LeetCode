# https://leetcode.com/problems/maximum-depth-of-binary-tree

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        left  = 0
        right = 0

        if root == None:
            return 0
        elif root.left == None and root.right == None:
            return 1
        else:
            if root.left:
                left = 1 + self.maxDepth(root.left)
            if root.right:
                right = 1 + self.maxDepth(root.right)

            return left if left > right else right  
        
