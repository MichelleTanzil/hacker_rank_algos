function getStrength(password, weight_a) {
  let charObj = {},
    runner = 0;
  for (let i = 0; i < 26; i++) {
    if (weight_a + i > 25) {
      charObj[String.fromCharCode(97 + i)] = runner;
      runner++;
    } else charObj[String.fromCharCode(97 + i)] = weight_a + i;
  }
  let strength = 0;
  for (let j = 0; j < password.length; j++) strength += charObj[password[j]];

  return strength;
}
