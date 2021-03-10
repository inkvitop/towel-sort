
// You should implement your task here.


module.exports = function towelSort (matrix) {
  let newArrTemp = [];
  let newArrTempSlice;
  let newArrTempSliceArr;

  try {
    for (let index = 0; index < matrix.length; index++) {
      if (index % 2 === 0) {
        newArrTemp += `,`
        newArrTemp += matrix[index]
      }else {
        newArrTemp += `,`
        newArrTemp += matrix[index].reverse();
      }
    }

    newArrTempSlice = newArrTemp.slice(1);
    newArrTempSliceArr = newArrTempSlice.split(',')

    return newArrTempSliceArr;
  } catch (error) {
    return []
  }
}