function solution(s) {
  let answer = 0;
  const arr = [...s];
  let stack = [];
  let tmp = "";
  let flg = true;
  for (let i = 0; i < arr.length; i++) {
    tmp = arr.shift();
    arr.push(tmp);
    for (let k = 0; k < arr.length; k++) {
      if (k === 0 || stack.length === 0) {
        if (arr[k] === ")" || arr[k] === "}" || arr[k] === "]") {
          flg = false;
          break;
        }
      }
      if (arr[k] === "(" || arr[k] === "{" || arr[k] === "[") {
        stack.push(arr[k]);
      } else {
        tmp = stack[stack.length - 1];
        if (
          (arr[k] === ")" && tmp === "(") ||
          (arr[k] === "}" && tmp === "{") ||
          (arr[k] === "]" && tmp === "[")
        )
          stack.pop();
        else {
          flg = false;
          break;
        }
      }
    }
    if (flg && stack.length === 0) answer++;
    flg = true;
    stack = [];
  }
  return answer;
}
