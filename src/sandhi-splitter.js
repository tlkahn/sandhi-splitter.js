/*  Sandhi-Splitter  •  v0.3  •  LATIN only  •  multi-match  */
export class SandhiSplitter {

  /* public factory */
  static attach(el, opt = {}) { return new SandhiSplitter(el, opt); }

  constructor(el, { text, onChange } = {}) {
    this.el        = el;
    this.raw       = (text ?? el.textContent).trim();
    this.onChange  = onChange || (()=>{});
    this.clusters  = this._graphemes(this.raw);
    this.bars      = [{ id: 0, idx: this.clusters.length }];
    this._render();
  }

  destroy(){ this.el.innerHTML = this.raw; }

  /* 1. graphemes */
  _graphemes(s){
    return typeof Intl?.Segmenter === "function"
      ? Array.from(new Intl.Segmenter("sa",{granularity:"grapheme"}).segment(s),
                   g=>g.segment)
      : [...s];
  }

  /* ------------------------------------------------------------------
 *  Minimal, flat rule list (IAST) – covers:
 *  • avagraha cases (e’, o’, …)
 *  • a/ā-sandhi, ik-sandhi, ec-sandhi
 *  • visarga families (as / ās)
 *  • initial t, n, m consonant sandhis
 * ------------------------------------------------------------------ */
  static get RULES () {
    return [
      /* ---------- avagraha (’ = euphonic a-elision) ---------- */
      { c:"e’",  l:"e",  r:"a" },
      { c:"o’",  l:"o",  r:"a" },
      { c:"ai’", l:"ai", r:"a" },
      { c:"au’", l:"au", r:"a" },
      { c:"ā’",  l:"ā",  r:"a" },

      /* ---------- a / ā + vowels ------------------------------ */
      { c:"ā",  l:"a",  r:"a" }, { c:"ā",  l:"ā", r:"a" },
      { c:"e",  l:"a",  r:"i" }, { c:"e",  l:"ā", r:"i" },
      { c:"e",  l:"a",  r:"ī" }, { c:"e",  l:"ā", r:"ī" },
      { c:"o",  l:"a",  r:"u" }, { c:"o",  l:"ā", r:"u" },
      { c:"o",  l:"a",  r:"ū" }, { c:"o",  l:"ā", r:"ū" },
      { c:"ar", l:"a",  r:"ṛ" }, { c:"ar", l:"ā", r:"ṛ" },
      { c:"al", l:"a",  r:"ḷ" }, { c:"al", l:"ā", r:"ḷ" },
      { c:"ai", l:"a",  r:"i" }, { c:"ai", l:"ā", r:"i" },
      { c:"ai", l:"ā",  r:"ī" }, { c:"ai", l:"a", r:"e" },
      { c:"ai", l:"ā",  r:"e" },
      { c:"au", l:"a",  r:"u" }, { c:"au", l:"ā", r:"u" },
      { c:"au", l:"ā",  r:"ū" }, { c:"au", l:"a", r:"o" },
      { c:"au", l:"ā",  r:"o" },

      /* ---------- ik-sandhi (i / ī / u / ū / ṛ / ṝ) ----------- */
      { c:"ī",  l:"i",  r:"i" },
      { c:"ya", l:"i",  r:"a" }, { c:"yi", l:"i",  r:"i" },
      { c:"yu", l:"i",  r:"u" }, { c:"ye", l:"i",  r:"e" },
      { c:"ū",  l:"u",  r:"u" },
      { c:"va", l:"u",  r:"a" }, { c:"vṛ", l:"u", r:"ṛ" },
      { c:"ṝ",  l:"ṛ",  r:"ṛ" },
      { c:"ra", l:"ṛ",  r:"a" },

      /* ---------- ec-sandhi (e / ai / au initials) ------------ */
      { c:"e’",  l:"e",  r:"a" },        // already listed
      { c:"ai",  l:"e",  r:"i" },
      { c:"ā a", l:"ai", r:"a" },
      { c:"āv a",l:"au", r:"a" },

      /* ---------- visarga families ---------------------------- */
      { c:"o’",  l:"as", r:"a" },        // already listed
      { c:"ak", l:"as", r:"k" },
      { c:"āa", l:"ās", r:"a" },

      /* ---------- initial “t” --------------------------------- */
      { c:"da", l:"t",  r:"a" },
      { c:"cch",l:"t",  r:"ś" },
      { c:"nm", l:"t",  r:"m" },

      /* ---------- initial “n” --------------------------------- */
      { c:"anna", l:"an", r:"a" },
      { c:"ñj",   l:"n",  r:"j" },

      /* ---------- initial “m” --------------------------------- */
      { c:"ṃk", l:"m", r:"k" }
    ];
  }

  /** returns an **array** of [left,right] matches */
  _unsandhiAll(idx){
    const txt = this.raw;
    const out = [];
    for (const {c,l,r} of SandhiSplitter.RULES){
      if (txt.substr(idx, c.length) === c){
        out.push([ txt.slice(0,idx)+l,
                   r + txt.slice(idx+c.length) ]);
      }
    }
    if (out.length === 0){
      out.push([ txt.slice(0,idx), txt.slice(idx) ]);
    }
    return out;
  }

  /* 3. UI */
  _render(){
    const wrap=document.createElement("div");
    wrap.className="sandhi-word";
    this.el.innerHTML=""; this.el.appendChild(wrap);

    this.clusters.forEach(g=>{
      const s=document.createElement("span");
      s.className="cluster"; s.textContent=g; wrap.appendChild(s);
    });

    const gapPx=[0];
    wrap.querySelectorAll(".cluster").forEach(n=>{
      gapPx.push(n.offsetLeft+n.offsetWidth);
    });

    this.bars.forEach(bar=>{
      const b=document.createElement("div");
      b.className="sandhi-bar";
      b.style.cssText=`position:absolute;top:0;width:2px;height:1.4em;
                       background:#c00;cursor:ew-resize;
                       left:${gapPx[bar.idx]}px`;
      wrap.appendChild(b);

      b.addEventListener("pointerdown",e=>{
        e.preventDefault();
        b.setPointerCapture(e.pointerId);
        b.classList.add("drag");

        const move=ev=>{
          const x=ev.clientX-wrap.getBoundingClientRect().left;
          b.style.left=Math.max(0,Math.min(x,gapPx.at(-1)))+"px";
        };
        const up=ev=>{
          b.releasePointerCapture(ev.pointerId);
          b.classList.remove("drag");
          const x=parseFloat(b.style.left);
          let idx=0,best=1e9;
          gapPx.forEach((px,i)=>{const d=Math.abs(px-x);
            if(d<best){best=d;idx=i;}});
          bar.idx=idx;
          this._render();                              // repaint
          this.onChange(this._unsandhiAll(idx));       // send ALL options
        };

        b.addEventListener("pointermove",move);
        b.addEventListener("pointerup",   up,{once:true});
        b.addEventListener("pointercancel",up,{once:true});
      });
    });
  }
}

/* one-time stylesheet */
if(!document.querySelector("style[data-sandhi]")){
  const s=document.createElement("style");
  s.dataset.sandhi="";
  s.textContent=`
    .sandhi-word{position:relative;display:inline-flex;font-size:2rem}
    .cluster{padding:0 .15em}
    .sandhi-bar.drag{opacity:.4}`;
  document.head.appendChild(s);
}
