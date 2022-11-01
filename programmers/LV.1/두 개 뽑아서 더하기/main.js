function solution(numbers) {
  let ans = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      ans.add(numbers[i] + numbers[j]);
    }
  }
  return [...ans].sort((a, b) => a - b);
}
