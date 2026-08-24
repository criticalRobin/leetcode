function isPalindrome(s: string): boolean {
    let palindrome: boolean = true;
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let n: number = s.length;

    for (let i: number = 0; i < n; i++) {
        if (n <= 1) return palindrome;
        if (s[i] != s[(n - 1) - i]) return !palindrome;
    }

    return palindrome;
};