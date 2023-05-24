function solution(topping) {
  function checking(arr) {
    return arr.filter((v) => v > 0).length;
  }
  let answer = 0;
  let i = 0;
  const arr1 = new Array(10002).fill(0);
  const arr2 = new Array(10002).fill(0);
  let checkarr = Array.from(Array(topping.length), () => new Array(2));
  ++arr1[topping[i] - 1];
  for (let j = 1; j < topping.length; j++) {
    ++arr2[topping[j] - 1];
  }

  checkarr[i][0] = checking(arr1);
  checkarr[i][1] = checking(arr2);
  if (checkarr[i][0] === checkarr[i][1]) answer++;
  ++i;
  while (i <= topping.length - 1) {
    --arr2[topping[i] - 1];
    ++arr1[topping[i] - 1];
    if (arr1[topping[i] - 1] === 1) {
      checkarr[i][0] = checkarr[i - 1][0] + 1;
    } else checkarr[i][0] = checkarr[i - 1][0];
    if (arr2[topping[i] - 1] === 0) {
      checkarr[i][1] = checkarr[i - 1][1] - 1;
    } else checkarr[i][1] = checkarr[i - 1][1];

    if (checkarr[i][0] === checkarr[i][1]) answer++;
    i++;
  }

  return answer;
}
