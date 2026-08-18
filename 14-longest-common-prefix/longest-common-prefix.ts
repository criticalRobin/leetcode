function longestCommonPrefix(strs: string[]): string {
    let prefix: string = '';
    const word: string = strs[0];
    
    for (let i: number = 0; i < word.length; i++) {
        for (let j: number = 1; j < strs.length; j++) {
            if (word[i] !== strs[j][i]) {
                return prefix;
            }
        }
        
        prefix += word[i];
    }

    return prefix;
};