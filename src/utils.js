export const  findChangedIndexes = (arr1, arr2) => {
    const len = Math.min(arr1.length, arr2.length);
    let index1 = -1;
    let index2 = -1;
    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        if (index1 === -1) {
          index1 = i;
        } else if (index2 === -1) {
          index2 = i;
          break;
        }
      }
    }
    if (index1 !== -1 && index2 !== -1) {
      return [index1, index2];
    }
    return null;
  }