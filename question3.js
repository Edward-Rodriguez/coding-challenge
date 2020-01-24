// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-detect the formats so that
// if you enter HEX color format it returns RGB and if
// you enter RGB color format it returns HEX.

let hexDecValues = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

let isValidHex = hex => {
  if (hex.length != 6) return false;
  for (val of hex) {
    if (!(val in hexDecValues)) return false;
  }
  return true;
};

//#C8C9C7
const hexToDecimal = hex => {
  hex = hex.toUpperCase();
  if (!isValidHex(hex)) return false;
  let rr = 0;
  let gg = 0;
  let bb = 0;
  for (let index = 0; index < 6; index++) {
    switch (index) {
      case 0:
        rr = hexDecValues[hex.charAt(0)] * 16;
        break;
      case 1:
        rr += hexDecValues[hex.charAt(1)];
        break;
      case 2:
        gg = hexDecValues[hex.charAt(2)] * 16;
        break;
      case 3:
        gg += hexDecValues[hex.charAt(3)];
        break;
      case 4:
        bb = hexDecValues[hex.charAt(4)] * 16;
        break;
      case 5:
        bb += hexDecValues[hex.charAt(5)];
        break;
    }
  }
  return `rgb(${rr}, ${gg}, ${bb})`;
};

let rgbToHex = rgb => {};

console.log(hexToDecimal('Cccccc'));

const isRgbValid = (red, green, blue) => {
  if (
    red < 0 ||
    red > 255 ||
    green < 0 ||
    green > 255 ||
    blue < 0 ||
    blue > 255
  ) {
    return false;
  }
  return true;
};

const rgbToHexConverter = (red, blue, green) => {
  if (!isRgbValid(red, green, blue)) return false;
  let hex = hexDecValues[Math.floor(red / 16)];
  hex += '' + hexDecValues[red % 16];
  hex += '' + hexDecValues[Math.floor(blue / 16)];
  hex += '' + hexDecValues[blue % 16];
  hex += '' + hexDecValues[Math.floor(green / 16)];
  hex += '' + hexDecValues[green % 16];
  return hex;
};

console.log(rgbToHexConverter(99, 200, 201));
