function getContrastColor(rgb) {
  // Calculate the perceptive luminance (Luminance formula from W3C)
  let luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;

  // Use white text for dark backgrounds and black text for light backgrounds
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
