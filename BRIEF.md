# AfCA Website — Claude Code Build Brief

## 2. What AfCA is

African Charging Alliance (AfCA) is an independent, non-profit trade association and ecosystem platform accelerating reliable, scalable, interoperable EV charging infrastructure across Africa. Its registration in Rwanda is in progress (with counsel), and it positions itself as an apolitical source of truth between public policy and technical implementation.

**Note for anyone editing this site: do not state registration as complete anywhere in copy, metadata, or structured data until it is confirmed. Use "registration pending" / "registration in progress" language.**

It convenes Charge Point Operators (CPOs), Electromobility Service Providers (EMSPs), electric utilities, fleet operators, hardware OEMs, and policymakers.

Founders: Kevin Hawkins (former VP of Product Experience, Monta) and Puya Neda (former Head of Roaming and Partnerships, Monta).

The site's job is to make AfCA read as neutral, technically credible, and permanent. It is a standards body, not a startup and not a vendor.

## 3. Stack and dependencies

Approved:

- Astro (static output)
- TypeScript
- Tailwind CSS
- MDX via `@astrojs/mdx`
- `astro:content` collections with Zod schemas
- Fontsource or self-hosted fonts

Ask before adding anything else. Specifically do not add: a CMS, an analytics package, a cookie banner library, a translation service SDK, or any client-side state library.

No browser storage APIs (`localStorage`, `sessionStorage`) anywhere.

## 4. Site architecture

```
/                     Home
/about                Positioning, mission, operating principles, governance
/intelligence         Index landing + country overviews (content collection)
/intelligence/[slug]  Individual reports
/standards            Implementation guidance, glossary, protocol owner links
/summit               Annual Summit
/community            Membership, working groups, participant directory
/contact
```

**Note: the News section (/news, /news/[slug]) described in this brief and
in section 6 below was removed from the build on request. The `news`
content collection no longer exists. Re-adding it means restoring the
collection schema in src/content/config.ts, the pages, and the nav
entries — not just uncommenting, since those were deleted outright.**

Public by default. Working group material may later sit behind membership, but all intelligence outputs and the Index are open. Build no auth.

## 5. Internationalisation

Four locales at launch:

| Code | Language | Native name |
|---|---|---|
| `en` | English | English |
| `fr` | French | Français |
| `rw` | Kinyarwanda | Ikinyarwanda |
| `sv` | Swedish | Svenska |

Portuguese (`pt`) is planned. Structure the i18n so adding a fifth locale is a content task, not a refactor.

Routing: `en` at root (`/about`), others prefixed (`/fr/about`, `/rw/about`, `/sv/about`).

**Critical behaviour — no silent fallback.** English is the language of record. When a page has no translation in the active locale, do not silently serve English. Render the English content with a visible, styled notice above it: "This page is not yet available in Français. You are reading the English version." Localise that notice string itself into each locale.

Translations are human-written and live as sibling content files (`about.en.mdx`, `about.fr.mdx`). Never wire up machine translation, and never use the Google Translate widget, which Google retired for new sites.

Technical content (Index methodology, implementation guidance) is intentionally English-only. Those pages carry a permanent note stating English is the language of record for technical material.

Language switcher: compact dropdown in the header showing the current locale code, listing each language in its own name. Reference pattern is the switcher on juneteenth.es. It must preserve the current page when switching, and be keyboard navigable.

## 6. Content collections

Two collections with enforced schemas. Build should fail on missing required fields, since these encode AfCA's editorial standards.

**`intelligence`** — reports, country overviews, the Index:

```ts
{
  title: string
  locale: 'en' | 'fr' | 'rw' | 'sv'
  publishDate: date
  scopeNote: string        // REQUIRED. Geographic coverage, audience,
                           // methodology limits. Rendered prominently
                           // at the top of every report.
  methodologyVersion: string  // REQUIRED. e.g. "1.2"
  supersededBy?: string    // slug. If set, render a superseded banner.
                           // Never delete superseded guidance.
  sources: Array<{ label: string, url?: string, accessed: date }>
  countries?: string[]
  summary: string
}
```

**`news`**:

```ts
{
  title: string
  locale: 'en' | 'fr' | 'rw' | 'sv'
  publishDate: date
  summary: string
}
```

Superseded reports stay published and reachable, with a banner linking to the current version. This mirrors EVRoaming's version discipline and is a credibility feature, not an edge case.

## 7. Copy to use

Use this verbatim where it fits. Do not write marketing copy of your own; leave `TODO` comments where content is missing.

**Positioning (home hero and /about):**

> African Charging Alliance is an independent, non-profit trade association and ecosystem platform committed to accelerating the deployment of reliable, scalable, and interoperable electric vehicle charging infrastructure across Africa.

> Operating as an apolitical source of truth, AfCA bridges the gap between public policy and ground-level technical implementation and operation. We bring together Charge Point Operators, Electromobility Service Providers, electric utilities, fleet operators, hardware OEMs, and policymakers to build a unified, sustainable charging market.

**Mission (/about):**

> To advance a comprehensive, economically viable, and technically harmonised EV charging ecosystem across Africa through collaborative leadership, open standards, and evidence-based industry guidance.

**Operating principles (/about), as four items:**

- **Open access.** Workshops and training are open to any qualified operator, not closed-door sessions with individual companies.
- **Published outputs.** Deliverables are public guides and reference implementations, not company-specific recommendations.
- **Open call.** Participants self-select against published criteria rather than being hand-picked.
- **Multi-party convening.** We bring competitors together rather than advising one in isolation.

Followed by:

> AfCA does not favour individual technologies or companies. Governance includes at least one board member who is neither founder, so independence is structurally visible rather than merely asserted.

**Initiatives (home and relevant sections):**

1. **Ecosystem intelligence and market mapping** — country-by-country overviews of active CPOs, grid capacity, real-world charging performance, and policy enforcement. Plus the Pan-African Interoperability and Reliability Index, benchmarking charger uptime, hardware compliance, open protocol adoption (OCPI/OICP), and payment integration success.
2. **The AfCA Annual Summit** — curated representation across the value chain, action-oriented workshops rather than panels, and a catalyst for regional initiatives, donor-funded corridor pilots, and harmonised policy recommendations.
3. **Practical implementation and ecosystem support** — market entry and technical advisory delivered as open training and published guidance, plus harmonisation and standards advocacy to governments and regional economic communities (EAC, ECOWAS).

**Standards attribution (footer and /standards).** AfCA never implies ownership of OCPI, OCPP, or OICP. Credit and link the owners:

- OCPI is owned and maintained by the EVRoaming Foundation — evroaming.org
- OCPP and OSCP are owned by the Open Charge Alliance — openchargealliance.org

AfCA's contribution is African implementation guidance and benchmarking.

## 8. Editorial rules the build must enforce

These are AfCA's published standards. Encode them where code can:

- **Scope notes** are required frontmatter and render at the top of every report.
- **Versioning** is required; superseded documents are marked, not deleted.
- **Sourcing**: every figure carries a source and access date. The `sources` array renders as a visible list on report pages.
- **Terminology**: build a glossary page at `/standards` and, where practical, a component that links first use of CPO, EMSP, DSO, CPMS, OCPI, OCPP, OICP to it.
- **Vendor neutrality**: companies appear as factual data points only. No testimonials, no logo walls implying endorsement, no "trusted by" sections. A participant directory is fine; a customer showcase is not.

## 9. Visual direction

Restraint over energy. Standards bodies signal permanence. Avoid the gradient-and-motion language of EV startups.

Constraints:

- Do not use purple. The Open Charge Alliance owns it in this space.
- Do not use a green, gold, and red palette together. It reads as pan-African flag colours and contradicts the apolitical positioning.
- Data-forward: the Index is the flagship asset, so chart, map, and table styling needs a designed system from the outset, not per-page styling.
- Use the full name rather than the acronym in headings and government-facing pages. AfCA reads adjacent to other continental acronyms in policy contexts.

Starting palette proposal, to be replaced when the identity is commissioned. Set these as Tailwind theme tokens so a swap is one file:

```
ink        #14322B   deep green, primary
ink-soft   #2B4A42
accent     #C8792F   warm ochre, used sparingly
paper      #FAF8F4
paper-warm #F2EDE4
rule       #E3DBCF
text       #2B2724
text-muted #6B625A
```

Typography: one geometric sans for headings and UI, one serif for body. Self-host. Body copy should be comfortable at length, since reports are the main content type.

Accessibility: WCAG AA contrast minimum, visible focus states, semantic landmarks, skip link, keyboard-navigable language switcher.

## 10. Out of scope for this build

- Membership payments or auth
- Any CMS integration
- The Index data pipeline (design the presentation layer only, with sample data)
- Newsletter signup
