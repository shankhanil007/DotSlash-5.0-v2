// removes none entries from array
exports.matchString = (s1, s2, s3, s4, s5, s6) => {
  let strSet = new Set();
  let strArr = [s1, s2, s3, s4, s5, s6].filter(str => {
    return str !== 'none';
  });
  strArr.forEach(str => {
    strSet.add(str);
  });
  if (strSet.size === strArr.length) return false;
  else return true;
};
