function minWindow(s: string, t: string): string {
    if (t.length > s.length) return '';

    let countT: Map<string, number> = new Map();
    for (const char of t) {
        countT.set(char, (countT.get(char) || 0) + 1);
    }

    let minStr: string = '';
    let minLen: number = Infinity;

    const isValid = (windowMap: Map<string, number>): boolean => {
        for (const [char, countNeeded] of countT) {
            const countInWindow: number = windowMap.get(char) || 0;

            if (countInWindow < countNeeded) return false;
        }

        return true;
    }

    const windowMap: Map<string, number> = new Map();
    let left: number = 0;

    for (let right: number = 0; right < s.length; right++) {
        const char: string = s[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        while (isValid(windowMap)) {
            const currentLen: number = right - left + 1;

            if (currentLen < minLen) {
                minLen = currentLen;
                minStr = s.slice(left, right + 1);
            }

            const leftChar: string = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
            left++;
        }
    }

    return minStr;
};