function designerPdfViewer(h, word) {
  let memoi = {};
  for (let i = 0; i < 26; i++) {
    memoi[String.fromCharCode(97 + i)] = h[i];
  }
  let highestHeight = 0;
  for (let j = 0; j < word.length; j++) {
    if (memoi[word[j]] > highestHeight) highestHeight = memoi[word[j]];
  }
  return highestHeight * word.length;
}