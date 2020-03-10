function marsExploration(s) {
  let change = 0,
    i = 0,
    o = 0;
  let original = "SOS";
  while (i < s.length) {
    if (s[i] !== original[o]) change++;
    if (o === 2) o = 0;
    else o++;
    i++;
  }
  return change;
}
