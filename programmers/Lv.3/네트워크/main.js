function solution(n, computers) {
  const st = [];
  let answer = 0;
  const visited = Array.from(Array(computers.length), () =>
    Array(computers.length).fill(false)
  );
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[0].length; j++) {
      if (computers[i][j] === 0 || visited[i][j] || i === j) continue;
      visited[i][j] = true;
      visited[j][i] = true;
      st.push(j);
      answer++;
      while (st.length !== 0) {
        let top = st.pop();
        for (let k = 0; k < computers[0].length; k++) {
          if (computers[top][k] === 0 || visited[top][k]) continue;
          if (top === k) {
            visited[top][k] = true;
            continue;
          }
          visited[top][k] = true;
          visited[k][top] = true;
          st.push(k);
        }
      }
    }
  }
  answer += computers.filter(
    (val) => val.reduce((acc, cur) => acc + cur) === 1
  ).length;

  return answer;
}
