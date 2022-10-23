function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const cal = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  for (let i = 0; i < a - 1; i++) {
    sum += cal[i];
  }
  sum += b;
  return days[(sum - 1) % 7];
}
