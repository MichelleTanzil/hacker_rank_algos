function getTotalX(a, b) {
  let arrFirst = [];
  for (let i = a[a.length - 1]; i < 101; i++) {
    let check = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) check = false;
    }
    if (check) {
      arrFirst.push(i);
    }
  }
  let arrSecond = [];
  for (let i = 0; i < arrFirst.length; i++) {
    let check = true;
    for (let j = 0; j < b.length; j++) {
      if (b[j] % arrFirst[i] !== 0) check = false;
    }
    if (check) {
      arrSecond.push(arrFirst[i]);
    }
  }
  return arrSecond.length;
}


