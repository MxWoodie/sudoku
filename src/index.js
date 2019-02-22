module.exports = function solveSudoku(matrix) {
  // your solution
  let solution = matrix;

  for (let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {
      if(solution[x][y] === 0) {
        let values = getValue(x, y, solution);
        for (let getValue of values) {
          solution[x][y] = getValue;
        }
      }
    }
  }

  function getValue(x, y, solution){
    let tempArr = [];
    let row = Math.floor(x / 3) * 3;
    let col = Math.floor(y / 3) * 3;
    for (let i = 0; i < 9; i++){
      tempArr.push([solution[row][i], solution[i][col], solution[row + i % 3][col + i % 3]]);
    }
    return tempArr;
  }

  return solution;
}
