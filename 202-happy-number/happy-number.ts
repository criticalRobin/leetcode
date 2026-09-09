function isHappy(n: number): boolean {
    const seen: Map<string, number> = new Map();
    let numAsString: string = String(n);
    let sum: number = 0;
    
    while (sum >= 0) {
        if (!seen.has(numAsString)) {
            seen.set(numAsString, sum);
        } else {
            return false;
        }

        sum = 0;
        console.log(`num = ${numAsString}`);
        let left: number = 0;
        let right: number = numAsString.length;

        while (left < right) {
            sum += Math.pow(Number(numAsString[left]), 2);
            console.log(`sum = ${sum}`);
            left++;
        }

        console.log(`final sum = ${sum}`);
        
        if (sum === 1) {
            return true;
        } else {
            numAsString = String(sum);
        }
    }

    return false;
};