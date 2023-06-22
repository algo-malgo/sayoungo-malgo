function solution(sequence, k) {
  const answer = [];
  let sum = sequence[0];
  let endIdx = 0;
  let startIdx = 0;
  while (startIdx <= sequence.length && endIdx <= sequence.length - 1) {
    if (sum === k) answer.push([startIdx, endIdx]);
    if (sum > k) sum -= sequence[startIdx++];
    else sum += sequence[++endIdx];
  }
  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) return a[0] - b[0];
    else return a[1] - a[0] - (b[1] - b[0]);
  });
  return answer[0];
}
