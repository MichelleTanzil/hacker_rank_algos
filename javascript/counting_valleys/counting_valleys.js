function countingValleys(n, s) {
  s = s.split("").map(steps => (steps === "U" ? 1 : -1));
  let valleys = 0,
    path = 0,
    isInValley = false;
  for (let i in s) {
    path += s[i];
    if (path < 0 && !isInValley) isInValley = true;
    if (path === 0 && isInValley) {
      valleys++;
      isInValley = false;
    }
  }
  return valleys;
}
