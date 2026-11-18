function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for (const word of strs) {
        const key = word.split('').sort().join('');
        
        if (!map.has(key)) map.set(key, [word]);
        else {
            const arr = map.get(key);
            arr.push(word);
            map.set(key, arr);
        }
    }

    const res = [];

    for (const key of map.keys()) {
        res.push(map.get(key));
    }

    return res;
};