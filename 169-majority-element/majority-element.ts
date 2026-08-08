function majorityElement(nums: number[]): number {
    let numsMap: Map<number, number> = new Map();
    let bestNum: number = 0;
    let bestCount: number = 0;

    for(let i: number = 0; i < nums.length; i++){
        if(i === 0){
            bestNum = nums[i];
            bestCount = 1;
        }
        
        if(!numsMap.has(nums[i])){
            numsMap.set(nums[i], 1);
        }else{
            let numCount: number = numsMap.get(nums[i]!)
            numsMap.set(nums[i], ++numCount);

            if(numCount > bestCount){
                bestNum = nums[i];
                bestCount = numCount;
            }
        }
    }

    return bestNum;
};