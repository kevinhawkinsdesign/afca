import type { Locale } from "./config";

export interface CommunityContent {
  heroTitle: string;
  heroIntro: string;
  membershipHeading: string;
  membershipTextPre: string;
  membershipLink: string;
  membershipTextPost: string;
  workingGroupsHeading: string;
  workingGroupsText: string;
  directoryHeading: string;
  directoryText: string;
  breakCaption: string;
  summitHeading: string;
  summitIntro: string;
  summitPurposeHeading: string;
  summitPurposeText: string;
  datesHeading: string;
  datesText: string;
  participationHeading: string;
  participationText: string;
}

export const communityContent: Record<Locale, CommunityContent> = {
  en: {
    heroTitle: "Community",
    heroIntro: "AfCA convenes Charge Point Operators, Electromobility Service Providers, electric utilities, fleet operators, hardware OEMs, and policymakers around shared, published standards — not closed-door advisory relationships with individual companies.",
    membershipHeading: "Membership",
    membershipTextPre: "Membership tiers, fees, and eligibility criteria are being finalised alongside AfCA's Rwanda registration and will be published here once confirmed. Participation follows the open-call principle described in the",
    membershipLink: "operating principles",
    membershipTextPost: ": organisations self-select against published criteria rather than being hand-picked.",
    workingGroupsHeading: "Working groups",
    workingGroupsText: "Working groups are formed around specific technical or policy questions — interoperability testing, tariff harmonisation, or a country's regulatory framework, for example — and publish their outputs openly rather than as member-only deliverables. The initial slate of working groups will be announced alongside the first AfCA Summit.",
    directoryHeading: "Participant directory",
    directoryText: "A directory of confirmed participating organisations will appear here. In keeping with AfCA's vendor-neutral positioning, this will list organisations as factual participants — not as testimonials or an implied endorsement.",
    breakCaption: "Nairobi at dusk",
    summitHeading: "The AfCA Annual Summit",
    summitIntro: "Curated representation across the value chain, action-oriented workshops rather than panels, and a catalyst for regional initiatives, donor-funded corridor pilots, and harmonised policy recommendations.",
    summitPurposeHeading: "What the Summit is for",
    summitPurposeText: "The Summit exists to produce outcomes, not to be attended. Every session is built around a working deliverable — a draft standard, a corridor pilot proposal, a policy recommendation — rather than a stage and an audience.",
    datesHeading: "Dates and location",
    datesText: "Dates and location for the first AfCA Summit will be announced here once confirmed.",
    participationHeading: "Participation",
    participationText: "Representation is curated across the value chain rather than open registration, consistent with AfCA's open-call principle: organisations apply against published criteria. Details on how to apply will be published ahead of the first Summit.",
  },
  fr: {
    heroTitle: "Communauté",
    heroIntro: "AfCA réunit Charge Point Operators, Electromobility Service Providers, distributeurs d'électricité, opérateurs de flottes, fabricants de matériel et décideurs publics autour de standards partagés et publiés — et non de relations de conseil à huis clos avec des entreprises individuelles.",
    membershipHeading: "Adhésion",
    membershipTextPre: "Les niveaux d'adhésion, les frais et les critères d'éligibilité sont en cours de finalisation en parallèle de l'enregistrement d'AfCA au Rwanda et seront publiés ici une fois confirmés. La participation suit le principe d'appel ouvert décrit dans les",
    membershipLink: "principes de fonctionnement",
    membershipTextPost: " : les organisations se portent candidates selon des critères publiés, plutôt que d'être sélectionnées au préalable.",
    workingGroupsHeading: "Groupes de travail",
    workingGroupsText: "Les groupes de travail se forment autour de questions techniques ou politiques précises — tests d'interopérabilité, harmonisation tarifaire, ou cadre réglementaire d'un pays, par exemple — et publient leurs résultats ouvertement plutôt que comme livrables réservés aux membres. La première liste de groupes de travail sera annoncée lors du premier Sommet AfCA.",
    directoryHeading: "Annuaire des participants",
    directoryText: "Un annuaire des organisations participantes confirmées apparaîtra ici. Conformément au positionnement neutre d'AfCA vis-à-vis des fournisseurs, il listera les organisations comme participants factuels — non comme témoignages ni comme approbation implicite.",
    breakCaption: "Nairobi au crépuscule",
    summitHeading: "Le Sommet annuel de l'AfCA",
    summitIntro: "Une représentation choisie sur toute la chaîne de valeur, des ateliers orientés vers l'action plutôt que des tables rondes, et un catalyseur d'initiatives régionales, de projets pilotes de corridors financés par des bailleurs, et de recommandations politiques harmonisées.",
    summitPurposeHeading: "À quoi sert le Sommet",
    summitPurposeText: "Le Sommet existe pour produire des résultats, pas pour être suivi comme spectateur. Chaque session est construite autour d'un livrable concret — un projet de standard, une proposition de projet pilote de corridor, une recommandation politique — plutôt qu'autour d'une scène et d'un public.",
    datesHeading: "Dates et lieu",
    datesText: "Les dates et le lieu du premier Sommet AfCA seront annoncés ici une fois confirmés.",
    participationHeading: "Participation",
    participationText: "La représentation est choisie sur toute la chaîne de valeur plutôt qu'ouverte à toute inscription, conformément au principe d'appel ouvert d'AfCA : les organisations postulent selon des critères publiés. Les modalités de candidature seront publiées avant le premier Sommet.",
  },
  rw: {
    heroTitle: "Umuryango",
    heroIntro: "AfCA ihuza Charge Point Operators, Electromobility Service Providers, ibigo by'amashanyarazi, abakoresha imodoka nyinshi, abakora ibikoresho, n'abafata ibyemezo hakurikijwe amabwiriza rusange yasohotse — ntabwo ari imikoranire y'ubujyanama y'ibanga na kimwe cy'ibigo.",
    membershipHeading: "Ubunyamuryango",
    membershipTextPre: "Amasomo y'ubunyamuryango, amafaranga, n'ibipimo byo kwinjira birimo gushyirwaho hamwe n'iyandikwa rya AfCA mu Rwanda kandi bizasohoka hano nyuma yo kwemezwa. Ubwitabire bukurikiza ihame ry'itumira rifunguye risobanurwa mu",
    membershipLink: "mahame y'imikorere",
    membershipTextPost: ": imiryango yiyandikisha ku bipimo byatangajwe, aho kuba abatoranyijwe mbere.",
    workingGroupsHeading: "Amatsinda y'akazi",
    workingGroupsText: "Amatsinda y'akazi ashingwa hashingiwe ku bibazo bihariye bya tekiniki cyangwa amabwiriza — urugero, kugerageza imikoranire, guhuza ibiciro, cyangwa amategeko y'igihugu runaka — kandi asohora ibyavuye mu bikorwa mu buryo bugaragarira bose aho kuba ibisohoka byihariwe n'abanyamuryango gusa. Urutonde rwa mbere rw'amatsinda y'akazi ruzatangazwa hamwe n'Inama Nkuru ya mbere ya AfCA.",
    directoryHeading: "Urutonde rw'abitabiriye",
    directoryText: "Urutonde rw'imiryango yemejwe ko yitabiriye ruzagaragara hano. Bikurikije uko AfCA idashyigikira ikigo runaka, uru rutonde ruzagaragaza imiryango nk'abitabiriye by'ukuri — ntabwo ari ibihamya cyangwa ishyigikirwa ritaziguye.",
    breakCaption: "Nairobi mu mugoroba",
    summitHeading: "Inama Nkuru ya AfCA y'Umwaka",
    summitIntro: "Ubuhagarariro bwatoranyijwe mu murongo wose w'ubucuruzi, imyigire ishingiye ku bikorwa aho kuba ibiganiro gusa, n'inzira yo gutera imbere ibikorwa by'akarere, ibizamini by'imihanda bishyigikiwe n'inkunga, n'ibyifuzo by'amabwiriza ahurijwe hamwe.",
    summitPurposeHeading: "Icyo Inama Nkuru igamije",
    summitPurposeText: "Inama Nkuru ibaho kugira ngo itange ibisohoka, ntabwo ari ukuyitabira gusa. Buri gice cy'inama gishingiye ku kintu gikorerwa — inyandiko y'ibanze y'amabwiriza, igitekerezo cy'ikizamini ku muhanda, cyangwa inama y'amabwiriza — aho kuba ahantu ho kuvuga imbere y'abateze amatwi.",
    datesHeading: "Itariki n'aho bizabera",
    datesText: "Itariki n'aho Inama Nkuru ya mbere ya AfCA izabera bizatangazwa hano nyuma yo kwemezwa.",
    participationHeading: "Ubwitabire",
    participationText: "Ubuhagarariro butoranywa mu murongo wose w'ubucuruzi aho kuba byiyandikisha ku bushake, bikurikije ihame rya AfCA ry'itumira rifunguye: imiryango yiyamamaza hakurikijwe ibipimo byatangajwe. Uburyo bwo kwiyamamaza buzatangazwa mbere y'Inama Nkuru ya mbere.",
  },
  sv: {
    heroTitle: "Gemenskap",
    heroIntro: "AfCA samlar Charge Point Operators, Electromobility Service Providers, elbolag, flottoperatörer, hårdvarutillverkare och beslutsfattare kring delade, publicerade standarder — inte slutna rådgivningsrelationer med enskilda företag.",
    membershipHeading: "Medlemskap",
    membershipTextPre: "Medlemsnivåer, avgifter och behörighetskriterier färdigställs i samband med AfCA:s registrering i Rwanda och publiceras här när de är bekräftade. Deltagande följer principen om öppen ansökan som beskrivs i",
    membershipLink: "arbetsprinciperna",
    membershipTextPost: ": organisationer ansöker själva utifrån publicerade kriterier snarare än att bli utvalda.",
    workingGroupsHeading: "Arbetsgrupper",
    workingGroupsText: "Arbetsgrupper bildas kring specifika tekniska eller policyrelaterade frågor — interoperabilitetstestning, taxeharmonisering eller ett lands regelverk, till exempel — och publicerar sina resultat öppet snarare än som medlemsexklusiva leveranser. Den första uppsättningen arbetsgrupper tillkännages i samband med det första AfCA-toppmötet.",
    directoryHeading: "Deltagarförteckning",
    directoryText: "En förteckning över bekräftade deltagande organisationer visas här. I linje med AfCA:s leverantörsneutrala position listas organisationer som faktiska deltagare — inte som kundberättelser eller ett underförstått godkännande.",
    breakCaption: "Nairobi i skymningen",
    summitHeading: "AfCA:s årliga toppmöte",
    summitIntro: "Utvald representation längs hela värdekedjan, handlingsinriktade workshops snarare än paneler, och en katalysator för regionala initiativ, donatorfinansierade korridorpiloter och harmoniserade policyrekommendationer.",
    summitPurposeHeading: "Vad toppmötet är till för",
    summitPurposeText: "Toppmötet finns för att skapa resultat, inte för att bevistas som åskådare. Varje session byggs kring en konkret leverans — ett utkast till standard, ett förslag till korridorpilot, en policyrekommendation — snarare än en scen och en publik.",
    datesHeading: "Datum och plats",
    datesText: "Datum och plats för det första AfCA-toppmötet tillkännages här när de är bekräftade.",
    participationHeading: "Deltagande",
    participationText: "Representationen är utvald längs hela värdekedjan snarare än öppen anmälan, i linje med AfCA:s princip om öppen ansökan: organisationer ansöker utifrån publicerade kriterier. Detaljer om hur man ansöker publiceras inför det första toppmötet.",
  },
};
