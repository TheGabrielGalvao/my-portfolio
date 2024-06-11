// theme.js

const colors = {
  primary: "#23263a",
  secondary: "#ff4a57",
  light: "#2b2e44",
  success: "#22c55e",
  info: "#3b82f6",
  warning: "#f8b700",
  danger: "#f56565",
};

const spacing = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "5rem",
  "4xl": "6rem",
  "5xl": "8rem",
};

const borderRadius = {
  none: "0",
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

const borderWidth = {
  DEFAULT: "1px",
  "0": "0",
  "2": "2px",
  "4": "4px",
  "8": "8px",
};

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};

const fontFamily = {
  sans: ["Helvetica", "Arial", "sans-serif"],
  serif: ["Georgia", "Times New Roman", "serif"],
  mono: ["Menlo", "Monaco", "Courier New", "monospace"],
};

module.exports = {
  colors,
  spacing,
  borderRadius,
  borderWidth,
  fontSize,
  fontFamily,
};
