function longestPalindrome(s: string): string {
    for (let len = s.length; len > 0; len--) {
        for (let start = 0; start + len <= s.length; start++) {
            if (isPalindrome(s, start, start + len - 1)) {
                return s.substring(start, start + len);
            }
        }
    }
    return '';
}

function isPalindrome(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}