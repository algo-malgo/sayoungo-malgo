function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n) + 1, i - n * Math.floor(i / n) + 1));
  }

  return answer;
}
