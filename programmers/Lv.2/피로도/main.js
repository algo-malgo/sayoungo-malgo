function solution(k, dungeons) {
  const answer = [];
  const select = Array.from({ length: dungeons.length }, () => false);
  function dfs(count, tmpK, res) {
    if (count === dungeons.length) {
      answer.push(res);
      return;
    }
    for (let i = 0; i < dungeons.length; i++) {
      if (select[i] || dungeons[i][0] > tmpK) continue;
      select[i] = true;
      dfs(count + 1, tmpK - dungeons[i][1], res + 1);
      select[i] = false;
    }
    answer.push(res);
  }
  dfs(0, k, 0);
  return answer.sort((a, b) => b - a)[0];
}
