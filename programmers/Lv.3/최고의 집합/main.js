function solution(n, s) {
  const answer = [];
  if (Math.floor(s / n) === 0) return [-1];
  while (n !== 0) {
    let cur = Math.floor(s / n);
    answer.push(cur);
    n -= 1;
    s -= cur;
  }
  return answer.sort((a, b) => a - b);
}
