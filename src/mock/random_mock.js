export class RandomMock
{
    constructor(val)
    {
        this.val = val;
    }
    
    setReturnValue(val)
    {
        this.val = val;
    }

    random()
    {
        return this.val;
    }
}