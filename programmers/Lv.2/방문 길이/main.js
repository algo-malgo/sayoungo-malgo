function solution(dirs) {
  let answer = 0;
  const set = new Set();
  let cur = [0, 0];
  for (let i = 0; i < dirs.length; i++) {
    let cury = cur[0];
    let curx = cur[1];
    let tmp;

    switch (dirs[i]) {
      case "U":
        tmp = cury + 1;
        if (tmp >= -5 && tmp <= 5) {
          if (
            !set.has(`${cury}${curx}${tmp}${curx}`) &&
            !set.has(`${tmp}${curx}${cury}${curx}`)
          ) {
            set.add(`${cury}${curx}${tmp}${curx}`);
            answer++;
          }
          cur = [tmp, curx];
        }
        break;
      case "D":
        tmp = cury - 1;
        if (tmp >= -5 && tmp <= 5) {
          if (
            !set.has(`${cury}${curx}${tmp}${curx}`) &&
            !set.has(`${tmp}${curx}${cury}${curx}`)
          ) {
            set.add(`${cury}${curx}${tmp}${curx}`);
            answer++;
          }
          cur = [tmp, curx];
        }
        break;
      case "R":
        tmp = curx + 1;
        if (tmp >= -5 && tmp <= 5) {
          if (
            !set.has(`${cury}${curx}${cury}${tmp}`) &&
            !set.has(`${cury}${tmp}${cury}${curx}`)
          ) {
            set.add(`${cury}${curx}${cury}${tmp}`);
            answer++;
          }
          cur = [cury, tmp];
        }
        break;
      case "L":
        tmp = curx - 1;
        if (tmp >= -5 && tmp <= 5) {
          if (
            !set.has(`${cury}${curx}${cury}${tmp}`) &&
            !set.has(`${cury}${tmp}${cury}${curx}`)
          ) {
            set.add(`${cury}${curx}${cury}${tmp}`);
            answer++;
          }
          cur = [cury, tmp];
        }
        break;
    }
  }
  return answer;
}
