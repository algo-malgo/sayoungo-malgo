function solution(rectangle, characterX, characterY, itemX, itemY) {
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [1, 1, 1, 0, 0, -1, -1, -1];
  let board = Array.from(new Array(102), () => Array(102).fill(0));
  const visited = Array.from(new Array(102), () => Array(102).fill(0));
  rectangle = rectangle.map((v) => v.map((e) => e * 2));

  for (let i = 0; i < rectangle.length; i++) {
    let leftx = rectangle[i][0];
    let lefty = rectangle[i][1];
    let rightx = rectangle[i][2];
    let righty = rectangle[i][3];
    for (let k = lefty; k <= righty; k++) {
      for (let j = leftx; j <= rightx; j++) {
        if (board[k][j] === 1) continue;
        board[k][j] = 1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (board[i][k] === 0) continue;
      for (let j = 0; j < 8; j++) {
        let cury = i + dy[j];
        let curx = k + dx[j];
        if (
          cury < 0 ||
          cury >= board.length ||
          curx < 0 ||
          curx >= board.length
        )
          continue;
        if (board[cury][curx] === 0) {
          board[i][k] = 2;
          break;
        }
      }
    }
  }

  const cx = [0, 1, 0, -1];
  const cy = [1, 0, -1, 0];
  let answer = 0;
  const queue = [];
  queue.push([characterY * 2, characterX * 2]);
  while (visited[itemY * 2][itemX * 2] === 0) {
    let cur = queue.shift();
    for (let i = 0; i < 4; i++) {
      let dy = cur[0] + cy[i];
      let dx = cur[1] + cx[i];
      if (visited[dy][dx] !== 0 || board[dy][dx] !== 2) continue;
      if (dy < 0 || dy >= board.length || dx < 0 || dx >= board.length)
        continue;
      visited[dy][dx] = visited[cur[0]][cur[1]] + 1;
      queue.push([dy, dx]);
    }
  }

  return visited[itemY * 2][itemX * 2] / 2;
}
