class RandomizedSet {
    private arr: number[];
    private map: Map<number, number>;

    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;

        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;

        const indexToRemove: number = this.map.get(val);
        const lastValue: number = this.arr[this.arr.length - 1];

        this.arr[indexToRemove] = lastValue;
        this.map.set(lastValue, indexToRemove);

        this.arr.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const random: number = this.arr[Math.floor(Math.random() * this.arr.length)];
        
        return random;
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */