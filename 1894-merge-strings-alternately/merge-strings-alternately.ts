function mergeAlternately(word1: string, word2: string): string {
    let newWord: string = '';
    const n: number = word1.length;

    for (let i: number = 0; i < n; i++) {
        if (i < word2.length) {
            newWord = newWord + word1[i] + word2[i];
        } else {
            newWord = newWord + word1[i];
        }
    }
    console.log(`prev word: ${newWord}`);
    if (word2.length > n) {
        const diff: number = word2.length - (word2.length - n);
        console.log(diff);
        console.log(word2.length);

        for (let j: number = diff; j < word2.length; j++) {
            console.log(`letra: ${word2[j]}`);
            newWord = newWord + word2[j];
        }
    }

    return newWord;
};