function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;

    for (let i: number = 0; i < flowerbed.length; i++) {
        const lastBed: number = flowerbed[i - 1] !== undefined ? flowerbed[i - 1] : 0;
        const nextBed: number = flowerbed[i + 1] !== undefined ? flowerbed[i + 1] : 0;
        const current : number = flowerbed[i];

        if (lastBed === 0 && current === 0 && nextBed === 0) {
            flowerbed[i] = 1;
            n--;
        }

        if (n === 0) return true;
    }

    return false;
};