function twoSum(numbers: number[], target: number): number[] {
    let res: number[] = [];
    let n: number = 0;
    
    while (n < numbers.length) {
        for (let i: number = n + 1; i < numbers.length; i++) {
            if (numbers[n] + numbers[i] === target) {
                res.push(n + 1);
                res.push(i + 1);
                return res;
            }
        }
        n++;
    }
};