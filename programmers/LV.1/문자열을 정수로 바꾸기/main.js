function solution(s) {
  if (s[0] === "-") return -Number.parseInt(s.substr(1));
  return Number.parseInt(s);
}
