function solution(brown, yellow) {
  let width = 0;
  let height = 0;
  for (let i = Math.ceil(Math.sqrt(yellow)); i <= yellow; i++) {
    if (yellow % i !== 0) continue;
    width = i;
    height = yellow / i;

    if (brown === (i + 2) * 2 + height * 2) return [i + 2, height + 2];
  }
}
