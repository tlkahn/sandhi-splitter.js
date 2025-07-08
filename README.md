# Sandhi Splitter

A lightweight JavaScript UI component for interactively visualizing and analyzing Sanskrit sandhi using grapheme segmentation and rule-based unsandhi.

## Features

- Written in vanilla JavaScript (ES6+)
- Works in the browser with no dependencies
- Segment-level manipulation using graphemes (via `Intl.Segmenter`)
- Fully extensible sandhi rule table (`sandhi-rules.js`)
- Interactive draggable bars to split and evaluate sandhi options
- Supports IAST-encoded Sanskrit input
- Outputs all valid unsandhi (split) options at a given break point

---

## Usage

### 1. Installation

Clone or copy the project into your own:

```

/sandhi-splitter/
├── src/
│    ├── sandhi-splitter.js
│    └── sandhi-rules.js

````

Include it in your HTML:

```html
<script type="module">
  import { SandhiSplitter } from './src/sandhi-splitter.js';

  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("sandhi");
    SandhiSplitter.attach(el, {
      text: "athaitad",    // optional, uses el.textContent by default
      onChange: (options) => {
        console.log("Split options:", options);
      }
    });
  });
</script>
````

```html
<div id="sandhi"></div>
```

---

### 2. Rule Format

Defined in `sandhi-rules.js` as an exported array:

```js
export const RULES = [
  { c: "ai", l: "a", r: "i" },
  { c: "o",  l: "a", r: "u" },
  ...
];
```

Each rule defines how a compound (`c`) can be split into a left part (`l`) and a right part (`r`).

---

## Public API

### `SandhiSplitter.attach(el, options)`

Initializes the sandhi splitter inside the given HTML element `el`.

**Options:**

* `text` (string) – optional text to analyze (defaults to `el.textContent`)
* `onChange(splitOptions: string[][])` – callback invoked on user drag/drop interaction with all possible sandhi splits at current break.

### `SandhiSplitter.RULES`

Access the rule table directly if needed for diagnostics or extensions.

### `instance.destroy()`

Clean up the UI and restore raw text.

---

## Development Notes

* Requires browser support for `Intl.Segmenter` (used with `"sa"` for Sanskrit grapheme segmentation).
* Designed for IAST-encoded input (not Devanagari).
* Internal drag/drop logic is based on pointer events and relative positioning.

---

## Demo

To test with sample input, add to your HTML:

```html
<div id="sandhi">suvṛṣṭiḥ</div>
```

Output will include visual segmentation and allow interactive dragging of sandhi split bars.

---

## License

MIT

