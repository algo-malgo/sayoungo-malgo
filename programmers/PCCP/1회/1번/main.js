function solution(input_string) {
  const count = new Array(26).fill(0);
  let answer = "";
  for (let i = 0; i < input_string.length; i++) {
    if (
      i !== input_string.length - 1 &&
      input_string[i] === input_string[i + 1]
    )
      continue;
    else {
      if (count[input_string.charCodeAt(i) - 97] > 0) {
        answer += input_string[i];
      }
      count[input_string.charCodeAt(i) - 97]++;
    }
  }
  if (answer.length === 0) answer = "N";
  else answer = [...new Set(answer.split(""))].sort().join("");
  return answer;
}
