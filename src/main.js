import { SandhiSplitter } from './sandhi-splitter.js';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('tests');   // add <div id="tests"></div> to index.html

  /* === Sample IAST surfaces that trigger all rule families === */
  const samples = [
    'bhogecchorasya',        // a + i  → e
    'soktam',      // a + u  → o  (so + uktam)
    'parṣi',       // a + ṛ  → ar
    'kalabdha',    // a + ḷ  → al
    'kiyatra',     // i + a  → ya
    'suvṛṣṭiḥ',    // u + ṛ  → vṛ
    "e’bhavati",   // e + a  → e’  (avagraha)
    'āudāraḥ',     // ai + u → āu
    'āvṛṣi',       // au + ṛ → āvṛ
    "rāmo’sya",    // as-sandhi → o’
    'rāskṛtaḥ',    // other -s sandhi
    'tadasti',     // t + a → d
    'tannmanam',   // n + m → nn
    'saṃkṛtaḥ'     // m + k → ṃ
  ];

  /* === Create one splitter row per sample === */
  samples.forEach(text => {
    const wordDiv = document.createElement('div');
    const outDiv  = document.createElement('div');
    outDiv.className = 'results';
    root.appendChild(wordDiv);
    root.appendChild(outDiv);

    SandhiSplitter.attach(wordDiv, {
      text,
      onChange: matches => {
        outDiv.innerHTML = '';
        matches.forEach(([l, r]) => {
          const p = document.createElement('div');
          p.textContent = `${l} + ${r}`;
          outDiv.appendChild(p);
        });
      }
    });
  });
});
