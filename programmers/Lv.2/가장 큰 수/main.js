function solution(numbers) {
  if (Math.max(...numbers) === 0) return "0";
  numbers = numbers.map((v) => v.toString());

  numbers.sort((a, b) => Number(b + a) - Number(a + b));

  return numbers.join("");
}
