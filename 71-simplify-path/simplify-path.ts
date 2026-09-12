function simplifyPath(path: string): string {
    const parts: string[] = path.split('/');
    const stack: string[] = []

    for (const part of parts) {
    if (part === '' || part === '.') continue;
    if (part === '..') {
        if (stack.length > 0) stack.pop();
        continue;
    }
    stack.push(part);
}

    return '/' + stack.join('/');
};