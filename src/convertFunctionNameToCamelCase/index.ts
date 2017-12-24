export const convertFunctionNameToCamelCase = (str: string) =>
  str.replace(/\B_+\w/g, item => item.toUpperCase()).replace(/_/g, '')
