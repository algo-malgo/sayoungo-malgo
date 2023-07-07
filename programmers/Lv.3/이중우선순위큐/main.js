function solution(operations) {
  let answer = [];
  const queue = [];
  for (let i = 0; i < operations.length; i++) {
    let cur = operations[i].split(" ");
    switch (cur[0]) {
      case "I":
        queue.push(Number(cur[1]));
        queue.sort((a, b) => a - b);
        break;
      case "D":
        if (Number(cur[1]) === 1) queue.pop();
        else if (Number(cur[1]) === -1) queue.shift();
        break;
    }
  }
  if (queue.length === 0) answer = [0, 0];
  else answer = [queue[queue.length - 1], queue[0]];
  return answer;
}
