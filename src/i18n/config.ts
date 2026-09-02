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
    eventsBanner: "AfCA will be at ICNC in Berlin and the Nordic Africa EV Summit in Ethiopia — come say hello.",
    nav: {
      home: "Home",
      about: "About",
      intelligence: "Intelligence",
      standards: "Standards",
      community: "Community",
    },
    footer: {
      tagline:
        "African Charging Alliance is an independent, non-profit trade association and ecosystem platform for interoperable EV charging infrastructure across Africa.",
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
    eventsBanner: "AfCA sera présente à l'ICNC à Berlin et au Nordic Africa EV Summit en Éthiopie — venez nous saluer.",
    nav: {
      home: "Accueil",
      about: "À propos",
      intelligence: "Intelligence",
      standards: "Normes",
      community: "Communauté",
    },
    footer: {
      tagline:
        "African Charging Alliance est une association professionnelle indépendante à but non lucratif et une plateforme d'écosystème pour une infrastructure de recharge de véhicules électriques interopérable à travers l'Afrique.",
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
    eventsBanner: "AfCA izitabira ICNC i Berlin n'Inama Nkuru ya Nordic Africa EV Summit muri Etiyopiya — nimuze mudusuhuze.",
    nav: {
      home: "Ahabanza",
      about: "Abo turi bo",
      intelligence: "Ubushakashatsi",
      standards: "Amabwiriza",
      community: "Umuryango",
    },
    footer: {
      tagline:
        "African Charging Alliance ni ishyirahamwe ry'ubucuruzi ryigenga, ritagamije inyungu, n'urubuga rw'urusobe rwo gucyura amamodoka akoresha amashanyarazi bihuriweho muri Afurika.",
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
    eventsBanner: "AfCA kommer att delta på ICNC i Berlin och Nordic Africa EV Summit i Etiopien — kom och säg hej.",
    nav: {
      home: "Hem",
      about: "Om oss",
      intelligence: "Analys",
      standards: "Standarder",
      community: "Gemenskap",
    },
    footer: {
      tagline:
        "African Charging Alliance är en oberoende, ideell branschorganisation och ekosystemplattform för interoperabel laddinfrastruktur för elfordon i hela Afrika.",
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
