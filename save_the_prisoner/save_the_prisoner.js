function saveThePrisoner(n, m, s) {
  let prisoner = (s + (m - 1)) % n;
  return prisoner === 0 ? n : prisoner;
}

