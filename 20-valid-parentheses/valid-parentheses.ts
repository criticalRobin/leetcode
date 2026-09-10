function isValid(s: string): boolean {
    if (s.length <= 1) return false;

    const map: Map<string, string> = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    let openChars: string[] = [];

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            openChars.push(char);
        } else {
            if (map.get(char)! !== openChars[openChars.length - 1]) return false;
            openChars.pop();
        }
    }

    return openChars.length === 0;
};