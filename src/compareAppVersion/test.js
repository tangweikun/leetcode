import { shouldUpgrade } from '.'

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1.0.0.1', latestVersion: '0.1' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '01', latestVersion: '1' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '1', latestVersion: '1.1' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '1.1', latestVersion: '1' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1', latestVersion: '0.1.0.0.1' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1', latestVersion: '0.10' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1', latestVersion: '0.1.1' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1.1', latestVersion: '0.10' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1', latestVersion: '0.1' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '1.0.10', latestVersion: '1.2.1' }))
  .toBe(true)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '0.1', latestVersion: '0.1.0' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '1', latestVersion: '1.0' }))
  .toBe(false)
})

test('shouldUpgrade', () => {
  expect(shouldUpgrade({ currentVersion: '2', latestVersion: '1.5' }))
  .toBe(false)
})
