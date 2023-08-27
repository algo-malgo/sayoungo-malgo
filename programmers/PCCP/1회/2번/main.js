function solution(ability) {
  const answer = [];
  let visited = new Array(ability.length).fill(false);
  function dfs(idx, sum, count) {
    if (count === ability[0].length) {
      answer.push(sum);
      return;
    }
    for (let i = 0; i < ability.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(i, sum + ability[i][count], count + 1);
      visited[i] = false;
    }
  }
  dfs(0, 0, 0);

  return answer.sort((a, b) => b - a)[0];
}
