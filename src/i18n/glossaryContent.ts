import type { Locale } from "./config";

// Term names (acronyms, protocol names) are deliberately left
// untranslated across all locales — that's standard technical-glossary
// practice and keeps every language cross-referenceable against the
// same protocol specs. Only definitions are translated.
export interface GlossaryUi {
  heading: string;
  intro: string;
  searchPlaceholder: string;
  noMatches: string;
}

export const glossaryUi: Record<Locale, GlossaryUi> = {
  en: {
    heading: "Glossary",
    intro: "Charging and interoperability terminology used across this guidance — vendor-neutral, standards-sourced definitions, not marketing language.",
    searchPlaceholder: "Search terms…",
    noMatches: "No terms match your search.",
  },
  fr: {
    heading: "Glossaire",
    intro: "Terminologie de la recharge et de l'interopérabilité utilisée dans ces guides — définitions neutres vis-à-vis des fournisseurs, sourcées sur les standards, pas un langage marketing.",
    searchPlaceholder: "Rechercher un terme…",
    noMatches: "Aucun terme ne correspond à votre recherche.",
  },
  rw: {
    heading: "Inkoranya-magambo",
    intro: "Amagambo y'icyuzuzo n'imikoranire akoreshwa muri aya mabwiriza — ibisobanuro bitarobanura ikigo runaka, bikomoka ku mabwiriza mbonezamubano, ntabwo ari ururimi rw'ubucuruzi.",
    searchPlaceholder: "Shakisha ijambo…",
    noMatches: "Nta jambo rihuye n'ushaka.",
  },
  sv: {
    heading: "Ordlista",
    intro: "Ladd- och interoperabilitetsterminologi som används i den här vägledningen — leverantörsneutrala, standardbaserade definitioner, inte marknadsföringsspråk.",
    searchPlaceholder: "Sök termer…",
    noMatches: "Inga termer matchar din sökning.",
  },
};

// [term, definition] pairs, in the same order/grouping as the English
// source (src/components/GlossarySection.astro) so the A-Z letter-jump
// logic groups identically across locales.
export const glossaryTerms: Record<Locale, Array<[string, string]>> = {
  en: [
    ["AC charging", "Alternating Current charging — the slower charging type (typically up to ~22 kW) that uses the vehicle's onboard charger to convert AC from the grid to DC for the battery."],
    ["CPMS", "Charge Point Management System — the backend software that monitors, controls, and bills charging stations, and coordinates with a CPO's operations."],
    ["CPO", "Charge Point Operator — owns and operates physical charging stations."],
    ["DC fast charging", "Direct Current fast charging — delivers DC power straight to the battery, bypassing the onboard charger, enabling much higher power and shorter charging times than AC."],
    ["DSO", "Distribution System Operator — the utility responsible for the local electricity grid a charging site connects to."],
    ["eMSP", "eMobility Service Provider (also written EMSP) — sells charging access to drivers, often across multiple CPO networks through roaming agreements."],
    ["EVSE", "Electric Vehicle Supply Equipment — the formal term for the physical charging unit itself, covering both AC and DC hardware."],
    ["GB/T", "The Chinese national charging connector and communication standard (Guobiao), distinct from CCS and Type 2 — relevant wherever Chinese-made vehicles or chargers are deployed."],
    ["ISO 15118", "The international standard governing communication between an electric vehicle and a charging station, including Plug & Charge authentication."],
    ["kW / kWh", "Kilowatt (kW) measures charging power — how fast energy is delivered. Kilowatt-hour (kWh) measures energy itself — how much a battery holds or a session delivers."],
    ["OCPI", "Open Charge Point Interface — the protocol for roaming between CPOs and eMSPs, letting a driver charge on a network they don't hold an account with. Owned and maintained by the EVRoaming Foundation."],
    ["OCPP", "Open Charge Point Protocol — the protocol between a physical charger and its CPMS, covering status reporting, remote control, and firmware updates. Owned by the Open Charge Alliance."],
    ["OICP", "Open InterCharge Protocol — an alternative roaming protocol to OCPI, notably used by Hubject."],
    ["OSCP", "Open Smart Charging Protocol — coordinates charging with local grid capacity constraints, such as a site's connection limit. Owned by the Open Charge Alliance."],
    ["Plug & Charge", "An ISO 15118 capability that authenticates and starts a charging session automatically when the cable is plugged in, with no app, card, or RFID tap required."],
    ["Roaming", "The arrangement that lets a driver charge on a network they don't hold a direct account with, settled between the CPO and the driver's eMSP — the function OCPI and OICP exist to standardise."],
    ["SLA", "Service Level Agreement — a contracted commitment to a measurable operating standard, most often charger uptime, in a CPO or CPMS vendor relationship."],
    ["Tariff", "The pricing structure applied to a charging session — commonly per-kWh, per-minute, a flat session fee, or a blend of these."],
    ["Uptime", "The share of time a charger is available and working, the headline reliability metric operators and this Alliance track — and the opposite of the broken-charger problem interoperability guidance exists to reduce."],
  ],
  fr: [
    ["AC charging", "Recharge en courant alternatif — le type de recharge le plus lent (généralement jusqu'à ~22 kW) qui utilise le chargeur embarqué du véhicule pour convertir l'AC du réseau en DC pour la batterie."],
    ["CPMS", "Charge Point Management System — le logiciel backend qui surveille, contrôle et facture les bornes de recharge, et coordonne avec les opérations d'un CPO."],
    ["CPO", "Charge Point Operator — possède et exploite les bornes de recharge physiques."],
    ["DC fast charging", "Recharge rapide en courant continu — délivre l'énergie DC directement à la batterie, en contournant le chargeur embarqué, permettant une puissance bien plus élevée et des temps de recharge plus courts qu'en AC."],
    ["DSO", "Distribution System Operator — le distributeur responsable du réseau électrique local auquel un site de recharge est raccordé."],
    ["eMSP", "eMobility Service Provider (aussi écrit EMSP) — vend l'accès à la recharge aux conducteurs, souvent sur plusieurs réseaux de CPO via des accords d'itinérance."],
    ["EVSE", "Electric Vehicle Supply Equipment — le terme formel pour l'unité de recharge physique elle-même, couvrant le matériel AC et DC."],
    ["GB/T", "Le standard chinois national de connecteur et de communication de recharge (Guobiao), distinct de CCS et Type 2 — pertinent partout où des véhicules ou bornes fabriqués en Chine sont déployés."],
    ["ISO 15118", "Le standard international régissant la communication entre un véhicule électrique et une borne de recharge, y compris l'authentification Plug & Charge."],
    ["kW / kWh", "Le kilowatt (kW) mesure la puissance de recharge — la vitesse à laquelle l'énergie est délivrée. Le kilowattheure (kWh) mesure l'énergie elle-même — la quantité qu'une batterie contient ou qu'une session délivre."],
    ["OCPI", "Open Charge Point Interface — le protocole d'itinérance entre CPO et eMSP, permettant à un conducteur de recharger sur un réseau où il n'a pas de compte. Détenu et maintenu par l'EVRoaming Foundation."],
    ["OCPP", "Open Charge Point Protocol — le protocole entre une borne physique et son CPMS, couvrant le reporting de statut, le contrôle à distance et les mises à jour de firmware. Détenu par l'Open Charge Alliance."],
    ["OICP", "Open InterCharge Protocol — un protocole d'itinérance alternatif à OCPI, notamment utilisé par Hubject."],
    ["OSCP", "Open Smart Charging Protocol — coordonne la recharge avec les contraintes de capacité du réseau local, comme la limite de raccordement d'un site. Détenu par l'Open Charge Alliance."],
    ["Plug & Charge", "Une capacité d'ISO 15118 qui authentifie et démarre automatiquement une session de recharge dès le branchement du câble, sans application, carte, ni badge RFID requis."],
    ["Roaming", "Le dispositif qui permet à un conducteur de recharger sur un réseau où il n'a pas de compte direct, réglé entre le CPO et l'eMSP du conducteur — la fonction qu'OCPI et OICP existent pour standardiser."],
    ["SLA", "Service Level Agreement — un engagement contractuel envers un standard opérationnel mesurable, le plus souvent la disponibilité des bornes, dans une relation CPO ou fournisseur de CPMS."],
    ["Tariff", "La structure tarifaire appliquée à une session de recharge — généralement au kWh, à la minute, un forfait de session, ou une combinaison de ceux-ci."],
    ["Uptime", "La part du temps pendant laquelle une borne est disponible et fonctionne, la mesure de fiabilité phare suivie par les opérateurs et cette Alliance — et l'inverse du problème de borne cassée que les guides d'interopérabilité existent pour réduire."],
  ],
  rw: [
    ["AC charging", "Icyuzuzo cya Alternating Current — ubwoko bw'icyuzuzo buhoro (akenshi kugeza kuri 22 kW) bukoresha igicuruzwa cy'icyuzuzo kiri mu modoka guhindura AC iva ku kibaho ikaba DC ya bateri."],
    ["CPMS", "Charge Point Management System — porogaramu ya nyuma igenzura, ikayobora, kandi ikishyuza ibicuruzwa by'icyuzuzo, kandi ihuza n'imikorere ya CPO."],
    ["CPO", "Charge Point Operator — nyir'ibicuruzwa by'icyuzuzo akaba n'uwabikoresha."],
    ["DC fast charging", "Icyuzuzo cy'ihuse cya Direct Current — gitanga ingufu za DC ku bateri butaziye ku gicuruzwa cy'icyuzuzo kiri mu modoka, bikemerera imbaraga nyinshi n'igihe gito cy'icyuzuzo ugereranyije na AC."],
    ["DSO", "Distribution System Operator — ikigo cy'amashanyarazi gishinzwe umuyoboro w'amashanyarazi w'ahantu icyuzuzo gihuriraho."],
    ["eMSP", "eMobility Service Provider (byanditswe kandi EMSP) — igurisha uburenganzira bwo gucyuza ku bashoferi, akenshi ku miyoboro myinshi ya CPO binyuze mu masezerano y'imikoranire."],
    ["EVSE", "Electric Vehicle Supply Equipment — ijambo ryemewe ku gicuruzwa cy'icyuzuzo ubwacyo, harimo ibikoresho bya AC na DC."],
    ["GB/T", "Uburyo bw'igihugu bw'Ubushinwa bw'umuyoboro n'itumanaho ry'icyuzuzo (Guobiao), butandukanye na CCS na Type 2 — bifite akamaro aho imodoka cyangwa ibicuruzwa by'Ubushinwa bikoreshwa."],
    ["ISO 15118", "Uburyo mpuzamahanga bugenga itumanaho hagati y'imodoka ikoresha amashanyarazi n'igicuruzwa cy'icyuzuzo, harimo kwemeza kwa Plug & Charge."],
    ["kW / kWh", "Kilowatt (kW) ipima imbaraga z'icyuzuzo — uko ingufu zitangwa vuba. Kilowatt-hour (kWh) ipima ingufu ubwazo — igitigiri bateri ibitse cyangwa igikorwa gitanze."],
    ["OCPI", "Open Charge Point Interface — uburyo bw'imikoranire hagati ya CPO na eMSP, bituma umushoferi acyuza ku rusobe adafite konti. Ifitwe kandi igacungwa na EVRoaming Foundation."],
    ["OCPP", "Open Charge Point Protocol — uburyo hagati y'igicuruzwa nyacyo na CPMS yacyo, burimo raporo y'imiterere, ikoreshwa kure, n'ivugururwa rya firmware. Ifitwe na Open Charge Alliance."],
    ["OICP", "Open InterCharge Protocol — ubundi buryo bw'imikoranire busimbura OCPI, cyane cyane bukoreshwa na Hubject."],
    ["OSCP", "Open Smart Charging Protocol — ihuza icyuzuzo n'imbibi z'ubushobozi bw'umuyoboro w'ahantu, nk'urugero rw'guhuza ahantu. Ifitwe na Open Charge Alliance."],
    ["Plug & Charge", "Ubushobozi bwa ISO 15118 bwemeza kandi bukatangira igikorwa cy'icyuzuzo mu buryo bwikora igihe umugozi wahujwe, nta porogaramu, ikarita, cyangwa RFID bisabwa."],
    ["Roaming", "Uburyo butuma umushoferi acyuza ku rusobe adafite konti butaziguye, buhurizwa hagati ya CPO na eMSP y'umushoferi — akazi OCPI na OICP zabayeho kugira ngo zisanzuzwe."],
    ["SLA", "Service Level Agreement — isezerano ryanditse ku buziranenge bushobora gupimwa, akenshi kuboneka kw'igicuruzwa, mu mikoranire ya CPO cyangwa uwatanze CPMS."],
    ["Tariff", "Imiterere y'ibiciro ishyirwa ku gikorwa cy'icyuzuzo — akenshi ku kWh, ku munota, amafaranga y'igikorwa yagenwe, cyangwa ihuriro ry'ibi."],
    ["Uptime", "Igihe igicuruzwa kiboneka kandi gikora, ni cyo gipimo cy'ibanze cy'ukwizerwa abakoresha n'iri Shyirahamwe bakurikirana — kandi ni ikibujije ikibazo cy'igicuruzwa cyangiritse amabwiriza y'imikoranire agamije kugabanya."],
  ],
  sv: [
    ["AC charging", "Växelströmsladdning — den långsammare laddningstypen (vanligtvis upp till ~22 kW) som använder fordonets ombordladdare för att omvandla AC från nätet till DC för batteriet."],
    ["CPMS", "Charge Point Management System — backend-mjukvaran som övervakar, styr och fakturerar laddstationer, och samordnar med en CPO:s drift."],
    ["CPO", "Charge Point Operator — äger och driver fysiska laddstationer."],
    ["DC fast charging", "DC-snabbladdning — levererar DC-ström direkt till batteriet, förbi ombordladdaren, vilket möjliggör mycket högre effekt och kortare laddtider än AC."],
    ["DSO", "Distribution System Operator — elbolaget som ansvarar för det lokala elnät en laddplats ansluter till."],
    ["eMSP", "eMobility Service Provider (skrivs även EMSP) — säljer laddåtkomst till förare, ofta över flera CPO-nätverk genom roamingavtal."],
    ["EVSE", "Electric Vehicle Supply Equipment — det formella begreppet för själva den fysiska laddenheten, omfattar både AC- och DC-hårdvara."],
    ["GB/T", "Den kinesiska nationella standarden för laddkontakt och kommunikation (Guobiao), skild från CCS och Typ 2 — relevant där kinatillverkade fordon eller laddare används."],
    ["ISO 15118", "Den internationella standarden som styr kommunikationen mellan ett elfordon och en laddstation, inklusive Plug & Charge-autentisering."],
    ["kW / kWh", "Kilowatt (kW) mäter laddeffekt — hur snabbt energi levereras. Kilowattimme (kWh) mäter själva energin — hur mycket ett batteri rymmer eller en session levererar."],
    ["OCPI", "Open Charge Point Interface — protokollet för roaming mellan CPO:er och eMSP:er, som låter en förare ladda på ett nätverk de inte har konto hos. Ägs och underhålls av EVRoaming Foundation."],
    ["OCPP", "Open Charge Point Protocol — protokollet mellan en fysisk laddare och dess CPMS, omfattar statusrapportering, fjärrstyrning och firmware-uppdateringar. Ägs av Open Charge Alliance."],
    ["OICP", "Open InterCharge Protocol — ett alternativt roamingprotokoll till OCPI, används bland annat av Hubject."],
    ["OSCP", "Open Smart Charging Protocol — samordnar laddning med lokala nätkapacitetsbegränsningar, till exempel en plats anslutningsgräns. Ägs av Open Charge Alliance."],
    ["Plug & Charge", "En ISO 15118-funktion som autentiserar och startar en laddsession automatiskt när kabeln ansluts, utan app, kort eller RFID-tagg."],
    ["Roaming", "Arrangemanget som låter en förare ladda på ett nätverk de inte har ett direkt konto hos, avräknat mellan CPO:n och förarens eMSP — funktionen OCPI och OICP finns för att standardisera."],
    ["SLA", "Service Level Agreement — ett kontrakterat åtagande till en mätbar driftstandard, oftast laddares drifttid, i en CPO- eller CPMS-leverantörsrelation."],
    ["Tariff", "Prisstrukturen som tillämpas på en laddsession — vanligtvis per kWh, per minut, en fast sessionsavgift, eller en blandning av dessa."],
    ["Uptime", "Andelen tid en laddare är tillgänglig och fungerar, det centrala tillförlitlighetsmåttet operatörer och denna Allians följer — och motsatsen till problemet med trasiga laddare som interoperabilitetsvägledning finns för att minska."],
  ],
};
