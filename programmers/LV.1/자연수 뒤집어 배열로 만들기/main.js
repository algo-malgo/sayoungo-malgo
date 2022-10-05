function solution(n) {
  var answer = [...String(n)];
  answer.reverse();
  return answer.map((v) => Number(v));
}
