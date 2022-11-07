function solution(s) {
  const answer = [0, 0];
  let tmp = 0;
  while (s !== "1") {
    tmp = s.split(0).join("");
    answer[1] += s.length - tmp.length;
    s = tmp.length.toString(2);
    answer[0]++;
  }
  return answer;
}
