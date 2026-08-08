/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let n: number = nums.length;
    let newNums: number[] = new Array(n);
    
    for(let i: number = 0; i < n; i++){
        let newPos: number = (i + k) % n;
        newNums[newPos] = nums[i];
    }

    for(let i: number = 0; i < n; i++){
        nums[i] = newNums[i]
    }
};