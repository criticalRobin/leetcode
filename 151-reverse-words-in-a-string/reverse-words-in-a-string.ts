function reverseWords(s: string): string {
    let words: string[] = [];
    let word: string = '';

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            console.log(s[i]);
            word += s[i];
        }

        if (word !== '' && (s[i] === ' ' || i === s.length - 1)) {
            words.push(word);
            word = '';
        }
    }

    for (let j: number = words.length - 1; j >= 0; j--) {
        console.log(`word = ${words[j]}`);
        if (j > 0) {
            word += words[j] + ' ';
        } else {
            word += words[j];
        }
    }

    return word;
};