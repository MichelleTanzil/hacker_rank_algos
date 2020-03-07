function sockMerchant(n, ar) {
  let memoi = {};
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] in memoi) memoi[ar[i]]++;
    else memoi[ar[i]] = 1;
  }
  let pairs = 0;
  for (let sock in memoi) {
    pairs += Math.floor(memoi[sock] / 2);
  }
  return pairs;
}
