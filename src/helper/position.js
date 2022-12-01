export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(pos) {
        this.x += pos.x;
        this.y += pos.y;
    }
}