export function shouldUpgrade({ latestVersion, currentVersion }) {
  const arr1 = latestVersion.split('.');
  const arr2 = currentVersion.split('.');

  while (arr1.length + arr2.length > 0) {
    const v1 = parseInt(arr1.shift()) || 0;
    const v2 = parseInt(arr2.shift()) || 0;
    if (v1 !== v2) return v1 > v2;
  }

  return false;
}
