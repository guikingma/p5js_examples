class Platform {
    constructor(platform = [[]], x = 0, y = 0, dimension = box_dimension, color = {r : 255, g : 255, b : 255}) {
        this.platform = platform
        this.dimension = dimension
        this.color = color
        this.x = x
        this.y = y
        this.generate_platform()
    }

    show() {
        this.platform.forEach( (row, i) => row.forEach( (box, j) => box === null ? this.show_empty_box() : box.show()))
    }

    generate_platform() {
        let platform_length = canvas_width / this.dimension
        this.platform = Array.from(new Array(platform_length), row => 
                        Array.from(new Array(platform_length), col => null))
    }

    show_empty_box() {
        let {r , g , b} = this.color
        stroke(r, g, b)
        fill(background_color)
    }

    place_piece(piece) {
        piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), []).forEach( box => this.platform[box.y / box_dimension][box.x / box_dimension] = box)
    }

    pieces_colliding(piece, collision = (rect1, rect2) => rectCollision(rect1, rect2), applyToBoxes = box => box) {
        let boxes = piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        boxes.forEach(box => applyToBoxes(box))
        let pieces_in_platform = this.platform.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        return boxes.reduce( (z, box) => pieces_in_platform.filter( p => collision(box, p)).length > 0 ? true : z , false)
    }

    clean_filled_rows() {
        let pre_boxes_count = this.count_boxes()
        this.platform.forEach( (row, i) => { if(row.every( box => box != null)) { row.forEach( (element, j) =>  this.platform[i][j] = null)} })
        let post_boxes_count = this.count_boxes()
        pre_boxes_count != post_boxes_count ? points += pre_boxes_count - post_boxes_count : points = points
    }

    count_boxes() {
        return this.platform.reduce( (z, row) => z += row.filter( element => element != null).length, 0)
    }
}