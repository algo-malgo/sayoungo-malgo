function solution(files) {
  const answer = [];

  function checkNum(startIdx, str) {
    for (let i = startIdx; i < str.length; i++) {
      if (startIdx === 0 && !isNaN(str[i]) && str[i] !== " ") return i;
      else if (startIdx !== 0 && isNaN(str[i])) return i;
    }
  }
  answer.push(files[0]);
  for (let i = 1; i < files.length; i++) {
    let cur = files[i].toLowerCase();
    let flag = false;

    for (let k = 0; k < answer.length; k++) {
      if (
        cur.slice(0, checkNum(0, cur)) <
        answer[k].slice(0, checkNum(0, answer[k])).toLowerCase()
      ) {
        answer.splice(k, 0, files[i]);
        flag = true;
        break;
      } else if (
        cur.slice(0, checkNum(0, cur)) >
        answer[k].slice(0, checkNum(0, answer[k])).toLowerCase()
      )
        continue;

      if (
        Number(
          cur
            .slice(checkNum(0, cur), checkNum(checkNum(0, cur), cur))
            .slice(0, 5)
        ) <
        Number(
          answer[k]
            .slice(
              checkNum(0, answer[k]),
              checkNum(checkNum(0, answer[k]), answer[k])
            )
            .slice(0, 5)
        )
      ) {
        answer.splice(k, 0, files[i]);
        flag = true;
        break;
      }
    }
    if (!flag) answer.push(files[i]);
  }

  return answer;
}
