function solution(msg) {
  const dic = new Map();
  const answer = [];
  let num = 1;
  for (let i = 65; i <= 90; i++) {
    dic.set(String.fromCodePoint(i), num);
    num++;
  }
  for (let i = 0; i < msg.length; i++) {
    let cur = msg[i];
    let push = dic.get(cur);
    let flag = true;
    for (let j = i + 1; j < msg.length; j++) {
      cur += msg[j];
      if (dic.has(cur)) push = dic.get(cur);
      else {
        flag = false;
        i = j - 1;
        dic.set(cur, num);
        num++;
        break;
      }
    }
    answer.push(push);
    if (flag) break;
  }

  return answer;
}
