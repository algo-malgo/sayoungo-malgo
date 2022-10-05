function solution(arr) {
  let answer = 0;
  answer = arr.reduce((ac, cur) => ac + cur) / arr.length;
  return answer;
}
