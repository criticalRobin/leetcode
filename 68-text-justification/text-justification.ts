function fullJustify(words: string[], maxWidth: number): string[] {
    const lines: string[][] = []
    let line: string[] = [];
    let currentLength: number = 0;

    for (const word of words) {
        const sum: number = currentLength + word.length + line.length;

        if (sum > maxWidth) {
            lines.push(line);
            line = [];
            currentLength = 0;
        }

        line.push(word);
        currentLength += word.length;
    }

    if (line.length > 0) lines.push(line);

    let result: string[] = [];

    for (let i: number = 0; i < lines.length; i++) {
        const isLastLine: boolean = i === lines.length - 1 ? true : false;
        result.push(justify(lines[i], maxWidth, isLastLine));
    }

    return result;
};

function justify(line: string[], maxWidth: number, isLastLine: boolean): string {
    if (isLastLine || line.length === 1) {
        const joined: string = line.join(' ');
        return joined + ' '.repeat(maxWidth - joined.length);
    }

    const totalWordLength: number = line.reduce((sum, word) => sum + word.length, 0);
    const gaps: number = line.length - 1;
    const totalSpaces: number = maxWidth - totalWordLength;
    const baseSpaces: number = Math.floor(totalSpaces / gaps);
    const extraSpaces: number = totalSpaces % gaps;

    let result: string = '';

    for (let i: number = 0; i < line.length; i++) {
        result += line[i];

        if (i < gaps) {
            result = result + ' '.repeat(baseSpaces);

            if (i < extraSpaces) { 
                result += ' ';
            }
        }
    }

    return result;
}