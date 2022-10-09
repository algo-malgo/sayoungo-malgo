function solution(phone_number) {
  let arr = [...phone_number];
  return arr
    .map((n, idx) => (idx <= phone_number.length - 5 ? "*" : n))
    .join("");
}
