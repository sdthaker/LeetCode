# https://leetcode.com/problems/longest-common-prefix

import os

class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """

        lcp = strs[0]

        for i in strs:
            if i == lcp:
                continue
            elif len(i) != 0 and len(lcp) != 0 and i[0] == lcp[0]:
                lcp = os.path.commonprefix([i, lcp])
            else:
                lcp = ""
                break
        
        return lcp
