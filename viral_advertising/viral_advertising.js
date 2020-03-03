function viralAdvertising(n) {
  let total = 0,
    shared = 5,
    likes = 0;
  for (let day = 1; day <= n; day++) {
    likes = Math.floor(shared / 2);
    total += likes;
    shared = likes * 3;
  }
  return total;
}
