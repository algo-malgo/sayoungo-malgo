function solution(n) {
  function transN(k) {
    return [...k.toString(2)].filter((v) => v === "1").length;
  }
  const count = transN(n);
  let nextCount = 0;
  while (nextCount !== count) {
    ++n;
    nextCount = transN(n);
  }
  return n;
}
