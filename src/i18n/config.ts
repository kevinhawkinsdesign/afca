export const locales = ["en", "fr", "rw", "sv"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Locales that get a URL prefix (everything except the default, which
// lives at the root — see BRIEF.md section 5). Used by [locale] dynamic
// routes' getStaticPaths so adding a fifth locale is a one-line change.
export const prefixedLocales = locales.filter((l) => l !== defaultLocale) as Exclude<Locale, "en">[];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  rw: "Ikinyarwanda",
  sv: "Svenska",
};

// UI strings that are always human-translated inline here (not content
// collection material). Add a new locale by adding one entry to `locales`
// above and one row per key below.
export const ui = {
  en: {
    skipToContent: "Skip to content",
    languageLabel: "Language",
    notTranslatedNotice: (lang: string) =>
      `This page is not yet available in ${lang}. You are reading the English version.`,
    technicalEnglishNotice:
      "English is the language of record for technical material. This page is not translated.",
    nav: {
      about: "About",
      intelligence: "Intelligence",
      standards: "Standards",
      summit: "Summit",
      community: "Community",
      contact: "Contact",
    },
    footer: {
      tagline:
        "African Charging Alliance is an independent, non-profit trade association, with registration in Rwanda in progress.",
      standardsNote:
        "OCPI is owned and maintained by the EVRoaming Foundation. OCPP and OSCP are owned by the Open Charge Alliance. AfCA's contribution is African implementation guidance and benchmarking.",
    },
  },
  fr: {
    skipToContent: "Aller au contenu",
    languageLabel: "Langue",
    notTranslatedNotice: (lang: string) =>
      `Cette page n'est pas encore disponible en ${lang}. Vous lisez la version anglaise.`,
    technicalEnglishNotice:
      "L'anglais est la langue de référence pour le contenu technique. Cette page n'est pas traduite.",
    nav: {
      about: "À propos",
      intelligence: "Intelligence",
      standards: "Normes",
      summit: "Sommet",
      community: "Communauté",
      contact: "Contact",
    },
    footer: {
      tagline:
        "African Charging Alliance est une association professionnelle indépendante à but non lucratif, dont l'enregistrement au Rwanda est en cours.",
      standardsNote:
        "OCPI est détenu et maintenu par l'EVRoaming Foundation. OCPP et OSCP sont détenus par l'Open Charge Alliance. La contribution d'AfCA porte sur les lignes directrices de mise en œuvre et le benchmarking pour l'Afrique.",
    },
  },
  rw: {
    skipToContent: "Simbuka ujye ku bikubiyemo",
    languageLabel: "Ururimi",
    notTranslatedNotice: (lang: string) =>
      `Iyi paji ntiraboneka mu ${lang}. Urimo gusoma verisiyo y'Icyongereza.`,
    technicalEnglishNotice:
      "Icyongereza ni ururimi rw'ibanze ku bijyanye n'ibya tekiniki. Iyi paji ntiyahinduwe.",
    nav: {
      about: "Abo turi bo",
      intelligence: "Ubushakashatsi",
      standards: "Amabwiriza",
      summit: "Inama",
      community: "Umuryango",
      contact: "Twandikire",
    },
    footer: {
      tagline:
        "African Charging Alliance ni ishyirahamwe ry'ubucuruzi ryigenga, ritagamije inyungu; iyandikwa ryaryo mu Rwanda riracyategerejwe.",
      standardsNote:
        "OCPI ifitwe kandi igacungwa na EVRoaming Foundation. OCPP na OSCP bifitwe na Open Charge Alliance. Umusanzu wa AfCA ni amabwiriza yo gushyira mu bikorwa n'igereranya muri Afurika.",
    },
  },
  sv: {
    skipToContent: "Hoppa till innehåll",
    languageLabel: "Språk",
    notTranslatedNotice: (lang: string) =>
      `Den här sidan finns ännu inte på ${lang}. Du läser den engelska versionen.`,
    technicalEnglishNotice:
      "Engelska är originalspråket för tekniskt material. Den här sidan är inte översatt.",
    nav: {
      about: "Om oss",
      intelligence: "Analys",
      standards: "Standarder",
      summit: "Toppmöte",
      community: "Gemenskap",
      contact: "Kontakt",
    },
    footer: {
      tagline:
        "African Charging Alliance är en oberoende, ideell branschorganisation vars registrering i Rwanda pågår.",
      standardsNote:
        "OCPI ägs och underhålls av EVRoaming Foundation. OCPP och OSCP ägs av Open Charge Alliance. AfCA:s bidrag är afrikansk implementeringsvägledning och benchmarking.",
    },
  },
} as const satisfies Record<Locale, unknown>;

// Astro.url.pathname includes the configured base path (e.g. "/afca")
// when the site is deployed under a subpath, such as a GitHub Pages
// project site. Strip it before doing any locale-segment logic.
function stripAppBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && pathname.startsWith(base)) {
    const rest = pathname.slice(base.length);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  const seg = stripAppBase(pathname).split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export function stripLocale(pathname: string): string {
  const seg = stripAppBase(pathname).split("/").filter(Boolean);
  if (seg.length && (locales as readonly string[]).includes(seg[0])) {
    seg.shift();
  }
  return "/" + seg.join("/");
}

export function localizePath(pathname: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const bare = stripLocale(pathname);
  const app = locale === defaultLocale ? (bare === "/" ? "/" : bare) : `/${locale}${bare === "/" ? "" : bare}`;
  return `${base}${app}`;
}
