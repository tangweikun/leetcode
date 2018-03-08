// HELP:

export const titleToNumber = (s: string) =>
  s.split('').reduce((acc, c) => acc * 26 + c.charCodeAt(0) - 64, 0)
