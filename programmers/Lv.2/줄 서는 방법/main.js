function solution(n, k) {
  const answer = [];
  const arr = Array.from(Array(n), (_, idx) => idx + 1);
  let caseNum = arr.reduce((acc, cur) => acc * cur);
  while (answer.length !== n) {
    caseNum = Math.floor(caseNum / arr.length);
    let cur = Math.floor((k - 1) / caseNum);
    answer.push(...arr.splice(cur, 1));
    k = k % caseNum;
  }

  return answer;
}
