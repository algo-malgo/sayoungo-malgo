function solution(n) {
  let count = 0;

  while (n !== 0) {
    if (n % 2 !== 0) count++;
    n = Math.floor(n / 2);
  }
  return count;
}
