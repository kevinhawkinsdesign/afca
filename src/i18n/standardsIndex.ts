import type { Locale } from "./config";

export interface StandardsIndexContent {
  heroTitle: string;
  intro: string;
  disclaimerPre: string;
  disclaimerEvroaming: string;
  disclaimerMid: string;
  disclaimerOca: string;
  disclaimerPost: string;
  guides: Array<[string, string, string]>; // [slug, title, summary]
}

const slugs = ["cpms", "driver-app", "hardware-selection", "ocpi-ocpp-testing", "chinese-integration"];

export const standardsIndex: Record<Locale, StandardsIndexContent> = {
  en: {
    heroTitle: "Standards & Implementation Guidance",
    intro: "Published, vendor-neutral guides for operators, integrators, and policymakers building charging infrastructure. These reflect open protocols and public standards — AfCA does not own OCPI, OCPP, or OSCP, and does not recommend individual companies.",
    disclaimerPre: "OCPI is owned and maintained by the",
    disclaimerEvroaming: "EVRoaming Foundation",
    disclaimerMid: ". OCPP and OSCP are owned by the",
    disclaimerOca: "Open Charge Alliance",
    disclaimerPost: ". AfCA's contribution is African implementation guidance and benchmarking against these standards.",
    guides: [
      ["cpms", "Building and operating a CPMS", "Core functions, uptime and observability, tariff and roaming engines, and the operational discipline a Charge Point Management System needs to run reliably at scale."],
      ["driver-app", "The driver app: consumer and fleet", "What a world-class charging app has to get right for individual drivers, and where fleet requirements diverge — depot scheduling, cost allocation, and multi-driver access."],
      ["hardware-selection", "Selecting and installing charging hardware", "Criteria for evaluating chargers before purchase, and the installation and commissioning steps that determine whether a site performs for the next ten years."],
      ["ocpi-ocpp-testing", "Testing OCPI and OCPP connectivity", "A practical conformance testing sequence for both protocols, and the failure modes that pass a demo but break in production."],
      ["chinese-integration", "Integrating Chinese vehicles and devices", "GB/T charging standards, NEV telematics reporting, and what interoperability with the Chinese market actually requires on top of OCPP/OCPI."],
    ],
  },
  fr: {
    heroTitle: "Standards et guides de mise en œuvre",
    intro: "Guides publiés, neutres vis-à-vis des fournisseurs, pour les opérateurs, intégrateurs et décideurs publics qui construisent des infrastructures de recharge. Ils reflètent des protocoles ouverts et des standards publics — AfCA ne possède ni OCPI, ni OCPP, ni OSCP, et ne recommande aucune entreprise en particulier.",
    disclaimerPre: "OCPI est détenu et maintenu par l'",
    disclaimerEvroaming: "EVRoaming Foundation",
    disclaimerMid: ". OCPP et OSCP sont détenus par l'",
    disclaimerOca: "Open Charge Alliance",
    disclaimerPost: ". La contribution d'AfCA porte sur les guides de mise en œuvre et le benchmarking pour l'Afrique par rapport à ces standards.",
    guides: [
      ["cpms", "Construire et exploiter un CPMS", "Fonctions essentielles, disponibilité et observabilité, moteurs tarifaires et d'itinérance, et la discipline opérationnelle qu'un Charge Point Management System doit tenir pour fonctionner de façon fiable à grande échelle."],
      ["driver-app", "L'application conducteur : particuliers et flottes", "Ce qu'une application de recharge de premier plan doit réussir pour les conducteurs particuliers, et où les besoins des flottes divergent — planification de dépôt, répartition des coûts, accès multi-conducteurs."],
      ["hardware-selection", "Choisir et installer le matériel de recharge", "Critères d'évaluation des bornes avant achat, et les étapes d'installation et de mise en service qui déterminent si un site performera pendant les dix prochaines années."],
      ["ocpi-ocpp-testing", "Tester la connectivité OCPI et OCPP", "Une séquence pratique de tests de conformité pour les deux protocoles, et les modes de défaillance qui passent en démo mais échouent en production."],
      ["chinese-integration", "Intégrer les véhicules et appareils chinois", "Standards de recharge GB/T, remontée télématique NEV, et ce que l'interopérabilité avec le marché chinois exige réellement en plus d'OCPP/OCPI."],
    ],
  },
  rw: {
    heroTitle: "Amabwiriza n'Ubuyobozi bw'Ishyirwa mu Bikorwa",
    intro: "Amabwiriza yasohotse, adashyigikiye ikigo runaka, ku bakoresha, abahuza ibikoresho, n'abafata ibyemezo bubaka ibikorwaremezo by'icyuzuzo. Agaragaza amabwiriza afunguye n'ibipimo rusange — AfCA ntabwo ifite OCPI, OCPP, cyangwa OSCP, kandi ntabwo yerekana ikigo runaka.",
    disclaimerPre: "OCPI ifitwe kandi igacungwa na",
    disclaimerEvroaming: "EVRoaming Foundation",
    disclaimerMid: ". OCPP na OSCP bifitwe na",
    disclaimerOca: "Open Charge Alliance",
    disclaimerPost: ". Umusanzu wa AfCA ni amabwiriza yo gushyira mu bikorwa n'igereranya muri Afurika ugereranyije n'ibi bipimo.",
    guides: [
      ["cpms", "Kubaka no gukoresha CPMS", "Imikorere y'ibanze, kuboneka no kugaragara, imashini y'ibiciro n'imikoranire, n'umuco w'imikorere CPMS ikeneye kugira ngo ikore neza ku rugero runini."],
      ["driver-app", "Porogaramu y'umushoferi: umuguzi n'itsinda ry'imodoka", "Icyo porogaramu y'icyuzuzo y'urwego rwo hejuru igomba gukora neza ku bashoferi ku giti cyabo, n'aho ibisabwa n'itsinda ry'imodoka bitandukaniye — gutegura ahabikwa imodoka, igabana ry'amafaranga, n'kwinjira kw'abashoferi benshi."],
      ["hardware-selection", "Guhitamo no gushyiraho ibikoresho by'icyuzuzo", "Ibipimo byo gusuzuma ibicuruzwa mbere yo kugura, n'intambwe zo kwishyiraho n'itangira gukora zigena niba ahantu hazakora neza mu myaka icumi iri imbere."],
      ["ocpi-ocpp-testing", "Kugerageza imikoranire ya OCPI na OCPP", "Urutonde rw'ibizamini by'ubuziranenge ku mabwiriza yombi, n'ibibazo byerekana neza mu kwerekana ariko bikananirwa mu bikorwa nyabyo."],
      ["chinese-integration", "Guhuza imodoka n'ibikoresho by'Ubushinwa", "Ibipimo by'icyuzuzo bya GB/T, itangwa ry'amakuru ya NEV, n'ibyo imikoranire n'isoko ry'Ubushinwa isaba by'ukuri hejuru ya OCPP/OCPI."],
    ],
  },
  sv: {
    heroTitle: "Standarder och implementeringsvägledning",
    intro: "Publicerad, leverantörsneutral vägledning för operatörer, integratörer och beslutsfattare som bygger laddinfrastruktur. Den speglar öppna protokoll och offentliga standarder — AfCA äger inte OCPI, OCPP eller OSCP, och rekommenderar inga enskilda företag.",
    disclaimerPre: "OCPI ägs och underhålls av",
    disclaimerEvroaming: "EVRoaming Foundation",
    disclaimerMid: ". OCPP och OSCP ägs av",
    disclaimerOca: "Open Charge Alliance",
    disclaimerPost: ". AfCA:s bidrag är afrikansk implementeringsvägledning och benchmarking mot dessa standarder.",
    guides: [
      ["cpms", "Bygga och driva ett CPMS", "Kärnfunktioner, drifttid och observerbarhet, taxe- och roamingmotorer, och den operativa disciplin ett Charge Point Management System behöver för att köras tillförlitligt i stor skala."],
      ["driver-app", "Förarappen: konsument och flotta", "Vad en förstklassig laddapp måste få rätt för enskilda förare, och var flottkraven skiljer sig åt — depåschemaläggning, kostnadsfördelning och åtkomst för flera förare."],
      ["hardware-selection", "Välja och installera laddhårdvara", "Kriterier för att utvärdera laddare före köp, och de installations- och driftsättningssteg som avgör om en plats presterar de kommande tio åren."],
      ["ocpi-ocpp-testing", "Testa OCPI- och OCPP-anslutning", "En praktisk konformitetstestsekvens för båda protokollen, och de felmönster som klarar en demo men går sönder i produktion."],
      ["chinese-integration", "Integrera kinesiska fordon och enheter", "GB/T-laddstandarder, NEV-telematikrapportering, och vad interoperabilitet med den kinesiska marknaden faktiskt kräver utöver OCPP/OCPI."],
    ],
  },
};

export { slugs as standardsSlugs };
