function appendAndDelete(s, t, k) {
  if (s.length + t.length < k) return "Yes";

  let commonLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) commonLength++;
    else break;
  }
  let difference = k - ( (s.length + t.length) - (2 * commonLength))
  if (difference % 2 === 0 && difference >= 0) return "Yes";
  return "No";
}

