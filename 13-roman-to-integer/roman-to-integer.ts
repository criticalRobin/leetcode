function romanToInt(s: string): number {
    const map: Map<string, number> = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let num: number = 0;
    
    for (let i: number = s.length - 1; i >= 0; i--) {
        if (i < s.length - 1 && map.get(s[i]) < map.get(s[i + 1])) {
            num -= map.get(s[i])
        } else {
            num += map.get(s[i]);
        }
    }

    return num;
};