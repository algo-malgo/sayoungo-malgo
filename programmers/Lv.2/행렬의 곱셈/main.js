function solution(arr1, arr2) {
  const answer = [];
  let tmp = 0;
  let tmpArr = [];
  for (let i = 0; i < arr1.length; i++) {
    tmp = 0;
    tmpArr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        tmp += arr1[i][k] * arr2[k][j];
      }
      tmpArr.push(tmp);
      tmp = 0;
    }
    answer.push(tmpArr);
  }
  return answer;
}
