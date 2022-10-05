function solution(n) {
  const arr = [...String(n)];
  arr.sort((a, b) => b - a);
  return Number(arr.join(""));
}
