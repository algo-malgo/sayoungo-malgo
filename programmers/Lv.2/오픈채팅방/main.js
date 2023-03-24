function solution(record) {
  const answer = [];
  const arr = [];
  const mymap = new Map();
  for (let i = 0; i < record.length; i++) {
    arr.push(record[i].split(" "));
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i][0]) {
      case "Enter":
        mymap.set(arr[i][1], arr[i][2]);
        break;
      case "Change":
        mymap.set(arr[i][1], arr[i][2]);
        break;
    }
  }

  for (let i = 0; i < record.length; i++) {
    switch (arr[i][0]) {
      case "Enter":
        answer.push(`${mymap.get(arr[i][1])}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${mymap.get(arr[i][1])}님이 나갔습니다.`);
        break;
    }
  }

  return answer;
}
