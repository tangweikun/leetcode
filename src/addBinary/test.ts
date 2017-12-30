import { addBinary } from '.'

test('addBinary-1', () => {
  expect(addBinary("1", "11")).toBe("100")
})

test('addBinary-2', () => {
  expect(addBinary("11", "11")).toBe("110")
})

test('addBinary-3', () => {
  expect(addBinary("1", "0")).toBe("1")
})

test('addBinary-4', () => {
  expect(addBinary("111", "11")).toBe("1010")
})

test('addBinary-5', () => {
  expect(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")).toBe("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")
})

test('addBinary-6', () => {
  expect(addBinary("0", "0")).toBe("0")
})

test('addBinary-7', () => {
  expect(addBinary("1010", "1011")).toBe("10101")
})
