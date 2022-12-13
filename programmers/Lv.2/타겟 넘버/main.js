function solution(numbers, target) {
  let answer = 0;
  const arr = [];
  arr.push([numbers[0], -numbers[0]]);
  for (let i = 0; i < numbers.length - 1; i++) {
    let innerArr = [];
    for (let k = 0; k < arr[i].length; k++) {
      innerArr.push(arr[i][k] + numbers[i + 1]);
      innerArr.push(arr[i][k] - numbers[i + 1]);
    }
    arr.push(innerArr);
  }
  for (let i = 0; i < arr[numbers.length - 1].length; i++) {
    if (arr[numbers.length - 1][i] === target) answer++;
  }

  return answer;
}
