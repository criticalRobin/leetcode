function calculate(s: string): number {
    const stack: number[] = [];
    let result = 0;
    let sign = 1;
    let i = 0;

    while (i < s.length) {
        const char = s[i];

        if (char === ' ') {
            i++;
        } else if (!isNaN(Number(char))) {
            let num = 0;
            while (i < s.length && !isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + Number(s[i]);
                i++;
            }
            result += sign * num;
        } else if (char === '+') {
            sign = 1;
            i++;
        } else if (char === '-') {
            sign = -1;
            i++;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            i++;
        } else if (char === ')') {
            const prevSign = stack.pop()!;
            const prevResult = stack.pop()!;
            result = prevResult + prevSign * result;
            i++;
        } else {
            i++;
        }
    }

    return result;
}