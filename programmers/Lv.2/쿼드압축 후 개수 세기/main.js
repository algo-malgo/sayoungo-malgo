function solution(arr) {
  const answer = [0, 0];
  function recur(x, y, length) {
    let val = arr[y][x];
    for (let i = y; i < y + length; i++) {
      for (let j = x; j < x + length; j++) {
        if (arr[i][j] !== val) {
          recur(x, y, length / 2);
          recur(x + length / 2, y, length / 2);
          recur(x, y + length / 2, length / 2);
          recur(x + length / 2, y + length / 2, length / 2);
          return;
        }
      }
    }

    answer[val] += 1;
  }
  recur(0, 0, arr.length);
  return answer;
}
