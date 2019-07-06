function heightChecker(height) {
  let count = 0;

  const sorted = height.slice(0).sort((x, y) => x - y);
  for (let i = 0; i < height.length; i++) {
    if (height[i] !== sorted[i]) {
      count++;
    }
  }

  return count;
}
