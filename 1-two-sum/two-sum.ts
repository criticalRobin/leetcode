function twoSum(nums: number[], target: number): number[] {
    let response: number[] = [];
    let map: Map<number, number> = new Map();

    for (let i: number = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (let j: number = 0; j < nums.length; j++) {
        let remaining: number = target - nums[j];
        
        if (j === map.get(remaining)) continue;
        
        if (map.has(remaining)) {
            response.push(j);
            response.push(map.get(remaining));
            return response;
        }
    }
};