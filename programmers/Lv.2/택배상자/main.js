function solution(order) {
  let answer = 0;
  let cur = 1; //메인 컨테이너 벨트
  const stack = []; //보조컨테이너
  let curIdx = 0; //order 배열에서 사용할 인덱스
  while (cur <= order.length || stack[stack.length - 1] === order[curIdx]) {
    if (cur === order[curIdx]) {
      answer++;
      cur++;
      curIdx++;
    } else if (stack.length > 0 && stack[stack.length - 1] === order[curIdx]) {
      answer++;
      stack.pop();
      curIdx++;
    } else {
      stack.push(cur);
      cur++;
    }
  }
  return answer;
}
