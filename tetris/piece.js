class Piece {
    constructor(original_shape = [[]], x=0, y=0, color={r:0, g:0, b:0}) {
        this.original_shape = original_shape;
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = this.fill_piece(original_shape.length);
    }

    show() {
        this.update_piece_position();
        this.shape.forEach(x => x.filter(j => j != null).forEach(box => box.show()));
    }

    fill_piece(piece_length) {

        return Array.from(new Array(piece_length), (row, i) =>
               Array.from(new Array(piece_length), (col, j) =>
               this.original_shape[i][j] == 1 ? new Box(this.x + j * box_dimension,
                                                        this.y + i * box_dimension,
                                                        box_dimension,
                                                        this.color
                                                        ) : null));

    }

    update_piece_position() {
        this.shape.forEach((row, i) => row.forEach((col, j) => {if(col) {col.x = this.x + j * box_dimension; col.y = this.y + i * box_dimension;}}));
    }

    rotate_piece() {
        this.inverse_matrix();
        this.transpose_matrix();
        this.update_piece_position();
    }

    inverse_matrix() {
        this.shape.reverse()[0].map((column, index) => {
            this.shape.map(row => row[index])
        })
    }

    transpose_matrix() {
        let dimension = this.shape.length;
        let aux = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null));
        this.shape.forEach((row, i) => row.forEach((col, j) => aux[j][i] = col));
        this.shape = aux;
    }

    can_collide(colission) { 
        return this.shape.reduce((z, row) => z.concat(row.filter(col => col != null).filter(box => colission(box))), []).length > 0
    }
}