function solution(want, number, discount) {
  let answer = 0;
  const arr = [];
  const map = new Map();
  want.forEach((v, idx) => map.set(v, number[idx]));
  function check() {
    return [...map].filter((v) => v[1] > 0).length;
  }
  for (let i = 0; i < 10; i++) {
    let cur = map.get(discount[i]);
    if (cur === undefined) continue;
    map.set(discount[i], --cur);
  }

  if (check() === 0) answer++;
  for (let i = 1; i < discount.length; i++) {
    let minus = map.get(discount[i - 1]);
    if (minus !== undefined) map.set(discount[i - 1], ++minus);
    if (i + 9 < discount.length) {
      let idx = map.get(discount[i + 9]);
      map.set(discount[i + 9], --idx);
    } else break;
    if (check() === 0) {
      answer++;
    }
  }
  return answer;
}
