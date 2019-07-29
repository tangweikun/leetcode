import { _peek } from '../_utils';

export function asteroidCollision(asteroids) {
  const res = [];

  for (var i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0 || ~~_peek(res) <= 0) {
      res.push(asteroids[i]);
    } else if (_peek(res) + asteroids[i] <= 0) {
      if (_peek(res) + asteroids[i] < 0) i--;
      res.pop();
    }
  }

  return res;
}
