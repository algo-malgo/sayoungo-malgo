function solution(word) {
  let answer = 0;
  const dic = [];
  let tmp = [];
  const arr = ["A", "E", "I", "O", "U"];
  function dfs(cnt) {
    if (tmp.length > 0 && cnt <= 5) dic.push(tmp.join(""));
    if (cnt === 5) return;

    for (let i = 0; i < arr.length; i++) {
      tmp.push(arr[i]);
      dfs(cnt + 1);
      tmp.pop();
    }
  }
  dfs(0);
  answer = dic.indexOf(word) + 1;
  return answer;
}
