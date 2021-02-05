class Fractal {
    constructor() {

        this.x = random(width);
        this.y = random(-500, -50);
        
        this.iterations = 100;


        this.fall = function () {
            this.y = this.y + this.yspeed;
            this.yspeed = this.yspeed + this.gravity;

            // if ((this.y > height))

        };

        this.show = function () {
            var thick = map(this.z, 0, 20, 1, 3);
            strokeWeight(thick);
            stroke(138, 43, 226);
            line(this.x, this.y, this.x, this.y + this.ylen);
        };

    }
}