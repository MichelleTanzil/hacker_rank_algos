function getMoneySpent(keyboards, drives, b) {
  let total = -1;
  for (let i = 0; i < keyboards.length; i++) {
    let sum = 0;
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        sum = keyboards[i] + drives[j];
        total = sum > total ? sum : total;
      }
    }
  }
  return total;
}
