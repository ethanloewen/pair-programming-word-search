const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const newLetters = transpose(letters);
  const verticalJoin = newLetters.map((ls) => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let newSquare = generateSquare(matrix);
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      newSquare[y].push(matrix[x][y]);
    }
  }
  return newSquare;
};

const generateSquare = (matrix) => {
  let generatedSquare = [];
  for (let i = 0; i < matrix[0].length; i++) {
    generatedSquare.push([]);
  }
  return generatedSquare;
};

module.exports = wordSearch;
