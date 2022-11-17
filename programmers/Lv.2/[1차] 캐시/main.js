function solution(cacheSize, cities) {
  const cache = [];
  let chkHit = 0;
  let answer = 0;
  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toLowerCase();
    chkHit = cache.findIndex((v) => v === cities[i]);
    if (cacheSize === 0) {
      answer += 5;
      continue;
    }
    if (chkHit === -1) {
      //cache miss
      answer += 5;
      if (cache.length < cacheSize) cache.push(cities[i]);
      else {
        cache.shift();
        cache.push(cities[i]);
      }
    } else {
      //cache hit
      answer += 1;
      cache.splice(chkHit, 1);
      cache.push(cities[i]);
    }
  }
  return answer;
}
