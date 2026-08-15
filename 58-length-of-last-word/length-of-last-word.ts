function lengthOfLastWord(s: string): number {
    let length: number = 0;

    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') length++;

        if (length > 0 && s[i - 1] === ' ') return length;
    }

    return length;
};