function catAndMouse(x, y, z) {
  let distanceA = Math.abs(x - z);
  let distanceB = Math.abs(y - z);

  if (distanceA === distanceB) return "Mouse C";
  else if (distanceA > distanceB) return "Cat B";
  else return "Cat A";
}
