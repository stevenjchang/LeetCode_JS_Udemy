function groupAnagrams(strs) {
  let result = {}

  strs.forEach((str) => {
    let alphabetizedString = str.split('').sort().join('')
    if (result[alphabetizedString]) result[alphabetizedString].push(str)
    else result[alphabetizedString] = [str]
  })

  return Object.values(result)
}

module.exports = groupAnagrams;
