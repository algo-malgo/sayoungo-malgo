function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[i]) {
      answer++;
      B[i] = 0;
      continue;
    }
    for (let j = i + 1; j < B.length; j++) {
      if (A[i] < B[j]) {
        answer++;
        B[j] = 0;
        break;
      }
    }
  }
  return answer;
}
