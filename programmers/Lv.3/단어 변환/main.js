function solution(begin, target, words) {
  let answer = [];
  const selected = Array.from({ length: words.length }, () => false);
  function dfs(tword, count) {
    if (tword === target) {
      answer.push(count);
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (selected[i]) continue;
      let tmp = [...words[i]].filter((v, idx) => v !== tword[idx]);
      if (tmp.length !== 1) continue;
      selected[i] = true;
      dfs(words[i], count + 1);
      selected[i] = false;
    }
  }
  dfs(begin, 0);
  if (answer.length === 0) return 0;
  return answer.sort((a, b) => a - b)[0];
}
