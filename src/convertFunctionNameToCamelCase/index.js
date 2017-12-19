export const convertFunctionNameToCamelCase = str =>
  str.replace(/\B_+\w/g, item => item.toUpperCase()).replace(/_/g, '')
