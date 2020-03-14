function getMaxStreaks(toss) {
  // Return an array of two integers containing the maximum streak of heads and tails respectively
  let headsStreak = 0,
    tailsStreak = 0,
    headsTotal = 0,
    tailsTotal = 0;
  for (let i = 0; i < toss.length; i++) {
    if (toss[i] === "Heads") {
      headsTotal++;
      if (headsTotal > headsStreak) headsStreak = headsTotal;
      if (toss[i + 1] === "Tails") headsTotal = 0;
    } else {
      tailsTotal++;
      if (tailsTotal > tailsStreak) tailsStreak = tailsTotal;
      if (toss[i + 1] === "Heads") tailsTotal = 0;
    }
  }
  return [headsStreak, tailsStreak]
}

