function solution(maps) {
  const answer = [];
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  const mx = [0, 1, 0, -1];
  const my = [1, 0, -1, 0];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "X" || visited[i][j]) continue;
      const queue = [];
      let sum = 0;
      queue.push([i, j]);
      visited[i][j] = true;
      while (queue.length > 0) {
        const cur = queue.shift();
        if (maps[cur[0]][cur[1]] === "X") continue;
        sum += Number(maps[cur[0]][cur[1]]);
        for (let k = 0; k < 4; k++) {
          let cx = cur[0] + mx[k];
          let cy = cur[1] + my[k];
          if (cx < 0 || cx >= maps.length || cy < 0 || cy >= maps[0].length)
            continue;
          if (maps[cx][cy] === "X" || visited[cx][cy]) continue;
          queue.push([cx, cy]);
          visited[cx][cy] = true;
        }
      }
      answer.push(sum);
    }
  }

  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
