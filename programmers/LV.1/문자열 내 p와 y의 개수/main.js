function solution(s) {
  let answer = true;
  s = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") pCount++;
    else if (s[i] === "y") yCount++;
  }
  if (pCount !== yCount) answer = false;
  return answer;
}
