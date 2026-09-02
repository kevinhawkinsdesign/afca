// Translated Standards guide content for fr/rw/sv. English guides remain
// the hand-authored .astro files under src/pages/standards/ — this
// dictionary only covers the three non-English locales, consumed by the
// [locale]/standards/[slug].astro dynamic route via GuideLayout's
// set:html. Technical identifiers (OCPP, OCPI, GB/T, CCS2, code literals
// like StartTransaction, etc.) are deliberately left untranslated, per
// standard technical-documentation practice — translating them would
// make the guidance harder to cross-reference against the protocol specs
// themselves, not easier to follow.
//
// Translation-quality note (see also i18n/homeContent.ts and the commit
// history): French and Swedish here are done with high confidence.
// Kinyarwanda is a best-effort translation of genuinely technical
// protocol/operations content — this is exactly the category BRIEF.md
// originally kept English-only because a translation error carries real
// operational risk (e.g. a mistranslated testing step). It should get a
// native-speaker + technical review before field teams rely on it.

import type { Locale } from "./config";

export interface StandardsGuide {
  title: string;
  description: string;
  bodyHtml: string;
}

type NonEnglishGuides = Record<Exclude<Locale, "en">, StandardsGuide>;

export const standardsGuides: Record<string, NonEnglishGuides> = {
  cpms: {
    fr: {
      title: "Construire et exploiter un CPMS",
      description: "Un Charge Point Management System est une infrastructure, pas une liste de fonctionnalités. La fiabilité, l'observabilité et une gestion propre des protocoles comptent plus que le tableau de bord.",
      bodyHtml: `
        <h2>Ce qu'un CPMS doit réellement faire</h2>
        <p>Un Charge Point Management System se situe entre les bornes physiques et tout ce qui dépend de leur bon fonctionnement : conducteurs, facturation, partenaires d'itinérance et réseau électrique. Ses responsabilités essentielles sont étroites mais sans marge d'erreur :</p>
        <ul>
          <li>Maintenir une connexion OCPP active avec chaque borne et détecter en quelques secondes toute déconnexion.</li>
          <li>Autoriser les sessions — avec une mise en cache locale là où la connectivité est peu fiable, pour qu'une coupure réseau ne bloque pas un conducteur en cours de branchement.</li>
          <li>Mesurer et facturer les sessions avec précision, y compris les sessions partielles causées par une panne ou un arrêt manuel.</li>
          <li>Exposer la disponibilité et le statut aux eMSP et partenaires d'itinérance via OCPI ou OICP sans latence.</li>
          <li>Déployer les mises à jour de firmware et de configuration sans mettre les bornes hors service aux heures de pointe.</li>
        </ul>

        <h2>Concevoir pour une connectivité dégradée, pas idéale</h2>
        <p>Dans une grande partie du marché africain, la connexion cellulaire des sites de recharge est intermittente. Un CPMS qui suppose une connectivité permanente échouera précisément là où la fiabilité compte le plus. Deux décisions déterminent si une coupure passe inaperçue ou laisse un conducteur bloqué :</p>
        <ul>
          <li><strong>Autorisation hors ligne.</strong> Les bornes doivent conserver un cache d'autorisation local (une liste locale OCPP ou équivalent) pour qu'un badge RFID ou un jeton d'application connu puisse démarrer une session sans aller-retour en direct vers le backend.</li>
          <li><strong>Réconciliation de session à la reconnexion.</strong> Lorsqu'une borne se reconnecte après une coupure, le CPMS doit réconcilier les valeurs de compteur et l'état de la session plutôt que de traiter cet intervalle comme une perte de données.</li>
        </ul>

        <h2>La disponibilité est d'abord un problème de supervision, avant d'être un problème d'ingénierie</h2>
        <p>La « disponibilité » est souvent rapportée de manière optimiste car mesurée comme « connecteur joignable » plutôt que « session réalisable ». Une borne qui accepte une connexion mais échoue à chaque requête <code>StartTransaction</code> n'est pas disponible. Suivez et publiez au minimum :</p>
        <ul>
          <li>La disponibilité de connectivité (heartbeat) — la borne est-elle joignable</li>
          <li>La disponibilité transactionnelle — une session tentée s'est-elle réellement terminée</li>
          <li>Le temps moyen de détection d'une panne, et le temps moyen de résolution</li>
        </ul>

        <h2>Itinérance et tarification</h2>
        <p>Si le CPMS doit un jour exposer des sites à des eMSP tiers, construisez l'intégration OCPI (ou OICP) comme un module de premier ordre, pas comme un ajout secondaire. Les structures tarifaires en particulier doivent gérer indépendamment la tarification selon l'heure, les frais de session et les frais d'immobilisation, car les tarifs réseau et l'économie du site varient fortement selon le pays et le distributeur.</p>

        <h2>Liste de contrôle opérationnelle avant la mise en service</h2>
        <ol>
          <li>Chaque modèle de borne du parc a passé les tests de conformité OCPP avec le CPMS (voir le <a href="/fr/standards/ocpi-ocpp-testing">guide de test</a>).</li>
          <li>L'autorisation hors ligne est testée en déconnectant physiquement la liaison réseau en cours de session.</li>
          <li>Des alertes existent pour les pannes de connecteur, pas seulement pour les événements de borne hors ligne.</li>
          <li>La réconciliation de facturation a été exécutée sur au moins un cycle de facturation complet de données de session réelles, avant de facturer de l'argent réel.</li>
          <li>Un plan de retour arrière existe pour les déploiements de firmware, et un déploiement sur l'ensemble du parc n'a jamais été testé pour la première fois en production.</li>
        </ol>
      `,
    },
    rw: {
      title: "Kubaka no gukoresha CPMS",
      description: "Charge Point Management System ni ikibaho remezo, ntabwo ari urutonde rw'ibintu bishya. Kwizerwa, kugaragara neza, no gucunga neza amabwiriza bifite agaciro kurusha dashboard.",
      bodyHtml: `
        <h2>Icyo CPMS igomba gukora by'ukuri</h2>
        <p>Charge Point Management System iri hagati y'ibikoresho by'icyuzuzo n'ibindi byose bibishingiraho: abashoferi, kwishyura, abafatanyabikorwa mu mikoranire, n'ikibaho cy'amashanyarazi. Inshingano zayo z'ibanze ni nke ariko zidasunika:</p>
        <ul>
          <li>Kubungabunga umuyoboro OCPP ukora hagati ya buri gicuruzwa no kumenya mu masegonda make igihe kimwe gihagaritse.</li>
          <li>Kwemeza gukoresha — bibitswe aho biri hafi aho intego yaba idahamye, kugira ngo ikibazo cy'umuyoboro kitagira ingaruka ku mushoferi uri hagati yo guhuza.</li>
          <li>Gupima no kwishyuza neza, harimo n'ibihe icyuzuzo cyahagaritswe cyangwa cyahagaritswe ku bushake.</li>
          <li>Kugaragaza aho bigeze n'imiterere ku eMSP n'abafatanyabikorwa mu mikoranire binyuze muri OCPI cyangwa OICP nta gutinda.</li>
          <li>Kohereza impinduka za firmware n'imiterere nta gukuraho ibicuruzwa mu masaha y'ubukorikori bunini.</li>
        </ul>

        <h2>Gutegura ku mikoranire idahamye, ntabwo ari iy'inzozi</h2>
        <p>Mu bice byinshi by'isoko rya Afurika, umuyoboro w'itumanaho ku bibanza by'icyuzuzo ntawuhoraho. CPMS yizera ko umuyoboro uhoraho izananirwa aho kwizerwa bikenewe cyane. Ibyemezo bibiri bigena niba ikibazo kidagaragara cyangwa gisiga umushoferi ahagaze:</p>
        <ul>
          <li><strong>Kwemeza nta muyoboro.</strong> Ibicuruzwa bigomba kubika urutonde rw'uruhushya rwabo (urutonde rwa OCPP cyangwa ikindi kingana nako) kugira ngo ikarita RFID izwi cyangwa token ya porogaramu ishobore gutangira gukoresha nta gusubira inyuma ku bibitso.</li>
          <li><strong>Guhuza gukoresha igihe hasubiwe kwihuza.</strong> Igihe igicuruzwa gisubiye kwihuza nyuma yo guhagarara, CPMS igomba guhuza uburyo bw'ipima n'imiterere y'igikoresho aho kubifata nk'ibyabuze.</li>
        </ul>

        <h2>Kuboneka ni ikibazo cyo gukurikirana mbere yo kuba ikibazo cy'ubuhanga</h2>
        <p>"Kuboneka" akenshi bitangazwa mu buryo bwiza kubera ko bipimwa nk'uko igicuruzwa kigerwaho aho kuba nk'uko gukoresha bishobora kurangira neza. Igicuruzwa cyemera guhuza ariko kikananirwa buri gihe kubona igisabwa <code>StartTransaction</code> ntikiba gikora. Kurikirana kandi usohore nibura:</p>
        <ul>
          <li>Kuboneka kw'umuyoboro (heartbeat) — niba igicuruzwa kigerwaho</li>
          <li>Kuboneka mu gukoresha by'ukuri — niba gukoresha kwagerageje byarangiye</li>
          <li>Igihe cyo kumenya ikibazo n'igihe cyo gukemura</li>
        </ul>

        <h2>Imikoranire n'ibiciro</h2>
        <p>Niba CPMS izigera igaragaza ibibanza ku ma eMSP y'inyongera, ubaka imikoranire ya OCPI (cyangwa OICP) nk'igice cy'ibanze, ntabwo ari inyongera. Imiterere y'ibiciro cyane cyane igomba gushyigikira igiciro gishingiye ku gihe, amafaranga y'igihe cyo gukoresha, n'amafaranga y'igihe cyo guteganya ukwiyongera, kuko ibiciro by'ikibaho n'ubukungu bw'ahantu bitandukanira bikomeye hagati y'ibihugu n'ibigo by'amashanyarazi.</p>

        <h2>Urutonde rwo kugenzura mbere yo gutangira gukora</h2>
        <ol>
          <li>Buri gicuruzwa mu bikoresho cyanyuze mu bizamini bya OCPP na CPMS (reba <a href="/rw/standards/ocpi-ocpp-testing">amabwiriza y'ibizamini</a>).</li>
          <li>Kwemeza nta muyoboro byagerageshejwe mu gucomora umuyoboro w'ibimenyetso mu gihe cyo gukoresha.</li>
          <li>Hariho uburyo bwo kumenyesha ku bibazo by'igikoresho, ntabwo ari ibimenyetso by'igicuruzwa kidafite umuyoboro gusa.</li>
          <li>Guhuza kwishyura byakozwe ku byibuze igihe kimwe cyuzuye cy'ishyurwa cy'amakuru y'ukuri, mbere yo kwishyuza amafaranga y'ukuri.</li>
          <li>Hariho gahunda yo gusubira inyuma ku byoherezwa bya firmware, kandi kohereza mu bicuruzwa byose ntibyigeze bigeragezwa bwa mbere mu bikorwa nyabyo.</li>
        </ol>
      `,
    },
    sv: {
      title: "Bygga och driva ett CPMS",
      description: "Ett Charge Point Management System är infrastruktur, inte en funktionslista. Tillförlitlighet, observerbarhet och ren protokollhantering betyder mer än instrumentpanelen.",
      bodyHtml: `
        <h2>Vad ett CPMS faktiskt måste göra</h2>
        <p>Ett Charge Point Management System sitter mellan fysiska laddare och allt som är beroende av att de fungerar: förare, fakturering, roamingpartner och elnätet. Kärnansvaret är smalt men oförlåtande:</p>
        <ul>
          <li>Upprätthålla en aktiv OCPP-anslutning till varje laddare och veta inom sekunder när en tappas.</li>
          <li>Auktorisera sessioner — lokalt cachad där anslutningen är opålitlig, så att en nätverksstörning inte lämnar en förare strandsatt mitt i anslutningen.</li>
          <li>Mäta och fakturera sessioner korrekt, inklusive delsessioner orsakade av fel eller manuella stopp.</li>
          <li>Exponera tillgänglighet och status till eMSP:er och roamingpartner via OCPI eller OICP utan fördröjning.</li>
          <li>Driftsätta firmware- och konfigurationsändringar utan att ta laddare offline under högtrafik.</li>
        </ul>

        <h2>Designa för nedsatt anslutning, inte idealisk anslutning</h2>
        <p>I stora delar av den afrikanska marknaden är den mobila uppkopplingen till laddplatser intermittent. Ett CPMS som förutsätter ständig uppkoppling kommer att fallera exakt där tillförlitlighet spelar störst roll. Två beslut avgör om ett avbrott är osynligt eller lämnar en förare strandsatt:</p>
        <ul>
          <li><strong>Offline-auktorisering.</strong> Laddare bör ha en lokal auktoriseringscache (en OCPP-lokallista eller motsvarande) så att en känd RFID-tagg eller apptoken kan starta en session utan en direkt rundresa till backend.</li>
          <li><strong>Sessionsavstämning vid återanslutning.</strong> När en laddare återansluter efter ett avbrott behöver CPMS:et stämma av mätvärden och sessionstillstånd i stället för att behandla luckan som dataförlust.</li>
        </ul>

        <h2>Drifttid är ett övervakningsproblem innan det är ett tekniskt problem</h2>
        <p>"Drifttid" rapporteras ofta optimistiskt eftersom den mäts som att kontakten är nåbar snarare än att sessionen kan slutföras. En laddare som accepterar en anslutning men misslyckas med varje <code>StartTransaction</code>-förfrågan är inte uppe. Följ och publicera åtminstone:</p>
        <ul>
          <li>Heartbeat-/anslutningsdrifttid (är laddaren nåbar)</li>
          <li>Transaktionell drifttid (slutfördes en påbörjad session faktiskt)</li>
          <li>Genomsnittlig tid att upptäcka ett fel, och genomsnittlig tid att åtgärda det</li>
        </ul>

        <h2>Roaming och taxor</h2>
        <p>Om CPMS:et någonsin ska exponera sajter för tredjeparts-eMSP:er, bygg OCPI- (eller OICP-)integrationen som en förstklassig modul, inte en påbyggnad. Taxestrukturer behöver särskilt stödja tidsbaserad prissättning, sessionsavgifter och stillestånds­avgifter oberoende av varandra, eftersom nättaxor och platsekonomi varierar kraftigt mellan länder och elbolag.</p>

        <h2>Driftschecklista före lansering</h2>
        <ol>
          <li>Varje laddarmodell i flottan har klarat OCPP-konformitetstestning mot CPMS:et (se <a href="/sv/standards/ocpi-ocpp-testing">testguiden</a>).</li>
          <li>Offline-auktorisering är testad genom att fysiskt koppla bort uppkopplingen mitt i en session.</li>
          <li>Larm finns för kontaktfel, inte bara händelser där laddaren går offline.</li>
          <li>Faktureringsavstämning har körts mot minst en full faktureringscykel av verklig sessionsdata innan riktiga pengar debiteras.</li>
          <li>En återställningsplan finns för firmware-utrullningar, och en flottövergripande utrullning har aldrig testats för första gången i produktion.</li>
        </ol>
      `,
    },
  },
  "driver-app": {
    fr: {
      title: "L'application conducteur : particuliers et flottes",
      description: "Une application de recharge se juge dans les dix secondes qui précèdent le démarrage d'une session. Tout le reste — gestion de compte, historique, support — est secondaire par rapport à ce moment.",
      bodyHtml: `
        <h2>Le moment qui compte</h2>
        <p>Un conducteur qui approche une borne a besoin, dans l'ordre : la confirmation que le connecteur est réellement disponible (pas seulement « en ligne »), un moyen de démarrer la session qui fonctionne même avec un signal faible, et une confirmation immédiate que la recharge a commencé. Les applications qui échouent sur ce point ne le font pas bruyamment — les conducteurs cessent simplement de faire confiance au réseau et vont ailleurs.</p>
        <ul>
          <li>Afficher le statut du connecteur en direct, pas celui de la borne. Un site à quatre connecteurs avec une prise cassée ne doit pas apparaître comme « disponible ».</li>
          <li>Prendre en charge le démarrage par badge (NFC/RFID) comme solution de repli au démarrage via l'application. Ne faites pas de l'application un point de défaillance unique pour l'autorisation.</li>
          <li>Confirmer le démarrage de session par un signal visible sans ouvrir l'application — une LED ou un bip de la borne, pas seulement une notification push qui peut être retardée.</li>
        </ul>

        <h2>Exigences pour les particuliers</h2>
        <ul>
          <li><strong>Planification d'itinéraire :</strong> recherche de bornes tenant compte du trajet et de la fiabilité réelle, pas seulement des emplacements enregistrés.</li>
          <li><strong>Tarification transparente :</strong> le prix affiché avant le démarrage d'une session doit être celui réellement facturé, frais d'immobilisation inclus, affiché clairement plutôt qu'en petits caractères.</li>
          <li><strong>Clarté sur l'itinérance :</strong> lorsqu'une session passe par un partenaire d'itinérance (OCPI), l'application doit indiquer honnêtement quel réseau exploite la borne physique — les conducteurs résolvent les problèmes plus vite quand ils savent qui appeler.</li>
          <li><strong>Moyens de paiement adaptés au marché :</strong> mobile money et carte, pas carte uniquement. Ce n'est pas optionnel sur la plupart des marchés africains.</li>
        </ul>

        <h2>Là où les besoins des flottes diffèrent</h2>
        <p>Les opérateurs de flottes ne sont pas de simples particuliers avec plus de véhicules — ils ont besoin de primitives entièrement différentes :</p>
        <ul>
          <li><strong>Planification de dépôt :</strong> logique de file d'attente et de réservation pour que les véhicules chargent dans l'ordre dont le dépôt a besoin, pas au premier arrivé.</li>
          <li><strong>Répartition des coûts :</strong> les sessions doivent être attribuables à un véhicule, un conducteur et un centre de coût, avec des données exportables pour la comptabilité de flotte — pas seulement un reçu individuel.</li>
          <li><strong>Accès multi-conducteurs :</strong> un même véhicule peut être conduit par différentes personnes selon les équipes ; l'autorisation doit suivre le véhicule ou l'équipe, pas le compte d'un seul conducteur.</li>
          <li><strong>Recharge jusqu'à une cible, pas jusqu'au plein :</strong> les logiciels de planification de flotte ont souvent besoin que l'application/l'API permette d'arrêter à un niveau de charge ou une durée cible, pour gérer la santé de la batterie et le débit du dépôt.</li>
          <li><strong>API en priorité :</strong> les clients flotte voudront intégrer les données de session et de statut dans leurs propres systèmes de répartition ou de télématique. Traitez l'API comme un produit, pas comme un à-côté de l'application.</li>
        </ul>

        <h2>Réalités d'accessibilité et de connectivité</h2>
        <p>Concevez pour des conditions de faible bande passante et des appareils Android plus anciens, qui représentent une large part du parc installé sur les marchés cibles. Une application conducteur qui exige un téléchargement initial volumineux ou une connexion haut débit permanente exclura précisément les utilisateurs qui ont le plus besoin d'une recharge publique fiable.</p>
      `,
    },
    rw: {
      title: "Porogaramu y'umushoferi: umuguzi n'itsinda ry'imodoka",
      description: "Porogaramu y'icyuzuzo icibwaho amanota mu masegonda cumi ambere yo gutangira gukoresha. Ibindi byose — gucunga konti, amateka, ubufasha — ni ibya kabiri ugereranyije n'uko uwo mwanya ukora.",
      bodyHtml: `
        <h2>Umwanya ufite agaciro</h2>
        <p>Umushoferi wegereye igicuruzwa akeneye, mu rutonde: kwemeza ko umuyoboro uboneka by'ukuri (ntabwo ari "kumurikira" gusa), uburyo bwo gutangira gukoresha bukora n'igihe ikimenyetso kidahamye, n'igisubizo cyihuse cyerekana ko icyuzuzo cyatangiye. Porogaramu zinaniwe kuri ibi ntizinanirwa mu buryo bugaragara — abashoferi bahita bareka kwizera urwo rusobe bakajya ahandi.</p>
        <ul>
          <li>Erekana uko umuyoboro umeze mu gihe nyacyo, ntabwo ari uko igicuruzwa kimeze. Ahantu hafite imiyoboro ine kandi umwe muri yo waraturitse ntabwo hagomba kwerekana ko "hariho".</li>
          <li>Shyigikira gutangira ukoresheje gukoraho (NFC/RFID) nk'uburyo bwo gusimbura gutangira ukoresheje porogaramu. Ntukagire porogaramu ari yo yonyine ishobora kwemeza.</li>
          <li>Emeza gutangira gukoresha ukoresheje ikimenyetso umushoferi abona nta gukingura porogaramu — itara ry'igicuruzwa cyangwa ijwi, ntabwo ari ubutumwa bwoherejwe bushobora gutinda.</li>
        </ul>

        <h2>Ibisabwa ku baguzi ku giti cyabo</h2>
        <ul>
          <li><strong>Gutegura urugendo:</strong> gushakisha ibicuruzwa bishingiye ku muhanda hazirikanwa kwizerwa mu buzima nyabwo, ntabwo ari ahantu byanditswemo gusa.</li>
          <li><strong>Ibiciro bigaragara:</strong> igiciro cyerekanwe mbere yo gutangira gukoresha kigomba kuba ari cyo cyishyuwe, harimo amafaranga y'igihe cyo guteganya, kigaragazwa neza aho kuba mu nyandiko nto.</li>
          <li><strong>Kugaragaza imikoranire:</strong> igihe gukoresha binyuze ku mufatanyabikorwa mu mikoranire (OCPI), porogaramu igomba kuvuga ukuri ku rusobe rukoresha igicuruzwa nyacyo — abashoferi bakemura ibibazo vuba iyo bazi uwo bahamagara.</li>
          <li><strong>Uburyo bwo kwishyura buhuye n'isoko:</strong> amafaranga ya terefone na karita, ntabwo ari karita gusa. Ibi ntabwo ari ibyo guhitamo mu bice byinshi by'amasoko ya Afurika.</li>
        </ul>

        <h2>Aho ibisabwa n'itsinda ry'imodoka bitandukaniye</h2>
        <p>Abakoresha amatsinda y'imodoka ntabwo ari abaguzi basanzwe bafite imodoka nyinshi — bakeneye ibintu bitandukanye rwose:</p>
        <ul>
          <li><strong>Gutegura ahabikwa imodoka:</strong> uburyo bwo gutegereza no kubika umwanya kugira ngo imodoka zicyuzuzo mu rutonde ahabikwa imodoka bikeneye, ntabwo ari uwabanje kuza.</li>
          <li><strong>Igabana ry'amafaranga:</strong> gukoresha bigomba kugereranywa n'imodoka, umushoferi, n'ikigo cy'amafaranga, hamwe n'amakuru ashobora gusohoka ku bibazo by'ibaruramari — ntabwo ari inyemezabuguzi bwite gusa.</li>
          <li><strong>Kwinjira kw'abashoferi benshi:</strong> imodoka imwe ishobora gutwarwa n'abantu batandukanye mu gihe cy'akazi gatandukanye; kwemeza bigomba gukurikira imodoka cyangwa igihe cy'akazi, ntabwo ari konti y'umushoferi umwe.</li>
          <li><strong>Kuzuza kugeza ku ntego, ntabwo ari kuzuza burundu:</strong> porogaramu zo gutegura amatsinda y'imodoka akenshi zikeneye ko porogaramu/API ishyigikira guhagarara ku rugero runaka rw'icyuzuzo cyangwa igihe runaka, kugira ngo hacungwe ubuzima bwa bateri n'imikorere y'ahabikwa imodoka.</li>
          <li><strong>API mbere ya byose:</strong> abakiriya b'amatsinda y'imodoka bazashaka kwinjiza amakuru y'igikoresho n'uko bimeze mu mfashanyo zabo bwite zo gutegura cyangwa gukurikirana. Fata API nk'igicuruzwa, ntabwo ari ikintu cyongewe nyuma ya porogaramu.</li>
        </ul>

        <h2>Ukuri ku bishoboka n'imikoranire</h2>
        <p>Tegura ku mimerere y'umuyoboro udahamye n'ibikoresho bya Android bishaje, bigize igice kinini cy'ibikoresho bikoreshwa mu masoko yagenwe. Porogaramu y'umushoferi isaba gukurura amakuru menshi mbere cyangwa umuyoboro uhoraho w'umuvuduko mwinshi kugira ngo ikore izasiga inyuma abakoresha bakeneye cyane icyuzuzo cy'abaturage cyizewe.</p>
      `,
    },
    sv: {
      title: "Förarappen: konsument och flotta",
      description: "En laddapp bedöms under de tio sekunderna innan en session startar. Allt annat — kontohantering, historik, support — är sekundärt till att det ögonblicket fungerar.",
      bodyHtml: `
        <h2>Ögonblicket som räknas</h2>
        <p>En förare som närmar sig en laddare behöver, i ordning: en bekräftelse att kontakten faktiskt är tillgänglig (inte bara "online"), ett sätt att starta sessionen som fungerar även med svag signal, och omedelbar återkoppling att laddningen har börjat. Appar som gör fel här misslyckas inte högljutt — förare slutar bara tyst lita på nätverket och går någon annanstans.</p>
        <ul>
          <li>Visa live-status för kontakten, inte laddarens status. En plats med fyra kontakter där en är trasig ska inte visas som "tillgänglig".</li>
          <li>Stöd start-genom-tryck (NFC/RFID) som reserv till appbaserad start. Gör inte appen till en enda felkälla för auktorisering.</li>
          <li>Bekräfta sessionsstart med ett tillstånd föraren kan se utan att öppna appen — en LED eller pip från laddaren, inte bara en pushnotis som kan fördröjas.</li>
        </ul>

        <h2>Krav för konsumenter</h2>
        <ul>
          <li><strong>Reseplanering:</strong> ruttmedveten laddarsökning som tar hänsyn till verklig tillförlitlighet, inte bara registrerade platser.</li>
          <li><strong>Transparent prissättning:</strong> priset som visas innan en session startar ska vara det pris som debiteras, inklusive stilleståndsavgifter, tydligt visat snarare än i finstilt.</li>
          <li><strong>Tydlighet kring roaming:</strong> när en session sker via en roamingpartner (OCPI) ska appen vara ärlig om vilket nätverk som driver den fysiska laddaren — förare felsöker snabbare när de vet vem de ska ringa.</li>
          <li><strong>Betalmetoder som matchar marknaden:</strong> mobilbetalning och kort, inte bara kort. Detta är inte valfritt på de flesta afrikanska marknader.</li>
        </ul>

        <h2>Var flottkraven skiljer sig åt</h2>
        <p>Flottoperatörer är inte konsumenter med fler fordon — de behöver helt andra byggstenar:</p>
        <ul>
          <li><strong>Depåschemaläggning:</strong> kö- och bokningslogik så att fordon laddar i den ordning depån behöver skicka ut dem, inte först-till-kvarn.</li>
          <li><strong>Kostnadsfördelning:</strong> sessioner behöver kunna knytas till fordon, förare och kostnadsställe, med exporterbar data för flottbokföring — inte bara ett personligt kvitto.</li>
          <li><strong>Åtkomst för flera förare:</strong> ett enda fordon kan köras av olika personer över olika skift; auktorisering behöver följa fordonet eller skiftet, inte ett enskilt förarkonto.</li>
          <li><strong>Ladda till mål, inte till fullt:</strong> flottschemaläggningsmjukvara behöver ofta att appen/API:et stödjer att stanna vid en viss laddningsnivå eller tid, för att hantera batterihälsa och depågenomströmning.</li>
          <li><strong>API först:</strong> flottkunder vill hämta sessions- och statusdata till sina egna dispatch- eller telematiksystem. Behandla API:et som en produkt, inte en eftertanke till appen.</li>
        </ul>

        <h2>Tillgänglighet och verkliga anslutningsförhållanden</h2>
        <p>Designa för låg bandbredd och äldre Android-enheter, som utgör en stor andel av den installerade basen på målmarknaderna. En förarapp som kräver en stor initial nedladdning eller en ihållande höghastighetsanslutning för att fungera kommer att utestänga just de användare som mest behöver pålitlig publik laddning.</p>
      `,
    },
  },
  "hardware-selection": {
    fr: {
      title: "Choisir et installer le matériel de recharge",
      description: "Les décisions matérielles prises à l'achat déterminent l'économie du site pour une décennie. Les décisions d'installation déterminent si le matériel fonctionne comme prévu.",
      bodyHtml: `
        <h2>Critères d'évaluation, par ordre de priorité</h2>
        <ol>
          <li><strong>Conformité OCPP.</strong> Demandez la version OCPP précise et des preuves de tests de conformité (voir le <a href="/fr/standards/ocpi-ocpp-testing">guide de test</a>), pas une simple mention marketing « compatible OCPP ». De nombreux appareils n'implémentent qu'un sous-ensemble des messages.</li>
          <li><strong>Maintenabilité sur le marché local.</strong> Vérifiez l'existence de pièces détachées et d'un support technicien local, ou via un partenaire régional, avant de vous engager sur une ligne de matériel. Une borne nécessitant l'expédition d'une pièce depuis un autre continent a un plafond de disponibilité effectif quelle que soit la qualité de fabrication.</li>
          <li><strong>Indice de protection environnementale.</strong> Vérifiez les indices IP et de température par rapport aux conditions réelles du site — la poussière et la chaleur sont les deux causes les plus fréquentes de défaillance prématurée du matériel dans la région, pas les défauts électriques.</li>
          <li><strong>Adéquation du standard de connecteur.</strong> Faites correspondre le type de connecteur (CCS2, GB/T, Type 2, CHAdeMO) au parc de véhicules que le site desservira réellement — voir le guide sur l'<a href="/fr/standards/chinese-integration">intégration des véhicules chinois</a> si les véhicules équipés GB/T représentent une part significative du trafic attendu.</li>
          <li><strong>Empreinte réseau.</strong> Vérifiez la puissance appelée et le profil de demande de la borne par rapport au raccordement réseau réel du site et à l'accord avec le distributeur, avant la commande, pas après la livraison.</li>
        </ol>

        <h2>Installation et mise en service</h2>
        <p>Une borne qui passe les tests d'usine peut tout de même échouer sur site à cause de problèmes d'installation. La mise en service doit inclure, au minimum :</p>
        <ul>
          <li>Une mise à la terre et une protection électrique vérifiées, adaptées aux conditions du réseau local, validées par un électricien certifié.</li>
          <li>Un test de handshake OCPP en direct avec le CPMS cible avant que le site ne soit déclaré actif — pas seulement un test de connexion par défaut d'usine.</li>
          <li>Une session de test à pleine puissance, car de nombreuses pannes n'apparaissent que sous charge soutenue et non à la connexion.</li>
          <li>Une revue d'implantation physique : décharge de traction du câble, hauteur et portée du connecteur pour l'accessibilité, et protection contre les impacts de véhicules.</li>
        </ul>

        <h2>Modes de défaillance courants à anticiper</h2>
        <table>
          <thead><tr><th>Mode de défaillance</th><th>Cause principale</th><th>Atténuation</th></tr></thead>
          <tbody>
            <tr><td>Borne joignable, sessions en échec</td><td>Implémentation OCPP partielle</td><td>Tests de conformité avant l'achat</td></tr>
            <tr><td>Défauts de connecteur intermittents</td><td>Infiltration de poussière/chaleur</td><td>Adapter l'indice IP aux conditions du site, pas aux minimums de la fiche technique</td></tr>
            <tr><td>Délai de réparation long</td><td>Absence de partenaire de service local</td><td>Vérifier la maintenabilité avant le choix du matériel, pas après une panne</td></tr>
            <tr><td>Le site ne délivre pas la puissance nominale</td><td>Raccordement réseau sous-dimensionné</td><td>Valider par rapport à l'accord avec le distributeur avant de commander le matériel</td></tr>
          </tbody>
        </table>
      `,
    },
    rw: {
      title: "Guhitamo no gushyiraho ibikoresho by'icyuzuzo",
      description: "Ibyemezo ku bikoresho bifatwa mu kugura bigena ubukungu bw'ahantu mu myaka icumi iri imbere. Ibyemezo ku ishyirwaho bigena niba ibikoresho bikora nk'uko byateganyijwe.",
      bodyHtml: `
        <h2>Ibipimo byo gusuzuma, mu rutonde rw'ibanze</h2>
        <ol>
          <li><strong>Kubahiriza OCPP.</strong> Saba verisiyo nyayo ya OCPP n'ibimenyetso by'ibizamini by'ubuziranenge (reba <a href="/rw/standards/ocpi-ocpp-testing">amabwiriza y'ibizamini</a>), ntabwo ari ijambo ry'ubucuruzi rivuga "rihuza na OCPP". Ibikoresho byinshi bishyira mu bikorwa igice cy'ubutumwa gusa.</li>
          <li><strong>Serivisi ku isoko.</strong> Emeza ko ibice byo gusimbura n'ubufasha bw'abanyabuhanga bihari ku isoko cyangwa binyuze ku mufatanyabikorwa w'akarere, mbere yo guhitamo umurongo w'ibikoresho. Igicuruzwa gisaba kohererezwa igice uhereye ku mugabane utandukanye gifite urwego rwo hejuru rw'ubuziranenge butagenwa n'ireme ry'ubwubatsi.</li>
          <li><strong>Urwego rw'ibidukikije.</strong> Emeza ibipimo bya IP n'ubushyuhe bihuye n'imiterere y'ahantu nyayo — umukungugu n'ubushyuhe ni byo bitera kenshi ibicuruzwa kwangirika hakiri kare muri kariya karere, ntabwo ari ibibazo by'amashanyarazi.</li>
          <li><strong>Guhuza umuyoboro w'imodoka.</strong> Huza ubwoko bw'umuyoboro (CCS2, GB/T, Type 2, CHAdeMO) n'imodoka ahantu hazakorera by'ukuri — reba amabwiriza ku <a href="/rw/standards/chinese-integration">mikoranire y'imodoka za Ubushinwa</a> niba imodoka zifite GB/T zizaba igice kinini cy'icyuzuzo giteganyijwe.</li>
          <li><strong>Ubushobozi bw'ikibaho.</strong> Emeza ubushobozi n'imikoreshereze y'amashanyarazi y'igicuruzwa bihuye n'umuyoboro w'ahantu nyawo n'amasezerano na DSO mbere yo gutumiza, ntabwo ari nyuma yo kohererezwa.</li>
        </ol>

        <h2>Ishyirwaho n'itangira gukora</h2>
        <p>Igicuruzwa cyanyuze mu bizamini by'uruganda gishobora kunanirwa ku ahantu kubera ibibazo byo kwishyiraho. Itangira gukora rigomba kuba rikubiyemo nibura:</p>
        <ul>
          <li>Kubungabunga umutima n'ubwirinzi bw'amashanyarazi byemejwe bihuye n'imiterere y'umuyoboro w'ahantu, byemejwe n'umuhanga w'amashanyarazi wemewe.</li>
          <li>Igerageza rya OCPP hagati y'igikoresho na CPMS mbere y'uko ahantu havugwa ko gakora — ntabwo ari igerageza ry'umuyoboro w'uruganda gusa.</li>
          <li>Igerageza ry'ubushobozi bwuzuye, kuko ibibazo byinshi bigaragara igihe cy'umuzigo urambye gusa aho ku gihe cyo guhuza.</li>
          <li>Isuzuma ry'aho igicuruzwa gishyizwe: kurinda umugozi, uburebure n'ubugari bw'umuyoboro ku bushobozi bwo kubona, no kurinda gukubitwa n'imodoka.</li>
        </ul>

        <h2>Ibibazo bisanzwe byo gutegura</h2>
        <table>
          <thead><tr><th>Ikibazo</th><th>Impamvu y'ibanze</th><th>Igisubizo</th></tr></thead>
          <tbody>
            <tr><td>Igicuruzwa kigerwaho, ariko gukoresha ntibirangire</td><td>Ishyirwa mu bikorwa rya OCPP ridahagije</td><td>Ibizamini by'ubuziranenge mbere yo kugura</td></tr>
            <tr><td>Ibibazo by'umuyoboro bitagenda igihe cyose</td><td>Umukungugu/ubushyuhe binjira</td><td>Huza urwego rwa IP n'imiterere y'ahantu, ntabwo ari ibipimo byo hasi byo mu nyandiko</td></tr>
            <tr><td>Igihe kirekire cyo gusana</td><td>Nta mufatanyabikorwa wa serivisi ku isoko</td><td>Emeza serivisi mbere yo guhitamo ibikoresho, ntabwo ari nyuma y'ikibazo</td></tr>
            <tr><td>Ahantu ntihatanga ubushobozi buteganyijwe</td><td>Umuyoboro w'amashanyarazi muto cyane</td><td>Emeza bihuye n'amasezerano na DSO mbere yo gutumiza ibikoresho</td></tr>
          </tbody>
        </table>
      `,
    },
    sv: {
      title: "Välja och installera laddhårdvara",
      description: "Hårdvarubeslut vid inköp avgör platsekonomin i ett decennium. Installationsbeslut avgör om hårdvaran presterar enligt specifikation.",
      bodyHtml: `
        <h2>Utvärderingskriterier, i prioritetsordning</h2>
        <ol>
          <li><strong>OCPP-konformitet.</strong> Fråga efter den specifika OCPP-versionen och bevis på konformitetstestning (se <a href="/sv/standards/ocpi-ocpp-testing">testguiden</a>), inte ett marknadsföringspåstående om "OCPP-kompatibel". Många enheter implementerar bara en delmängd av meddelandeuppsättningen.</li>
          <li><strong>Servicebarhet på marknaden.</strong> Bekräfta att reservdelar och teknikerstöd finns lokalt, eller via en regional partner, innan ni binder er till en hårdvarulinje. En laddare som kräver att en del skickas från en annan kontinent har ett effektivt drifttidstak oavsett byggkvalitet.</li>
          <li><strong>Miljöklassning.</strong> Bekräfta IP- och temperaturklassningar mot faktiska platsförhållanden — damm och värme är de två vanligaste orsakerna till förtida hårdvarufel i regionen, inte elfel.</li>
          <li><strong>Kontaktstandardens passform.</strong> Matcha kontakttyp (CCS2, GB/T, Typ 2, CHAdeMO) mot den fordonsflotta platsen faktiskt kommer att betjäna — se guiden om <a href="/sv/standards/chinese-integration">integration av kinesiska fordon</a> om GB/T-utrustade fordon utgör en betydande andel av förväntad trafik.</li>
          <li><strong>Nätavtryck.</strong> Bekräfta laddarens effektuttag och lastprofil mot platsens faktiska nätanslutning och avtal med elnätsbolaget innan beställning, inte efter leverans.</li>
        </ol>

        <h2>Installation och driftsättning</h2>
        <p>En laddare som klarar fabrikstestning kan ändå fallera på plats på grund av installationsproblem. Driftsättning bör minst omfatta:</p>
        <ul>
          <li>Verifierad jordning och elektriskt skydd anpassat till lokala nätförhållanden, godkänt av en certifierad elektriker.</li>
          <li>Ett live OCPP-handskakningstest med målets CPMS innan platsen markeras som live — inte bara ett anslutningstest med fabriksinställningar.</li>
          <li>En fullasttestsession, eftersom många fel bara uppträder vid sammanhållen belastning snarare än vid anslutningstillfället.</li>
          <li>Genomgång av fysisk placering: kabeldragavlastning, kontaktens höjd och räckvidd för tillgänglighet, samt skydd mot fordonspåkörning.</li>
        </ul>

        <h2>Vanliga felmönster att planera för</h2>
        <table>
          <thead><tr><th>Felmönster</th><th>Grundorsak</th><th>Åtgärd</th></tr></thead>
          <tbody>
            <tr><td>Laddare nåbar, sessioner misslyckas</td><td>Partiell OCPP-implementation</td><td>Konformitetstestning före inköp</td></tr>
            <tr><td>Intermittenta kontaktfel</td><td>Damm-/värmeintrång</td><td>Matcha IP-klassning till platsförhållanden, inte specbladets minimivärden</td></tr>
            <tr><td>Lång reparationstid</td><td>Ingen lokal servicepartner</td><td>Bekräfta servicebarhet före hårdvaruval, inte efter fel</td></tr>
            <tr><td>Platsen levererar inte märkeffekt</td><td>Underdimensionerad nätanslutning</td><td>Validera mot avtal med elnätsbolaget innan hårdvara beställs</td></tr>
          </tbody>
        </table>
      `,
    },
  },
  "ocpi-ocpp-testing": {
    fr: {
      title: "Tester la connectivité OCPI et OCPP",
      description: "Une implémentation de protocole qui réussit une démo et échoue en production a généralement omis de tester les chemins qui n'apparaissent que dans des conditions réelles : coupures, nouvelles tentatives et messages partiels.",
      bodyHtml: `
        <h2>OCPP : de la borne au CPMS</h2>
        <p>Les tests de conformité OCPP doivent couvrir tout le cycle de vie de la session, pas seulement le scénario idéal. Une séquence minimale :</p>
        <ol>
          <li><strong>Démarrage et handshake.</strong> BootNotification est accepté, et la borne applique correctement toute configuration renvoyée en réponse.</li>
          <li><strong>Autorisation.</strong> Les flux de démarrage à distance et par badge/carte réussissent tous deux, y compris avec un badge délibérément invalide pour confirmer que le rejet est géré proprement.</li>
          <li><strong>Cycle de vie de la transaction.</strong> StartTransaction, MeterValues à l'intervalle configuré, et StopTransaction rapportent tous des valeurs d'énergie cohérentes et non nulles, qui se réconcilient avec une lecture de compteur physique.</li>
          <li><strong>Gestion des pannes.</strong> Simulez une panne de connecteur en cours de session et confirmez que la borne rapporte correctement StatusNotification et que le CPMS réagit (alerte, fin de session) plutôt que d'afficher un état « en charge » obsolète.</li>
          <li><strong>Perte de connectivité.</strong> Déconnectez la liaison réseau en cours de session, confirmez le comportement d'autorisation hors ligne, puis reconnectez et confirmez que le CPMS réconcilie la session plutôt que de la perdre.</li>
          <li><strong>Déploiement de firmware et de configuration.</strong> Confirmez qu'un changement de configuration à distance et une mise à jour de firmware se terminent tous deux sans corrompre l'état de session sur des connecteurs non concernés.</li>
        </ol>
        <p>Testez avec la version OCPP exacte parlée par le CPMS (1.6J et 2.0.1 ne sont pas interchangeables en pratique) et enregistrez les échanges de messages bruts pendant les tests — un test réussi sans journal de messages n'est pas reproductible quand une panne réapparaît en production des mois plus tard.</p>

        <h2>OCPI : itinérance CPO vers eMSP</h2>
        <p>Les tests OCPI doivent être validés dans les deux sens de la relation d'itinérance :</p>
        <ul>
          <li><strong>Synchronisation des emplacements et du statut.</strong> Confirmez que la vue de l'eMSP sur la disponibilité du site correspond au statut réel en temps réel du CPO, y compris après qu'un connecteur passe hors ligne — un décalage de synchronisation ici est une cause majeure de plaintes de conducteurs sur les sessions en itinérance.</li>
          <li><strong>Propagation des tarifs.</strong> Confirmez que le prix affiché à un conducteur en itinérance avant de démarrer une session correspond à ce qui est réellement facturé, y compris les composantes de tarification horaire et de frais d'immobilisation.</li>
          <li><strong>Précision des CDR (Charge Detail Record).</strong> Réconciliez un échantillon de CDR avec les propres données de mesure du CPO avant la mise en service d'un nouveau partenaire d'itinérance — les écarts ici deviennent des litiges de facturation.</li>
          <li><strong>Commandes de session.</strong> Le démarrage/arrêt à distance initié par l'eMSP atteint correctement la borne physique et reflète l'état réel, pas seulement un accusé de réception au niveau de l'API.</li>
        </ul>

        <h2>Une remarque sur les déclarations « conforme »</h2>
        <p>Réussir une suite de tests de conformité automatisée est nécessaire mais pas suffisant. Cela valide la structure et le séquencement des messages ; cela ne valide pas qu'une borne se comporte correctement dans les conditions de connectivité et de charge d'un déploiement spécifique. Les tests au niveau du site après les tests de conformité ne sont pas redondants — c'est l'étape qui détermine réellement si une borne tiendra en production.</p>
      `,
    },
    rw: {
      title: "Kugerageza imikoranire ya OCPI na OCPP",
      description: "Ishyirwa mu bikorwa ry'amabwiriza rinyuze mu kwerekana ariko rikananirwa mu bikorwa nyabyo akenshi ntiryigeragereje inzira zigaragara gusa mu mimerere y'ukuri: guhagarara, kongera kugerageza, n'ubutumwa budahwitse.",
      bodyHtml: `
        <h2>OCPP: uhereye ku gicuruzwa ukagera kuri CPMS</h2>
        <p>Ibizamini by'ubuziranenge bwa OCPP bigomba kwerekana igihe cyose cy'ubuzima bw'igikorwa, ntabwo ari inzira nziza gusa. Urutonde rwo hasi:</p>
        <ol>
          <li><strong>Gutangira no guhuza.</strong> BootNotification yemewe, kandi igicuruzwa gishyira mu bikorwa neza imiterere yasubijwe.</li>
          <li><strong>Kwemeza.</strong> Uburyo bwo gutangira kure n'ubwo gukoresha ikarita/ikimenyetso byombi birakora neza, harimo n'ikimenyetso kitemewe ku bushake kugira ngo hemezwe ko kwanga bikorwa neza.</li>
          <li><strong>Igihe cy'ubuzima bw'igikorwa.</strong> StartTransaction, MeterValues ku gihe cyagenwe, na StopTransaction byose bitanga imibare y'ingufu ihuriweho kandi itari zeru, ihuye n'ipima ry'igikoresho nyacyo.</li>
          <li><strong>Gucunga ibibazo.</strong> Igereranya ikibazo ku muyoboro mu gihe cy'igikorwa hanyuma wemeze ko igicuruzwa gitanga StatusNotification neza kandi CPMS igasubiza (kumenyesha, guhagarika igikorwa) aho kwerekana imiterere ya kera "kiracyuzuza".</li>
          <li><strong>Gutakaza umuyoboro.</strong> Comora umuyoboro w'itumanaho mu gihe cy'igikorwa, wemeze imikorere y'uruhushya nta muyoboro, hanyuma wongere wihuze wemeze ko CPMS ihuza igikorwa aho kukibura.</li>
          <li><strong>Kohereza firmware n'imiterere.</strong> Emeza ko impinduka y'imiterere ikozwe kure n'igishya cya firmware byombi birangira nta gusenya imiterere y'igikorwa ku bindi bicuruzwa bitabireba.</li>
        </ol>
        <p>Gerageza ukoresheje verisiyo nyayo ya OCPP ikoreshwa na CPMS (1.6J na 2.0.1 ntibisimburana mu bikorwa nyabyo) kandi wandike ubutumwa bwose bwanyuzemo mu gihe cy'igerageza — igerageza ryagenze neza nta bushakiro bw'ubutumwa ntirishobora gusubirwamo igihe ikibazo cyagaruka mu bikorwa nyabyo nyuma y'amezi.</p>

        <h2>OCPI: imikoranire hagati ya CPO na eMSP</h2>
        <p>Ibizamini bya OCPI bigomba kwemezwa mu nzira zombi z'imikoranire:</p>
        <ul>
          <li><strong>Guhuza aho biherereye n'uko bimeze.</strong> Emeza ko uko eMSP ibona aho ahantu bimeze bihuye n'uko byukuri bimeze kuri CPO, harimo no nyuma y'uko umuyoboro uva ku murongo — gutinda muri iyi mikoranire ni imwe mu mpamvu nyamukuru z'ibirego by'abashoferi ku bikorwa byo mu mikoranire.</li>
          <li><strong>Gukwirakwiza ibiciro.</strong> Emeza ko igiciro cyerekanwe umushoferi uri mu mikoranire mbere yo gutangira igikorwa gihuye n'icyishyuwe by'ukuri, harimo n'ibice by'igiciro gishingiye ku gihe n'amafaranga y'igihe cyo guteganya.</li>
          <li><strong>Ukuri kwa CDR (Charge Detail Record).</strong> Huza urugero rwa CDR n'amakuru y'ipima ya CPO ubwayo mbere yo gutangira gukorana n'umufatanyabikorwa mushya mu mikoranire — itandukaniro dore ni ho havuka amakimbirane yo kwishyura.</li>
          <li><strong>Amabwiriza y'igikorwa.</strong> Gutangira/guhagarika kure byatangijwe na eMSP bigera neza ku gicuruzwa nyacyo kandi bigaragaza imiterere y'ukuri, ntabwo ari ukwemera ku rwego rwa API gusa.</li>
        </ul>

        <h2>Icyitonderwa ku byemezo by'"ubuziranenge"</h2>
        <p>Gutsinda ibizamini by'ubuziranenge byikora birakenewe ariko ntibihagije. Byemeza imiterere n'ikurikirana ry'ubutumwa; ntibyemeza ko igicuruzwa gikora neza mu mimerere y'umuyoboro n'umuzigo w'ishyirwa mu bikorwa runaka. Ibizamini ku rwego rw'ahantu nyuma y'ibizamini by'ubuziranenge ntabwo ari isubiramo — ni intambwe igena by'ukuri niba igicuruzwa kizakomeza gukora mu bikorwa nyabyo.</p>
      `,
    },
    sv: {
      title: "Testa OCPI- och OCPP-anslutning",
      description: "En protokollimplementation som klarar en demo och misslyckas i produktion har oftast misslyckats med att testa de vägar som bara uppstår under verkliga förhållanden: avbrott, återförsök och partiella meddelanden.",
      bodyHtml: `
        <h2>OCPP: laddare till CPMS</h2>
        <p>OCPP-konformitetstestning bör täcka hela sessionens livscykel, inte bara den enkla vägen. En minsta sekvens:</p>
        <ol>
          <li><strong>Uppstart och handskakning.</strong> BootNotification accepteras, och laddaren tillämpar korrekt eventuell konfiguration som skickas som svar.</li>
          <li><strong>Auktorisering.</strong> Både fjärrstart och kort-/tagg-flöden lyckas, inklusive en avsiktligt ogiltig tagg för att bekräfta att avvisning hanteras korrekt.</li>
          <li><strong>Transaktionslivscykel.</strong> StartTransaction, MeterValues med konfigurerat intervall, och StopTransaction rapporterar alla konsekventa, icke-nollställda energivärden som stämmer överens med en fysisk mätaravläsning.</li>
          <li><strong>Felhantering.</strong> Simulera ett kontaktfel mitt i en session och bekräfta att laddaren rapporterar StatusNotification korrekt och att CPMS:et reagerar (larm, sessionsavslut) i stället för att visa ett inaktuellt "laddar"-tillstånd.</li>
          <li><strong>Förlorad anslutning.</strong> Koppla bort uppkopplingen mitt i en session, bekräfta offline-auktorisering/lokalt beteende, återanslut sedan och bekräfta att CPMS:et stämmer av sessionen i stället för att förlora den.</li>
          <li><strong>Firmware- och konfigurationsutrullning.</strong> Bekräfta att både en fjärrkonfigurationsändring och en firmware-uppdatering slutförs utan att förstöra sessionstillstånd på orelaterade kontakter.</li>
        </ol>
        <p>Testa mot den specifika OCPP-version som CPMS:et talar (1.6J och 2.0.1 är inte utbytbara i praktiken) och logga rå meddelandeutväxling under testningen — ett godkänt test utan meddelandelogg går inte att återskapa när ett fel dyker upp igen i produktion månader senare.</p>

        <h2>OCPI: roaming från CPO till eMSP</h2>
        <p>OCPI-testning behöver valideras från båda riktningarna i roamingrelationen:</p>
        <ul>
          <li><strong>Synk av plats och status.</strong> Bekräfta att eMSP:ns vy av platsens tillgänglighet matchar CPO:ns faktiska realtidsstatus, även efter att en kontakt går offline — synkfördröjning här är en ledande orsak till förarklagomål vid roamade sessioner.</li>
          <li><strong>Taxeöverföring.</strong> Bekräfta att priset som visas för en roamande förare innan en session startar matchar vad som faktiskt debiteras, inklusive tidsbaserade och stilleståndsavgiftskomponenter.</li>
          <li><strong>CDR-noggrannhet (Charge Detail Record).</strong> Stäm av ett urval CDR:er mot CPO:ns egen mätdata innan lansering med en ny roamingpartner — avvikelser här blir faktureringstvister.</li>
          <li><strong>Sessionskommandon.</strong> Fjärrstart/-stopp initierat av eMSP:n når korrekt den fysiska laddaren och återspeglar verkligt tillstånd, inte bara en bekräftelse på API-nivå.</li>
        </ul>

        <h2>En anmärkning om "konform"-påståenden</h2>
        <p>Att klara en automatiserad konformitetstestsvit är nödvändigt men inte tillräckligt. Det validerar meddelandestruktur och sekvensering; det validerar inte att en laddare beter sig korrekt under anslutnings- och lastförhållandena i en specifik driftsättning. Testning på platsnivå efter konformitetstestning är inte redundant — det är steget som faktiskt avgör om en laddare håller i produktion.</p>
      `,
    },
  },
  "chinese-integration": {
    fr: {
      title: "Intégrer les véhicules et appareils chinois",
      description: "Les véhicules électriques et le matériel de recharge fabriqués en Chine représentent une part croissante du marché africain. Leur interopérabilité exige davantage qu'une simple connexion OCPP.",
      bodyHtml: `
        <h2>Pourquoi cela mérite un traitement séparé</h2>
        <p>Une part significative et croissante des véhicules entrant sur les marchés africains — neufs comme importés d'occasion — sont fabriqués en Chine, et le matériel de recharge chinois est de plus en plus courant dans les nouvelles installations pour des raisons de coût et de disponibilité. Traiter cela comme « juste une autre borne OCPP » ou « juste un autre véhicule CCS2 » occulte de réelles différences qui se traduisent par des échecs d'intégration.</p>

        <h2>Connecteur et standard de recharge : GB/T</h2>
        <p>La plupart des véhicules électriques du marché domestique chinois utilisent le standard de recharge DC et AC GB/T plutôt que CCS2, CHAdeMO ou Type 2. GB/T est électriquement et mécaniquement distinct — ce n'est pas résoluble par adaptateur comme le sont parfois les différences de tension. Deux implications pratiques :</p>
        <ul>
          <li>Un site attendant un trafic significatif de véhicules équipés GB/T a besoin de connecteurs GB/T spécifiés dès le choix du matériel, pas ajoutés après coup.</li>
          <li>Le protocole de communication de GB/T (basé sur un handshake CAN-bus) diffère du handshake basé CCS/PLC, ce qui affecte la façon dont le contrôleur interne d'une borne dialogue avec le véhicule — c'est une décision matérielle et de firmware, pas une décision au niveau du CPMS.</li>
        </ul>
        <p>Là où un marché a un parc de véhicules mixte, les bornes à double standard (proposant à la fois un connecteur GB/T et CCS2) sont souvent le choix le plus économique plutôt que de construire des sites parallèles.</p>

        <h2>Télématique NEV et remontée de données</h2>
        <p>Le cadre chinois de surveillance des véhicules à énergie nouvelle (NEV) impose à de nombreux véhicules vendus sur le marché domestique de remonter des données télématiques (état de charge, position, santé de la batterie) vers une plateforme nationale de surveillance. Les véhicules exportés ou importés parallèlement en dehors de ce cadre peuvent avoir cette remontée désactivée ou absente, ce qui a deux conséquences à anticiper :</p>
        <ul>
          <li>Ne supposez pas que les données télématiques côté véhicule seront disponibles pour un CPMS ou un système de flotte pour les véhicules GB/T importés — les données de session et de recharge doivent provenir de la borne, pas être supposées du véhicule.</li>
          <li>Le comportement de gestion de batterie (courbe de charge, limites thermiques) calibré pour le contexte de surveillance NEV peut différer de ce qu'attend un déploiement non domestique — validez les courbes de charge réelles pendant la mise en service plutôt que de vous fier aux fiches techniques.</li>
        </ul>

        <h2>Liste de contrôle d'intégration pratique</h2>
        <ol>
          <li>Confirmez les besoins en standard de connecteur (GB/T, CCS2, ou les deux) par rapport au parc de véhicules réel et projeté, avant le choix du matériel.</li>
          <li>Pour le matériel GB/T, vérifiez séparément la conformité OCPP — le support GB/T est souvent ajouté par les fabricants comme variante d'une plateforme CCS2 existante, et la conformité peut différer entre variantes.</li>
          <li>Ne vous fiez pas à la télématique remontée par le véhicule pour les véhicules importés ; instrumentez la borne et le CPMS comme source de vérité.</li>
          <li>Validez les courbes de charge réelles pour les modèles de véhicules attendus sur site, en particulier pour les unités importées, plutôt que de supposer la performance de la fiche technique.</li>
          <li>Vérifiez que l'intégration paiement et application gère les conventions RFID/carte courantes sur le matériel fabriqué en Chine, qui diffèrent parfois des standards par défaut du marché CCS2.</li>
        </ol>
      `,
    },
    rw: {
      title: "Guhuza imodoka n'ibikoresho by'Ubushinwa",
      description: "Imodoka zikoresha amashanyarazi n'ibikoresho by'icyuzuzo bikorerwa mu Bushinwa bigira uruhare rugenda rwiyongera mu isoko rya Afurika. Imikoranire yabyo isaba birenze umuyoboro wa OCPP gusa.",
      bodyHtml: `
        <h2>Impamvu ibi bikeneye kwitabwaho ku giti cyabyo</h2>
        <p>Igice kinini kandi kigenda kiyongera cy'imodoka zinjira mu masoko ya Afurika — nshya n'izatumijwe zakoreshejwe — zikorerwa mu Bushinwa, kandi ibikoresho by'icyuzuzo by'Ubushinwa birushaho kuboneka mu bwubatsi bushya bw'ahantu kubera igiciro n'uko biboneka. Gufata ibi nk'"ikindi gicuruzwa cya OCPP" cyangwa "indi modoka ya CCS2" birengagiza itandukaniro nyakuri rigaragara mu bibazo byo guhuza.</p>

        <h2>Umuyoboro n'uburyo bw'icyuzuzo: GB/T</h2>
        <p>Imodoka nyinshi z'amashanyarazi zikoreshwa mu Bushinwa zikoresha uburyo bwa GB/T bwa DC na AC aho kuba CCS2, CHAdeMO, cyangwa Type 2. GB/T itandukanye mu by'amashanyarazi n'imashini — ntabwo ari ikibazo gikemurwa n'ikintu gihuza nk'uko bimeze rimwe na rimwe ku itandukaniro ry'imbaraga. Ingaruka ebyiri zifatika:</p>
        <ul>
          <li>Ahantu hateganyijwe kuzagera n'imodoka nyinshi zifite GB/T hakeneye imiyoboro ya GB/T igenwa mu guhitamo ibikoresho, ntabwo yongerwa nyuma.</li>
          <li>Uburyo bw'itumanaho bwa GB/T (bushingiye kuri CAN-bus) butandukanye n'ubwa CCS/PLC, bikagira ingaruka ku buryo mugenzuzi w'imbere w'igicuruzwa avugana n'imodoka — iki ni icyemezo ku bikoresho na firmware, ntabwo ari icyemezo ku rwego rwa CPMS.</li>
        </ul>
        <p>Aho isoko rifite imodoka zitandukanye, ibicuruzwa bifite uburyo bubiri (bitanga GB/T na CCS2) akenshi ni cyo cyiciro cy'ubukungu kurusha kubaka ahantu abiri bitandukanye.</p>

        <h2>Ikoranabuhanga rya NEV n'itangwa ry'amakuru</h2>
        <p>Gahunda ya Ubushinwa yo gukurikirana imodoka z'ingufu nshya (NEV) isaba imodoka nyinshi zicururizwa mu gihugu gutanga amakuru ya tekiniki (uko bateri imeze, aho ziherereye, ubuzima bwa bateri) ku rubuga rw'igihugu rukurikirana. Imodoka zoherejwe hanze cyangwa zatumijwe mu buryo butemewe hanze y'iyi gahunda zishobora kuba zidafite iri tanga ry'amakuru cyangwa rikaba ritakora, bikagira ingaruka ebyiri zikwiye gutegurwa:</p>
        <ul>
          <li>Ntukizere ko amakuru ya tekiniki y'imodoka azaboneka kuri CPMS cyangwa sisitemu y'itsinda ry'imodoka ku modoka za GB/T zatumijwe — amakuru y'igikorwa n'icyuzuzo agomba kuva ku gicuruzwa, ntabwo yizezwa ko azava ku modoka.</li>
          <li>Imyitwarire yo gucunga bateri (uko gucyura bikurikirana, imbibi z'ubushyuhe) yateguwe ku miterere ya NEV ishobora gutandukana n'icyo ishyirwa mu bikorwa ridakomoka mu gihugu ryitezeho — emeza uko gucyura bikurikirana by'ukuri mu gihe cy'itangira gukora aho kwizera inyandiko z'ibipimo.</li>
        </ul>

        <h2>Urutonde rwo guhuza mu bikorwa</h2>
        <ol>
          <li>Emeza ibisabwa ku muyoboro (GB/T, CCS2, cyangwa byombi) ugereranyije n'imodoka ziriho na ziteganyijwe mbere yo guhitamo ibikoresho.</li>
          <li>Ku bikoresho bya GB/T, emeza ubuziranenge bwa OCPP ku giti cyabyo — ubushobozi bwa GB/T akenshi buba bwongewe n'abakora nk'ubundi buryo bw'ikibaho cya CCS2 gisanzweho, kandi ubuziranenge bushobora gutandukana hagati y'ubundi buryo.</li>
          <li>Ntiwizere amakuru ya tekiniki atangwa n'imodoka ku modoka zatumijwe; koresha igicuruzwa na CPMS nk'isoko ry'ukuri.</li>
          <li>Emeza uko gucyura bikurikirana by'ukuri ku byiciro by'imodoka biteganyijwe ku ahantu, cyane cyane ku bikoresho byatumijwe, aho kwizera imikorere yanditse mu nyandiko.</li>
          <li>Emeza ko imikoranire yo kwishyura na porogaramu ikemura uburyo bwa RFID/ikarita bukoreshwa cyane ku bikoresho by'Ubushinwa, butandukanye rimwe na rimwe n'ibisanzwe ku isoko rya CCS2.</li>
        </ol>
      `,
    },
    sv: {
      title: "Integrera kinesiska fordon och enheter",
      description: "Kinatillverkade elfordon och laddhårdvara utgör en växande andel av den afrikanska marknaden. Interoperabilitet med dem kräver mer än en OCPP-anslutning.",
      bodyHtml: `
        <h2>Varför detta behöver särskild hantering</h2>
        <p>En betydande och växande andel av fordonen som kommer in på afrikanska marknader — både nya och begagnat importerade — tillverkas i Kina, och kinesisk laddhårdvara blir allt vanligare i nya anläggningar på grund av kostnad och tillgänglighet. Att behandla detta som "bara en annan OCPP-laddare" eller "bara ett annat CCS2-fordon" missar verkliga skillnader som visar sig som integrationsfel.</p>

        <h2>Kontakt och laddstandard: GB/T</h2>
        <p>De flesta kinesiska inhemska elfordon använder GB/T DC- och AC-laddstandarden i stället för CCS2, CHAdeMO eller Typ 2. GB/T är elektriskt och mekaniskt distinkt — det går inte att lösa med adapter på det sätt spänningsskillnader ibland kan. Två praktiska konsekvenser:</p>
        <ul>
          <li>En plats som förväntar sig betydande GB/T-trafik behöver GB/T-kontakter specificerade redan vid hårdvaruval, inte eftermonterade senare.</li>
          <li>GB/T:s kommunikationsprotokoll (baserat på en CAN-bus-handskakning) skiljer sig från den CCS/PLC-baserade handskakningen, vilket påverkar hur en laddares interna styrenhet talar med fordonet — det är ett hårdvaru- och firmwarebeslut, inte ett CPMS-lagerbeslut.</li>
        </ul>
        <p>Där en marknad har en blandad fordonsflotta är laddare med dubbel standard (som erbjuder både en GB/T- och en CCS2-kontakt) ofta det mer ekonomiska valet framför att bygga parallella anläggningar.</p>

        <h2>NEV-telematik och datarapportering</h2>
        <p>Kinas ramverk för övervakning av nya energifordon (NEV) kräver att många inhemskt sålda fordon rapporterar telematikdata (laddningsstatus, plats, batterihälsa) till en nationell övervakningsplattform. Fordon som exporterats eller gråimporterats utanför detta ramverk kan ha denna rapportering avaktiverad eller saknad, vilket har två konsekvenser värda att planera för:</p>
        <ul>
          <li>Anta inte att fordonssidans telematikdata kommer att vara tillgänglig för ett CPMS eller flottsystem för importerade GB/T-fordon — sessions- och laddningsdata bör hämtas från laddaren, inte antas från fordonet.</li>
          <li>Batterihanteringsbeteende (laddkurva, termiska gränser) kalibrerat för NEV-övervakningskontexten kan skilja sig från vad en icke-inhemsk driftsättning förväntar sig — validera verkliga laddkurvor under driftsättning i stället för att förlita er på datablad.</li>
        </ul>

        <h2>Praktisk integrationschecklista</h2>
        <ol>
          <li>Bekräfta behov av kontaktstandard (GB/T, CCS2, eller båda) mot faktisk och prognostiserad fordonsflotta före hårdvaruval.</li>
          <li>För GB/T-hårdvara, bekräfta OCPP-konformitet separat — GB/T-stöd läggs ofta till av tillverkare som en variant av en befintlig CCS2-plattform, och konformiteten kan skilja sig mellan varianter.</li>
          <li>Förlita er inte på fordonsrapporterad telematik för importerade fordon; instrumentera laddaren och CPMS:et som sanningskälla.</li>
          <li>Validera verkliga laddkurvor för de specifika fordonsmodeller som förväntas på plats, särskilt för importerade enheter, i stället för att anta databladsprestanda.</li>
          <li>Bekräfta att betalnings- och appintegrationen hanterar de RFID-/kortkonventioner som är vanliga på kinatillverkad hårdvara, vilka ibland skiljer sig från CCS2-marknadens standardvärden.</li>
        </ol>
      `,
    },
  },
};
