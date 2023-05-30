function solution(x, y, n) {
  const q = [];
  q.push([y, 0]);
  while (q.length > 0) {
    let cur = q.shift();
    if (cur[0] === x) {
      return cur[1];
    }
    if (cur[0] - n > x && (cur[0] - n) % 1 === 0) {
      q.push([cur[0] - n, cur[1] + 1]);
    } else if (cur[0] - n === x) return cur[1] + 1;
    if (cur[0] % 2 === 0 && cur[0] / 2 > x) {
      q.push([cur[0] / 2, cur[1] + 1]);
    } else if (cur[0] / 2 === x) return cur[1] + 1;
    if (cur[0] % 3 === 0 && cur[0] / 3 > x) {
      q.push([cur[0] / 3, cur[1] + 1]);
    } else if (cur[0] / 3 === x) return cur[1] + 1;
  }
  return -1;
}
