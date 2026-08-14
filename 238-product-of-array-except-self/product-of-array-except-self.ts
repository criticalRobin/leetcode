function productExceptSelf(nums: number[]): number[] {
    let prefix: number[] = [];
    let suffix: number[] = [];
    let answer: number[] = [];
    let currentProduct: number = 1;

    for (let i: number = 0; i < nums.length; i++) {
        prefix.push(currentProduct);
        currentProduct *= nums[i];
    }

    currentProduct = 1;

    for (let j: number = nums.length - 1; j >= 0; j--) {
        suffix.push(currentProduct);
        currentProduct *= nums[j];
    }

    suffix.reverse();

    for (let k: number = 0; k < nums.length; k++) {
        answer.push(prefix[k] * suffix[k]);
    }

    return answer;
};