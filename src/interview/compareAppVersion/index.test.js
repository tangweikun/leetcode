import test from 'ava'
import { shouldUpgrade } from '.'

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1.0.0.1',
    latestVersion: '0.1',
  })
  t.deepEqual(result, false)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1',
    latestVersion: '0.1.0.0.1',
  })
  t.deepEqual(result, true)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1',
    latestVersion: '0.10',
  })
  t.deepEqual(result, true)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1',
    latestVersion: '0.1.1',
  })
  t.deepEqual(result, true)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1.1',
    latestVersion: '0.10',
  })
  t.deepEqual(result, true)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1',
    latestVersion: '0.1',
  })
  t.deepEqual(result, false)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '1.0.10',
    latestVersion: '1.2.1',
  })
  t.deepEqual(result, true)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '1.1.10',
    latestVersion: '1.1.10',
  })
  t.deepEqual(result, false)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '0.1',
    latestVersion: '0.1.0',
  })
  t.deepEqual(result, false)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '1',
    latestVersion: '1.0',
  })
  t.deepEqual(result, false)
})

test(t => {
  const result = shouldUpgrade({
    currentVersion: '2',
    latestVersion: '1.5',
  })
  t.deepEqual(result, false)
})
