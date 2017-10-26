export function shouldUpgrade({ currentVersion, latestVersion }) {
  const currentVersionLabel = currentVersion.split('.')
  const latestVersionLabel = latestVersion.split('.')
  let i = 0

  while (i < currentVersionLabel.length) {
    if (currentVersionLabel[i] < latestVersionLabel[i]) return true
    if (currentVersionLabel[i] > latestVersionLabel[i]) return false
    i++
  }

  if (currentVersionLabel.length < latestVersionLabel.length) {
    while (i < latestVersionLabel.length) {
      if (latestVersionLabel[i] > 0) return true
      i++
    }
  }

  return false
}
