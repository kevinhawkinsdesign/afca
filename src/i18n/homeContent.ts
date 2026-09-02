import type { Locale } from "./config";

// Full home-page translations. Unlike the technical Standards/Intelligence
// pages (deliberately English-only per BRIEF.md section 5 — protocol and
// methodology content where a translation error carries real operational
// risk), the institutional/marketing pages are translated in full so no
// locale sees a fallback notice here.
export interface HomeContent {
  heroEyebrow: string;
  heroTitle: string;
  heroP1: string;
  heroP2: string;
  scroll: string;
  missionEyebrow: string;
  missionHeading: string;
  missionBody: string;
  missionCta: string;
  foundersEyebrow: string;
  founder1Role: string;
  founder1Blurb: string;
  founder2Role: string;
  founder2Blurb: string;
  foundersCta: string;
  statsEyebrow: string;
  stat1Label: string;
  stat1Source: string;
  stat2Label: string;
  stat2Source: string;
  stat3Label: string;
  stat3Source: string;
  initiativesHeading: string;
  init1Title: string;
  init1Body: string;
  init2Title: string;
  init2Body: string;
  init3Title: string;
  init3Body: string;
  exploreEyebrow: string;
  explore1Title: string;
  explore1Body: string;
  explore2Title: string;
  explore2Body: string;
  explore3Title: string;
  explore3Body: string;
  explore4Title: string;
  explore4Body: string;
  visit: string;
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    heroEyebrow: "Registration pending in Rwanda",
    heroTitle: "African Charging Alliance",
    heroP1: "African Charging Alliance is an independent, non-profit trade association and ecosystem platform committed to accelerating the deployment of reliable, scalable, and interoperable electric vehicle charging infrastructure across Africa.",
    heroP2: "Operating as an apolitical source of truth, AfCA bridges the gap between public policy and ground-level technical implementation and operation. We bring together Charge Point Operators, eMobility Service Providers, electric utilities, fleet operators, hardware OEMs, and policymakers to build a unified, sustainable charging market.",
    scroll: "Scroll",
    missionEyebrow: "Our mission",
    missionHeading: "A comprehensive, economically viable, and technically harmonised EV charging ecosystem across Africa.",
    missionBody: "Cross-border and cross-city corridors — Mombasa to Nairobi, Kigali to Nairobi — don't follow operator boundaries. A driver on one of these routes shouldn't need three apps and three accounts to complete a single journey. AfCA is the apolitical, vendor-neutral body bringing Charge Point Operators, eMobility Service Providers, utilities, fleet operators, hardware OEMs, and policymakers together to build that interoperability through open standards and collaborative leadership — not by favouring any one company or technology.",
    missionCta: "Read our full story and founders",
    foundersEyebrow: "Who's behind AfCA",
    founder1Role: "Product design & engineering specialist",
    founder1Blurb: "Led product design and research at Monta, the charging platform behind Europe's largest CPO and eMSP network.",
    founder2Role: "EV roaming & OCPI specialist",
    founder2Blurb: "Built roaming products from zero at Monta and contributed directly to the OCPI protocol; now advises CPOs and national agencies on OCPI integrations and CDR reconciliation.",
    foundersCta: "Read more about our founders",
    statsEyebrow: "The opportunity",
    stat1Label: "of African countries have 10+ public EV charging stations today",
    stat1Source: "Source: iAfrikan Insights",
    stat2Label: "projected CAGR for Africa's EV market, 2026–2031",
    stat2Source: "Source: Mordor Intelligence",
    stat3Label: "public charging stations recorded in South Africa, the continent's largest network",
    stat3Source: "Source: iAfrikan Insights",
    initiativesHeading: "Initiatives",
    init1Title: "Ecosystem intelligence and market mapping",
    init1Body: "Country-by-country overviews of active CPOs, grid capacity, real-world charging performance, and policy enforcement — plus the Pan-African Interoperability and Reliability Index, benchmarking charger uptime, hardware compliance, open protocol adoption (OCPI/OICP), and payment integration success.",
    init2Title: "The AfCA Annual Summit",
    init2Body: "Curated representation across the value chain, action-oriented workshops rather than panels, and a catalyst for regional initiatives, donor-funded corridor pilots, and harmonised policy recommendations.",
    init3Title: "Practical implementation and ecosystem support",
    init3Body: "Market entry and technical advisory delivered as open training and published guidance, plus harmonisation and standards advocacy to governments and regional economic communities (EAC, ECOWAS).",
    exploreEyebrow: "Explore AfCA",
    explore1Title: "Standards & implementation guidance",
    explore1Body: "Vendor-neutral guides for building a CPMS, a driver app, selecting hardware, and testing OCPI/OCPP connectivity — plus a searchable glossary of the acronyms this guidance leans on.",
    explore2Title: "Intelligence",
    explore2Body: "A curated, sourced collection of public EV and charging stats for Africa — market growth, running costs, and country data — while AfCA's own Index is in development.",
    explore3Title: "Community & the AfCA Summit",
    explore3Body: "How Charge Point Operators, eMSPs, utilities, fleets, OEMs, and policymakers participate — membership, working groups, and the action-oriented Annual Summit.",
    explore4Title: "Glossary",
    explore4Body: "A searchable, vendor-neutral glossary of charging and interoperability terminology — standards-sourced definitions, not marketing language.",
    visit: "Visit",
  },
  fr: {
    heroEyebrow: "Enregistrement en cours au Rwanda",
    heroTitle: "African Charging Alliance",
    heroP1: "African Charging Alliance est une association professionnelle indépendante à but non lucratif et une plateforme d'écosystème engagée à accélérer le déploiement d'une infrastructure de recharge de véhicules électriques fiable, évolutive et interopérable à travers l'Afrique.",
    heroP2: "En tant que source de vérité apolitique, AfCA comble le fossé entre la politique publique et la mise en œuvre technique sur le terrain. Nous réunissons Charge Point Operators, eMobility Service Providers, distributeurs d'électricité, opérateurs de flottes, fabricants de matériel et décideurs publics pour construire un marché de la recharge unifié et durable.",
    scroll: "Défiler",
    missionEyebrow: "Notre mission",
    missionHeading: "Un écosystème de recharge de véhicules électriques complet, économiquement viable et techniquement harmonisé à travers l'Afrique.",
    missionBody: "Les corridors transfrontaliers et interurbains — Mombasa-Nairobi, Kigali-Nairobi — ne suivent pas les frontières des opérateurs. Un conducteur sur l'un de ces trajets ne devrait pas avoir besoin de trois applications et trois comptes pour un seul voyage. AfCA est l'organisme apolitique et neutre vis-à-vis des fournisseurs qui réunit Charge Point Operators, eMobility Service Providers, distributeurs d'électricité, opérateurs de flottes, fabricants de matériel et décideurs publics pour construire cette interopérabilité par des standards ouverts et un leadership collaboratif — sans favoriser une entreprise ou une technologie en particulier.",
    missionCta: "Lire notre histoire et découvrir les fondateurs",
    foundersEyebrow: "Qui est derrière AfCA",
    founder1Role: "Spécialiste en design produit et ingénierie",
    founder1Blurb: "A dirigé le design produit et la recherche chez Monta, la plateforme de recharge à l'origine du plus grand réseau de CPO et d'eMSP en Europe.",
    founder2Role: "Spécialiste en itinérance EV et OCPI",
    founder2Blurb: "A construit des produits d'itinérance depuis zéro chez Monta et a contribué directement au protocole OCPI ; conseille désormais des CPO et agences nationales sur les intégrations OCPI et le rapprochement des CDR.",
    foundersCta: "En savoir plus sur nos fondateurs",
    statsEyebrow: "L'opportunité",
    stat1Label: "des pays africains disposent aujourd'hui d'au moins 10 stations de recharge publiques",
    stat1Source: "Source : iAfrikan Insights",
    stat2Label: "TCAC projeté pour le marché africain des véhicules électriques, 2026-2031",
    stat2Source: "Source : Mordor Intelligence",
    stat3Label: "stations de recharge publiques recensées en Afrique du Sud, le plus grand réseau du continent",
    stat3Source: "Source : iAfrikan Insights",
    initiativesHeading: "Initiatives",
    init1Title: "Intelligence de l'écosystème et cartographie du marché",
    init1Body: "Panoramas pays par pays des CPO actifs, de la capacité du réseau électrique, des performances réelles de recharge et de l'application des politiques — ainsi que le Pan-African Interoperability and Reliability Index, qui évalue la disponibilité des bornes, la conformité du matériel, l'adoption des protocoles ouverts (OCPI/OICP) et la réussite de l'intégration des paiements.",
    init2Title: "Le Sommet annuel de l'AfCA",
    init2Body: "Une représentation choisie sur toute la chaîne de valeur, des ateliers orientés vers l'action plutôt que des tables rondes, et un catalyseur d'initiatives régionales, de projets pilotes de corridors financés par des bailleurs, et de recommandations politiques harmonisées.",
    init3Title: "Mise en œuvre pratique et soutien à l'écosystème",
    init3Body: "Conseil technique et d'entrée sur le marché sous forme de formations ouvertes et de guides publiés, ainsi qu'un plaidoyer en faveur de l'harmonisation et des standards auprès des gouvernements et des communautés économiques régionales (EAC, ECOWAS).",
    exploreEyebrow: "Explorer AfCA",
    explore1Title: "Standards et guides de mise en œuvre",
    explore1Body: "Des guides neutres vis-à-vis des fournisseurs pour construire un CPMS, une application conducteur, choisir du matériel et tester la connectivité OCPI/OCPP — avec un glossaire consultable des sigles utilisés dans ces guides.",
    explore2Title: "Intelligence",
    explore2Body: "Une collection sourcée de statistiques publiques sur les véhicules électriques et la recharge en Afrique — croissance du marché, coûts d'usage, données par pays — en attendant l'Index propre d'AfCA.",
    explore3Title: "Communauté et le Sommet AfCA",
    explore3Body: "Comment les Charge Point Operators, eMSP, distributeurs, flottes, fabricants et décideurs participent — adhésion, groupes de travail et le Sommet annuel orienté vers l'action.",
    explore4Title: "Glossaire",
    explore4Body: "Un glossaire consultable et neutre vis-à-vis des fournisseurs sur la terminologie de la recharge et de l'interopérabilité — des définitions sourcées sur les standards, pas un langage marketing.",
    visit: "Visiter",
  },
  rw: {
    heroEyebrow: "Iyandikwa riracyategerejwe mu Rwanda",
    heroTitle: "African Charging Alliance",
    heroP1: "African Charging Alliance ni ishyirahamwe ry'ubucuruzi ryigenga, ritagamije inyungu, n'urubuga rw'urusobe rwiyemeje kwihutisha gushyiraho ibikorwaremezo byizewe, byaguka, kandi bihuza neza byo gucyura amamodoka akoresha amashanyarazi muri Afurika.",
    heroP2: "Nk'isoko ry'ukuri ridashyigikiye politiki runaka, AfCA ihuza icyuho kiri hagati y'amabwiriza ya Leta n'ishyirwa mu bikorwa rya tekiniki ku isi. Duhuza Charge Point Operators, eMobility Service Providers, ibigo by'amashanyarazi, abakoresha imodoka nyinshi, abakora ibikoresho, n'abafata ibyemezo kugira ngo dubake isoko rimwe rihamye kandi ridashira.",
    scroll: "Komeza wisunika",
    missionEyebrow: "Intego yacu",
    missionHeading: "Urusobe rwuzuye, rufite agaciro mu bukungu, kandi ruhuriweho neza mu buryo bwa tekiniki rwo gucyura amamodoka akoresha amashanyarazi muri Afurika.",
    missionBody: "Imihanda ihuza ibihugu n'imijyi — Mombasa na Nairobi, Kigali na Nairobi — ntibikurikiza imbibi z'abakora iyi mirimo. Umushoferi ukoresha imwe muri iyi mihanda ntagomba gukoresha porogaramu eshatu na konti eshatu kugira ngo agere ku ntego imwe. AfCA ni urwego rudashyigikiye politiki cyangwa ikigo runaka, ruhuza Charge Point Operators, eMobility Service Providers, ibigo by'amashanyarazi, abakoresha imodoka nyinshi, abakora ibikoresho, n'abafata ibyemezo kugira ngo dubake iyo mikoranire binyuze mu mabwiriza mbonezamubano n'ubuyobozi bw'ubufatanye — tutarobanuye ikigo cyangwa ikoranabuhanga runaka.",
    missionCta: "Soma inkuru yacu yose n'abashinze",
    foundersEyebrow: "Abari inyuma ya AfCA",
    founder1Role: "Impuguke mu igenamigambi n'ubuhanga bw'ibicuruzwa",
    founder1Blurb: "Yayoboye igenamigambi ry'ibicuruzwa n'ubushakashatsi kuri Monta, urubuga rw'icyuzuzo rwatumye Uburayi bugira urusobe runini rwa CPO na eMSP.",
    founder2Role: "Impuguke mu mikoranire y'icyuzuzo cy'amamodoka n'ikoranabuhanga OCPI",
    founder2Blurb: "Yubatse ibicuruzwa by'imikoranire uhereye ku busa kuri Monta kandi yagize uruhare mu iterambere ry'ikoranabuhanga OCPI; ubu agiriye inama CPO n'ibigo bya Leta ku bijyanye n'imikoranire ya OCPI n'iyunganira rya CDR.",
    foundersCta: "Menya byinshi ku bashinze bacu",
    statsEyebrow: "Amahirwe ariho",
    stat1Label: "by'ibihugu bya Afurika bifite ubu sitasiyo z'icyuzuzo z'abaturage zirenga 10",
    stat1Source: "Isoko: iAfrikan Insights",
    stat2Label: "igipimo cy'iterambere ryitezwe (CAGR) ku isoko ry'amamodoka akoresha amashanyarazi muri Afurika, 2026–2031",
    stat2Source: "Isoko: Mordor Intelligence",
    stat3Label: "sitasiyo z'icyuzuzo z'abaturage zanditswe muri Afurika y'Epfo, urusobe runini ku mugabane",
    stat3Source: "Isoko: iAfrikan Insights",
    initiativesHeading: "Ibikorwa",
    init1Title: "Ubushakashatsi ku rusobe n'igereranya ry'isoko",
    init1Body: "Incamake za buri gihugu ku bijyanye na CPO zikora, ubushobozi bw'ikibaho cy'amashanyarazi, imikorere y'icyuzuzo mu buzima nyabwo, n'ishyirwa mu bikorwa ry'amabwiriza — hiyongereyeho Pan-African Interoperability and Reliability Index, igereranya igihe sitasiyo zikora neza, kubahiriza ubuziranenge bw'ibikoresho, gukoresha ikoranabuhanga rifunguye (OCPI/OICP), n'intsinzi mu guhuza uburyo bwo kwishyura.",
    init2Title: "Inama Nkuru ya AfCA y'Umwaka",
    init2Body: "Ubuhagarariro bwatoranyijwe mu murongo wose w'ubucuruzi, imyigire ishingiye ku bikorwa aho kuba ibiganiro gusa, n'inzira yo gutera imbere ibikorwa by'akarere, ibizamini by'imihanda bishyigikiwe n'inkunga, n'ibyifuzo by'amabwiriza ahurijwe hamwe.",
    init3Title: "Ishyirwa mu bikorwa n'ubufasha ku rusobe",
    init3Body: "Ubufasha bwa tekiniki n'ubw'kwinjira ku isoko butangwa mu mahugurwa afunguye n'amabwiriza asohotse, hiyongereyeho gushishikariza guhuza amabwiriza n'ibipimo ku miryango ya Leta n'imiryango y'ubukungu y'akarere (EAC, ECOWAS).",
    exploreEyebrow: "Reba AfCA",
    explore1Title: "Amabwiriza n'ubuyobozi bw'ishyirwa mu bikorwa",
    explore1Body: "Amabwiriza adashyigikiye ikigo runaka yo kubaka CPMS, porogaramu y'umushoferi, guhitamo ibikoresho, no kugerageza imikoranire ya OCPI/OCPP — hiyongereyeho inkoranya-magambo ishakishwamo ibinyuranyo bikoreshwa muri aya mabwiriza.",
    explore2Title: "Ubushakashatsi",
    explore2Body: "Urutonde rw'imibare rusange y'amamodoka akoresha amashanyarazi n'icyuzuzo muri Afurika, ifite isoko — iterambere ry'isoko, ikoreshwa ry'amafaranga, n'amakuru y'ibihugu — mu gihe Index ya AfCA ikirimo gutegurwa.",
    explore3Title: "Umuryango n'Inama Nkuru ya AfCA",
    explore3Body: "Uburyo Charge Point Operators, eMSP, ibigo by'amashanyarazi, abakoresha imodoka nyinshi, abakora ibikoresho, n'abafata ibyemezo bagira uruhare — ubunyamuryango, amatsinda y'akazi, n'Inama Nkuru y'Umwaka ishingiye ku bikorwa.",
    explore4Title: "Inkoranya-magambo",
    explore4Body: "Inkoranya-magambo ishakishwa, itarobanura ikigo runaka, y'amagambo y'icyuzuzo n'imikoranire — ibisobanuro bikomoka ku mabwiriza mbonezamubano, ntabwo ari ururimi rw'ubucuruzi.",
    visit: "Sura",
  },
  sv: {
    heroEyebrow: "Registrering pågår i Rwanda",
    heroTitle: "African Charging Alliance",
    heroP1: "African Charging Alliance är en oberoende, ideell branschorganisation och ekosystemplattform som arbetar för att påskynda utbyggnaden av tillförlitlig, skalbar och interoperabel laddinfrastruktur för elfordon i hela Afrika.",
    heroP2: "Som en opolitisk sanningskälla överbryggar AfCA klyftan mellan offentlig politik och teknisk implementering på plats. Vi samlar Charge Point Operators, eMobility Service Providers, elbolag, flottoperatörer, hårdvarutillverkare och beslutsfattare för att bygga en enhetlig, hållbar laddmarknad.",
    scroll: "Skrolla",
    missionEyebrow: "Vårt uppdrag",
    missionHeading: "Ett heltäckande, ekonomiskt hållbart och tekniskt harmoniserat ekosystem för elbilsladdning i hela Afrika.",
    missionBody: "Gränsöverskridande och interurbana korridorer — Mombasa till Nairobi, Kigali till Nairobi — följer inte operatörsgränser. En förare på en av dessa sträckor ska inte behöva tre appar och tre konton för att slutföra en enda resa. AfCA är det opolitiska, leverantörsneutrala organ som samlar Charge Point Operators, eMobility Service Providers, elbolag, flottoperatörer, hårdvarutillverkare och beslutsfattare för att bygga den interoperabiliteten genom öppna standarder och gemensamt ledarskap — utan att gynna ett enskilt företag eller en enskild teknik.",
    missionCta: "Läs hela vår historia och möt grundarna",
    foundersEyebrow: "Vilka står bakom AfCA",
    founder1Role: "Specialist inom produktdesign och teknik",
    founder1Blurb: "Ledde produktdesign och research på Monta, laddningsplattformen bakom Europas största CPO- och eMSP-nätverk.",
    founder2Role: "Specialist inom EV-roaming och OCPI",
    founder2Blurb: "Byggde roamingprodukter från grunden på Monta och bidrog direkt till OCPI-protokollet; rådgör numera CPO:er och nationella myndigheter om OCPI-integrationer och CDR-avstämning.",
    foundersCta: "Läs mer om våra grundare",
    statsEyebrow: "Möjligheten",
    stat1Label: "av Afrikas länder har idag 10 eller fler publika laddstationer",
    stat1Source: "Källa: iAfrikan Insights",
    stat2Label: "förväntad CAGR för Afrikas elbilsmarknad, 2026–2031",
    stat2Source: "Källa: Mordor Intelligence",
    stat3Label: "publika laddstationer registrerade i Sydafrika, kontinentens största nätverk",
    stat3Source: "Källa: iAfrikan Insights",
    initiativesHeading: "Initiativ",
    init1Title: "Ekosystemanalys och marknadskartläggning",
    init1Body: "Landsvisa översikter av aktiva CPO:er, nätkapacitet, verklig laddningsprestanda och regelefterlevnad — samt Pan-African Interoperability and Reliability Index, som mäter laddares drifttid, hårdvarukompatibilitet, öppen protokollanvändning (OCPI/OICP) och betalningsintegration.",
    init2Title: "AfCA:s årliga toppmöte",
    init2Body: "Utvald representation längs hela värdekedjan, handlingsinriktade workshops snarare än paneler, och en katalysator för regionala initiativ, donatorfinansierade korridorpiloter och harmoniserade policyrekommendationer.",
    init3Title: "Praktiskt genomförande och ekosystemstöd",
    init3Body: "Marknadsinträdes- och tekniskt rådgivning i form av öppen utbildning och publicerad vägledning, samt påverkansarbete för harmonisering och standarder gentemot regeringar och regionala ekonomiska gemenskaper (EAC, ECOWAS).",
    exploreEyebrow: "Utforska AfCA",
    explore1Title: "Standarder och implementeringsvägledning",
    explore1Body: "Leverantörsneutral vägledning för att bygga ett CPMS, en förarapp, välja hårdvara och testa OCPI/OCPP-anslutning — plus en sökbar ordlista över förkortningarna som används.",
    explore2Title: "Analys",
    explore2Body: "En källbelagd samling offentlig statistik om elfordon och laddning i Afrika — marknadstillväxt, driftskostnader och landsdata — medan AfCA:s eget Index utvecklas.",
    explore3Title: "Gemenskap och AfCA:s toppmöte",
    explore3Body: "Hur Charge Point Operators, eMSP:er, elbolag, flottor, tillverkare och beslutsfattare deltar — medlemskap, arbetsgrupper och det handlingsinriktade årliga toppmötet.",
    explore4Title: "Ordlista",
    explore4Body: "En sökbar, leverantörsneutral ordlista över ladd- och interoperabilitetsterminologi — standardbaserade definitioner, inte marknadsföringsspråk.",
    visit: "Besök",
  },
};
