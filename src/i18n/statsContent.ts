import type { Locale } from "./config";

// A hand-curated collection of publicly reported EV/charging stats for
// Africa, replacing the placeholder Intelligence report collection
// (BRIEF.md's own Index data pipeline is still out of scope for this
// build — see content/config.ts). Every figure here carries a real,
// named source; nothing here is AfCA's own research or an invented
// number. Where the reference chart itself carried no visible citation
// (e.g. a "Top 10 markets" dashboard graphic with no named source), the
// figures were deliberately left out rather than repeated as fact.
export interface StatsContent {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  globalEyebrow: string;
  globalHeading: string;
  globalIntro: string;
  g1Number: string;
  g1Label: string;
  g2Number: string;
  g2Label: string;
  g3Number: string;
  g3Label: string;
  g4Number: string;
  g4Label: string;
  globalSource: string;
  globalNote: string;
  opportunityHeading: string;
  opp1Label: string;
  opp1Source: string;
  opp2Label: string;
  opp2Source: string;
  opp3Label: string;
  opp3Source: string;
  spotlightEyebrow: string;
  spotlightHeading: string;
  spotlightIntro: string;
  sp1Label: string;
  sp2Label: string;
  sp3Label: string;
  sp4Label: string;
  spotlightSource: string;
  costsEyebrow: string;
  costsHeading: string;
  cost1Number: string;
  cost1Label: string;
  cost1Source: string;
  cost2Number: string;
  cost2Label: string;
  cost2Source: string;
  cost3Number: string;
  cost3Label: string;
  cost3Source: string;
  pricesEyebrow: string;
  pricesHeading: string;
  priceEntryLabel: string;
  priceEntryRange: string;
  priceMidLabel: string;
  priceMidRange: string;
  pricePremiumLabel: string;
  pricePremiumRange: string;
  pricesSource: string;
  methodologyHeading: string;
  methodologyText: string;
}

export const statsContent: Record<Locale, StatsContent> = {
  en: {
    heroEyebrow: "Public data, cited",
    heroTitle: "Africa's EV charging industry, in numbers",
    heroIntro: "A working collection of publicly reported statistics on electric vehicles and charging infrastructure across Africa, while AfCA's own Pan-African Interoperability and Reliability Index is still in development. Every figure below links back to its original source rather than being restated as AfCA's own finding.",
    globalEyebrow: "Global context",
    globalHeading: "Where the global EV market is headed",
    globalIntro: "For context beyond Africa: the worldwide electric vehicle market, as tracked by one of the sector's most-cited research firms. This particular report doesn't break out African figures on its own — see the Africa-specific data below for that.",
    g1Number: "$1.15T → $1.86T",
    g1Label: "projected global EV market growth, 2025–2035",
    g2Number: "5.0%",
    g2Label: "global EV market CAGR, 2025–2035",
    g3Number: "40%+",
    g3Label: "share of the global EV market held by Asia Pacific, the largest region",
    g4Number: "15.1%",
    g4Label: "CAGR for electric commercial vehicles, 2025–2035 — the fastest-growing vehicle segment",
    globalSource: "Source: MarketsandMarkets, \"Electric Vehicle Market Size, Share & Analysis\" (Report AT 4907, Oct 2025)",
    globalNote: "BYD leads the global EV market, followed by Tesla.",
    opportunityHeading: "The opportunity",
    opp1Label: "of African countries have 10+ public EV charging stations today",
    opp1Source: "Source: iAfrikan Insights",
    opp2Label: "projected CAGR for Africa's EV market, 2026–2031",
    opp2Source: "Source: Mordor Intelligence",
    opp3Label: "public charging stations recorded in South Africa, the continent's largest network",
    opp3Source: "Source: iAfrikan Insights",
    spotlightEyebrow: "Country spotlight",
    spotlightHeading: "Ghana, early 2024",
    spotlightIntro: "The most complete publicly sourced country-level snapshot available to us — reproduced here as an example of the granularity we hope to extend across the continent.",
    sp1Label: "EVs on the road",
    sp2Label: "public charging stations in Accra",
    sp3Label: "rapid charging stations planned over the next 5 years",
    sp4Label: "EV industry professionals across 5 African countries",
    spotlightSource: "Source: EV24.africa",
    costsEyebrow: "Running costs",
    costsHeading: "What driving electric actually saves",
    cost1Number: "60–70%",
    cost1Label: "lower monthly running costs than an equivalent petrol vehicle",
    cost1Source: "Source: EV24.africa",
    cost2Number: "$2,138",
    cost2Label: "annual savings example from a UNDP Ghana pilot project",
    cost2Source: "Source: UNDP Ghana pilot project",
    cost3Number: "5.23t",
    cost3Label: "CO₂ emissions avoided per EV, annually",
    cost3Source: "Source: EV24.africa",
    pricesEyebrow: "Market entry",
    pricesHeading: "What an EV costs, by segment",
    priceEntryLabel: "Entry-level",
    priceEntryRange: "$18,000 – $30,000",
    priceMidLabel: "Mid-range",
    priceMidRange: "$30,000 – $45,000",
    pricePremiumLabel: "Premium",
    pricePremiumRange: "$45,000 – $67,000+",
    pricesSource: "Ghana market. Source: EV24.africa",
    methodologyHeading: "About this page",
    methodologyText: "These figures are drawn from public reporting by third parties — iAfrikan Insights, Mordor Intelligence, EV24.africa, and UNDP — not from AfCA's own primary research. We cite each source rather than present the numbers as our own findings, and we'll retire this page in favour of AfCA's own Pan-African Interoperability and Reliability Index once that methodology and dataset exist.",
  },
  fr: {
    heroEyebrow: "Données publiques, sourcées",
    heroTitle: "L'industrie africaine de la recharge de véhicules électriques, en chiffres",
    heroIntro: "Une collection évolutive de statistiques publiées publiquement sur les véhicules électriques et l'infrastructure de recharge à travers l'Afrique, en attendant que le Pan-African Interoperability and Reliability Index d'AfCA soit finalisé. Chaque chiffre ci-dessous renvoie à sa source originale plutôt que d'être présenté comme une conclusion propre à AfCA.",
    globalEyebrow: "Contexte mondial",
    globalHeading: "Où va le marché mondial des véhicules électriques",
    globalIntro: "Pour situer l'Afrique dans un contexte plus large : le marché mondial des véhicules électriques, suivi par l'un des cabinets de recherche les plus cités du secteur. Ce rapport en particulier ne détaille pas de chiffres propres à l'Afrique — voir les données spécifiques à l'Afrique ci-dessous pour cela.",
    g1Number: "1,15 T$ → 1,86 T$",
    g1Label: "croissance projetée du marché mondial des véhicules électriques, 2025-2035",
    g2Number: "5,0 %",
    g2Label: "TCAC du marché mondial des véhicules électriques, 2025-2035",
    g3Number: "40 %+",
    g3Label: "part du marché mondial des véhicules électriques détenue par l'Asie-Pacifique, la plus grande région",
    g4Number: "15,1 %",
    g4Label: "TCAC des véhicules utilitaires électriques, 2025-2035 — le segment qui croît le plus vite",
    globalSource: "Source : MarketsandMarkets, « Electric Vehicle Market Size, Share & Analysis » (rapport AT 4907, oct. 2025)",
    globalNote: "BYD est en tête du marché mondial des véhicules électriques, suivi de Tesla.",
    opportunityHeading: "L'opportunité",
    opp1Label: "des pays africains disposent aujourd'hui d'au moins 10 stations de recharge publiques",
    opp1Source: "Source : iAfrikan Insights",
    opp2Label: "TCAC projeté pour le marché africain des véhicules électriques, 2026-2031",
    opp2Source: "Source : Mordor Intelligence",
    opp3Label: "stations de recharge publiques recensées en Afrique du Sud, le plus grand réseau du continent",
    opp3Source: "Source : iAfrikan Insights",
    spotlightEyebrow: "Coup de projecteur pays",
    spotlightHeading: "Ghana, début 2026",
    spotlightIntro: "L'aperçu au niveau national le plus complet dont nous disposions à partir de sources publiques — reproduit ici comme exemple de la granularité que nous espérons étendre à l'ensemble du continent.",
    sp1Label: "véhicules électriques en circulation",
    sp2Label: "stations de recharge publiques à Accra",
    sp3Label: "stations de recharge rapide prévues sur les 5 prochaines années",
    sp4Label: "professionnels du secteur EV dans 5 pays africains",
    spotlightSource: "Source : EV24.africa",
    costsEyebrow: "Coûts d'usage",
    costsHeading: "Ce que la recharge électrique fait réellement économiser",
    cost1Number: "60–70 %",
    cost1Label: "de coûts d'usage mensuels en moins qu'un véhicule à essence équivalent",
    cost1Source: "Source : EV24.africa",
    cost2Number: "2 138 $",
    cost2Label: "d'économies annuelles, exemple issu d'un projet pilote PNUD au Ghana",
    cost2Source: "Source : projet pilote PNUD au Ghana",
    cost3Number: "5,23 t",
    cost3Label: "d'émissions de CO₂ évitées par véhicule électrique, chaque année",
    cost3Source: "Source : EV24.africa",
    pricesEyebrow: "Entrée sur le marché",
    pricesHeading: "Le prix d'un véhicule électrique, par segment",
    priceEntryLabel: "Entrée de gamme",
    priceEntryRange: "18 000 $ – 30 000 $",
    priceMidLabel: "Milieu de gamme",
    priceMidRange: "30 000 $ – 45 000 $",
    pricePremiumLabel: "Haut de gamme",
    pricePremiumRange: "45 000 $ – 67 000 $ et plus",
    pricesSource: "Marché ghanéen. Source : EV24.africa",
    methodologyHeading: "À propos de cette page",
    methodologyText: "Ces chiffres proviennent de rapports publics de tiers — iAfrikan Insights, Mordor Intelligence, EV24.africa et le PNUD — et non de la recherche propre d'AfCA. Nous citons chaque source plutôt que de présenter ces chiffres comme nos propres conclusions, et nous retirerons cette page au profit du Pan-African Interoperability and Reliability Index d'AfCA une fois cette méthodologie et ce jeu de données disponibles.",
  },
  rw: {
    heroEyebrow: "Amakuru rusange, afite isoko",
    heroTitle: "Urusobe rw'icyuzuzo cy'amamodoka akoresha amashanyarazi muri Afurika, mu mibare",
    heroIntro: "Urutonde rukomeza kuvugururwa rw'imibare yatangajwe ku mugaragaro ku byerekeye amamodoka akoresha amashanyarazi n'ibikorwaremezo by'icyuzuzo muri Afurika, mu gihe Pan-African Interoperability and Reliability Index ya AfCA ikirimo gutegurwa. Buri mubare hano ufite isoko ryawo bwite aho kuba wagaragazwa nk'ubushakashatsi bwa AfCA ubwayo.",
    globalEyebrow: "Uko isoko mpuzamahanga rimeze",
    globalHeading: "Aho isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi rijya",
    globalIntro: "Kugira ngo tumenye aho Afurika ihagaze ku rwego rw'isi: isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi, rikurikiranwa n'imwe mu bigo by'ubushakashatsi bikunze kuvugwa muri uru rwego. Iyi raporo ubwayo ntabwo itanga imibare yihariye ya Afurika — reba amakuru yihariye Afurika ari hepfo kuri ibyo.",
    g1Number: "$1.15T → $1.86T",
    g1Label: "iterambere riteganyijwe ry'isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi, 2025–2035",
    g2Number: "5.0%",
    g2Label: "igipimo cy'iterambere (CAGR) ry'isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi, 2025–2035",
    g3Number: "40%+",
    g3Label: "igice cy'isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi gifitwe na Aziya y'Ifasi ya Pasifika, akarere kanini",
    g4Number: "15.1%",
    g4Label: "CAGR y'amamodoka y'ubucuruzi akoresha amashanyarazi, 2025–2035 — icyiciro gikura vuba kurusha ibindi",
    globalSource: "Isoko: MarketsandMarkets, \"Electric Vehicle Market Size, Share & Analysis\" (Raporo AT 4907, Ukwakira 2025)",
    globalNote: "BYD niyo iyoboye isoko mpuzamahanga ry'amamodoka akoresha amashanyarazi, ikurikirwa na Tesla.",
    opportunityHeading: "Amahirwe ariho",
    opp1Label: "by'ibihugu bya Afurika bifite ubu sitasiyo z'icyuzuzo z'abaturage zirenga 10",
    opp1Source: "Isoko: iAfrikan Insights",
    opp2Label: "igipimo cy'iterambere ryitezwe (CAGR) ku isoko ry'amamodoka akoresha amashanyarazi muri Afurika, 2026–2031",
    opp2Source: "Isoko: Mordor Intelligence",
    opp3Label: "sitasiyo z'icyuzuzo z'abaturage zanditswe muri Afurika y'Epfo, urusobe runini ku mugabane",
    opp3Source: "Isoko: iAfrikan Insights",
    spotlightEyebrow: "Igihugu cyihariye",
    spotlightHeading: "Ghana, mu ntangiriro za 2026",
    spotlightIntro: "Incamake y'igihugu yuzuye kurusha izindi tubonye mu masoko rusange — yasubiwemo hano nk'urugero rw'ubunini bwose twifuza kwaguka muri Afurika hose.",
    sp1Label: "amamodoka akoresha amashanyarazi akora",
    sp2Label: "sitasiyo z'icyuzuzo z'abaturage muri Accra",
    sp3Label: "sitasiyo z'icyuzuzo cy'ihuse ziteganyijwe mu myaka 5 iri imbere",
    sp4Label: "abanyabuhanga mu rwego rw'amamodoka akoresha amashanyarazi mu bihugu 5 bya Afurika",
    spotlightSource: "Isoko: EV24.africa",
    costsEyebrow: "Ikoreshwa ry'amafaranga",
    costsHeading: "Icyo gutwara imodoka y'amashanyarazi kizigama by'ukuri",
    cost1Number: "60–70%",
    cost1Label: "amafaranga make yo gukoresha ku kwezi ugereranyije n'imodoka isanzwe ikoresha lisansi",
    cost1Source: "Isoko: EV24.africa",
    cost2Number: "$2,138",
    cost2Label: "urugero rw'ubuzigame bw'umwaka buva ku mushinga w'igerageza wa UNDP muri Ghana",
    cost2Source: "Isoko: umushinga w'igerageza wa UNDP muri Ghana",
    cost3Number: "toni 5.23",
    cost3Label: "byo kwirinda gusohora CO₂ buri modoka y'amashanyarazi, buri mwaka",
    cost3Source: "Isoko: EV24.africa",
    pricesEyebrow: "Kwinjira ku isoko",
    pricesHeading: "Igiciro cy'imodoka y'amashanyarazi, hakurikijwe icyiciro",
    priceEntryLabel: "Icyiciro cyo hasi",
    priceEntryRange: "$18,000 – $30,000",
    priceMidLabel: "Icyiciro cyo hagati",
    priceMidRange: "$30,000 – $45,000",
    pricePremiumLabel: "Icyiciro cyo hejuru",
    pricePremiumRange: "$45,000 – $67,000+",
    pricesSource: "Isoko rya Ghana. Isoko: EV24.africa",
    methodologyHeading: "Ibyerekeye iyi paji",
    methodologyText: "Iyi mibare ikomoka ku makuru rusange yatanzwe n'izindi nzego — iAfrikan Insights, Mordor Intelligence, EV24.africa, na UNDP — ntabwo ari ubushakashatsi bwa AfCA ubwayo. Dukoresha isoko rya buri mubare aho kuwugaragaza nk'ibyavuye mu bushakashatsi bwacu, kandi tuzavana iyi paji igihe Pan-African Interoperability and Reliability Index ya AfCA izaba yuzuye.",
  },
  sv: {
    heroEyebrow: "Offentlig data, källbelagd",
    heroTitle: "Afrikas elbilsladdningsindustri, i siffror",
    heroIntro: "En växande samling offentligt rapporterad statistik om elfordon och laddinfrastruktur i hela Afrika, medan AfCA:s eget Pan-African Interoperability and Reliability Index fortfarande utvecklas. Varje siffra nedan länkar tillbaka till sin ursprungliga källa i stället för att presenteras som AfCA:s eget resultat.",
    globalEyebrow: "Global kontext",
    globalHeading: "Vart den globala elbilsmarknaden är på väg",
    globalIntro: "För kontext utöver Afrika: den globala marknaden för elfordon, som följs av ett av branschens mest citerade researchbolag. Just den här rapporten bryter inte ut afrikanska siffror separat — se den Afrikaspecifika datan nedan för det.",
    g1Number: "1,15 biljoner $ → 1,86 biljoner $",
    g1Label: "förväntad tillväxt för den globala elbilsmarknaden, 2025–2035",
    g2Number: "5,0 %",
    g2Label: "global CAGR för elbilsmarknaden, 2025–2035",
    g3Number: "40 %+",
    g3Label: "andel av den globala elbilsmarknaden som innehas av Asien-Stillahavsregionen, den största regionen",
    g4Number: "15,1 %",
    g4Label: "CAGR för elektriska nyttofordon, 2025–2035 — det snabbast växande fordonssegmentet",
    globalSource: "Källa: MarketsandMarkets, \"Electric Vehicle Market Size, Share & Analysis\" (rapport AT 4907, okt 2025)",
    globalNote: "BYD leder den globala elbilsmarknaden, följt av Tesla.",
    opportunityHeading: "Möjligheten",
    opp1Label: "av Afrikas länder har idag 10 eller fler publika laddstationer",
    opp1Source: "Källa: iAfrikan Insights",
    opp2Label: "förväntad CAGR för Afrikas elbilsmarknad, 2026–2031",
    opp2Source: "Källa: Mordor Intelligence",
    opp3Label: "publika laddstationer registrerade i Sydafrika, kontinentens största nätverk",
    opp3Source: "Källa: iAfrikan Insights",
    spotlightEyebrow: "Landet i fokus",
    spotlightHeading: "Ghana, i början av 2026",
    spotlightIntro: "Den mest kompletta offentligt källbelagda landsöversikten vi haft tillgång till — återgiven här som ett exempel på den detaljnivå vi hoppas kunna utvidga till hela kontinenten.",
    sp1Label: "elfordon på vägarna",
    sp2Label: "publika laddstationer i Accra",
    sp3Label: "snabbladdstationer planerade de kommande 5 åren",
    sp4Label: "yrkesverksamma inom elbilsbranschen i 5 afrikanska länder",
    spotlightSource: "Källa: EV24.africa",
    costsEyebrow: "Driftskostnader",
    costsHeading: "Vad elkörning faktiskt sparar",
    cost1Number: "60–70 %",
    cost1Label: "lägre månatliga driftskostnader än ett motsvarande bensinfordon",
    cost1Source: "Källa: EV24.africa",
    cost2Number: "2 138 $",
    cost2Label: "exempel på årlig besparing från ett UNDP-pilotprojekt i Ghana",
    cost2Source: "Källa: UNDP:s pilotprojekt i Ghana",
    cost3Number: "5,23 ton",
    cost3Label: "CO₂-utsläpp som undviks per elfordon, årligen",
    cost3Source: "Källa: EV24.africa",
    pricesEyebrow: "Marknadsinträde",
    pricesHeading: "Vad ett elfordon kostar, per segment",
    priceEntryLabel: "Instegsnivå",
    priceEntryRange: "18 000 $ – 30 000 $",
    priceMidLabel: "Mellansegment",
    priceMidRange: "30 000 $ – 45 000 $",
    pricePremiumLabel: "Premium",
    pricePremiumRange: "45 000 $ – 67 000 $ eller mer",
    pricesSource: "Ghanas marknad. Källa: EV24.africa",
    methodologyHeading: "Om den här sidan",
    methodologyText: "Dessa siffror kommer från offentlig rapportering av tredje part — iAfrikan Insights, Mordor Intelligence, EV24.africa och UNDP — inte från AfCA:s egen primärforskning. Vi anger källan för varje siffra i stället för att presentera dem som våra egna resultat, och vi kommer att fasa ut den här sidan till förmån för AfCA:s eget Pan-African Interoperability and Reliability Index när den metodiken och datamängden finns.",
  },
};
