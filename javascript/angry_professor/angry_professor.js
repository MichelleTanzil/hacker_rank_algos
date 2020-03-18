function angryProfessor(k, a) {
  let studentsOnTime = 0;
  for (let i in a) {
    if (a[i] <= 0) studentsOnTime++;
  }
  return studentsOnTime >= k ? "NO" : "YES";
}
