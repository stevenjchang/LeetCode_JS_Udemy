const isValid = s => {
  let stack = [];
  let pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (pairs[char]) stack.push(char)
    else if (pairs[stack.pop()] !== char) return false
  }

  return stack.length === 0;
};

module.exports = isValid;
