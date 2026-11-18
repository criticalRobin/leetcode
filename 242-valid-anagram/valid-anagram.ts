function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const map = new Map();

    for (const ch of s) {
        map.set(ch, ((map.get(ch) | 0) + 1));
    }

    for (const ch of t) {
        if (!map.has(ch)) return false;

        const count = map.get(ch) - 1;

        if (count === 0) map.delete(ch)
        else map.set(ch, count);
    }

    return map.size === 0;
};