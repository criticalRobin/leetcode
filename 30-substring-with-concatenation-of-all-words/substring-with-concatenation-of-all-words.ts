function findSubstring(s: string, words: string[]): number[] {
    const wordLength: number = words[0].length;
    const totalWords: number = words.length;
    const windowLength: number = wordLength * totalWords;
    const response: number[] = [];

    if (s.length < windowLength) return response;

    const wordCount: Map<string, number> = new Map();
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let left = 0; left + windowLength <= s.length; left++) {
        const seen: Map<string, number> = new Map();
        let valid: boolean = true;

        for (let i = left; i < left + windowLength; i += wordLength) {
            const chunk: string = s.slice(i, i + wordLength);

            if (!wordCount.has(chunk)) {
                valid = false;
                break;
            }

            seen.set(chunk, (seen.get(chunk) || 0) + 1);

            if (seen.get(chunk)! > wordCount.get(chunk)!) {
                valid = false;
                break;
            }
        }

        if (valid) response.push(left);
    }

    return response;
}