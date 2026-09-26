function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev: ListNode = dummy;

    // Stage 1: walk to the node just before position `left`
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next!;
    }

    // Stage 2: reverse the sublist from `left` to `right`
    let current: ListNode = prev.next!;
    let previousNode: ListNode | null = null;

    for (let i = 0; i < right - left + 1; i++) {
        const nextTemp: ListNode | null = current.next;
        current.next = previousNode;
        previousNode = current;
        current = nextTemp!;
    }

    // Stage 3: reconnect
    prev.next!.next = current;   // old `left` node (now tail of reversed part) connects to what's after `right`
    prev.next = previousNode;    // node before `left` connects to new head of reversed part

    return dummy.next;
}