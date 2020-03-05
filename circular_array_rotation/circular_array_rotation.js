function circularArrayRotation(a, k, queries) {
  let arr = [];
  for (let j = 1; j <= k; j++) {
    a.unshift(a[a.length - 1]);
    a.pop();
  }
  for (let i = 0; i < queries.length; i++) {
    arr.push(a[queries[i]]);
  }
  return arr;
}
