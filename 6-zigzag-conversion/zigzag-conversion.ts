function convert(s: string, numRows: number): string {
    let rows: string[] = new Array(numRows).fill('');
    let currentRow: number = 0;
    let direction: number = 1;

    if (numRows === 1) return s;

    for (let i: number = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        if (currentRow === 0) direction = 1;
        else if (currentRow === numRows - 1) direction = -1;
        
        currentRow += direction;
    }

    return rows.join('');
};