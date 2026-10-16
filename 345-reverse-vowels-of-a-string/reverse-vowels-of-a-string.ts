function reverseVowels(s: string): string {
    const vowels: Set<string> = new Set([
        'A',
        'a',
        'E',
        'e',
        'I',
        'i',
        'O',
        'o',
        'U',
        'u',
    ]);
    let sArr: string[] = [...s];
    let left: number = 0;
    let right: number = sArr.length - 1;

    while (left < right) {
        if (!vowels.has(sArr[left])) left++;
        if (!vowels.has(sArr[right])) right--;

        if (vowels.has(sArr[left]) && vowels.has(sArr[right])) {
            let temp: string = sArr[left];
            sArr[left] = sArr[right];
            sArr[right] = temp;
            left++;
            right--;
        }
    }

    return sArr.join('');
};