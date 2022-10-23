function solution(nums) {
  let myset = new Set(nums);
  if (myset.size >= nums.length / 2) return nums.length / 2;
  return myset.size;
}
