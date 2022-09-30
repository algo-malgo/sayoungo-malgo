function solution(progresses, speeds) {
  let answer = [];
  let count = 0;
  let flg = true;

  while (progresses.length !== 0) {
    flg = true;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] >= 100 && flg) {
        count++;
        progresses.splice(i, 1);
        speeds.splice(i, 1);
        i--;
      } else if (progresses[i] < 100) {
        flg = false;
      }
    }
    if (count > 0) {
      answer.push(count);
      count = 0;
    }
  }
  return answer;
}
