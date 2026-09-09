function isIsomorphic(s: string, t: string): boolean {
    let sMap: Map<string, string> = new Map();
    let tMap: Map<string, string> = new Map();
    
    for (let i: number = 0; i < s.length; i++) {
        if (!sMap.has(s[i]) && !tMap.has(t[i])) {
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
        }

        if (sMap.get(s[i])! !== t[i]) return false;
    }

    return true;
};