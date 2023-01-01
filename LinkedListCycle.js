/*
https://leetcode.com/problems/linked-list-cycle
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var hasCycle = function(head) {
    let fast = head
    while(fast && fast.next) {
        head = head.next
        fast = fast.next.next
        if(head === fast) return true
    }
    return false
};

/*
C++ implementation

//Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

#include <set>
using namespace std;

class Solution {
public:
    bool hasCycle(ListNode *head) {
        set<ListNode*> cycleSet;

        while(head) {
            cycleSet.insert(head);
            head = head->next;
            if(head && (cycleSet.find(head) != cycleSet.end())){
                return true;
            }
        }
        return false;
    }
};

*/
