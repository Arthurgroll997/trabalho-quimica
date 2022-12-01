export class GraphicsMock
{
    beginFill(color)
    {
        console.log(`Begin filling with color ${color}`);
    }

    drawCircle(x, y, radius)
    {
        console.log(`Drawing circle with X=${x}, Y=${y} and radius=${radius}`);
    }

    beginHole()
    {
        console.log(`Beggining to draw hole`);
    }

    endHole()
    {
        console.log(`Finishing drawing hole`);
    }

    endFill()
    {
        console.log(`Finishing filling`);
    }
}