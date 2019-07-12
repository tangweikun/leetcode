function isRobotBounded(instructions) {
  let [rotation, x, y] = [0, 0, 0];

  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case 'G':
        switch (rotation) {
          case 0:
            x += 1;
            break;
          case 180:
          case -180:
            x -= 1;
            break;
          case 90:
          case -270:
            y += 1;
            break;
          case -90:
          case 270:
            y -= 1;
            break;
        }
        break;
      case 'L':
        rotation -= 90;
        break;
      case 'R':
        rotation += 90;
        break;
    }
  }

  return rotation % 360 !== 0 || (x === 0 && y === 0);
}
