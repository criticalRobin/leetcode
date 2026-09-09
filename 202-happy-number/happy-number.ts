function isHappy(n: number): boolean {
    const seen = new Set()
    
    let num: number = n;
    while (true) {
        let sum: number = 0;

        for (let digit of String(num)) sum += Number(digit) ** 2;

        if (sum === 1) return true;

        if (seen.has(sum)) return false;

        seen.add(sum);
        num = sum;
    }

    return false;
};