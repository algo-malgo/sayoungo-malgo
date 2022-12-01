function solution(arr) {
  arr.sort((a, b) => b - a);
  const base = arr[0];
  let count = 1;
  let flg = true;
  while (true) {
    arr[0] = base * count;
    for (let i = 1; i < arr.length; i++) {
      if (arr[0] % arr[i] !== 0) {
        flg = false;
        break;
      }
    }
    if (!flg) {
      flg = true;
      count++;
      continue;
    }
    return arr[0];
  }
}
