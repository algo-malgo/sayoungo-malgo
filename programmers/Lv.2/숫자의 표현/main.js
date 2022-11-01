function solution(n) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum > n) break;
      else if (sum === n) {
        count++;
        break;
      } else if (n - sum < j + 1) break;
    }
  }
  return count;
}
function solution(n) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum > n) break;
      else if (sum === n) {
        count++;
        break;
      } else if (n - sum < j + 1) break;
    }
  }
  return count;
}
