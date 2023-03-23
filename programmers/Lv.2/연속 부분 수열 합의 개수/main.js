function solution(elements) {
  const set = new Set();

  function dfs(idx, cnt, sum) {
    if (cnt === elements.length) return;
    if (idx === elements.length) {
      let val = sum + elements[0];
      set.add(val);
      dfs(1, cnt + 1, val);
    } else if (idx < elements.length) {
      let val = sum + elements[idx];
      set.add(val);
      dfs(idx + 1, cnt + 1, val);
    }
  }
  for (let i = 0; i < elements.length; i++) {
    dfs(i, 0, 0);
  }

  return set.size;
}
