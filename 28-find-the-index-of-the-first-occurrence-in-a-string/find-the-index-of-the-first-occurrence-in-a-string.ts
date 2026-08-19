function strStr(haystack: string, needle: string): number {
    for (let i: number = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let sub: string = haystack.substring(i, i + needle.length);

            if (sub === needle) return i;
        }
    }
    
    return -1;
};