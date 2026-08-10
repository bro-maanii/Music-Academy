const plugin = require("tailwindcss/plugin");
const svgToDataUri = require("mini-svg-data-uri");

// Tailwind v4 no longer ships `tailwindcss/lib/util/flattenColorPalette`
// (it was an undocumented internal), so we inline the same behaviour here.
function flattenColorPalette(colors) {
  return Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values === "object" && values !== null
        ? Object.entries(flattenColorPalette(values)).map(([name, value]) => ({
            [color + (name === "DEFAULT" ? "" : `-${name}`)]: value,
          }))
        : [{ [color]: values }]
    )
  );
}

module.exports = plugin(({ addBase, matchUtilities, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));

  // Expose every theme color as a bare CSS variable, e.g. var(--slate-900).
  // Tailwind v4 already emits --color-slate-900, but the ui/ components
  // reference the unprefixed names inline, so we keep generating those too.
  addBase({
    ":root": Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    ),
  });

  // bg-grid-<color>, bg-grid-small-<color> and bg-dot-<color> utilities.
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: allColors, type: "color" }
  );
});
