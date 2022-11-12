function solution(citations) {
  let answer = 0;
  for (let i = 0; i <= citations.length; i++) {
    if (i <= citations.filter((v) => v >= i).length) {
      answer = i;
    }
  }
  return answer;
}
