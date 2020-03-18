function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleSum = 0, orangeSum = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      appleSum++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangeSum++;
    }
  }
  console.log(appleSum);
  console.log(orangeSum);
}
