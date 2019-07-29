export function licenseKeyFormatting(license, k) {
  const alphanumeric = license.replace(/-/g, '').toUpperCase();
  const reminder = alphanumeric.length % k;
  let res = alphanumeric.slice(0, reminder);

  for (let i = reminder; i < alphanumeric.length; i = i + k) {
    res += '-' + alphanumeric.slice(i, i + k);
  }

  return res.replace(/^-/, '');
}
