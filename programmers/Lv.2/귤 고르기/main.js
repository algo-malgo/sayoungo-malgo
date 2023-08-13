function solution(k, tangerine) {
  let answer = 0;
  let mymap = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    if (mymap.has(tangerine[i])) {
      mymap.set(tangerine[i], mymap.get(tangerine[i]) + 1);
    } else {
      mymap.set(tangerine[i], 1);
    }
  }
  const arr = [...mymap].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] >= k) {
      answer++;
      break;
    } else {
      answer++;
      k -= arr[i][1];
    }
  }
  return answer;
}
