function solution(n, lost, reserve) {
  let answer = 0;
  reserve = reserve.map((value) =>
    lost.includes(value) //여분의 체육복을 가지고 있는데 분실된 경우는 lost 배열과  reserve에서 모두 제외
      ? lost.splice(lost.indexOf(value), 1)
      : value
  );
  lost.sort(); //정렬
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer++; //answer 변수를 count 변수처럼 사용
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
    } else if (reserve.includes(lost[i] + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
    }
  }
  answer = n - (lost.length - answer);
  return answer;
}
