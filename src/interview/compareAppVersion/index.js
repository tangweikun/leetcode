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
