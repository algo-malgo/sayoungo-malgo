function solution(n, a, b) {
  let round = 1;
  if ((a % 2 === 0 && a - 1 === b) || (a % 2 === 1 && a + 1 === b))
    return round;
  const A = [a];
  const B = [b];
  while (n !== 0) {
    n = Math.floor(n / 2);
    A.push(Math.ceil(A[A.length - 1] / 2));
    B.push(Math.ceil(B[B.length - 1] / 2));
    round++;
    if (
      (A[A.length - 1] % 2 === 0 && A[A.length - 1] - 1 === B[B.length - 1]) ||
      (A[A.length - 1] % 2 === 1 && A[A.length - 1] + 1 === B[B.length - 1])
    ) {
      return round;
    }
  }
}
