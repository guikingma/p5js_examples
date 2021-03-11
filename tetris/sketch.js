let piece;

function setup() {
    createCanvas(canvas_width, canvas_height);
    piece = new Piece(piece_T,
                      width/2,
                      box_dimension,
                      color={r:150, g:48, b:95});
    setInterval(() => apply_gravity(), timer)
    
}

function draw() {
    background(background_color);
    piece.show();

}

let apply_gravity = () => {
    piece.y += box_dimension;
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