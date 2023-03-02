function solution(skill, skill_trees) {
  let answer = 0;
  let set = new Set([...skill]);
  let flag = true;
  let chkIdx = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    flag = true;
    chkIdx = 0;
    for (let k = 0; k < skill_trees[i].length; k++) {
      if (set.has(skill_trees[i][k])) {
        if (skill[chkIdx] === skill_trees[i][k]) {
          chkIdx += 1;
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      answer++;
    }
  }
  return answer;
}
