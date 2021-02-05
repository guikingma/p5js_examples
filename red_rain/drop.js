class Drop {
    constructor() {

        this.color = color_red;
        this.x = random(width);
        this.y = random(-500, -50);
        this.z = random(0, 20);
        
        this.ylen = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 1, 20);

        this.fall = function () {
            this.y = this.y + this.yspeed;
            this.yspeed = this.yspeed + gravity;

            if (this.y > height) {
                this.y = random(-500, 100);
                this.z = random(0, 20);
                this.ylen = map(this.z, 0, 20, 10, 20);
                this.yspeed = map(this.z, 0, 20, 4, 10);
            }
        };

        this.show = function () {
            let thick = map(this.z, 0, 20, 1, 3);
            strokeWeight(thick);
            stroke(this.color);
            line(this.x, this.y, this.x, this.y + this.ylen);
        };
    }
}