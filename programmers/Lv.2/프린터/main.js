function solution(priorities, location) {
  let answer = 0;
  let myPri = [];
  for (let i = 0; i < priorities.length; i++) {
    myPri.push({ idx: i, value: priorities[i] });
  }
  while (true) {
    let first = myPri.shift();
    let flg = myPri.every((item) => item.value <= first.value);
    if (flg) {
      answer++;
      if (first.idx === location) break;
    } else myPri.push(first);
  }
  return answer;
}
