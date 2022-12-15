function solution(numbers) {
  let answer = 0;
  const done = [];
  const arr = [...numbers];
  const select = Array.from({ length: arr.length }, () => false);
  function prime(k) {
    if (done.includes(k) || k === 0 || k === 1) return;
    for (let i = 2; i * i <= k; i++) {
      if (k % i === 0) return;
    }
    answer++;
    done.push(k);
  }
  function dfs(count, n) {
    prime(Number(n));
    if (count >= arr.length) return;
    for (let i = 0; i < arr.length; i++) {
      if (select[i]) continue;
      select[i] = true;
      dfs(count + 1, n + arr[i]);
      select[i] = false;
    }
  }

  dfs(0, "");
  return answer;
}
