/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummyNode: ListNode = new ListNode(0);
    let current: ListNode = dummyNode;

    while (list1 !== null && list2 !== null) {
        const val1: number = list1 !== null ? list1.val : 0;
        const val2: number = list2 !== null ? list2.val : 0;

        if (val1 <= val2) {
            current.next = list1;
            if (list1 !== null) list1 = list1.next;
        } else {
            current.next = list2;
            if (list2 !== null) list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return dummyNode.next;
};