# Nabídka spolupráce — Remotion Workflow

Interaktivní prezentační stránka pro potenciálního klienta. Ukazuje dvě cesty
spolupráce (jednorázový setup vs. měsíční retainer), interaktivní otázky
k promyšlení a kalkulačku ceny.

Není to formulář — klient si stránku prochází, kliká na preference
(neodesílají se nikam), a pak se ozve emailem / na hovor.

## Požadavky

- **Node.js ≥ 20.9** (Next 16 nepodporuje Node 18)
- npm / pnpm / yarn

Pokud máš starší Node, nainstaluj Node 20 přes nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"
nvm install 20
```

## Spuštění

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Struktura

```
app/
  layout.tsx     # Root layout, Rubik + Space Grotesk fonty
  page.tsx       # Hlavní stránka (skládá sekce)
  globals.css    # Brand tokens, glass utility, animace

components/
  Nav.tsx        # Fixed nav s glass efektem
  Hero.tsx       # Intro, 3 statistiky
  Process.tsx    # 3 kroky od brandu ke carouselu
  Paths.tsx      # Varianta A vs B s toggle switchem
  Questions.tsx  # 8 otázek s interaktivními volbami
  Pricing.tsx    # Kalkulačka (posty × copywriting) + doplňky
  FAQ.tsx        # 6 nejčastějších otázek (accordion)
  CTA.tsx        # Závěrečný contact block

lib/
  utils.ts       # cn() helper (clsx + tailwind-merge)
```

## Customizace pro klienta

Před odesláním uprav:

1. **`components/Hero.tsx`** — headline, pokud chceš klientovo jméno
2. **`components/Paths.tsx`** — ceny (`price` pole) pokud budeš nabízet něco jiného
3. **`components/Pricing.tsx`** — `basePrice` a `copyMultiplier` konstanty
4. **`components/CTA.tsx`** — email (`zikmundi@pm.me`), telefon, Calendly link
5. **`app/layout.tsx`** — metadata.title pokud chceš jméno klienta v tabu

## Deploy

Stránka je statická (žádné API, žádný stav na serveru). Nejjednodušší:

```bash
npx vercel        # deploy na Vercel
# nebo
npm run build     # local build → .next/
```

## Design tokeny

- Background: `#0a0a0f` s gradient blobs (mint + indigo + deep blue)
- Accent: `#81d2c7` (mint), `#6366f1` (indigo), `#0a369d` (deep blue)
- Font display: Space Grotesk
- Font body: Rubik
- Glass efekt: `.glass` a `.glass-strong` utility v `globals.css`
