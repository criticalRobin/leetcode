function groupAnagrams(strs: string[]): string[][] {
    const groups: Map<string, string[]> = new Map();

    for (const str of strs) {
        const key: string = str.split('').sort().join('');

        if (!groups.has(key)) groups.set(key, []);

        groups.get(key)!.push(str);
    }

    return Array.from(groups.values());
};