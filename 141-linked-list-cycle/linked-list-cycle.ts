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
    if (!head || head.next === null) return false;
    
    // const visitedNodes: Set<ListNode> = new Set(); 
    // let currentNode: ListNode = head;
    
    // while (true) {
    //     if (currentNode.next === null) return false;
    //     if (visitedNodes.has(currentNode.next)) return true;

    //     visitedNodes.add(currentNode);
    //     currentNode = currentNode.next;
    // }

    let left: ListNode = head;
    let right: ListNode = head;

    while (true) {
        if (right === null || right.next === null) return false;

        right = right.next.next;
        left = left.next;

        if (left === right) return true;
    }
};