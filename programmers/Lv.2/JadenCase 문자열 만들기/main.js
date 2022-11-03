function solution(s) {
  const answer = s
    .split(" ")
    .map((v) =>
      [...v]
        .map((e, idx) => (idx === 0 ? e.toUpperCase() : e.toLowerCase()))
        .join("")
    )
    .join(" ");
  return answer;
}
