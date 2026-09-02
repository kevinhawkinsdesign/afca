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
  foundersHeading: string;
  founder1Bio: string;
  founder2Bio: string;
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
    independenceText: "AfCA does not favour individual technologies or companies. Governance includes at least one board member who is neither founder, so independence is structurally visible rather than merely asserted.",
    breakCaption: "Nairobi — one of the corridor cities AfCA's guidance is built around",
    foundersHeading: "Founders",
    founder1Bio: "Kevin led product design and research at Monta, the charging platform that built Europe's largest CPO and eMSP network and an app with over 3 million charge sessions monthly. Across 15+ years he has built and scaled digital products for Skyscanner, Amenitiz, Glovo, Spotify, BookClub, Booking.com, Hilton, EY, PwC, Uber, Gap Inc., and Capital One.",
    founder2Bio: "Puya has built roaming products from the ground up, scaling Monta's CPO network from zero and expanding its app offer to include over one million chargers across Europe and North America. He has been a contributor to the OCPI protocol and has advised national agencies and companies on implementing EU interoperability regulation.",
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
    independenceText: "AfCA ne favorise aucune technologie ni entreprise en particulier. La gouvernance inclut au moins un membre du conseil qui n'est pas fondateur, afin que l'indépendance soit structurellement visible et non simplement affirmée.",
    breakCaption: "Nairobi — l'une des villes-corridors sur lesquelles s'appuient les guides d'AfCA",
    foundersHeading: "Fondateurs",
    founder1Bio: "Kevin a dirigé le design produit et la recherche chez Monta, la plateforme de recharge à l'origine du plus grand réseau de CPO et d'eMSP en Europe, avec une application dépassant 3 millions de sessions de recharge par mois. En plus de 15 ans, il a conçu et développé des produits numériques pour Skyscanner, Amenitiz, Glovo, Spotify, BookClub, Booking.com, Hilton, EY, PwC, Uber, Gap Inc. et Capital One.",
    founder2Bio: "Puya a construit des produits d'itinérance depuis zéro, faisant grandir le réseau de CPO de Monta à partir de rien jusqu'à couvrir plus d'un million de bornes en Europe et en Amérique du Nord. Il a contribué au protocole OCPI et a conseillé des agences nationales et des entreprises sur la mise en œuvre de la réglementation européenne d'interopérabilité.",
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
    independenceText: "AfCA ntirobanura ikoranabuhanga cyangwa ikigo runaka. Ubuyobozi bugizwe n'nibura umwe mu banyamuryango b'inama y'ubuyobozi utari umwe mu bashinze, kugira ngo ubwigenge bugaragare mu miterere y'urwego aho kuba bivugwa gusa.",
    breakCaption: "Nairobi — umwe mu mijyi ihuza imihanda amabwiriza ya AfCA ashingiyeho",
    foundersHeading: "Abashinze",
    founder1Bio: "Kevin yayoboye igenamigambi ry'ibicuruzwa n'ubushakashatsi kuri Monta, urubuga rw'icyuzuzo rwatumye Uburayi bugira urusobe runini rwa CPO na eMSP, hamwe na porogaramu irenga miliyoni 3 z'icyuzuzo ku kwezi. Mu myaka irenga 15, yubatse kandi agaza ibicuruzwa bya digitale bya Skyscanner, Amenitiz, Glovo, Spotify, BookClub, Booking.com, Hilton, EY, PwC, Uber, Gap Inc., na Capital One.",
    founder2Bio: "Puya yubatse ibicuruzwa by'imikoranire uhereye ku busa, agaza urusobe rwa CPO rwa Monta guhera ku busa kugera ku burenganzira ku bicuruzwa birenga miliyoni imwe muri Uburayi na Amerika y'Amajyaruguru. Yagize uruhare mu iterambere ry'ikoranabuhanga OCPI kandi yagiriye inama ibigo bya Leta n'amasosiyete ku ishyirwa mu bikorwa ry'amategeko y'imikoranire ya EU.",
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
    independenceText: "AfCA gynnar inte enskilda teknologier eller företag. Styrningen omfattar minst en styrelseledamot som inte är grundare, så att oberoendet är strukturellt synligt snarare än enbart påstått.",
    breakCaption: "Nairobi — en av korridorstäderna som AfCA:s vägledning bygger på",
    foundersHeading: "Grundare",
    founder1Bio: "Kevin ledde produktdesign och research på Monta, laddningsplattformen som byggde Europas största CPO- och eMSP-nätverk och en app med över 3 miljoner laddsessioner i månaden. Under 15+ år har han byggt och skalat digitala produkter för Skyscanner, Amenitiz, Glovo, Spotify, BookClub, Booking.com, Hilton, EY, PwC, Uber, Gap Inc. och Capital One.",
    founder2Bio: "Puya har byggt roamingprodukter från grunden och skalat Montas CPO-nätverk från noll till att omfatta över en miljon laddare i Europa och Nordamerika. Han har bidragit till OCPI-protokollet och har rådgivit nationella myndigheter och företag om implementering av EU:s interoperabilitetsreglering.",
    governanceHeading: "Styrning",
    governanceText: "Fullständig styrningsdokumentation, inklusive styrelsesammansättning och stadgar, publiceras när AfCA:s registrering i Rwanda är klar.",
  },
};
