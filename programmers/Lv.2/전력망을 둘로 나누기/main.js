function solution(n, wires) {
  const answer = [];
  const st = [];
  for (let i = 0; i < wires.length; i++) {
    let checked = Array.from({ length: n + 1 }, () => false);
    checked[0] = true;
    const visited = Array.from({ length: n - 1 }, () => false);
    visited[i] = true; //전선 삭제
    let save = []; //임시로 노드 개수 저장해놓을 save 배열
    for (let j = 0; j < wires.length; j++) {
      if (visited[j]) continue;
      st.push(wires[j]);
      let cnt = 1;
      while (st.length !== 0) {
        const temp = st.pop();
        checked[temp[0]] = true;
        checked[temp[1]] = true;
        for (let k = 0; k < wires.length; k++) {
          if (visited[k]) continue;
          if (temp[1] === wires[k][0]) {
            st.push(wires[k]);
            visited[k] = true;

            cnt++;
          } else if (temp[1] === wires[k][1]) {
            st.push([wires[k][1], wires[k][0]]);
            visited[k] = true;
            cnt++;
          }
        }
      }
      save.push(cnt);
    }
    checked.forEach((v) => v === false && save.push(1));
    if (save.length === 2) answer.push(Math.abs(save[0] - save[1]));
  }

  return answer.sort((a, b) => a - b)[0];
}
