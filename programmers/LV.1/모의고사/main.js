function solution(answers) {
  const answer = [];
  let count = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr[0][i % arr[0].length]) count[0][1]++;
    if (answers[i] === arr[1][i % arr[1].length]) count[1][1]++;
    if (answers[i] === arr[2][i % arr[2].length]) count[2][1]++;
  }
  count = count.sort((a, b) => b[1] - a[1]);
  answer.push(count[0][0]);
  for (let i = 1; i < count.length; i++) {
    if (count[i][1] === count[0][1]) answer.push(count[i][0]);
  }
  return answer.sort((a, b) => a - b);
}
