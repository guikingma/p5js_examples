let drops = [];

function setup() {
    createCanvas(1300, 600);
    for (let i = 0; i < drops_number; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(color_background);

    for (let i = 0; i < drops_number; i++) {
        drops[i].fall();
        drops[i].show();
    }
}