// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let hash = {};
  let subString = "";
  let longestSubstring = ""

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      let letter = s[i+j]
      if (!hash[letter]) {
        hash[letter] = 1;
        subString += letter;
      } else {
        if (subString.length > longestSubstring.length) longestSubstring = subString;
        hash = {};
        subString = "";
      }
    }
  }
  return longestSubstring.length
}

module.exports = lengthOfLongestSubstring;
