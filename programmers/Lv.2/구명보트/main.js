function solution(people, limit) {
  let count = 0;
  let find = 0;
  let fir = 0;
  let sec = people.length - 1;
  people.sort((a, b) => b - a);
  while (true) {
    if (fir > sec) break;
    if (fir === sec) {
      count++;
      break;
    }
    find = limit - people[fir];
    count++;
    fir++;
    if (find >= people[sec]) sec--;
  }

  return count;
}
