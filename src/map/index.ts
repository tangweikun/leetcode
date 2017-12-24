export function map(collection, callback) {
  const result = []
  if (typeof callback === 'function') {
    for (let key in collection) {
      result[key] = callback(collection[key], key, collection)
    }

    return result
  }

  return collection
}
