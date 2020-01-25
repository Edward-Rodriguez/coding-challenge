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

// return true if input is a valid hex value
let isValidHex = hex => {
  hex = hex.toString().toUpperCase();
  if (hex.length != 6) {
    return false;
  }
  for (val of hex) {
    if (!(val in hexDecValues)) return false;
  }
  return true;
};

// return true if input has valid rgb values
const isRgbValid = args => {
  if (args.length != 3) return false;
  const red = args[0];
  const green = args[1];
  const blue = args[2];
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

// convert color hex value to rgb value
const hexToRgbConverter = hex => {
  hex = hex.toString().toUpperCase();
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

// convert rgb value to equivalent hex value
const rgbToHexConverter = args => {
  if (!isRgbValid(args)) return false;
  const red = args[0];
  const green = args[1];
  const blue = args[2];
  let hex = hexDecValues[Math.floor(red / 16)];
  hex += '' + hexDecValues[red % 16];
  hex += '' + hexDecValues[Math.floor(green / 16)];
  hex += '' + hexDecValues[green % 16];
  hex += '' + hexDecValues[Math.floor(blue / 16)];
  hex += '' + hexDecValues[blue % 16];
  return hex;
};

// auto-detect input and convert
let convert = (...args) => {
  if (isRgbValid(args)) {
    return rgbToHexConverter(args);
  } else if (isValidHex(args)) {
    return hexToRgbConverter(args);
  } else {
    return false;
  }
};

console.log(convert('4f312f'));
