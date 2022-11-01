function solution(n) {
  let answer = 0;
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
  answer = arr.filter((value) => value).length;
  return answer;
}
