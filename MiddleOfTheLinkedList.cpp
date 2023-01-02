/*
  https://leetcode.com/problems/middle-of-the-linked-list
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        if(!head->next)
            return head;
        if(!head->next->next)
            return head->next;

        ListNode* fast = head;
        ListNode* slow = head;

        while(slow) {
            fast = fast->next->next;
            slow = slow->next;
            if(!fast->next) {
                return slow;
            }
            else if(!fast->next->next) {
                return slow->next;
            }
        }
        return head;
    }
};
