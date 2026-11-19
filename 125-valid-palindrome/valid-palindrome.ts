function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let right = s.length - 1;

    for (let i = 0; i < right; i++) {
        if (s[i] !== s[right]) return false;
        right--;
    }

    return true;
};