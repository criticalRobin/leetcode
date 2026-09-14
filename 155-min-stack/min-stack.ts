class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value: number): void {
        const lastMinValue: number | null = this.minStack[this.minStack.length - 1];
        
        this.stack.push(value);
        this.minStack.push(value);

        if (lastMinValue < value) {
            this.minStack[this.minStack.length - 1] = this.minStack[this.minStack.length - 2]; 
            this.minStack[this.minStack.length - 2] = value; 
        }
    }

    pop(): void {
        const top: number = this.top();
        const min: number = this.getMin();

        if (top === min) {
            this.stack.pop();
            this.minStack.pop();
        } else {
            this.stack.pop();
            this.minStack.pop();
            this.minStack[this.minStack.length - 1] = min;
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */