// Time Complexity O(n)
// Space Complexity O(1)

export function removeElement(arr, val) {
  let pointer = 0;
  for (let num of arr) {
    if (num !== val) {
      arr[pointer] = num;
      pointer++;
    }
  }
  return pointer;
}
