function isSubsequence(s: string, t: string): boolean {
    let sub: string = '';
    let a: number = 0;
    let b: number = 0;
    
    while (a <= t.length) {
        if (sub === s) return true;

        if (t[a] === s[b]) {
            sub += t[a];
            b++;
        }

        a++;
    }

    return false;
};