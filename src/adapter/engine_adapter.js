export class EngineAdapter {
    constructor(app, graphics) {
        this.app = app;
        this.graphics = graphics;
    }

    drawCircle(filled, color, center, radius)
    {
        const gr = new this.graphics();

        gr.beginFill(color);
        gr.drawCircle(center.x, center.y, radius);

        if (!filled)
        {
            gr.beginHole();
            gr.drawCircle(center.x, center.y, radius - 0.1);
            gr.endHole();
        }

        gr.endFill();

        this.app.addChild(gr);

        return true;
    }
}