export const RULES = [
      /* ---------- avagraha cases ---------- */
      { c:"e’",  l:"e",   r:"a" },
      { c:"o’",  l:"o",   r:"a" },
      { c:"ai’", l:"ai",  r:"a" },
      { c:"au’", l:"au",  r:"a" },
      { c:"ā’",  l:"ā",   r:"a" },

      /* ---------- a / ā + vowels ---------- */
      { c:"ā",   l:"a",  r:"a" }, { c:"ā",  l:"ā", r:"a" },
      { c:"e",   l:"a",  r:"i" }, { c:"e",  l:"ā", r:"i" },
      { c:"e",   l:"a",  r:"ī" }, { c:"e",  l:"ā", r:"ī" },
      { c:"o",   l:"a",  r:"u" }, { c:"o",  l:"ā", r:"u" },
      { c:"o",   l:"a",  r:"ū" }, { c:"o",  l:"ā", r:"ū" },
      { c:"ar",  l:"a",  r:"ṛ" }, { c:"ar", l:"ā", r:"ṛ" },
      { c:"al",  l:"a",  r:"ḷ" }, { c:"al", l:"ā", r:"ḷ" },
      { c:"ai",  l:"a",  r:"i" }, { c:"ai", l:"ā", r:"i" },
      { c:"ai",  l:"ā",  r:"ī" }, { c:"ai", l:"a", r:"e" },
      { c:"ai",  l:"ā",  r:"e" },
      { c:"au",  l:"a",  r:"u" }, { c:"au", l:"ā", r:"u" },
      { c:"au",  l:"ā",  r:"ū" }, { c:"au", l:"a", r:"o" },
      { c:"au",  l:"ā",  r:"o" },
      { c:"anna", l:"an", r:"a" },

      /* ---------- ik-sandhi (complete) ---------- */
      { c:"ī",   l:"i",   r:"i" },
      { c:"ya",  l:"i",   r:"a" }, { c:"yi", l:"i", r:"i" },
      { c:"yī",  l:"i",   r:"ī" },
      { c:"yu",  l:"i",   r:"u" }, { c:"yū", l:"i", r:"ū" },
      { c:"yṛ",  l:"i",   r:"ṛ" }, { c:"yṝ", l:"i", r:"ṝ" },
      { c:"yḷ",  l:"i",   r:"ḷ" }, { c:"yḹ", l:"i", r:"ḹ" },
      { c:"ye",  l:"i",   r:"e" }, { c:"yai",l:"i", r:"ai" },
      { c:"yo",  l:"i",   r:"o" }, { c:"yau",l:"i", r:"au" },

      { c:"ū",   l:"u",   r:"u" },
      { c:"va",  l:"u",   r:"a" }, { c:"vi", l:"u", r:"i" },
      { c:"vī",  l:"u",   r:"ī" },
      { c:"vu",  l:"u",   r:"u" }, { c:"vū", l:"u", r:"ū" },
      { c:"vṛ",  l:"u",   r:"ṛ" }, { c:"vṝ", l:"u", r:"ṝ" },
      { c:"vḷ",  l:"u",   r:"ḷ" }, { c:"vḹ", l:"u", r:"ḹ" },
      { c:"ve",  l:"u",   r:"e" },
      { c:"vai", l:"u",   r:"ai" },
      { c:"vo",  l:"u",   r:"o" },
      { c:"vau", l:"u",   r:"au" },

      { c:"ṝ",   l:"ṛ",   r:"ṛ" },
      { c:"ra",  l:"ṛ",   r:"a" }, { c:"ri", l:"ṛ", r:"i" },
      { c:"rī",  l:"ṛ",   r:"ī" },
      { c:"ru",  l:"ṛ",   r:"u" }, { c:"rū", l:"ṛ", r:"ū" },
      { c:"rḷ",  l:"ṛ",   r:"ḷ" }, { c:"rḹ", l:"ṛ", r:"ḹ" },
      { c:"re",  l:"ṛ",   r:"e" }, { c:"rai",l:"ṛ", r:"ai" },
      { c:"ro",  l:"ṛ",   r:"o" }, { c:"rau",l:"ṛ", r:"au" },

      { c:"ḹ",   l:"ḷ",   r:"ḷ" },

      /* ---------- ec-sandhi (initial e / ai / au) ---------- */
      { c:"ai",  l:"e",   r:"i" },
      { c:"āa", l:"ai",  r:"a" },
      { c:"āva",l:"au",  r:"a" },

      /* ---------- visarga families ---------- */
      // as + vowels → vowel transformation
      { c: "o’",  l: "as", r: "a" },
      { c: "ai", l: "as", r: "i" },
      { c: "aī", l: "as", r: "ī" },
      { c: "au", l: "as", r: "u" },
      { c: "aū", l: "as", r: "ū" },
      { c: "aṛ", l: "as", r: "ṛ" },
      { c: "aṝ", l: "as", r: "ṝ" },
      { c: "ae", l: "as", r: "e" },
      { c: "aai", l: "as", r: "ai" },
      { c: "ao", l: "as", r: "o" },
      { c: "aau", l: "as", r: "au" },

      // as + consonants → voiced or aspirated form
      { c: "ok",  l: "as", r: "k" },
      { c: "okh", l: "as", r: "kh" },
      { c: "og",  l: "as", r: "g" },
      { c: "ogh", l: "as", r: "gh" },
      { c: "oc",  l: "as", r: "c" },
      { c: "och", l: "as", r: "ch" },
      { c: "oj",  l: "as", r: "j" },
      { c: "ojh", l: "as", r: "jh" },
      { c: "oṭ",  l: "as", r: "ṭ" },
      { c: "oṭh", l: "as", r: "ṭh" },
      { c: "oḍ",  l: "as", r: "ḍ" },
      { c: "oḍh", l: "as", r: "ḍh" },
      { c: "ot",  l: "as", r: "t" },
      { c: "oth", l: "as", r: "th" },
      { c: "od",  l: "as", r: "d" },
      { c: "odh", l: "as", r: "dh" },
      { c: "op",  l: "as", r: "p" },
      { c: "oph", l: "as", r: "ph" },
      { c: "ob",  l: "as", r: "b" },
      { c: "obh", l: "as", r: "bh" },
      { c: "aḥś", l: "as", r: "ś" },
      { c: "aḥṣ", l: "as", r: "ṣ" },
      { c: "aḥs", l: "as", r: "s" },
      { c: "aḥh", l: "as", r: "h" },

      // ās + vowels
      { c: "āa", l: "ās", r: "a" },
      { c: "āā", l: "ās", r: "ā" },
      { c: "āi", l: "ās", r: "i" },
      { c: "āī", l: "ās", r: "ī" },
      { c: "āu", l: "ās", r: "u" },
      { c: "āū", l: "ās", r: "ū" },
      { c: "āṛ", l: "ās", r: "ṛ" },
      { c: "āṝ", l: "ās", r: "ṝ" },
      { c: "āe", l: "ās", r: "e" },
      { c: "āai",l: "ās", r: "ai" },
      { c: "āo", l: "ās", r: "o" },
      { c: "āau",l: "ās", r: "au" },

      { c: "o’", l: "ḥ", r: "a" },       // ḥ + a → o’
      { c: "e’", l: "ḥ", r: "a" },       // optional Vedic form
      { c: "s",  l: "ḥ", r: "s" },       // ḥ + s → s
      { c: "ś",  l: "ḥ", r: "ś" },       // ḥ + ś → ś
      { c: "ṣ",  l: "ḥ", r: "ṣ" },       // ḥ + ṣ → ṣ

      // ḥ before hard consonants (voiceless unaspirated/aspirated stops)
      { c: "kh", l: "ḥ", r: "k" },
      { c: "k",  l: "ḥ", r: "k" },
      { c: "gh", l: "ḥ", r: "g" },
      { c: "g",  l: "ḥ", r: "g" },

      { c: "ch", l: "ḥ", r: "c" },
      { c: "c",  l: "ḥ", r: "c" },
      { c: "jh", l: "ḥ", r: "j" },
      { c: "j",  l: "ḥ", r: "j" },

      { c: "ṭh", l: "ḥ", r: "ṭ" },
      { c: "ṭ",  l: "ḥ", r: "ṭ" },
      { c: "ḍh", l: "ḥ", r: "ḍ" },
      { c: "ḍ",  l: "ḥ", r: "ḍ" },

      { c: "th", l: "ḥ", r: "t" },
      { c: "t",  l: "ḥ", r: "t" },
      { c: "dh", l: "ḥ", r: "d" },
      { c: "d",  l: "ḥ", r: "d" },

      { c: "ph", l: "ḥ", r: "p" },
      { c: "p",  l: "ḥ", r: "p" },
      { c: "bh", l: "ḥ", r: "b" },
      { c: "b",  l: "ḥ", r: "b" },

      // ḥ + h → d dh (as in Rust's rule for h)
      { c: "ddh", l: "ḥ", r: "h" },

      /* ---------- initial “t” ---------- */
      { c:"da", l:"t",  r:"a" },
      { c:"dā", l:"t", r:"ā" },
      { c:"di", l:"t", r:"i" },
      { c:"dī", l:"t", r:"ī" },
      { c:"du", l:"t", r:"u" },
      { c:"dū", l:"t", r:"ū" },
      { c:"dṛ", l:"t", r:"ṛ" },
      { c:"dṝ", l:"t", r:"ṝ" },
      { c:"dḷ", l:"t", r:"ḷ" },
      { c:"dḹ", l:"t", r:"ḹ" },
      { c:"de", l:"t", r:"e" },
      { c:"dai", l:"t", r:"ai" },
      { c:"do", l:"t", r:"o" },
      { c:"dau", l:"t", r:"au" },
      { c:"cch",l:"t",  r:"ś" },
      { c:"nm", l:"t",  r:"m" },

      // -------- initial “n” --------
      { c: "ñj",     l: "n", r: "j" },
      { c: "ñjh",    l: "n", r: "jh" },
      { c: "ñś",     l: "n", r: "ś" },
      { c: "ṇḍ",     l: "n", r: "ḍ" },
      { c: "ṇḍh",    l: "n", r: "ḍh" },
      { c: "n̄l",     l: "n", r: "l" },
      { c: "nśc",    l: "n", r: "c" },
      { c: "nśch",   l: "n", r: "ch" },
      { c: "nṣṭ",    l: "n", r: "ṭ" },
      { c: "nṣṭh",   l: "n", r: "ṭh" },
      { c: "nst",    l: "n", r: "t" },
      { c: "nsth",   l: "n", r: "th" },
      { c: "cch",    l: "n", r: "ś" },
      { c: "ddh",    l: "n", r: "h" },

      // optional fallback
      { c: "n̄ l",     l: "n", r: "l" },
      { c: "ś ś",     l: "n", r: "ś" }, // common assimilation

      // -------- initial “m” --------
      { c: "ṃk",     l: "m", r: "k" },
      { c: "ṃkh",    l: "m", r: "kh" },
      { c: "ṃg",     l: "m", r: "g" },
      { c: "ṃgh",    l: "m", r: "gh" },
      { c: "ṃc",     l: "m", r: "c" },
      { c: "ṃch",    l: "m", r: "ch" },
      { c: "ṃj",     l: "m", r: "j" },
      { c: "ṃjh",    l: "m", r: "jh" },
      { c: "ṃṭ",     l: "m", r: "ṭ" },
      { c: "ṃṭh",    l: "m", r: "ṭh" },
      { c: "ṃḍ",     l: "m", r: "ḍ" },
      { c: "ṃḍh",    l: "m", r: "ḍh" },
      { c: "ṃt",     l: "m", r: "t" },
      { c: "ṃth",    l: "m", r: "th" },
      { c: "ṃd",     l: "m", r: "d" },
      { c: "ṃdh",    l: "m", r: "dh" },
      { c: "ṃp",     l: "m", r: "p" },
      { c: "ṃph",    l: "m", r: "ph" },
      { c: "ṃb",     l: "m", r: "b" },
      { c: "ṃbh",    l: "m", r: "bh" }
    ]