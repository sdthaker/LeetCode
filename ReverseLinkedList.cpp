/*
  https://leetcode.com/problems/reverse-linked-list
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
    ListNode* reverseList(ListNode* head) {
        ListNode* reversed = nullptr;
        ListNode* tmp = nullptr;
        ListNode* h = head;

        while(h) {
            tmp = h->next;
            h->next = reversed;
            reversed = h;            
            h = tmp;
        }
        
        head = reversed;        
        return head;
    }
};
