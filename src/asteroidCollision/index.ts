import { _peek } from '../_utils'

export function asteroidCollision(asteroids: number[]) {
  const stack: any = []
  for (let i = 0; i < asteroids.length; i++) {
    if (~~_peek(stack) <= 0) {
      stack.push(asteroids[i])
    } else {
      if (asteroids[i] > 0) stack.push(asteroids[i])
      else {
        while (_peek(stack) > 0 && _peek(stack) + asteroids[i] < 0) {
          stack.pop()
        }
        if (_peek(stack) + asteroids[i] === 0) {
          stack.pop()
        } else if (~~_peek(stack) <= 0) {
          stack.push(asteroids[i])
        }
      }
    }
  }

  return stack
}
