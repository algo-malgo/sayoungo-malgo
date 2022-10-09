function solution(arr) {
  arr = arr.filter((v) => v !== Math.min(...arr));
  if (arr.length === 0) arr.push(-1);
  return arr;
}
