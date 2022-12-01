export class Molecule {
    constructor(size, agitation, color, centerPosition, randomEngine) {
        this.size = size;
        this.agitation = agitation;
        this.color = color;
        this.center = centerPosition;
        this.randomEngine = randomEngine;
    }

    move(position) {
        this.center.add(position);
    }

    increaseAgitation(val)
    {
        this.agitation += val;
    }

    decreaseAgitation(val)
    {
        if (this.agitation - val < 0)
            this.agitation = 0;
        else
            this.agitation -= val;
    }

    getCenterWithAgitation()
    {
        return {
            x: this.agitation * this.randomEngine.getNumber(-1, 1) + this.center.x,
            y: this.agitation * this.randomEngine.getNumber(-1, 1) + this.center.y,
        }
    }

    draw(engine) {
        return engine.drawCircle(true, this.color, this.getCenterWithAgitation(), this.size);
    }
};