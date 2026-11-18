function isAnagram(s: string, t: string): boolean {
    const stringS = s.split('').sort().join();
    const stringT = t.split('').sort().join();

    return stringS === stringT;
};