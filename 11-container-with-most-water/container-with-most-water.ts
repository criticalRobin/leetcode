function maxArea(height: number[]): number {
    let water: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;

    while (left < right) {
        let min: number = Math.min(height[left], height[right]);
        let tempWater: number = min * (right - left);
        
        if (tempWater > water) {
            water = tempWater;
        }

        if (min < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return water;
};