function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let tmp = s.charCodeAt(i) + n;
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      if (tmp > 90) {
        tmp -= 26;
      }

      answer += String.fromCharCode(tmp);
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      if (tmp > 122) {
        tmp -= 26;
      }
      answer += String.fromCharCode(tmp);
    } else {
      answer += s[i];
    }

    console.log(String.fromCharCode(tmp));
    console.log(tmp);
  }
  return answer;
}
