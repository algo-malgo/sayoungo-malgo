function solution(s) {
  const answer = [];
  const arr = [];
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === ",") continue;
    else if (s[i] === "}" && tmp.length !== 0) {
      arr.push(tmp);
      tmp = [];
    } else {
      if (s[i - 1] === "{" || s[i - 1] === ",") tmp.push(Number(s[i]));
      else {
        tmp.push(tmp.pop() * 10 + Number(s[i]));
      }
    }
  }
  arr.sort((a, b) => a.length - b.length);
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (i === 0) answer.push(arr[i][k]);
      else {
        if (answer.includes(arr[i][k])) continue;
        else answer.push(arr[i][k]);
      }
    }
  }
  return answer;
}
