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

function hasCycle(head: ListNode | null): boolean {
    let left: ListNode = head;
    let right: ListNode = head;

    while (true) {
        if (right === null || right.next === null) return false;

        right = right.next.next;
        left = left.next;

        if (left === right) return true;
    }
};