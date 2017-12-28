# 28.Min Queue

## Description

Design a queue that supports push/shift, and retrieving the minimum element in constant time.

* push(x) -- Push element x onto queue.
* shift() -- Removes the element on top of the queue.
* getMin() -- Retrieve the minimum element in the queue.

## Example

```javascript
const Queue_5 = new MinQueue()
Queue_5.push(0)
Queue_5.push(1)
Queue_5.push(2)
Queue_5.push(-1)
Queue_5.push(0)
Queue_5.shift()
Queue_5.shift()

Queue_5.getMin()
// output -1
```
