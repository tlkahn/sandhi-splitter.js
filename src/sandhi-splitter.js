import { RULES } from './sandhi-rules.js';

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
 *  Exhaustive IAST rule table (avagraha, vowel sandhi, visarga,
 *  initial t / n / m assimilations)
 * ------------------------------------------------------------------ */
  static get RULES() {
    return RULES;
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
