function solution(array, commands) {
  const answer = [];
  let tmp = [];
  commands = commands.map((v) => v.map((e) => e - 1));
  for (let i = 0; i < commands.length; i++) {
    tmp = array.slice(commands[i][0], commands[i][1] + 1).sort((a, b) => a - b);
    answer.push(tmp[commands[i][2]]);
  }
  return answer;
}
