# Self-hosted font slices

These are Google Fonts' own `latin` (and, for the watermark, `kana`) unicode-range
slices, self-hosted so the page does not ship the full Japanese character sets.
See the comment in `app/layout.tsx` for why.

| File | Family | License |
| --- | --- | --- |
| `zen-kaku-gothic-new-{400,500,700}-latin.woff2` | Zen Kaku Gothic New, (c) Yoshimichi Ohira | SIL Open Font License 1.1 |
| `dela-gothic-one-400-{latin,kana}.woff2` | Dela Gothic One, (c) The Dela Gothic Project Authors | SIL Open Font License 1.1 |

Full license text: https://openfontlicense.org/open-font-license-official-text/

If you add text in a new script (kanji, Cyrillic...), it falls back to the system
font. Add the matching slice here rather than switching back to `next/font/google`.
