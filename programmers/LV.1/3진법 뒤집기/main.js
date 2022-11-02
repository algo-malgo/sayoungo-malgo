function solution(n) {
  const tmp = [];
  let answer = 0;
  while (n !== 0) {
    tmp.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  for (let i = 0; i < tmp.length; i++) {
    answer += tmp[i] * 3 ** i;
  }
  return answer;
}
