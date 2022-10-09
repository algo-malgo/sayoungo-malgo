function solution(x, n) {
  let answer = [];
  answer.push(x);

  while (answer.length !== n) {
    answer.push(answer[answer.length - 1] + x);
  }
  return answer;
}
