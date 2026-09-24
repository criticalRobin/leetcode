/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (head === null) return null;

    const visitedNodes: Map<_Node, _Node> = new Map();

    let current: _Node | null = head;

    while (current !== null) {
        visitedNodes.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;
    while (current !== null) {
        const copy: _Node = visitedNodes.get(current)!;
        copy.next = current.next !== null ? visitedNodes.get(current.next)! : null;
        copy.random = current.random !== null ? visitedNodes.get(current.random)! : null;
        current = current.next;
    }

    return visitedNodes.get(head);
};