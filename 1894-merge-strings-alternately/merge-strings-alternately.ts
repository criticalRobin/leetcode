function mergeAlternately(word1: string, word2: string): string {
    let newWord: string = '';
    const maxLength: number = Math.max(word1.length, word2.length);

    for (let i: number = 0; i < maxLength; i++) {
        if (i < word1.length) newWord += word1[i];
        if (i < word2.length) newWord += word2[i];
    }

    return newWord;
};