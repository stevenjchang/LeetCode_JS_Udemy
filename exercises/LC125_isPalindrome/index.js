function isAlphaNumeric(char) {
  let letterNumber = /^[0-9a-zA-Z]+$/;
  return Boolean(char.match(letterNumber));
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    } else {
      left++;
      right--
    }
  }
  return true;
}

module.exports = isPalindrome;
