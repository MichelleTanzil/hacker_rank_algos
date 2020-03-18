function beautifulDays(i, j, k) {
  let totalDays = 0;
  for (let day = i; day <= j; day++) {
    let difference =
      day -
      String(day)
        .split("")
        .reverse()
        .join("");
    if (difference % k === 0) totalDays++;
  }
  return totalDays;
}
