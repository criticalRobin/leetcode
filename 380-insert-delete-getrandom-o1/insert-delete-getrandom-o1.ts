class RandomizedSet {
    private set: Set<number>;

    constructor() {
        this.set = new Set<number>;
    }

    insert(val: number): boolean {
        if (!this.set.has(val)) {
            this.set.add(val);
            
            return true;
        }

        return false;
    }

    remove(val: number): boolean {
        return this.set.delete(val);
    }

    getRandom(): number {
        const arr: number[] = [...this.set];
        const random: number = arr[Math.floor(Math.random() * arr.length)];
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