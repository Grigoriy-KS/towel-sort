
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) { 
    return [];
  }
  let newMatrix = matrix.map(function(item, index) {
    return index % 2 === 0 ? item : item.reverse();
  });
  return newMatrix.flat(Infinity);
}
