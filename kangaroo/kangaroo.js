function kangaroo(x1, v1, x2, v2) {
  if (x2 > x1 && v2 > v1) return "NO";
  let i = 1;
  while (i <= 10000) {
    if (x1 + v1 === x2 + v2) return "YES";
    if (i === 10000) {
      return "NO";
    } else {
      x1 += v1;
      x2 += v2;
      i++;
    }
  }
}
