function solution(genres, plays) {
  const answer = [];
  let turn = new Map();
  let mymap = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (mymap.has(genres[i])) {
      mymap.set(genres[i], mymap.get(genres[i]).set(i, plays[i]));
      turn.set(genres[i], turn.get(genres[i]) + plays[i]);
    } else {
      mymap.set(genres[i], new Map().set(i, plays[i]));
      turn.set(genres[i], plays[i]);
    }
  }
  turn = [...turn].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < turn.length; i++) {
    let arr = mymap.get(turn[i][0]);
    const tmp = [...mymap.get(turn[i][0])].sort((a, b) => b[1] - a[1]);
    for (let j = 0; j < 2; j++) {
      if (tmp.length > j) {
        answer.push(tmp[j][0]);
      }
    }
  }
  return answer;
}
