let SolverClass = require("./sudokuSolver").Solver
let GeneratorClass = require("./sudokuGenerator").SudokuGenerator
let SudokuUtil = require("./sudokuUtil").SudokuUtil;
let NumberRemoverClass = require("./numberRemover").NumberRemover

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

let board2 = [
  [0, 0, 1, 5, 0, 0, 0, 7, 0],
  [0, 0, 4, 0, 6, 0, 0, 0, 9],
  [0, 3, 0, 0, 0, 4, 0, 0, 0],
  [6, 2, 0, 0, 0, 5, 1, 0, 0],
  [0, 4, 0, 0, 0, 0, 5, 2, 0],
  [0, 0, 0, 0, 4, 8, 0, 0, 3],
  [4, 1, 0, 0, 7, 0, 0, 0, 0],
  [0, 0, 6, 8, 0, 0, 0, 0, 1],
  [8, 0, 0, 0, 0, 9, 0, 3, 0],
]



let generator = new GeneratorClass()
board = generator.createPuzzle()
let util = new SudokuUtil()
util.showBoard(board)

let solver = new SolverClass(board)
solver.solvePuzzle()

let remover = new NumberRemoverClass(40, board)
remover.remove()
util.showBoard(board)

solver.solvePuzzle()