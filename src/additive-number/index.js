// HELP:

export const isAdditiveNumber = num => {
  // The first two numbers
  let a = 0;
  let b = 0;

  // Length of the first number
  for (let i = 0; i < num.length / 2; i++) {
    // Last digit of the first number
    const _a = num.charCodeAt(i) - 48;

    // Second number starts with zero?
    const zero = num.charCodeAt(i + 1) === 48;

    // Update the first number
    a = a * 10 + _a;

    // Reset the second number
    b = 0;

    // Length of the second number
    for (var j = 1; j <= num.length / 2; j++) {
      // Invalid number
      if (zero && j > 1) continue;

      // Update the second number
      b = b * 10 + (num.charCodeAt(i + j) - 48);

      // Validate
      if (validate(a, b, num)) return true;
    }
  }

  return false;
};

const validate = function(a, b, target) {
  const limit = target.length;
  let str = '' + a + b;

  // No place for the third number
  if (str.length >= limit) return false;

  // Generate sequence
  while (str.length < limit) {
    // Append number
    const c = a + b;
    str += c;

    // Validate
    if (str === target) return true;

    // Swap
    a = b;
    b = c;
  }

  return false;
};
