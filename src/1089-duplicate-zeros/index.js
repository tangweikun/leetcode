function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i++;
    }
  }
}
