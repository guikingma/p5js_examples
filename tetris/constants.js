const canvas_width = 600;
const canvas_height = 600;
const background_color = 50;
const box_dimension = 30;
const beginning_point = 0

const SPACE_KEY = 32;

const timer = 500;

const piece_I = [[0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0]];

const piece_J = [[0, 0, 1],
                 [0, 0, 1],
                 [0, 1, 1]];
                 
const piece_L = [[1, 0, 0],
                 [1, 0, 0],
                 [1, 1, 0]];

const piece_O = [[1, 1],
                 [1, 1]];

const piece_S = [[0, 0, 0],
                 [0, 1, 1],
                 [1, 1, 0]];

const piece_Z = [[0, 0, 0],
                 [1, 1, 0],
                 [0, 1, 1]];

const piece_T = [[0, 0, 0],
                 [1, 1, 1],
                 [0, 1, 0]];