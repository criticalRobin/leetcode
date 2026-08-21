function trap(height: number[]): number {
    let n: number = height.length;
    let total: number = 0;
    let maxLeft: number[] = new Array(n).fill(0);
    let maxRight: number[] = new Array(n).fill(0);

    maxLeft[0] = height[0]
    for (let i: number = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }

    maxRight[n - 1] = height[n - 1];
    for (let j: number = n - 2; j >= 0; j--) {
        maxRight[j] = Math.max(maxRight[j + 1], height[j])
    }

    for (let k: number = 0; k < n; k++) {
        total += Math.min(maxLeft[k], maxRight[k]) - height[k];
    }

    return total;
};