function wordPattern(pattern: string, s: string): boolean {
    let letters: string[] = pattern.split('');
    let words: string[] = s.split(' ');
    
    if (letters.length !== words.length) return false;

    const letterToWord: Map<string, string> = new Map();
    const wordToLetter: Map<string, string> = new Map();

    for (let i: number = 0; i < pattern.length; i++) {
        if (!letterToWord.has(letters[i]) && !wordToLetter.has(words[i])) {
            letterToWord.set(letters[i], words[i]);
            wordToLetter.set(words[i], letters[i]);
        }

        if (letterToWord.get(letters[i]) !== words[i]) return false;
        if (wordToLetter.get(words[i]) !== letters[i]) return false;
    }

    return true;
};