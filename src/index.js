module.exports = function solveSudoku(matrix) {
  let solution = matrix;

  for (let x = 0; x < 9; x++) 
    for(let y = 0; y < 9; y++) 
      if(solution[x][y] === 0) solution[x][y] = [];
      
  return solution;
}
