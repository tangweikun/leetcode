export function countSegments(str) {
  const trimmed = str.trim();
  if (trimmed === '') return 0;
  return trimmed.trim().split(/\s+/).length;
}
