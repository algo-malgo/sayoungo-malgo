function solution(s) {
  var answer = "";
  const arr = s.split("");
  arr.sort().reverse();
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}
