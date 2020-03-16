function timeConversion(s) {
  if (s[0] + s[1] === "12") {
    return s[s.length - 2] === "P"
      ? "12" + s.substring(2, 8)
      : "00" + s.substring(2, 8);
  } else {
    return s[s.length - 2] === "P"
      ? (parseInt(s[0] + s[1]) + 12).toString() + s.substring(2, 8)
      : s.substring(0, 8);
  }
}
