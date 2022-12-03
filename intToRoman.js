// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

var intToRoman = function (num) {
  return toDigitArray(num)
    .reverse()
    .map(
      (d, pos) =>
        optSub1(d, pos) + opt5(d, pos) + series1(d, pos) + opt10(d, pos)
    )
    .reverse()
    .join("");
};

var toDigitArray = (num) =>
  num
    .toString()
    .split("")
    .map((character) => Number(character));

const digits1 = ["I", "X", "C", "M"];
const digits5 = ["V", "L", "D"];

var optSub1 = (digit, pos) => (hasSub1(digit) ? digits1[pos] : "");
var hasSub1 = (digit) => digit === 4 || digit === 9;

var opt5 = (digit, pos) => (has5(digit) ? digits5[pos] : "");
var has5 = (digit) => 4 <= digit && digit <= 8;

var series1 = (digit, pos) => digits1[pos].repeat(has1times(digit));
var has1times = (digit) => (digit % 5 <= 3 ? digit % 5 : 0);

var opt10 = (digit, pos) => (has10(digit) ? digits1[pos + 1] : "");
var has10 = (digit) => digit === 9;
