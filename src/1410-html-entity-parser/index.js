/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&frasl;/g, '/')
    .replace(/&amp;/g, '&');
};
