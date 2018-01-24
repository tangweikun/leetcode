import { licenseKeyFormatting } from '.'

test('LicenseKeyFormatting-1', () => {
  expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W')
})

test('LicenseKeyFormatting-2', () => {
  expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J')
})

test('LicenseKeyFormatting-3', () => {
  expect(licenseKeyFormatting('abc123', 1)).toBe('A-B-C-1-2-3')
})

test('LicenseKeyFormatting-4', () => {
  expect(licenseKeyFormatting('A-B-C---', 1)).toBe('A-B-C')
})

test('LicenseKeyFormatting-5', () => {
  expect(licenseKeyFormatting('---abc--123cd-aa', 3)).toBe('A-BC1-23C-DAA')
})
