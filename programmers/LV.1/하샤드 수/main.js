function solution(x) {
  let answer = true;
  const num = [...String(x)]
    .map((value) => Number(value))
    .reduce((a, c) => a + c);
  if (x % num !== 0) answer = false;

  return answer;
}
