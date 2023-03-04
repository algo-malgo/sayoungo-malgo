function solution(land) {
  const arr = Array.from(Array(land.length), () => Array(4).fill(0));
  arr[0][0] = land[0][0];
  arr[0][1] = land[0][1];
  arr[0][2] = land[0][2];
  arr[0][3] = land[0][3];
  for (let i = 1; i < land.length; i++) {
    arr[i][0] =
      land[i][0] + Math.max(arr[i - 1][1], arr[i - 1][2], arr[i - 1][3]);
    arr[i][1] =
      land[i][1] + Math.max(arr[i - 1][0], arr[i - 1][2], arr[i - 1][3]);
    arr[i][2] =
      land[i][2] + Math.max(arr[i - 1][0], arr[i - 1][1], arr[i - 1][3]);
    arr[i][3] =
      land[i][3] + Math.max(arr[i - 1][0], arr[i - 1][1], arr[i - 1][2]);
  }
  arr.map((v) => v.sort((a, b) => a - b));
  return arr[land.length - 1][3];
}
