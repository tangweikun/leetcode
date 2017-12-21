# map

## Description

map

## Example

```javascript
map([1, 2, 3], item => item + 1)
// output [2, 3, 4]
```

```javascript
map(['a', 'b'], (value, key, collection) => `${value}${key}${collection}`)
// output ['a0a,b', 'b1ab']
```
