//get randomly generated array with true or false values
export const getRandom2dArray = (length = 32, subLength = 32) => {
    const randomArr = [];
    for(let i = 0; i < length; i++) {
      const subArr = [];
      for(let k = 0; k < subLength; k++) {
        const value = (Math.random()*10) > 5 ? true : false;
        subArr.push(value);
      }
      randomArr.push(subArr);
    }
    return randomArr;
}

//receives 2d array as argument and returns
// new 2d array with evolved cells
export const gameOfLife = (board) => {
    const tempBoard = copy2dArray(board);
    let cellCount = 0;

  for(let i = 0; i < tempBoard.length; i++) {
    for(let k = 0; k < tempBoard[i].length; k++) {
      if(board[i - 1] !== undefined) {
        cellCount= cellCount + (tempBoard[i-1][k+1] ? 1 : 0);
        cellCount= cellCount + (tempBoard[i-1][k-1] ? 1 : 0);
        cellCount= cellCount + (tempBoard[i-1][k] ? 1 : 0);
      }
      if(board[i + 1] !== undefined) {
        cellCount= cellCount + (tempBoard[i+1][k+1] ? 1 : 0);
        cellCount= cellCount + (tempBoard[i+1][k-1] ? 1 : 0);
        cellCount= cellCount + (tempBoard[i+1][k] ? 1 : 0);        
      }
      cellCount= cellCount + (tempBoard[i][k+1] ? 1 : 0);
      cellCount= cellCount + (tempBoard[i][k-1] ? 1 : 0);


      if((cellCount < 2 || cellCount > 3)&& board[i][k] === true) {
        board[i][k] = false;
      }
      else if(cellCount === 3) {
        board[i][k] = true;
      }
      cellCount = 0;
    }
  }
return board;
}

//returns false if at least one cell is still alive(equals to 1)
export const checkIfAllDead = (array) => {
    for(let i = 0; i < array.length; i++) {
      for(let k = 0; k < array.length; k++) {
        if(array[i][k] === 1) return false;
      }
    }
    return true;
  }
  
  //generate 2d array with only 0 as values
  export const empty2dArray = (length = 32, subLength = 32) => {
     const arr = [];
     for(let i = 0; i < length; i++) {
       arr[i] = [];
       for(let k = 0; k < subLength; k++) {
         arr[i][k] = 0;
       }
     }
    return arr;
  }

//takes 2d array and returns clone array with no reference to original
const copy2dArray = (array) => {
    const tempBoard = [];
    for(let i = 0; i < array.length; i++) {
        const copy = array[i].slice(0);
        tempBoard.push(copy);
    }
    return tempBoard;
}