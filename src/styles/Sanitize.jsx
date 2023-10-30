import { createGlobalStyle } from "styled-components";

const Sanitize = createGlobalStyle`

html, body {
  height: 100%;
}


  // Box sizing defaults to border-box
  *, ::before, ::after {
  box-sizing: border-box;
}

  // Backgrounds do not repeat by default
  *, ::before, ::after {
    background-repeat: no-repeat;
  }

  // Pseudo-elements inherit text decoration and vertical alignment
  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  // Cursors only change to hint non-obvious interfaces
  html {
  cursor: default;
}

  // Text has a comfortable line height in all browsers
  html {
  line-height: 1.5;
}

// Tabs appear the same on the web as in a typical editor
html {
  tab-size: 4;
}


// Documents do not use a margin for outer padding
body {
  margin: 0;
}

// Navigation lists do not include a marker style
ol, ul {
  list-style: none;
  padding: 0;
  margin: 0;
}


// Media elements align to the text center of other content
audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}

// SVGs fallback to the current text color
svg:not([fill]) {
  fill: currentColor;
}

// Tables do not include additional border spacing
table {
  border-collapse: collapse;
}

// Textareas only resize vertically by default
textarea {
  resize: vertical;
}

// Single taps are dispatched immediately on clickable elements
a, area, button, input, label, select, summary, textarea, [tabindex] {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

input, textarea {
  cursor: text;
}

select, a, button {
  cursor: pointer;
}


// ARIA roles include visual cursor hints
[aria-busy="true"] {
  cursor: progress;
}

[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"], [disabled] {
  cursor: default;
}

// Visually hidden content remains accessible
[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}


// Form controls appear visually consistent and restyle consistently
button, input, select, textarea {
  background-color: transparent;
  border: 1px solid WindowFrame;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  padding: 0.25em 0.375em;
}

[type="color"],
[type="range"] {
  border-width: 0;
  padding: 0;
}

// Expandable select controls appear visually consistent
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: no-repeat right center / 1em;
  border-radius: 0;
  padding-right: 1em;
}

select:not([multiple]):not([size]) {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
}

::-ms-expand {
  display: none;
}

// Placeholders appear visually consistent in Internet Explorer
:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.54);
}

// Assets use a comfortable measure in all browsers
iframe,
img,
input,
select,
textarea {
  height: auto;
  max-width: 100%;
}

// Typography uses the default system font
html {
  font-family:
    system-ui,
    /* macOS 10.11-10.12 */ -apple-system,
    /* Windows 6+ */ Segoe UI,
    /* Android 4+ */ Roboto,
    /* Ubuntu 10.10+ */ Ubuntu,
    /* Gnome 3+ */ Cantarell,
    /* KDE Plasma 5+ */ Noto Sans,
    /* fallback */ sans-serif,
    /* macOS emoji */ "Apple Color Emoji",
    /* Windows emoji */ "Segoe UI Emoji",
    /* Windows emoji */ "Segoe UI Symbol",
    /* Linux emoji */ "Noto Color Emoji";
}

// Pre-formatted and code-formatted text uses the monospace system font
code, kbd, pre, samp {
  font-family:
    /* macOS 10.10+ */ Menlo,
    /* Windows 6+ */ Consolas,
    /* Android 4+ */ Roboto Mono,
    /* Ubuntu 10.10+ */ Ubuntu Monospace,
    /* KDE Plasma 5+ */ Noto Mono,
    /* KDE Plasma 4+ */ Oxygen Mono,
    /* Linux/OpenOffice fallback */ Liberation Mono,
    /* fallback */ monospace;
}

// Animations, scrolling effects, and transitions are reduced in all browsers
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`;

export default Sanitize;
