class Box {
    constructor(x=0, y=0, box_dimension=0, color={r:0, g:0, b:0}) {
        this.x = x;
        this.y = y;
        this.box_dimension = box_dimension;
        this.color = color;
    }

    show() {
        let {r, g, b} = this.color;
        fill(r, g, b);
        rect(this.x, this.y, this.box_dimension, this.box_dimension);
    }
}