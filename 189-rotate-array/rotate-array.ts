/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n: number = nums.length;
    k = k % n;
    
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
        let temp: number = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
} 