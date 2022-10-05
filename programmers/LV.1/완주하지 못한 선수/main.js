function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();

  //풀이방법1
  // let pMap=new Map();
  // let cMap=new Map();
  // participant.forEach((value,idx)=>pMap.set(idx,value));
  // completion.forEach((value,idx)=>cMap.set(idx,value));
  // for(let i=0;i<pMap.size;i++){
  //     if(pMap.get(i)!==cMap.get(i)) {
  //         answer=pMap.get(i);
  //         break;
  //     }
  // }
  // return answer;

  //풀이방법2
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
