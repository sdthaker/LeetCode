class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # O(n log n)
        # nums.sort()
        # return nums[len(nums)/2]

        # O(n) 
        counter = 0
        candidate = None

        for i in nums:
            if counter == 0:
                candidate = i
            counter += (1 if candidate == i else -1)

        return candidate

