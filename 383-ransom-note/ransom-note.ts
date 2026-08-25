function canConstruct(ransomNote: string, magazine: string): boolean {
    let map: Map<string, number> = new Map();

    for (const char of magazine) {
        if (!map.get(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }

    for (const char of ransomNote) {
        if (!map.get(char)) {
            return false;
        } else {
            map.set(char, map.get(char) - 1);
        }
    }

    return true;
};