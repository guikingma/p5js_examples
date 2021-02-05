
var angle_slider;
var trim_slider;

function setup() {
    createCanvas(400, 400);
    angle_slider = createSlider(0, TWO_PI, PI / 4, PI / 16);
    trim_slider = createSlider(60, 70, 67, 1);
}

function draw() {
    background(51);

    stroke(255);
    translate(200, height);
    
    let len = 100;
    let trim = trim_slider.value() / 100;
    let angle = angle_slider.value();
    
    branch(len, angle, trim);

}

function branch(len, angle, trim) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 3) {
        push();
        
        rotate(angle);
        branch(len * trim, angle, trim);

        pop();
        push();
        
        rotate(-angle);
        branch(len * trim, angle, trim);

        pop();
    }

}