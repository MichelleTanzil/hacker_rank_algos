function findDigits(n) {
  let count = 0;
  let arr = Array.from(String(n), Number);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] != 0 && n % arr[i] === 0) count++
  }
  return count;
}