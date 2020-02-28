function hurdleRace(k, height) {
  let highest = Math.max(...height);
  let potion = highest - k;

  if (potion <= 0) return 0;
  else return potion;
}
