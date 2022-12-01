export class Random
{
    constructor(randomEngine)
    {
        this.randomEngine = randomEngine;
    }

    getNumber(min, max) // min e max ambos são inclusivos!
    {
        return Math.floor(this.randomEngine.random() * (max - min + 1)) + min
    }
}