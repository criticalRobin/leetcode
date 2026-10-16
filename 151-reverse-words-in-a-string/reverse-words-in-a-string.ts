function reverseWords(s: string): string {
    const arr: string[] = s.split(' ');

    if (arr.length === 1) return arr[0];

    let str: string[] = [];

    for (let i: number = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '') {
            str.push(arr[i]);
        }
    }

    if (str.length === 1) return str[0];
    
    return str.slice(0, str.length - 1).join(' ') + ' ' + str[str.length - 1];
};