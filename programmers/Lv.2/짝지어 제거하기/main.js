function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || stack.length === 0) stack.push(s[i]);
    else {
      if (s[i] === stack[stack.length - 1]) stack.pop();
      else stack.push(s[i]);
    }
  }
  if (stack.length > 0) return 0;
  else return 1;
}
