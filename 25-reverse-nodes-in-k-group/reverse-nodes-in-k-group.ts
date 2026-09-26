function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // Stage 1: check if k nodes exist from `head`
    let node: ListNode | null = head;
    let count = 0;
    while (node !== null && count < k) {
        node = node.next;
        count++;
    }
    if (count < k) return head; // not enough nodes, leave as-is

    // Stage 2: reverse the first k nodes (same technique as Reverse Between)
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    for (let i = 0; i < k; i++) {
        const nextTemp: ListNode | null = current!.next;
        current!.next = prev;
        prev = current;
        current = nextTemp;
    }

    // Stage 3 + 4: recursively reverse the rest, then connect
    head!.next = reverseKGroup(current, k); // `head` is now the tail of this reversed group
    return prev; // `prev` is now the head of this reversed group
}