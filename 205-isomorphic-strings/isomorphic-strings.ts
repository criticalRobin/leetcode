function isIsomorphic(s: string, t: string): boolean {
    let sMap: Map<string, string> = new Map();
    let tMap: Map<string, string> = new Map();
    
    for (let i: number = 0; i < s.length; i++) {
        const char: string = s[i];
        
        if (!sMap.has(char) && !tMap.has(t[i])) {
            sMap.set(char, t[i]);
            tMap.set(t[i], char);
        }

        if (sMap.get(char)! !== t[i]) return false;
    }

    return true;
};