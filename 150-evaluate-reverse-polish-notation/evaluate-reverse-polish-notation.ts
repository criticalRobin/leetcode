type MathOperation = (a: number, b: number) => number;

function evalRPN(tokens: string[]): number {
    const operators: Set<string> = new Set(['+', '-', '*', '/']);
    console.log(`hjola`);
    const stack: string[] = [];

    const calculate: Record<string, MathOperation> = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(b / a),
    };

    for (const token of tokens) {
        if (!operators.has(token)) {
            stack.push(token);
        } else {
            let numOne: string = stack.pop()!;
            let numTwo: string = stack.pop()!;
            let ans: number = calculate[token](Number(numOne), Number(numTwo));
            stack.push(String(ans));
        }
    }
    
    return Number(stack.pop());
};