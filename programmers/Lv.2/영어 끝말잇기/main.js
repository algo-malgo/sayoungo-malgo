function solution(n, words) {
  const done = [];
  let turn = 1;
  while (words.length !== 0) {
    for (let i = 1; i <= n; i++) {
      const thisWord = words.shift();
      if (
        done.length > 0 &&
        (done[done.length - 1].slice(-1) !== thisWord[0] ||
          done.includes(thisWord))
      ) {
        return [i, turn];
      }
      done.push(thisWord);
    }
    turn++;
  }
  return [0, 0];
}
