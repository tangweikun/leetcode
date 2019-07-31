/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const res = new Set();
  for (let e of emails) {
    const [localNames, domain] = e.split('@');
    const localName = localNames.replace(/\.|\+.*/g, '');
    res.add(`${localName}@${domain}`);
  }

  return res.size;
};
