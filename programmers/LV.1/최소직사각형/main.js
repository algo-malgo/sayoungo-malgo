function solution(sizes) {
  sizes = sizes.map((val) => (val[0] <= val[1] ? val : [val[1], val[0]]));
  let h = sizes[0][0];
  let w = sizes[0][1];
  for (let i = 0; i < sizes.length; i++) {
    if (h < sizes[i][0]) h = sizes[i][0];
    if (w < sizes[i][1]) w = sizes[i][1];
  }
  return w * h;
}
