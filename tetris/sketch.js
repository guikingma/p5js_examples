let piece;
let platform;

function setup() {
    createCanvas(canvas_width, canvas_height);
    platform = new Platform()
    generate_new_piece();
    setInterval(() => apply_gravity(), timer)
    
}

function draw() {
    background(background_color);
    platform.show();
    piece.show();

}

let generate_new_piece = () => {
    let index = Math.floor(Math.random() * pieces.length)
    piece = new Piece(pieces[index],
                      width/2,
                      box_dimension,
                      color={r:150, g:48, b:95});  // TODO: one colour per piece
}

let apply_gravity = () => {
    if (!piece.can_collide(box => box.y === height - box_dimension))
        piece.y += box_dimension;
    else {
        platform.place_piece(piece);
        generate_new_piece();
    }
}

function keyPressed() {
    if (keyCode === SPACE_KEY) {
        // Rotate
        piece.rotate_piece();
    }
    else if (keyCode === RIGHT_ARROW && !piece.can_collide(box => box.x + box_dimension === width)) {
        // Move Right
        piece.x += box_dimension;
    }
    else if (keyCode === LEFT_ARROW && !piece.can_collide(box => box.x === beginning_point)) {
        // Move left
        piece.x -= box_dimension;
    }
    else if (keyCode === DOWN_ARROW) {
        // Accelerate
        apply_gravity()
    }
    else if (keyCode === UP_ARROW) {
        // TODO: Drop
        // piece.y = "TODO";
    }
  }