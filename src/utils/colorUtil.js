import Values from 'values.js';

/**
 *
 * @param {*} hex Color in hexadecimal format.
 * @returns white or black depends on the color
 */
function getContrastColor(hex) {
  /*
			From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast
			
			Color brightness is determined by the following formula: 
			((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
      
      I know this could be more compact, but I think this is easier to read/explain.
			
			*/

  let threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  let hRed = parseInt(cutHex(hex).substring(0, 2), 16);
  let hGreen = parseInt(cutHex(hex).substring(2, 4), 16);
  let hBlue = parseInt(cutHex(hex).substring(4, 6), 16);

  let cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;

  return cBrightness > threshold ? '#000000' : '#ffffff';
}

function cutHex(h) {
  return h.charAt(0) == '#' ? h.substring(1, 7) : h;
}

/**
 * Generate 10 shades for a color and return.
 *
 * @param {*} color Color on hex, rgb or hsl format.
 * @returns Shade of the color in hex format.
 */
function generateColorShades(color) {
  return new Values(color).shade(5).hexString();
}

export { getContrastColor, generateColorShades };
