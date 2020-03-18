function squares(a, b) {
  let lower = Math.ceil(Math.sqrt(a));
  let upper = Math.floor(Math.sqrt(b));

  return lower > upper ? 0 : upper - lower + 1;
}
