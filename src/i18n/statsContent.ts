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
  forecastEyebrow: string;
  forecastHeading: string;
  forecastIntro: string;
  f1Number: string;
  f1Label: string;
  f2Number: string;
  f2Label: string;
  f3Number: string;
  f3Label: string;
  f4Number: string;
  f4Label: string;
  forecastSource: string;
  segmentEyebrow: string;
  segmentHeading: string;
  segmentIntro: string;
  sg1Number: string;
  sg1Label: string;
  sg2Number: string;
  sg2Label: string;
  sg3Number: string;
  sg3Label: string;
  sg4Number: string;
  sg4Label: string;
  segmentSource: string;
  signalsEyebrow: string;
  signalsHeading: string;
  signalsIntro: string;
  sig1Heading: string;
  sig1Text: string;
  sig2Heading: string;
  sig2Text: string;
  sig3Heading: string;
  sig3Text: string;
  sig4Heading: string;
  sig4Text: string;
  sig5Heading: string;
  sig5Text: string;
  signalsSource: string;
  tailwindsEyebrow: string;
  tailwindsHeading: string;
  tailwindsIntro: string;
  d0Heading: string;
  d0Geo: string;
  d0Timeline: string;
  d1Heading: string;
  d1Geo: string;
  d1Timeline: string;
  d2Heading: string;
  d2Geo: string;
  d2Timeline: string;
  d3Heading: string;
  d3Geo: string;
  d3Timeline: string;
  d4Heading: string;
  d4Geo: string;
  d4Timeline: string;
  d5Heading: string;
  d5Geo: string;
  d5Timeline: string;
  tailwindsSource: string;
  restraintsEyebrow: string;
  restraintsHeading: string;
  restraintsIntro: string;
  r1Heading: string;
  r1Impact: string;
  r1Geo: string;
  r1Timeline: string;
  r2Heading: string;
  r2Impact: string;
  r2Geo: string;
  r2Timeline: string;
  r3Heading: string;
  r3Impact: string;
  r3Geo: string;
  r3Timeline: string;
  r4Heading: string;
  r4Impact: string;
  r4Geo: string;
  r4Timeline: string;
  restraintsSource: string;
  restraintsGeoLabel: string;
  restraintsTimelineLabel: string;
  leadersEyebrow: string;
  leadersHeading: string;
  leadersIntro: string;
  leadersSource: string;
  adviceEyebrow: string;
  adviceHeading: string;
  adviceIntro: string;
  adv1Heading: string;
  adv1Text: string;
  adv2Heading: string;
  adv2Text: string;
  adv3Heading: string;
  adv3Text: string;
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
    forecastEyebrow: "Africa-specific forecast",
    forecastHeading: "Africa's EV market, sized and forecast",
    forecastIntro: "A dedicated Africa report from the same research firm behind the CAGR figure above, with country- and segment-level detail.",
    f1Number: "$0.45B → $0.69B → $5.99B",
    f1Label: "Africa EV market size, 2025 → 2026 → 2031",
    f2Number: "29.05%",
    f2Label: "of 2025 Africa EV market revenue, led by Ghana — the continent's largest single-country share",
    f3Number: "56.90%",
    f3Label: "CAGR through 2031 for Ethiopia, the fastest-growing country market",
    f4Number: "78.7%",
    f4Label: "of 2025 Africa EV market revenue from battery-electric vehicles",
    forecastSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    segmentEyebrow: "Segment shifts",
    segmentHeading: "Where the growth is inside the market",
    segmentIntro: "The same Africa-specific forecast, broken down by vehicle type, battery chemistry, and charging method.",
    sg1Number: "61.25%",
    sg1Label: "share of 2025 Africa EV market revenue held by passenger cars, the largest vehicle-type segment",
    sg2Number: "57.90%",
    sg2Label: "CAGR for two- and three-wheelers through 2031, the fastest-growing vehicle type",
    sg3Number: "50.88%",
    sg3Label: "share of 2025 battery chemistry held by nickel-manganese-cobalt (NMC)",
    sg4Number: "67.95%",
    sg4Label: "share of 2025 charging done via AC slow charging, while DC fast charging grows faster (55.40% CAGR to 2031)",
    segmentSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    signalsEyebrow: "Signals to watch",
    signalsHeading: "What's driving the numbers",
    signalsIntro: "Five developments the same forecast report calls out as reasons behind the growth above.",
    sig1Heading: "Ghana's zero-tariff window",
    sig1Text: "An eight-year exemption on import tariffs for EVs, in effect since early 2025, is designed to remove the single biggest cost barrier to adoption.",
    sig2Heading: "Battery manufacturing arrives in Africa",
    sig2Text: "Morocco's USD 6.5 billion Gotion gigafactory and BTR's USD 366 million cathode plant point to the first stages of local battery-cell production, rather than importing finished packs.",
    sig3Heading: "South Africa's green-hydrogen bet",
    sig3Text: "A EUR 4.7 billion program leveraging the country's platinum reserves is the basis for a parallel fuel-cell pathway alongside battery-electric vehicles.",
    sig4Heading: "Battery-swap fintech at scale",
    sig4Text: "Spiro's network has logged 9 million battery swaps and pairs 22,000 e-bikes with 600 swap stations, funding expansion through pay-per-swap revenue rather than upfront vehicle financing.",
    sig5Heading: "Kenya's boda-boda opportunity",
    sig5Text: "Kenya's 2.2 million motorcycle taxis could cut transport emissions by up to 85% if electrified, running on the country's largely renewable grid.",
    signalsSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    tailwindsEyebrow: "Tailwinds",
    tailwindsHeading: "What's pushing growth further",
    tailwindsIntro: "The same report's drivers analysis, ranked by estimated boost to the CAGR forecast above.",
    d0Heading: "Zero-duty import incentives (+12.5%)",
    d0Geo: "Ethiopia, Ghana, South Africa, Rwanda",
    d0Timeline: "Short term (≤2 years)",
    d1Heading: "Cheaper batteries, mass-market models (+10.8%)",
    d1Geo: "Concentrated impact in Morocco, South Africa",
    d1Timeline: "Medium term (2–4 years)",
    d2Heading: "Mineral supply-chain push (+9.2%)",
    d2Geo: "DRC, Zambia, Morocco, Madagascar",
    d2Timeline: "Long term (≥4 years)",
    d3Heading: "E-motorcycle leapfrog (+8.7%)",
    d3Geo: "Kenya, Nigeria, Rwanda, Ghana",
    d3Timeline: "Short term (≤2 years)",
    d4Heading: "Battery-swap pricing (+7.3%)",
    d4Geo: "Kenya, Nigeria, Benin, Togo, Rwanda",
    d4Timeline: "Medium term (2–4 years)",
    d5Heading: "OEM-fintech micro-leasing (+6.1%)",
    d5Geo: "Nigeria, Kenya, Ghana",
    d5Timeline: "Medium term (2–4 years)",
    tailwindsSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    restraintsEyebrow: "Headwinds",
    restraintsHeading: "What could slow this down",
    restraintsIntro: "The same report's restraints analysis, ranked by estimated drag on the CAGR forecast above.",
    r1Heading: "Charging cap-ex burden (−8.4%)",
    r1Impact: "−8.4% impact on CAGR forecast",
    r1Geo: "Sub-Saharan Africa excluding South Africa",
    r1Timeline: "Long term (≥4 years)",
    r2Heading: "Fragile rural grids (−7.1%)",
    r2Impact: "−7.1% impact on CAGR forecast",
    r2Geo: "Rural areas across Nigeria, Kenya, Ghana, Tanzania",
    r2Timeline: "Medium term (2–4 years)",
    r3Heading: "Used ICE vehicle flood (−5.8%)",
    r3Impact: "−5.8% impact on CAGR forecast",
    r3Geo: "West and East Africa",
    r3Timeline: "Short term (≤2 years)",
    r4Heading: "Weak EV resale values (−4.3%)",
    r4Impact: "−4.3% impact on CAGR forecast",
    r4Geo: "South Africa, Morocco, Kenya",
    r4Timeline: "Medium term (2–4 years)",
    restraintsSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    restraintsGeoLabel: "Geographic relevance",
    restraintsTimelineLabel: "Impact timeline",
    leadersEyebrow: "Who's active",
    leadersHeading: "Africa's EV industry leaders",
    leadersIntro: "Named in the same report as the leading manufacturers by revenue across the continent, in a market that sits between consolidated and fragmented — no single player dominates outright.",
    leadersSource: "Source: Mordor Intelligence, \"Africa Electric Vehicle Market\" report (2026–2031)",
    adviceEyebrow: "AfCA's take",
    adviceHeading: "What this means for operators, cities, and investors",
    adviceIntro: "Our own reading of the data above — interpretation, not a new source, and worth weighing against local context before acting on it.",
    adv1Heading: "Back two- and three-wheelers first",
    adv1Text: "It's the fastest-growing vehicle segment and needs the least charging infrastructure to reach meaningful scale — a lower-risk entry point than passenger-car fleets.",
    adv2Heading: "Design for AC today, DC tomorrow",
    adv2Text: "Most charging happening now is AC slow charging. DC fast charging is growing faster off a smaller base — plan sites and standards so today's AC network can accept DC upgrades later without a rebuild.",
    adv3Heading: "Set interoperability standards before battery localization lands",
    adv3Text: "Domestic battery-cell investment is still early. Agreeing on charging and battery-swap standards now is easier than retrofitting them once local manufacturing capacity is built out.",
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
    forecastEyebrow: "Prévisions spécifiques à l'Afrique",
    forecastHeading: "Le marché africain des véhicules électriques, chiffré et projeté",
    forecastIntro: "Un rapport dédié à l'Afrique du même cabinet de recherche que le chiffre de TCAC ci-dessus, avec un détail par pays et par segment.",
    f1Number: "0,45 Md$ → 0,69 Md$ → 5,99 Md$",
    f1Label: "taille du marché africain des véhicules électriques, 2025 → 2026 → 2031",
    f2Number: "29,05 %",
    f2Label: "des revenus du marché africain des véhicules électriques en 2025, menés par le Ghana — la plus grande part parmi les pays du continent",
    f3Number: "56,90 %",
    f3Label: "TCAC jusqu'en 2031 pour l'Éthiopie, le marché national à la croissance la plus rapide",
    f4Number: "78,7 %",
    f4Label: "des revenus du marché africain des véhicules électriques en 2025 provenant des véhicules 100 % électriques",
    forecastSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    segmentEyebrow: "Évolution des segments",
    segmentHeading: "Où se trouve la croissance à l'intérieur du marché",
    segmentIntro: "Les mêmes prévisions spécifiques à l'Afrique, ventilées par type de véhicule, chimie de batterie et mode de recharge.",
    sg1Number: "61,25 %",
    sg1Label: "part des revenus du marché africain des véhicules électriques en 2025 détenue par les voitures particulières, le plus grand segment par type de véhicule",
    sg2Number: "57,90 %",
    sg2Label: "TCAC des deux et trois-roues jusqu'en 2031, le type de véhicule à la croissance la plus rapide",
    sg3Number: "50,88 %",
    sg3Label: "part de la chimie des batteries en 2025 détenue par le nickel-manganèse-cobalt (NMC)",
    sg4Number: "67,95 %",
    sg4Label: "part de la recharge en 2025 assurée par la recharge lente en courant alternatif (AC), la recharge rapide DC croissant plus vite (TCAC de 55,40 % jusqu'en 2031)",
    segmentSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    signalsEyebrow: "Signaux à suivre",
    signalsHeading: "Ce qui explique ces chiffres",
    signalsIntro: "Cinq développements cités dans le même rapport de prévision comme moteurs de la croissance ci-dessus.",
    sig1Heading: "L'exonération tarifaire du Ghana",
    sig1Text: "Une exonération de huit ans sur les droits de douane à l'importation des véhicules électriques, en vigueur depuis début 2025, vise à lever le principal frein financier à l'adoption.",
    sig2Heading: "La fabrication de batteries arrive en Afrique",
    sig2Text: "La giga-usine Gotion de 6,5 milliards de dollars au Maroc et l'usine de cathodes de 366 millions de dollars de BTR marquent les premières étapes d'une production locale de cellules de batterie, plutôt que l'importation de blocs finis.",
    sig3Heading: "Le pari de l'hydrogène vert sud-africain",
    sig3Text: "Un programme de 4,7 milliards d'euros s'appuyant sur les réserves de platine du pays constitue la base d'une filière pile à combustible parallèle aux véhicules 100 % électriques.",
    sig4Heading: "L'échange de batteries porté par la fintech, à grande échelle",
    sig4Text: "Le réseau de Spiro a enregistré 9 millions d'échanges de batteries et associe 22 000 vélos électriques à 600 stations d'échange, finançant son expansion par les revenus à l'échange plutôt que par le financement initial du véhicule.",
    sig5Heading: "L'opportunité des boda-boda au Kenya",
    sig5Text: "Les 2,2 millions de motos-taxis du Kenya pourraient réduire les émissions du secteur des transports jusqu'à 85 % si elles étaient électrifiées, sur un réseau électrique largement renouvelable.",
    signalsSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    tailwindsEyebrow: "Vents favorables",
    tailwindsHeading: "Ce qui pousse la croissance plus loin",
    tailwindsIntro: "L'analyse des moteurs du même rapport, classés selon leur impact positif estimé sur les prévisions de TCAC ci-dessus.",
    d0Heading: "Exonération des droits d'importation (+12,5 %)",
    d0Geo: "Éthiopie, Ghana, Afrique du Sud, Rwanda",
    d0Timeline: "Court terme (≤ 2 ans)",
    d1Heading: "Batteries moins chères, modèles grand public (+10,8 %)",
    d1Geo: "Impact concentré au Maroc, en Afrique du Sud",
    d1Timeline: "Moyen terme (2-4 ans)",
    d2Heading: "Essor de la chaîne d'approvisionnement en minerais (+9,2 %)",
    d2Geo: "RDC, Zambie, Maroc, Madagascar",
    d2Timeline: "Long terme (≥ 4 ans)",
    d3Heading: "Saut technologique des e-motos (+8,7 %)",
    d3Geo: "Kenya, Nigeria, Rwanda, Ghana",
    d3Timeline: "Court terme (≤ 2 ans)",
    d4Heading: "Tarification de l'échange de batteries (+7,3 %)",
    d4Geo: "Kenya, Nigeria, Bénin, Togo, Rwanda",
    d4Timeline: "Moyen terme (2-4 ans)",
    d5Heading: "Micro-crédit-bail constructeur-fintech (+6,1 %)",
    d5Geo: "Nigeria, Kenya, Ghana",
    d5Timeline: "Moyen terme (2-4 ans)",
    tailwindsSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    restraintsEyebrow: "Vents contraires",
    restraintsHeading: "Ce qui pourrait ralentir cette croissance",
    restraintsIntro: "L'analyse des freins du même rapport, classés selon leur impact estimé sur les prévisions de TCAC ci-dessus.",
    r1Heading: "Poids des investissements en recharge (−8,4 %)",
    r1Impact: "−8,4 % d'impact sur la prévision de TCAC",
    r1Geo: "Afrique subsaharienne hors Afrique du Sud",
    r1Timeline: "Long terme (≥ 4 ans)",
    r2Heading: "Fragilité des réseaux électriques ruraux (−7,1 %)",
    r2Impact: "−7,1 % d'impact sur la prévision de TCAC",
    r2Geo: "Zones rurales du Nigeria, du Kenya, du Ghana, de Tanzanie",
    r2Timeline: "Moyen terme (2-4 ans)",
    r3Heading: "Afflux de véhicules thermiques d'occasion (−5,8 %)",
    r3Impact: "−5,8 % d'impact sur la prévision de TCAC",
    r3Geo: "Afrique de l'Ouest et de l'Est",
    r3Timeline: "Court terme (≤ 2 ans)",
    r4Heading: "Faible valeur de revente des véhicules électriques (−4,3 %)",
    r4Impact: "−4,3 % d'impact sur la prévision de TCAC",
    r4Geo: "Afrique du Sud, Maroc, Kenya",
    r4Timeline: "Moyen terme (2-4 ans)",
    restraintsSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    restraintsGeoLabel: "Pertinence géographique",
    restraintsTimelineLabel: "Échéance de l'impact",
    leadersEyebrow: "Qui est actif",
    leadersHeading: "Les leaders de l'industrie EV en Afrique",
    leadersIntro: "Cités dans le même rapport comme les principaux constructeurs par chiffre d'affaires sur le continent, sur un marché entre consolidation et fragmentation — aucun acteur ne domine à lui seul.",
    leadersSource: "Source : Mordor Intelligence, rapport « Africa Electric Vehicle Market » (2026-2031)",
    adviceEyebrow: "L'avis d'AfCA",
    adviceHeading: "Ce que cela signifie pour les opérateurs, les villes et les investisseurs",
    adviceIntro: "Notre propre lecture des données ci-dessus — une interprétation, pas une nouvelle source, à confronter au contexte local avant d'agir.",
    adv1Heading: "Miser d'abord sur les deux et trois-roues",
    adv1Text: "C'est le segment à la croissance la plus rapide, et celui qui nécessite le moins d'infrastructure de recharge pour atteindre une échelle significative — un point d'entrée moins risqué que les flottes de véhicules particuliers.",
    adv2Heading: "Concevoir pour l'AC aujourd'hui, le DC demain",
    adv2Text: "L'essentiel de la recharge actuelle se fait en courant alternatif lent. La recharge rapide DC croît plus vite à partir d'une base plus petite — prévoyez des sites et des normes permettant au réseau AC actuel d'accueillir des mises à niveau DC sans tout reconstruire.",
    adv3Heading: "Fixer les normes d'interopérabilité avant l'arrivée de la fabrication locale de batteries",
    adv3Text: "L'investissement domestique dans les cellules de batterie n'en est qu'à ses débuts. S'accorder maintenant sur des normes de recharge et d'échange de batteries est plus simple que de les adapter une fois la capacité de fabrication locale en place.",
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
    forecastEyebrow: "Iteganyagihe ryihariye Afurika",
    forecastHeading: "Isoko ry'amamodoka akoresha amashanyarazi muri Afurika, mu mibare n'iteganyagihe",
    forecastIntro: "Raporo yihariye ya Afurika ikomoka ku kigo kimwe cy'ubushakashatsi cyatanze igipimo cya CAGR hejuru, ifite amakuru arambuye ku gihugu no ku cyiciro.",
    f1Number: "$0.45B → $0.69B → $5.99B",
    f1Label: "ubunini bw'isoko ry'amamodoka akoresha amashanyarazi muri Afurika, 2025 → 2026 → 2031",
    f2Number: "29.05%",
    f2Label: "by'amafaranga y'isoko ry'amamodoka akoresha amashanyarazi muri Afurika mu 2025, biyobowe na Ghana — igihugu gifite umugabane munini ku mugabane",
    f3Number: "56.90%",
    f3Label: "CAGR kugeza 2031 kuri Ethiopia, igihugu gikura vuba kurusha ibindi",
    f4Number: "78.7%",
    f4Label: "by'amafaranga y'isoko ry'amamodoka akoresha amashanyarazi muri Afurika mu 2025 aturuka ku modoka zikoresha amashanyarazi gusa",
    forecastSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    segmentEyebrow: "Impinduka mu byiciro",
    segmentHeading: "Aho ubukungu bw'isoko bukura cyane",
    segmentIntro: "Iteganyagihe rimwe ryihariye Afurika, ritandukanyijwe hakurikijwe ubwoko bw'imodoka, ubwoko bwa bateri, n'uburyo bwo kwuzuza amashanyarazi.",
    sg1Number: "61.25%",
    sg1Label: "by'amafaranga y'isoko ry'amamodoka akoresha amashanyarazi muri Afurika mu 2025 aturuka ku modoka z'abantu ku giti cyabo, icyiciro kinini ku bwoko bw'imodoka",
    sg2Number: "57.90%",
    sg2Label: "CAGR y'amapikipiki n'amamodoka atatu amagare kugeza 2031, ubwoko bw'imodoka bukura vuba kurusha ubundi",
    sg3Number: "50.88%",
    sg3Label: "igice cy'ubwoko bwa bateri mu 2025 gifitwe na nickel-manganese-cobalt (NMC)",
    sg4Number: "67.95%",
    sg4Label: "igice cy'icyuzuzo mu 2025 gikorwa n'icyuzuzo gitinda cya AC, mu gihe icyuzuzo cyihuse cya DC gikura vuba (CAGR ya 55.40% kugeza 2031)",
    segmentSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    signalsEyebrow: "Ibimenyetso byo gukurikirana",
    signalsHeading: "Icyatumye iyi mibare igera aho iri",
    signalsIntro: "Ibintu bitanu byavuzwe muri iyi raporo nk'impamvu z'iterambere riri hejuru.",
    sig1Heading: "Igihe cy'imisoro 0% muri Ghana",
    sig1Text: "Kubura imisoro y'ikoreshwa ry'amamodoka akoresha amashanyarazi mu myaka umunani, gukurikiza kuva mu ntangiriro za 2025, bigamije gukuraho inzitizi nyamukuru y'amafaranga ku bantu bashaka kuyagura.",
    sig2Heading: "Gukora bateri byatangiye muri Afurika",
    sig2Text: "Uruganda runini rwa Gotion rwa miliyari 6.5 z'amadolari muri Maroc n'uruganda rwa BTR rwa miliyoni 366 z'amadolari zikora cathode, byerekana intangiriro yo gukora selire za bateri mu gihugu, aho gutumiza ibice byuzuye biva hanze.",
    sig3Heading: "Ubushakashatsi bwa hydrogen nziza muri Afurika y'Epfo",
    sig3Text: "Gahunda ya miliyari 4.7 z'ama euro ikoresheje ubukungu bw'igihugu muri platine ni ishingiro ry'inzira ya bateri za hydrogen zishobora kongera ku modoka zikoresha amashanyarazi gusa.",
    sig4Heading: "Guhererekanya bateri ku rwego rwo hejuru",
    sig4Text: "Urusobe rwa Spiro rwageze ku guhererekanya bateri miliyoni 9, rufite amagare y'amashanyarazi 22,000 na sitasiyo z'guhererekanya 600, rutera imbere binyuze mu mafaranga akomoka ku guhererekanya aho kuba imisanzu y'imodoka mbere y'igihe.",
    sig5Heading: "Amahirwe y'amapikipiki (boda-boda) muri Kenya",
    sig5Text: "Amapikipiki 2.2 miliyoni akora boda-boda muri Kenya yashobora kugabanya ibyuka bihumanya ikirere biva mu bwikorezi kugera kuri 85% niba yahindurwa akoresha amashanyarazi, hakoreshejwe umuyoboro w'amashanyarazi ukomoka cyane ku ngufu zisubira.",
    signalsSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    tailwindsEyebrow: "Inkunga",
    tailwindsHeading: "Ibitera iterambere kongera kwiyongera",
    tailwindsIntro: "Isesengura ry'ibitera iterambere ryo muri iyi raporo, rishyizwe ku rutonde hakurikijwe ingaruka nziza ziteganyijwe ku gipimo cya CAGR hejuru.",
    d0Heading: "Kubura imisoro ku itumizwa (+12.5%)",
    d0Geo: "Ethiopia, Ghana, Afurika y'Epfo, Rwanda",
    d0Timeline: "Igihe gito (≤ imyaka 2)",
    d1Heading: "Bateri zihendutse, imodoka zigenewe abaguzi benshi (+10.8%)",
    d1Geo: "Ingaruka zibanze muri Maroc, Afurika y'Epfo",
    d1Timeline: "Igihe cyo hagati (imyaka 2-4)",
    d2Heading: "Iterambere ry'urunigi rw'ibikomoka ku butaka (+9.2%)",
    d2Geo: "RDC, Zambia, Maroc, Madagascar",
    d2Timeline: "Igihe kirekire (≥ imyaka 4)",
    d3Heading: "Iterambere ry'amapikipiki y'amashanyarazi (+8.7%)",
    d3Geo: "Kenya, Nigeria, Rwanda, Ghana",
    d3Timeline: "Igihe gito (≤ imyaka 2)",
    d4Heading: "Igiciro cyo guhererekanya bateri (+7.3%)",
    d4Geo: "Kenya, Nigeria, Benin, Togo, Rwanda",
    d4Timeline: "Igihe cyo hagati (imyaka 2-4)",
    d5Heading: "Imisanzu mito hagati y'ibigo bikora imodoka na fintech (+6.1%)",
    d5Geo: "Nigeria, Kenya, Ghana",
    d5Timeline: "Igihe cyo hagati (imyaka 2-4)",
    tailwindsSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    restraintsEyebrow: "Inzitizi",
    restraintsHeading: "Icyagabanya iyi terambere",
    restraintsIntro: "Isesengura ry'inzitizi ryo muri iyi raporo, rishyizwe ku rutonde hakurikijwe ingaruka ziteganyijwe ku gipimo cya CAGR hejuru.",
    r1Heading: "Ikiguzi kinini cyo kubaka icyuzuzo (−8.4%)",
    r1Impact: "ingaruka ya −8.4% ku giteganyagihe cya CAGR",
    r1Geo: "Afurika yo munsi ya Sahara uretse Afurika y'Epfo",
    r1Timeline: "Igihe kirekire (≥ imyaka 4)",
    r2Heading: "Umuyoboro w'amashanyarazi udakomeye mu byaro (−7.1%)",
    r2Impact: "ingaruka ya −7.1% ku giteganyagihe cya CAGR",
    r2Geo: "Ibyaro muri Nigeria, Kenya, Ghana, Tanzania",
    r2Timeline: "Igihe cyo hagati (imyaka 2-4)",
    r3Heading: "Kwinjira kw'imodoka za lisansi zikoreshejwe (−5.8%)",
    r3Impact: "ingaruka ya −5.8% ku giteganyagihe cya CAGR",
    r3Geo: "Afurika y'Uburengerazuba n'Iburasirazuba",
    r3Timeline: "Igihe gito (≤ imyaka 2)",
    r4Heading: "Igiciro gito cyo kongera kugurisha amamodoka akoresha amashanyarazi (−4.3%)",
    r4Impact: "ingaruka ya −4.3% ku giteganyagihe cya CAGR",
    r4Geo: "Afurika y'Epfo, Maroc, Kenya",
    r4Timeline: "Igihe cyo hagati (imyaka 2-4)",
    restraintsSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    restraintsGeoLabel: "Aho bikorerwa",
    restraintsTimelineLabel: "Igihe cy'ingaruka",
    leadersEyebrow: "Abakinnyi bakomeye",
    leadersHeading: "Abayobozi mu nganda z'amamodoka akoresha amashanyarazi muri Afurika",
    leadersIntro: "Bavuzwe muri iyi raporo nk'abakora amamodoka bakomeye ku mafaranga yinjira ku mugabane, mu isoko riri hagati yo guhuzwa n'ubusabane — nta kigo kimwe kiganje ku giti cyacyo.",
    leadersSource: "Isoko: Mordor Intelligence, raporo \"Africa Electric Vehicle Market\" (2026–2031)",
    adviceEyebrow: "Icyo AfCA ibitekerezaho",
    adviceHeading: "Icyo ibi bisobanura ku bakora imirimo, imijyi, n'abashoramari",
    adviceIntro: "Uko twumva iyi mibare — ni ibitekerezo byacu, ntabwo ari isoko rishya, kandi bikwiye kugereranywa n'imiterere y'aho uri mbere yo gukora icyemezo.",
    adv1Heading: "Banza ushyigikire amapikipiki n'amamodoka atatu amagare",
    adv1Text: "Ni cyo cyiciro kikura vuba kurusha ibindi kandi gisaba ibikorwaremezo bike by'icyuzuzo kugira ngo kigere ku rugero rufatika — inzira ifite ibyago bike kuruta gushora mu modoka z'abantu ku giti cyabo.",
    adv2Heading: "Tegura ku bwa AC uyu munsi, DC ejo",
    adv2Text: "Igice kinini cy'icyuzuzo kiba ubu ni icya AC gitinda. Icyuzuzo cyihuse cya DC gikura vuba kikiva ku rwego ruto — tegura ahantu n'amabwiriza bituma urusobe rwa AC rwo muri iki gihe rwakira ivugurura rya DC nta kongera kubaka byose.",
    adv3Heading: "Shyiraho amabwiriza y'imikoranire mbere y'uko ikora bateri mu gihugu igera kure",
    adv3Text: "Ishoramari mu gukora selire za bateri mu gihugu rikiri intangiriro. Kwumvikana ku mabwiriza y'icyuzuzo no guhererekanya bateri ubu biroroshye kuruta kubihindura nyuma y'uko ubushobozi bwo gukora mu gihugu bwubatswe.",
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
    forecastEyebrow: "Afrikaspecifik prognos",
    forecastHeading: "Afrikas elbilsmarknad, storlek och prognos",
    forecastIntro: "En dedikerad Afrikarapport från samma researchbolag som CAGR-siffran ovan, med detaljer per land och segment.",
    f1Number: "0,45 md$ → 0,69 md$ → 5,99 md$",
    f1Label: "Afrikas elbilsmarknad, storlek 2025 → 2026 → 2031",
    f2Number: "29,05 %",
    f2Label: "av intäkterna på Afrikas elbilsmarknad 2025, ledd av Ghana — kontinentens största enskilda landsandel",
    f3Number: "56,90 %",
    f3Label: "CAGR fram till 2031 för Etiopien, den snabbast växande landsmarknaden",
    f4Number: "78,7 %",
    f4Label: "av intäkterna på Afrikas elbilsmarknad 2025 från renodlade elfordon",
    forecastSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    segmentEyebrow: "Segmentförskjutningar",
    segmentHeading: "Var tillväxten finns inom marknaden",
    segmentIntro: "Samma Afrikaspecifika prognos, uppdelad efter fordonstyp, battericell-kemi och laddningsmetod.",
    sg1Number: "61,25 %",
    sg1Label: "andel av 2025 års intäkter på Afrikas elbilsmarknad från personbilar, det största fordonstypssegmentet",
    sg2Number: "57,90 %",
    sg2Label: "CAGR för två- och trehjulingar fram till 2031, den snabbast växande fordonstypen",
    sg3Number: "50,88 %",
    sg3Label: "andel av 2025 års batterikemi som utgörs av nickel-mangan-kobolt (NMC)",
    sg4Number: "67,95 %",
    sg4Label: "andel av 2025 års laddning som utgörs av långsam AC-laddning, medan DC-snabbladdning växer snabbare (55,40 % CAGR till 2031)",
    segmentSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    signalsEyebrow: "Signaler att bevaka",
    signalsHeading: "Vad som driver siffrorna",
    signalsIntro: "Fem utvecklingar som lyfts fram i samma prognosrapport som orsaker till tillväxten ovan.",
    sig1Heading: "Ghanas nolltariff-fönster",
    sig1Text: "Ett åtta år långt undantag från importtullar på elfordon, i kraft sedan tidigt 2025, är utformat för att ta bort det största kostnadshindret för adoption.",
    sig2Heading: "Batteritillverkning etableras i Afrika",
    sig2Text: "Marockos gigafabrik från Gotion på 6,5 miljarder dollar och BTR:s katodfabrik på 366 miljoner dollar pekar mot de första stegen mot lokal battericellsproduktion, snarare än import av färdiga batteripaket.",
    sig3Heading: "Sydafrikas satsning på grön vätgas",
    sig3Text: "Ett program på 4,7 miljarder euro som utnyttjar landets platinareserver ligger till grund för en parallell bränslecellsväg vid sidan av renodlade elfordon.",
    sig4Heading: "Batteribyte via fintech, i stor skala",
    sig4Text: "Spiros nätverk har loggat 9 miljoner batteribyten och kopplar samman 22 000 elcyklar med 600 bytesstationer, och finansierar expansionen med intäkter per byte i stället för förskottsfinansiering av fordon.",
    sig5Heading: "Kenyas boda-boda-möjlighet",
    sig5Text: "Kenyas 2,2 miljoner motorcykeltaxin skulle kunna minska transportutsläppen med upp till 85 % om de elektrifierades, med drift på ett i huvudsak förnybart elnät.",
    signalsSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    tailwindsEyebrow: "Medvindar",
    tailwindsHeading: "Vad som driver tillväxten längre",
    tailwindsIntro: "Samma rapports analys av drivkrafter, rankade efter uppskattad positiv effekt på CAGR-prognosen ovan.",
    d0Heading: "Nolltull på import (+12,5 %)",
    d0Geo: "Etiopien, Ghana, Sydafrika, Rwanda",
    d0Timeline: "Kort sikt (≤ 2 år)",
    d1Heading: "Billigare batterier, massmarknadsmodeller (+10,8 %)",
    d1Geo: "Koncentrerad effekt i Marocko, Sydafrika",
    d1Timeline: "Medellång sikt (2–4 år)",
    d2Heading: "Satsning på mineralförsörjningskedjan (+9,2 %)",
    d2Geo: "DR Kongo, Zambia, Marocko, Madagaskar",
    d2Timeline: "Lång sikt (≥ 4 år)",
    d3Heading: "Teknologisprång för elmotorcyklar (+8,7 %)",
    d3Geo: "Kenya, Nigeria, Rwanda, Ghana",
    d3Timeline: "Kort sikt (≤ 2 år)",
    d4Heading: "Prissättning av batteribyte (+7,3 %)",
    d4Geo: "Kenya, Nigeria, Benin, Togo, Rwanda",
    d4Timeline: "Medellång sikt (2–4 år)",
    d5Heading: "OEM-fintech mikroleasing (+6,1 %)",
    d5Geo: "Nigeria, Kenya, Ghana",
    d5Timeline: "Medellång sikt (2–4 år)",
    tailwindsSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    restraintsEyebrow: "Motvindar",
    restraintsHeading: "Vad som kan bromsa utvecklingen",
    restraintsIntro: "Samma rapports analys av hinder, rankade efter uppskattad negativ effekt på CAGR-prognosen ovan.",
    r1Heading: "Kapitalbördan för laddinfrastruktur (−8,4 %)",
    r1Impact: "−8,4 % effekt på CAGR-prognosen",
    r1Geo: "Afrika söder om Sahara, exklusive Sydafrika",
    r1Timeline: "Lång sikt (≥ 4 år)",
    r2Heading: "Sköra elnät på landsbygden (−7,1 %)",
    r2Impact: "−7,1 % effekt på CAGR-prognosen",
    r2Geo: "Landsbygdsområden i Nigeria, Kenya, Ghana, Tanzania",
    r2Timeline: "Medellång sikt (2–4 år)",
    r3Heading: "Inflöde av begagnade förbränningsfordon (−5,8 %)",
    r3Impact: "−5,8 % effekt på CAGR-prognosen",
    r3Geo: "Väst- och Östafrika",
    r3Timeline: "Kort sikt (≤ 2 år)",
    r4Heading: "Svaga andrahandsvärden för elfordon (−4,3 %)",
    r4Impact: "−4,3 % effekt på CAGR-prognosen",
    r4Geo: "Sydafrika, Marocko, Kenya",
    r4Timeline: "Medellång sikt (2–4 år)",
    restraintsSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    restraintsGeoLabel: "Geografisk relevans",
    restraintsTimelineLabel: "Tidslinje för effekt",
    leadersEyebrow: "Vilka är aktiva",
    leadersHeading: "Afrikas ledande elbilsaktörer",
    leadersIntro: "Namngivna i samma rapport som de främsta tillverkarna efter intäkter på kontinenten, på en marknad som ligger mellan konsoliderad och fragmenterad — ingen enskild aktör dominerar helt.",
    leadersSource: "Källa: Mordor Intelligence, rapporten \"Africa Electric Vehicle Market\" (2026–2031)",
    adviceEyebrow: "AfCA:s syn",
    adviceHeading: "Vad detta betyder för aktörer, städer och investerare",
    adviceIntro: "Vår egen tolkning av datan ovan — en tolkning, inte en ny källa, och bör vägas mot lokal kontext innan den ligger till grund för beslut.",
    adv1Heading: "Satsa på två- och trehjulingar först",
    adv1Text: "Det är det snabbast växande fordonssegmentet och kräver minst laddinfrastruktur för att nå meningsfull skala — en mindre riskfylld startpunkt än personbilsflottor.",
    adv2Heading: "Designa för AC idag, DC imorgon",
    adv2Text: "Det mesta av dagens laddning är långsam AC-laddning. DC-snabbladdning växer snabbare från en mindre bas — planera platser och standarder så att dagens AC-nätverk kan ta emot DC-uppgraderingar senare utan en ombyggnad från grunden.",
    adv3Heading: "Få interoperabilitetsstandarder på plats innan lokal batteritillverkning etableras",
    adv3Text: "Inhemska investeringar i battericeller är fortfarande i ett tidigt skede. Att enas om laddnings- och batteribytesstandarder nu är enklare än att anpassa dem i efterhand när lokal tillverkningskapacitet väl finns på plats.",
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
