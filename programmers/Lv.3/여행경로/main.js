function solution(tickets) {
  const answer = [];
  tickets.sort();
  const visited = new Array(tickets.length).fill(false);
  function dfs(cnt) {
    if (cnt === tickets.length) return;
    for (let i = 0; i < tickets.length; i++) {
      if (visited[i]) continue;
      if (tickets[i][0] === answer[answer.length - 1]) {
        visited[i] = true;
        answer.push(tickets[i][1]);
        dfs(cnt + 1);
        visited[i] = false;
      }
      if (answer.length === tickets.length + 1) return answer;
    }

    if (visited.filter((v) => v === false).length !== 0) {
      answer.pop();
      return;
    }
  }
  answer.push("ICN");
  dfs(0);
  return answer;
}
