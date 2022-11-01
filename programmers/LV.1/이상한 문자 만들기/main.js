function solution(s) {
  let j = 0;
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      word += " ";
      j = 0;
      continue;
    }
    if (j % 2 === 0) word += s[i].toUpperCase();
    else word += s[i].toLowerCase();
    j++;
  }
  return word;
}
