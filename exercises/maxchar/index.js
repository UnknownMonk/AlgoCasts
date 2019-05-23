// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let letter in charMap) {
    if (charMap[letter] > max) {
      max = charMap[letter];
      maxChar = letter;
    }
  }
  return maxChar;
}

module.exports = maxChar;
