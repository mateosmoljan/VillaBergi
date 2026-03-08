export type EnvironsItem = {
  title: string;
  description: string;
};

export type EnvironsData = {
  data?: { button: string }[];
  heroTitle: string;
  heroIntro: string;
  sections: {
    nearby: { title: string; intro: string; items: EnvironsItem[] };
    beaches: { title: string; intro: string; items: EnvironsItem[] };
    dayTrips: { title: string; intro: string; items: EnvironsItem[] };
    whyStay: { title: string; intro: string; items: EnvironsItem[] };
  };
  linksTitle: string;
  cta: {
    title: string;
    text: string;
    button: string;
  };
};

const data: Record<string, EnvironsData> = {
  en: {
    heroTitle: "Surroundings & day trips from Villa Bergi",
    heroIntro:
      "Villa Bergi is a villa in central Istria designed for guests who want to explore the whole peninsula without changing accommodation. From Žminj you can reach Svetvinčenat, Pazin, Kanfanar, Bale, Barban, Rovinj, Pula, Motovun and Poreč with comfortable day-trip timing. This makes Villa Bergi especially attractive for travellers looking for a villa in Istria with countryside peace, authentic local atmosphere and easy access to both the west coast and the south of the peninsula.",
    sections: {
      nearby: {
        title: "Nearby towns & villages",
        intro:
          "Central Istria is full of small historic places, local konobas and scenic drives that begin almost at your doorstep.",
        items: [
          { title: "Žminj", description: "Your immediate base offers a genuine central Istria feel, practical road connections and a calm village rhythm away from crowded resort zones." },
          { title: "Svetvinčenat", description: "A beautiful small town known for its square, castle setting and a strong cultural identity that visitors remember." },
          { title: "Kanfanar", description: "A useful hub for moving toward Rovinj, Bale and the west coast while staying in a quieter inland location." },
          { title: "Bale", description: "One of the most charming stone towns in west Istria, ideal for an evening outing, dinner and slow wandering." },
          { title: "Barban", description: "A classic inland stop for those who enjoy rural Istria, traditional ambience and a more local side of the region." },
          { title: "Pazin", description: "The administrative heart of central Istria, known for its castle, gorge and strategic central position." },
        ],
      },
      beaches: {
        title: "Beaches & coast within easy reach",
        intro:
          "Staying inland does not mean giving up the sea. Villa Bergi works well for guests who prefer a peaceful villa near Rovinj or a villa near Pula without sleeping in the busiest coastal areas.",
        items: [
          { title: "Rovinj coast", description: "A realistic beach and old-town day from central Istria, especially if you want to combine swimming with dinner by the harbour." },
          { title: "Pula & south Istria beaches", description: "Good for guests who want a full seaside day with city sights, larger beach zones and evening entertainment." },
          { title: "West coast near Bale", description: "Useful for shorter drives toward quieter coastal spots and sunset-focused outings." },
          { title: "Poreč side", description: "A practical option when you want beaches, family attractions and a more resort-style day trip from your inland base." },
        ],
      },
      dayTrips: {
        title: "Day trips & landmarks",
        intro:
          "Villa Bergi is all about flexibility: hill towns, Roman heritage, coast and countryside can all fit into the same holiday week.",
        items: [
          { title: "Motovun", description: "One of the great hilltop classics of Istria, excellent for views, wine, truffles and a distinctly romantic inland atmosphere." },
          { title: "Poreč", description: "A strong full-day option for seaside walking, old-town sightseeing and family-friendly summer activities." },
          { title: "Rovinj", description: "Still one of the most desirable day trips in Istria, perfect for iconic streets, galleries and sunset harbour views." },
          { title: "Pula", description: "Reach the Arena and the biggest urban centre in the region, then return to the calm of central Istria in the evening." },
        ],
      },
      whyStay: {
        title: "Why stay here?",
        intro:
          "This is one of the most strategic locations for travellers who want to see a lot of Istria while enjoying a peaceful villa setting.",
        items: [
          { title: "A true central Istria base", description: "Ideal for guests comparing villas in Istria who want equal access to west coast towns, inland villages and the southern peninsula." },
          { title: "Best for explorers", description: "If you enjoy moving between food, culture, viewpoints, beaches and old towns, Villa Bergi gives you that freedom." },
          { title: "Quiet stay, broad reach", description: "A strong option for anyone searching for a villa near Rovinj or a villa near Pula while preferring countryside space and privacy." },
        ],
      },
    },
    linksTitle: "Official resources for planning your stay",
    cta: {
      title: "Stay at Villa Bergi and explore central Istria with ease",
      text: "Book Villa Bergi for a peaceful inland stay and enjoy the freedom to discover hill towns, west-coast favourites and south Istria day trips from one strategic base.",
      button: "Check availability",
    },
  },
  de: {
    heroTitle: "Umgebung & Ausflüge rund um Villa Bergi",
    heroIntro:
      "Villa Bergi ist eine Villa im Herzen Istriens für Gäste, die die gesamte Halbinsel erkunden möchten, ohne ständig die Unterkunft zu wechseln. Von Žminj aus erreichen Sie Svetvinčenat, Pazin, Kanfanar, Bale, Barban, Rovinj, Pula, Motovun und Poreč in sehr angenehmen Tagesetappen. Dadurch ist Villa Bergi besonders interessant für Reisende, die eine Villa in Istrien mit Ruhe, authentischer Atmosphäre und gleichzeitig hervorragender Anbindung an Westküste und Südistrien suchen.",
    sections: {
      nearby: {
        title: "Nahe Orte & Dörfer",
        intro:
          "Zentralistrien ist reich an historischen Orten, Konobas und landschaftlich schönen Straßen, die praktisch direkt vor der Haustür beginnen.",
        items: [
          { title: "Žminj", description: "Ihr direkter Ausgangspunkt bietet echtes zentralistrisches Flair, gute Straßenverbindungen und angenehme Ruhe abseits der Küstenorte." },
          { title: "Svetvinčenat", description: "Ein wunderschöner kleiner Ort mit markantem Platz, Kastell und starker kultureller Identität." },
          { title: "Kanfanar", description: "Ein praktischer Knotenpunkt auf dem Weg Richtung Rovinj, Bale und westliche Küste – ohne selbst überlaufen zu sein." },
          { title: "Bale", description: "Einer der charmantesten Steindörfer Westistriens, ideal für einen Abendspaziergang und ein gutes Essen." },
          { title: "Barban", description: "Ein klassischer Stop im Landesinneren für alle, die ländliches Istrien und ein authentisches Umfeld schätzen." },
          { title: "Pazin", description: "Das Zentrum Zentralistriens, bekannt für Burg, Schlucht und seine strategische Lage in der Mitte der Halbinsel." },
        ],
      },
      beaches: {
        title: "Strände & Küste schnell erreichbar",
        intro:
          "Ein Aufenthalt im Inland bedeutet nicht, auf Meer zu verzichten. Villa Bergi eignet sich hervorragend für Gäste, die eine ruhige Villa nahe Rovinj oder eine Villa nahe Pula suchen, aber nicht mitten in den touristischsten Küstenorten wohnen möchten.",
        items: [
          { title: "Küste bei Rovinj", description: "Sehr gut machbar für einen Strand- und Altstadttag mit anschließendem Abendessen am Hafen." },
          { title: "Pula & die Strände Südistriens", description: "Ideal für einen kompletten Tag am Meer mit Stadtbesuch, größeren Badezonen und etwas mehr urbanem Leben." },
          { title: "Westküste bei Bale", description: "Gut für kürzere Fahrten zu ruhigeren Küstenabschnitten und stimmungsvollen Sonnenuntergangsorten." },
          { title: "Richtung Poreč", description: "Praktisch für Gäste, die Strände, Familienangebote und einen eher klassischen Urlaubsort-Charakter mögen." },
        ],
      },
      dayTrips: {
        title: "Tagesausflüge & Sehenswürdigkeiten",
        intro:
          "Villa Bergi steht für Flexibilität: Hügeltörfer, Küste, römisches Erbe und Landschaft lassen sich mühelos in einer Urlaubswoche kombinieren.",
        items: [
          { title: "Motovun", description: "Einer der großen Klassiker Istriens – ideal für Ausblicke, Wein, Trüffel und eine romantische Hügellage." },
          { title: "Poreč", description: "Ein starkes Ziel für einen ganzen Tag mit Meer, Altstadt und sommerfreundlichem Angebot." },
          { title: "Rovinj", description: "Nach wie vor einer der begehrtesten Ausflüge in Istrien – mit ikonischen Gassen, Galerien und Hafenstimmung bei Sonnenuntergang." },
          { title: "Pula", description: "Arena und die größte Stadt der Region sind gut erreichbar, bevor Sie abends wieder in die Ruhe Zentralistriens zurückkehren." },
        ],
      },
      whyStay: {
        title: "Warum hier wohnen?",
        intro:
          "Für Reisende, die viel von Istrien sehen möchten und zugleich eine ruhige Villa bevorzugen, ist dies eine der strategisch besten Lagen überhaupt.",
        items: [
          { title: "Ein echter Ausgangspunkt in Zentralistrien", description: "Ideal für Gäste, die Villen in Istrien vergleichen und möglichst gleich guten Zugang zur Westküste, zu Hügeldörfern und nach Südistrien wünschen." },
          { title: "Perfekt für Entdecker", description: "Wenn Sie Kulinarik, Kultur, Aussichtspunkte, Strände und Altstädte verbinden möchten, passt Villa Bergi hervorragend." },
          { title: "Ruhig wohnen, viel erreichen", description: "Eine starke Wahl für alle, die nach einer Villa nahe Rovinj oder einer Villa nahe Pula suchen, aber lieber mehr Platz und Privatsphäre im Grünen haben." },
        ],
      },
    },
    linksTitle: "Offizielle Quellen für die Reiseplanung",
    cta: {
      title: "In der Villa Bergi wohnen und Zentralistrien komfortabel entdecken",
      text: "Buchen Sie Villa Bergi für einen ruhigen Aufenthalt im Landesinneren und genießen Sie kurze Wege zu Hügeltörfern, westistrischen Highlights und Tagesausflügen nach Südistrien.",
      button: "Verfügbarkeit prüfen",
    },
  },
  hr: {
    heroTitle: "Okolica i izleti iz Ville Bergi",
    heroIntro:
      "Villa Bergi je vila u središnjoj Istri za goste koji žele istražiti cijeli poluotok bez mijenjanja smještaja. Iz Žminja se vrlo ugodno dolazi do Svetvinčenta, Pazina, Kanfanara, Bala, Barbana, Rovinja, Pule, Motovuna i Poreča. Zato je Villa Bergi posebno privlačna svima koji traže vilu u Istri s mirom unutrašnjosti, autentičnim lokalnim ugođajem i jednostavnim pristupom zapadnoj i južnoj Istri.",
    sections: {
      nearby: {
        title: "Obližnji gradovi i mjesta",
        intro: "Središnja Istra puna je povijesnih mjesta, konoba i lijepih vožnji koje kreću gotovo od samog praga vile.",
        items: [
          { title: "Žminj", description: "Vaša neposredna baza pruža pravi doživljaj središnje Istre, dobre prometne veze i mir izvan najprometnijih turističkih zona." },
          { title: "Svetvinčenat", description: "Prekrasno malo mjesto poznato po trgu, kaštelu i snažnom kulturnom identitetu." },
          { title: "Kanfanar", description: "Koristan prometni čvor prema Rovinju, Balama i zapadnoj obali, a pritom ostaje mirniji od obalnih centara." },
          { title: "Bale", description: "Jedno od najšarmantnijih kamenih mjesta zapadne Istre, idealno za večernju šetnju i dobru večeru." },
          { title: "Barban", description: "Klasična postaja za goste koji vole ruralnu Istru, tradiciju i lokalniji ambijent." },
          { title: "Pazin", description: "Središte unutrašnje Istre, poznato po kaštelu, jami i strateškoj poziciji na poluotoku." },
        ],
      },
      beaches: {
        title: "Plaže i obala na dohvat ruke",
        intro: "Boravak u unutrašnjosti ne znači odricanje od mora. Villa Bergi odlično odgovara gostima koji žele mirniju vilu blizu Rovinja ili vilu blizu Pule, ali ne žele spavati usred najvećih gužvi.",
        items: [
          { title: "Rovinjska obala", description: "Vrlo izvediva za dan kupanja i stare gradske jezgre, posebno ako želite spojiti more i večeru uz luku." },
          { title: "Pula i plaže južne Istre", description: "Dobar izbor za cjelodnevni izlazak uz more, gradske sadržaje i nešto više ljetne dinamike." },
          { title: "Zapadna obala kod Bala", description: "Praktična za kraće vožnje prema mirnijim obalnim točkama i zalascima sunca." },
          { title: "Porečka strana", description: "Korisna opcija kada želite plaže, obiteljske sadržaje i malo više resort ugođaja iz svoje mirne baze." },
        ],
      },
      dayTrips: {
        title: "Izleti i znamenitosti",
        intro: "Villa Bergi je prije svega fleksibilna baza: brežuljkasti gradići, obala, rimska baština i unutrašnjost mogu stati u isti tjedan odmora.",
        items: [
          { title: "Motovun", description: "Jedan od velikih istarskih klasika, odličan za vidike, vino, tartufe i romantičnu atmosferu brežuljkastog zaleđa." },
          { title: "Poreč", description: "Jako dobra opcija za cjelodnevni izlet uz more, staru jezgru i obiteljske ljetne sadržaje." },
          { title: "Rovinj", description: "I dalje jedan od najtraženijih izleta u Istri, savršen za prepoznatljive ulice, galerije i luku u zalazak sunca." },
          { title: "Pula", description: "Arena i najveći urbani centar regije lako su dostupni, a navečer se vraćate u mir središnje Istre." },
        ],
      },
      whyStay: {
        title: "Zašto odsjesti ovdje?",
        intro: "Ovo je jedna od najstrateškijih lokacija za goste koji žele vidjeti puno Istre, a pritom uživati u mirnom ambijentu vile.",
        items: [
          { title: "Prava baza središnje Istre", description: "Odlično za goste koji uspoređuju vile u Istri i žele podjednako dobar pristup zapadnoj obali, unutrašnjosti i jugu poluotoka." },
          { title: "Idealno za istraživače", description: "Ako volite kombinirati gastronomiju, kulturu, vidikovce, plaže i stare gradove, Villa Bergi daje vam tu slobodu." },
          { title: "Mirni boravak, širok doseg", description: "Jaka opcija za sve koji traže vilu blizu Rovinja ili vilu blizu Pule, ali više vole prostor i privatnost na selu." },
        ],
      },
    },
    linksTitle: "Službeni izvori za planiranje boravka",
    cta: {
      title: "Odsjednite u Villa Bergi i s lakoćom istražite središnju Istru",
      text: "Rezervirajte Villa Bergi za miran odmor u unutrašnjosti i uživajte u slobodi istraživanja istarskih brežuljaka, zapadne obale i južne Istre iz jedne odlične baze.",
      button: "Provjerite raspoloživost",
    },
  },
  it: {
    heroTitle: "Dintorni ed escursioni da Villa Bergi",
    heroIntro:
      "Villa Bergi è una villa nell'Istria centrale pensata per chi vuole esplorare tutta la penisola senza cambiare alloggio. Da Gimino/Žminj si raggiungono con facilità Sanvincenti, Pisino, Canfanaro, Valle, Barbana, Rovigno, Pola, Montona e Parenzo. Per questo Villa Bergi è particolarmente interessante per chi cerca una villa in Istria con tranquillità nell'entroterra, atmosfera autentica e accesso semplice sia alla costa occidentale sia al sud della penisola.",
    sections: {
      nearby: {
        title: "Paesi e borghi vicini",
        intro: "L'Istria centrale è ricca di paesi storici, konobe e strade panoramiche che iniziano praticamente dalla porta di casa.",
        items: [
          { title: "Žminj / Gimino", description: "La base immediata della villa offre vero carattere dell'Istria centrale, buoni collegamenti e un ritmo tranquillo lontano dalle zone più affollate." },
          { title: "Svetvinčenat / Sanvincenti", description: "Un piccolo centro molto suggestivo, noto per la piazza, il castello e la forte identità culturale." },
          { title: "Kanfanar / Canfanaro", description: "Un punto pratico per dirigersi verso Rovigno, Valle e la costa occidentale restando però in un contesto più calmo." },
          { title: "Bale / Valle", description: "Uno dei borghi in pietra più affascinanti dell'Istria occidentale, ideale per una serata lenta e una buona cena." },
          { title: "Barban / Barbana", description: "Una tappa tipica per chi ama l'Istria rurale, la tradizione e un'atmosfera più locale." },
          { title: "Pazin / Pisino", description: "Il cuore dell'Istria centrale, conosciuto per il castello, la gola e la sua posizione strategica." },
        ],
      },
      beaches: {
        title: "Spiagge e costa facilmente raggiungibili",
        intro: "Soggiornare nell'entroterra non significa rinunciare al mare. Villa Bergi è ideale per chi desidera una villa vicino a Rovigno o una villa vicino a Pola, ma preferisce dormire in una zona più tranquilla.",
        items: [
          { title: "Costa di Rovigno", description: "Perfettamente fattibile per una giornata tra mare e centro storico, con cena finale sul porto." },
          { title: "Pola e spiagge del sud dell'Istria", description: "Una buona scelta per una giornata completa tra mare, città e più movimento estivo." },
          { title: "Costa occidentale verso Valle", description: "Utile per uscite più brevi verso tratti costieri più tranquilli e tramonti sul mare." },
          { title: "Versante di Parenzo", description: "Pratico quando si cercano spiagge, attività per famiglie e una giornata più da località balneare." },
        ],
      },
      dayTrips: {
        title: "Gite di giornata e luoghi d'interesse",
        intro: "Villa Bergi significa soprattutto flessibilità: borghi collinari, costa, eredità romana e paesaggi interni possono convivere nella stessa vacanza.",
        items: [
          { title: "Motovun / Montona", description: "Uno dei grandi classici dell'Istria, perfetto per panorami, vino, tartufi e atmosfera romantica dell'entroterra." },
          { title: "Poreč / Parenzo", description: "Ottima scelta per una giornata intera tra mare, centro storico e attività estive per famiglie." },
          { title: "Rovinj / Rovigno", description: "Resta una delle gite più desiderate dell'Istria, con vicoli iconici, gallerie e porto al tramonto." },
          { title: "Pula / Pola", description: "L'Arena e il principale centro urbano della regione sono facilmente raggiungibili, con il vantaggio di rientrare poi nella quiete dell'entroterra." },
        ],
      },
      whyStay: {
        title: "Perché soggiornare qui?",
        intro: "È una delle posizioni più strategiche per chi vuole vedere molto dell'Istria e allo stesso tempo godersi la tranquillità di una villa immersa nel verde.",
        items: [
          { title: "Una vera base nell'Istria centrale", description: "Ideale per chi confronta ville in Istria e vuole accesso equilibrato alla costa ovest, ai borghi interni e al sud della penisola." },
          { title: "Perfetta per chi ama esplorare", description: "Se ti piace alternare gastronomia, cultura, punti panoramici, spiagge e città storiche, Villa Bergi è una base eccellente." },
          { title: "Soggiorno tranquillo, grande raggio d'azione", description: "Un'ottima opzione per chi cerca una villa vicino a Rovigno o una villa vicino a Pola ma preferisce più spazio e privacy in campagna." },
        ],
      },
    },
    linksTitle: "Risorse ufficiali per organizzare il soggiorno",
    cta: {
      title: "Soggiorna a Villa Bergi ed esplora con facilità l'Istria centrale",
      text: "Prenota Villa Bergi per un soggiorno tranquillo nell'entroterra e goditi la libertà di scoprire borghi collinari, località della costa occidentale e gite nel sud dell'Istria da una sola base strategica.",
      button: "Verifica disponibilità",
    },
  },
};

const mapButtons: Record<string, string> = {
  en: "View map",
  de: "Karte ansehen",
  hr: "Prikaži kartu",
  it: "Apri mappa",
};

export const getEnvironsData = (language: string): EnvironsData => {
  const selected = data[language] ?? data.en;
  return {
    ...selected,
    data: [{ button: mapButtons[language] ?? mapButtons.en }],
  };
};
