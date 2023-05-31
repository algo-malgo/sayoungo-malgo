function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  answer++;

  let last = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > routes[i - 1][1] || last < routes[i][0]) {
      answer++;
      last = routes[i][1];
    }
  }
  return answer;
}
