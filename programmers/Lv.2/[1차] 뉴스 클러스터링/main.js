function solution(str1, str2) {
  const pattern = /[A-Z]/;
  const map = new Map();
  const arr1 = [];
  const arr2 = [];
  let count = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  for (let i = 1; i < str1.length; i++) {
    let tmp = str1[i - 1] + str1[i];
    if (![...tmp].every((val) => pattern.test(val))) continue;
    if (map.has(tmp)) map.set(tmp, map.get(tmp) + 1);
    else map.set(tmp, 1);
    arr1.push(tmp);
  }
  for (let i = 1; i < str2.length; i++) {
    let tmp = str2[i - 1] + str2[i];
    if (![...tmp].every((val) => pattern.test(val))) continue;
    if (map.has(tmp)) {
      let value = map.get(tmp);
      if (value === 1) map.delete(tmp);
      else map.set(tmp, value - 1);
      count++;
    }
    arr2.push(tmp);
  }

  if (arr1.length === 0 && arr2.length === 0) return 65536;
  return Math.floor((count / (arr1.length + arr2.length - count)) * 65536);
}
