import type { Locale } from "./config";

export interface IntelligenceUi {
  heroTitle: string;
  intro: string;
  methodologyLabel: string; // e.g. "Methodology"
}

export interface ReportUi {
  scopeNote: string;
  methodology: string;
  supersededNotice: string;
  viewCurrent: string;
  sources: string;
  accessed: string;
}

export const reportUi: Record<Locale, ReportUi> = {
  en: {
    scopeNote: "Scope note",
    methodology: "methodology",
    supersededNotice: "This report has been superseded by a newer version.",
    viewCurrent: "View the current version",
    sources: "Sources",
    accessed: "accessed",
  },
  fr: {
    scopeNote: "Note de portée",
    methodology: "méthodologie",
    supersededNotice: "Ce rapport a été remplacé par une version plus récente.",
    viewCurrent: "Voir la version actuelle",
    sources: "Sources",
    accessed: "consulté le",
  },
  rw: {
    scopeNote: "Icyitonderwa ku bugari",
    methodology: "uburyo",
    supersededNotice: "Iyi raporo yasimbuwe na verisiyo nshya.",
    viewCurrent: "Reba verisiyo iriho ubu",
    sources: "Amasoko",
    accessed: "byasuwe ku wa",
  },
  sv: {
    scopeNote: "Omfattningsanteckning",
    methodology: "metodik",
    supersededNotice: "Denna rapport har ersatts av en nyare version.",
    viewCurrent: "Visa den aktuella versionen",
    sources: "Källor",
    accessed: "hämtad",
  },
};

export const intelligenceUi: Record<Locale, IntelligenceUi> = {
  en: {
    heroTitle: "Intelligence",
    intro: "Country-by-country market mapping and the Pan-African Interoperability and Reliability Index. Every figure carries a source; superseded reports stay published with a link to the current version rather than being deleted.",
    methodologyLabel: "Methodology",
  },
  fr: {
    heroTitle: "Intelligence",
    intro: "Cartographie du marché pays par pays et Pan-African Interoperability and Reliability Index. Chaque chiffre est sourcé ; les rapports remplacés restent publiés avec un lien vers la version actuelle, jamais supprimés.",
    methodologyLabel: "Méthodologie",
  },
  rw: {
    heroTitle: "Ubushakashatsi",
    intro: "Igereranya ry'isoko rya buri gihugu na Pan-African Interoperability and Reliability Index. Buri mubare ufite isoko ryawo; raporo zasimbuwe zigumana gusohoka hamwe n'ihuza n'verisiyo iriho ubu, ntizisibwa.",
    methodologyLabel: "Uburyo",
  },
  sv: {
    heroTitle: "Analys",
    intro: "Landsvis marknadskartläggning och Pan-African Interoperability and Reliability Index. Varje siffra har en källa; ersatta rapporter förblir publicerade med en länk till den aktuella versionen, de tas aldrig bort.",
    methodologyLabel: "Metodik",
  },
};
