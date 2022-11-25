// Given a string s, find the length of the longest
// substring
//  without repeating characters.

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let max = 1;
  const counts = { [s[0]]: 1 };
  let i = 0,
    j = 0;
  while (++j < s.length) {
    counts[s[j]] = (counts[s[j]] || 0) + 1;
    while (counts[s[j]] > 1) counts[s[i++]]--;
    max = Math.max(max, j - i + 1);
  }
  return max;
};
