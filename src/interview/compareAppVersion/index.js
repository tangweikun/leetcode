export function shouldUpgrade({ currentVersion, latestVersion }) {
  const currentVersionElements = currentVersion.split('.')
  const latestVersionElements = latestVersion.split('.')
  const currentVersionElementsLength = currentVersionElements.length
  const latestVersionElementsLength = latestVersionElements.length
  let i = 0

  while (i < currentVersionElementsLength) {
    if (+currentVersionElements[i] < +latestVersionElements[i]) return true
    if (+currentVersionElements[i] > +latestVersionElements[i]) return false
    i++
  }

  if (currentVersionElementsLength < latestVersionElementsLength) {
    while (i < latestVersionElementsLength) {
      if (latestVersionElements[i] > 0) return true
      i++
    }
  }

  return false
}

export function shouldUpgradePro({ latestVersion, currentVersion }) {
  const arr1 = latestVersion.split('.')
  const arr2 = currentVersion.split('.')

  while (arr1.length || arr2.length) {
    const v1 = parseInt(arr1.shift()) || 0
    const v2 = parseInt(arr2.shift()) || 0
    if (v1 > v2) return true
    if (v2 > v1) return false
  }

  return false
}
