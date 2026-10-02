import type { Locale } from "./config";

export interface AboutContent {
  heroTitle: string;
  missionHeading: string;
  missionText1: string;
  missionText2: string;
  principlesHeading: string;
  principle1Title: string;
  principle1Body: string;
  principle2Title: string;
  principle2Body: string;
  principle3Title: string;
  principle3Body: string;
  principle4Title: string;
  principle4Body: string;
  independenceText: string;
  breakCaption: string;
  governanceHeading: string;
  governanceText: string;
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    heroTitle: "About African Charging Alliance",
    missionHeading: "Mission",
    missionText1: "To advance a comprehensive, economically viable, and technically harmonised EV charging ecosystem across Africa through collaborative leadership, open standards, and evidence-based industry guidance.",
    missionText2: "Cross-border and cross-city corridors — Mombasa to Nairobi, Kigali to Nairobi — don't follow operator boundaries. A driver on one of these routes shouldn't need three apps and three accounts to complete a single journey. Interoperability between operators, built on open protocols like OCPI and OCPP, is what makes corridor charging work at all; fragmentation is the alternative, and it is expensive to unwind once it sets in.",
    principlesHeading: "Operating principles",
    principle1Title: "Open access",
    principle1Body: "Workshops and training are open to any qualified operator, not closed-door sessions with individual companies.",
    principle2Title: "Published outputs",
    principle2Body: "Deliverables are public guides and reference implementations, not company-specific recommendations.",
    principle3Title: "Open call",
    principle3Body: "Participants self-select against published criteria rather than being hand-picked.",
    principle4Title: "Multi-party convening",
    principle4Body: "We bring competitors together rather than advising one in isolation.",
    independenceText: "AfCA does not favour individual technologies or companies. Governance includes at least one independent board member, so independence is structurally visible rather than merely asserted.",
    breakCaption: "Nairobi — one of the corridor cities AfCA's guidance is built around",
    governanceHeading: "Governance",
    governanceText: "Full governance documentation, including board composition and bylaws, will be published once AfCA's registration in Rwanda is complete.",
  },
  fr: {
    heroTitle: "À propos d'African Charging Alliance",
    missionHeading: "Mission",
    missionText1: "Faire progresser un écosystème de recharge de véhicules électriques complet, économiquement viable et techniquement harmonisé à travers l'Afrique, par un leadership collaboratif, des standards ouverts et des recommandations sectorielles fondées sur des données probantes.",
    missionText2: "Les corridors transfrontaliers et interurbains — Mombasa-Nairobi, Kigali-Nairobi — ne suivent pas les frontières des opérateurs. Un conducteur sur l'un de ces trajets ne devrait pas avoir besoin de trois applications et trois comptes pour un seul voyage. C'est l'interopérabilité entre opérateurs, fondée sur des protocoles ouverts comme OCPI et OCPP, qui rend possible la recharge sur ces corridors ; la fragmentation en est l'alternative, coûteuse à défaire une fois installée.",
    principlesHeading: "Principes de fonctionnement",
    principle1Title: "Accès ouvert",
    principle1Body: "Les ateliers et formations sont ouverts à tout opérateur qualifié, et non organisés à huis clos avec des entreprises individuelles.",
    principle2Title: "Résultats publiés",
    principle2Body: "Les livrables sont des guides publics et des implémentations de référence, non des recommandations propres à une entreprise.",
    principle3Title: "Appel ouvert",
    principle3Body: "Les participants se portent candidats selon des critères publiés, plutôt que d'être sélectionnés au préalable.",
    principle4Title: "Concertation multipartite",
    principle4Body: "Nous réunissons des concurrents plutôt que de conseiller l'un d'eux isolément.",
    independenceText: "AfCA ne favorise aucune technologie ni entreprise en particulier. La gouvernance inclut au moins un membre indépendant du conseil, afin que l'indépendance soit structurellement visible et non simplement affirmée.",
    breakCaption: "Nairobi — l'une des villes-corridors sur lesquelles s'appuient les guides d'AfCA",
    governanceHeading: "Gouvernance",
    governanceText: "La documentation complète de gouvernance, y compris la composition du conseil et les statuts, sera publiée une fois l'enregistrement d'AfCA au Rwanda finalisé.",
  },
  rw: {
    heroTitle: "Ibijyanye na African Charging Alliance",
    missionHeading: "Intego",
    missionText1: "Gutera imbere urusobe rwuzuye, rufite agaciro mu bukungu, kandi ruhuriweho neza mu buryo bwa tekiniki rwo gucyura amamodoka akoresha amashanyarazi muri Afurika, binyuze mu buyobozi bw'ubufatanye, amabwiriza mbonezamubano, n'inama z'urwego zishingiye ku bimenyetso.",
    missionText2: "Imihanda ihuza ibihugu n'imijyi — Mombasa na Nairobi, Kigali na Nairobi — ntibikurikiza imbibi z'abakora iyi mirimo. Umushoferi ukoresha imwe muri iyi mihanda ntagomba gukoresha porogaramu eshatu na konti eshatu kugira ngo agere ku ntego imwe. Ni imikoranire hagati y'abakora iyi mirimo, ishingiye ku ikoranabuhanga rifunguye nka OCPI na OCPP, ituma icyuzuzo ku mihanda gikora neza; gucikamo ibice ni bwo buryo bwo kubyanga, kandi bihenze kongera kubihuza igihe byamaze gushingana.",
    principlesHeading: "Amahame y'imikorere",
    principle1Title: "Kwinjira ku bafite uburenganzira",
    principle1Body: "Amahugurwa n'imyitozo bifunguriwe umukoresha wese ubifitiye ubushobozi, ntabwo ari ibiganiro by'ibanga na kimwe cy'ibigo runaka.",
    principle2Title: "Ibisohoka bisohotse",
    principle2Body: "Ibisohoka ni amabwiriza rusange n'urugero rw'ishyirwa mu bikorwa, ntabwo ari inama zihariye ku kigo runaka.",
    principle3Title: "Itumira rifunguye",
    principle3Body: "Abitabira biyandikisha ku bipimo byatangajwe, aho kuba abatoranyijwe mbere.",
    principle4Title: "Guteranya impande nyinshi",
    principle4Body: "Duhuza abahatana aho kugira inama kimwe muri bo wenyine.",
    independenceText: "AfCA ntirobanura ikoranabuhanga cyangwa ikigo runaka. Ubuyobozi bugizwe n'nibura umwe mu banyamuryango b'inama y'ubuyobozi wigenga, kugira ngo ubwigenge bugaragare mu miterere y'urwego aho kuba bivugwa gusa.",
    breakCaption: "Nairobi — umwe mu mijyi ihuza imihanda amabwiriza ya AfCA ashingiyeho",
    governanceHeading: "Ubuyobozi",
    governanceText: "Inyandiko zuzuye ku buyobozi, harimo abagize inama y'ubuyobozi n'amategeko ngenga, zizasohoka nyuma y'uko iyandikwa rya AfCA mu Rwanda rirangiye.",
  },
  sv: {
    heroTitle: "Om African Charging Alliance",
    missionHeading: "Uppdrag",
    missionText1: "Att driva utvecklingen av ett heltäckande, ekonomiskt hållbart och tekniskt harmoniserat ekosystem för elbilsladdning i hela Afrika genom gemensamt ledarskap, öppna standarder och evidensbaserad branschvägledning.",
    missionText2: "Gränsöverskridande och interurbana korridorer — Mombasa till Nairobi, Kigali till Nairobi — följer inte operatörsgränser. En förare på en av dessa sträckor ska inte behöva tre appar och tre konton för att slutföra en enda resa. Interoperabilitet mellan operatörer, byggd på öppna protokoll som OCPI och OCPP, är det som får korridorladdning att fungera överhuvudtaget; fragmentering är alternativet, och det är kostsamt att reda ut när det väl har fått fäste.",
    principlesHeading: "Arbetsprinciper",
    principle1Title: "Öppen tillgång",
    principle1Body: "Workshops och utbildningar är öppna för alla kvalificerade operatörer, inte slutna sessioner med enskilda företag.",
    principle2Title: "Publicerade resultat",
    principle2Body: "Leveranser är offentliga vägledningar och referensimplementeringar, inte företagsspecifika rekommendationer.",
    principle3Title: "Öppen ansökan",
    principle3Body: "Deltagare ansöker själva utifrån publicerade kriterier snarare än att bli utvalda.",
    principle4Title: "Sammankallande av flera parter",
    principle4Body: "Vi för samman konkurrenter snarare än att rådge en part isolerat.",
    independenceText: "AfCA gynnar inte enskilda teknologier eller företag. Styrningen omfattar minst en oberoende styrelseledamot, så att oberoendet är strukturellt synligt snarare än enbart påstått.",
    breakCaption: "Nairobi — en av korridorstäderna som AfCA:s vägledning bygger på",
    governanceHeading: "Styrning",
    governanceText: "Fullständig styrningsdokumentation, inklusive styrelsesammansättning och stadgar, publiceras när AfCA:s registrering i Rwanda är klar.",
  },
};
