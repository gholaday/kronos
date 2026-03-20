import type { BiblicalEvent } from '@/lib/types';

export const eventsWorld: BiblicalEvent[] = [
  {
    id: 'world-great-pyramid',
    track: 'world',
    era: 'egypt',
    year: -2560,
    approximate: true,
    title: 'Great Pyramid of Giza Built',
    description:
      'The Great Pyramid was constructed as a tomb for Pharaoh Khufu during the Fourth Dynasty of Egypt. Standing roughly 481 feet tall, it remained the tallest man-made structure in the world for over 3,800 years. Its construction employed tens of thousands of laborers and demonstrates extraordinary engineering precision.',
    significance:
      'The pyramid reflects the immense power and organizational capacity of ancient Egypt, the civilization that would later play a central role in Israelite history through the sojourn and Exodus.',
    historicalContext:
      'Built during the Old Kingdom period, sometimes called the "Age of the Pyramids," when Egypt was a unified and prosperous state with a highly centralized government.',
    figures: [],
    location: { name: 'Giza, Egypt', lat: 29.9792, lng: 31.1342 },
  },
  {
    id: 'world-hammurabi',
    track: 'world',
    era: 'babylon',
    year: -1792,
    approximate: true,
    title: "Hammurabi's Code",
    description:
      'Hammurabi, king of Babylon, compiled one of the earliest and most complete written legal codes, inscribed on a basalt stele. The code contained 282 laws covering commerce, property, family, and criminal justice, applying different standards based on social class. It established the principle of lex talionis ("an eye for an eye").',
    significance:
      'The code provides the closest ancient Near Eastern parallel to the Mosaic Law given later at Sinai, allowing scholars to compare Israelite legal traditions with those of surrounding cultures.',
    historicalContext:
      'Hammurabi united much of Mesopotamia under Babylonian rule, creating a brief but influential empire during the Old Babylonian period, roughly contemporaneous with the biblical patriarchal era.',
    figures: ['Hammurabi'],
    location: { name: 'Babylon', lat: 32.5363, lng: 44.4209 },
  },
  {
    id: 'world-megiddo-thutmose',
    track: 'world',
    era: 'egypt',
    year: -1457,
    approximate: false,
    title: 'Battle of Megiddo — Egypt\'s Empire Expands',
    description:
      'Pharaoh Thutmose III defeated a Canaanite coalition led by the King of Kadesh at Megiddo in the first battle recorded in reliable detail. Thutmose chose a daring route through the narrow Aruna Pass, achieving complete surprise. After the battle, Megiddo endured a seven-month siege before falling. Thutmose went on to conduct at least sixteen campaigns, extending Egyptian power from the Euphrates to the Fourth Cataract of the Nile.',
    significance:
      'The battle established Egyptian dominance over Canaan during the period traditionally associated with the Israelite sojourn in Egypt. Megiddo\'s strategic importance — controlling the pass between the coastal plain and the Jezreel Valley — made it a perennial battlefield. Its Hebrew name, Har Megiddo, gives us "Armageddon" (Revelation 16:16).',
    historicalContext:
      'The campaign is documented in the Annals of Thutmose III, inscribed on the walls of the Temple of Amun at Karnak and derived from a campaign journal kept by the royal scribe Tjaneni. Egyptologist James Breasted called Thutmose III "the Napoleon of Egypt."',
    figures: ['Thutmose III'],
    location: { name: 'Megiddo', lat: 32.5847, lng: 35.1847 },
  },
  {
    id: 'world-akhenaten',
    track: 'world',
    era: 'egypt',
    year: -1353,
    approximate: true,
    title: 'Akhenaten — Amarna Period',
    description:
      'Pharaoh Akhenaten (formerly Amenhotep IV) elevated the sun god Aten to sole deity, closed the temples of other gods, and moved Egypt\'s capital to a new city, Akhetaten (modern Tell el-Amarna). His Great Hymn to the Aten — strikingly parallel to Psalm 104 — celebrates a single creator god. After his death, his successors swiftly restored traditional worship, and later pharaohs attempted to erase his name from Egyptian records entirely.',
    significance:
      'The Amarna Letters — 382 cuneiform tablets of diplomatic correspondence discovered at the site in 1887 — include messages from Canaanite vassal kings and reference the "Habiru," a term debated in connection with the Hebrews. The letters illuminate the political landscape of Canaan in the period preceding or overlapping with the Israelite settlement.',
    historicalContext:
      'Akhenaten reigned approximately 1353-1336 BC, contemporaneous with the traditional early date of the Exodus. His queen Nefertiti was a prominent partner in the religious revolution. Whether his Atenism constituted true monotheism or a radical monolatry remains debated by Egyptologists.',
    figures: ['Akhenaten'],
    location: { name: 'Amarna, Egypt', lat: 27.6453, lng: 30.8967 },
  },
  {
    id: 'world-kadesh',
    track: 'world',
    era: 'egypt',
    year: -1274,
    approximate: true,
    title: 'Battle of Kadesh',
    description:
      'Pharaoh Ramesses II of Egypt clashed with the Hittite Empire under Muwatalli II near the city of Kadesh on the Orontes River in modern Syria. It was one of the largest chariot battles in history, involving thousands of chariots on each side. The battle ended in a strategic stalemate and led to the earliest surviving peace treaty between major powers, signed roughly fifteen years later between Ramesses II and the Hittite king Hattusili III.',
    significance:
      'The battle illustrates the geopolitical struggle between Egypt and the Hittites that shaped the Levant during the period traditionally associated with the Israelite settlement of Canaan.',
    historicalContext:
      'Ramesses II is often identified as a pharaoh connected to the Exodus narratives. The resulting Egyptian-Hittite peace treaty stabilized the region for decades.',
    figures: ['Ramesses II', 'Muwatalli II'],
    location: { name: 'Kadesh, Syria', lat: 34.5569, lng: 36.515 },
  },
  {
    id: 'world-bronze-age-collapse',
    track: 'world',
    era: 'egypt',
    year: -1200,
    approximate: true,
    title: 'Bronze Age Collapse',
    description:
      'A catastrophic wave of destruction swept across the Eastern Mediterranean around 1200 BC, toppling the Hittite Empire, devastating Mycenaean Greece, and weakening Egypt. Multiple factors contributed, including invasions by the "Sea Peoples," drought, famine, and disruption of international trade networks. Within a few decades, several major Bronze Age civilizations had collapsed or sharply declined.',
    significance:
      'The resulting power vacuum in Canaan created the conditions in which the Israelite tribes could establish themselves and eventually form a monarchy under Saul and David.',
    historicalContext:
      'This period of upheaval marks the transition from the Bronze Age to the Iron Age and corresponds roughly to the biblical period of the Judges.',
    figures: [],
    location: { name: 'Eastern Mediterranean', lat: 35.0, lng: 33.0 },
  },
  {
    id: 'world-trojan-war',
    track: 'world',
    era: 'greece',
    year: -1184,
    approximate: true,
    title: 'Trojan War (Traditional Date)',
    description:
      'According to Greek tradition, a coalition of Mycenaean Greeks besieged and destroyed the city of Troy after a ten-year war. The ancient chronographer Eratosthenes dated the fall of Troy to 1184 BC. While Homer\'s Iliad (composed orally in the 8th century BC) is literary rather than historical, the archaeological layer known as Troy VIIa at Hisarlik in Turkey shows evidence of violent destruction around 1180 BC, including sling stones, arrowheads, and human remains consistent with a military assault.',
    significance:
      'Whether or not Homer\'s narrative reflects a specific historical event, the Trojan War belongs to the broader Late Bronze Age upheaval contemporaneous with the biblical period of the Judges. The collapse of Mycenaean civilization that followed contributed to the power vacuum in which the Philistines settled coastal Canaan and the Israelite tribes consolidated.',
    historicalContext:
      'Hittite diplomatic texts reference a place called "Wilusa" (plausibly Ilios/Troy) and a conflict involving "Ahhiyawa" (possibly the Achaeans/Greeks), providing independent evidence for tensions in the region. The traditional date falls within the broader Bronze Age Collapse (c. 1200-1150 BC).',
    figures: [],
    location: { name: 'Troy (Hisarlik), Turkey', lat: 39.9573, lng: 26.2389 },
  },
  {
    id: 'world-philistines',
    track: 'world',
    era: 'egypt',
    year: -1175,
    approximate: true,
    title: 'Philistines Settle in Canaan',
    description:
      'Pharaoh Ramesses III defeated a massive invasion by the "Sea Peoples" — including the Peleset (Philistines) — in land and sea battles around 1175 BC. Despite their defeat, the Philistines settled the southern coastal plain of Canaan, establishing the Pentapolis: Gaza, Ashkelon, Ashdod, Ekron, and Gath. A 2019 DNA study published in Science Advances confirmed their European (Aegean) origins, consistent with the biblical identification of their homeland as "Caphtor" (Amos 9:7; Jeremiah 47:4), generally identified as Crete.',
    significance:
      'The Philistines became the primary antagonists of Israel during the period of the Judges and the early monarchy. Their conflicts with Samson, Samuel, Saul, and David dominate the biblical narrative from Judges 13 through 2 Samuel. Their monopoly on iron-working (1 Samuel 13:19-22) gave them a significant military advantage.',
    historicalContext:
      'Ramesses III\'s victory is depicted in detailed relief carvings at his mortuary temple at Medinet Habu near Luxor. Excavations at Ashkelon, Ekron (Tel Miqne), and Gath (Tell es-Safi) have uncovered Aegean-style pottery, architecture, and cuisine in the earliest Philistine layers, confirming their foreign origins.',
    figures: ['Ramesses III'],
    location: { name: 'Gaza / Ashkelon', lat: 31.6688, lng: 34.5712 },
  },
  {
    id: 'world-phoenician-alphabet',
    track: 'world',
    era: 'egypt',
    year: -1050,
    approximate: true,
    title: 'Phoenician Alphabet Develops',
    description:
      'The Phoenicians refined the Proto-Canaanite script into a standardized consonantal alphabet of 22 letters — a dramatic simplification compared to the hundreds of signs required by cuneiform or hieroglyphs. The earliest known inscriptions in the fully developed Phoenician script, including the Ahiram sarcophagus from Byblos (c. 1000 BC, discovered in 1923), demonstrate a mature writing system that made literacy far more accessible.',
    significance:
      'The Phoenician alphabet is the ancestor of nearly all alphabetic writing systems in use today. The Greeks adapted it (adding vowels) around the 9th-8th century BC, producing the Greek alphabet from which Latin, Cyrillic, and modern Western scripts descend. The Aramaic branch gave rise to Hebrew, Arabic, and scripts across Central and South Asia. The Hebrew script in which the Old Testament was written descends directly from this tradition.',
    historicalContext:
      'The alphabet developed during the period of the Judges, when the Phoenician cities of Tyre, Sidon, and Byblos were becoming the dominant maritime traders of the Mediterranean. Phoenicia would later supply the materials and craftsmen for Solomon\'s Temple (1 Kings 5:1-12).',
    figures: [],
    location: { name: 'Byblos, Lebanon', lat: 34.1236, lng: 35.6482 },
  },
  {
    id: 'world-ashurnasirpal',
    track: 'world',
    era: 'assyria',
    year: -883,
    approximate: false,
    title: 'Ashurnasirpal II Expands Assyria',
    description:
      'Ashurnasirpal II ascended to the Assyrian throne and launched a series of brutal military campaigns that expanded Assyrian territory westward to the Mediterranean. He rebuilt the city of Nimrud (ancient Kalhu) as his new capital, adorning it with massive palaces and relief sculptures. His campaigns were notorious for their calculated use of terror to subdue conquered peoples.',
    significance:
      'His expansion marked the beginning of the Neo-Assyrian Empire, the superpower that would eventually conquer the northern kingdom of Israel and threaten Judah.',
    historicalContext:
      'Ashurnasirpal II reigned during the period of the divided monarchy in Israel, roughly contemporary with kings Omri and Ahab of the northern kingdom.',
    figures: ['Ashurnasirpal II'],
    location: { name: 'Nimrud, Assyria', lat: 36.0956, lng: 43.3279 },
  },
  {
    id: 'world-olympics',
    track: 'world',
    era: 'greece',
    year: -776,
    approximate: false,
    title: 'First Olympic Games',
    description:
      'The first recorded Olympic Games were held at the sanctuary of Zeus in Olympia, Greece, featuring a single foot race called the stadion. The games were part of a religious festival honoring Zeus and were held every four years. Over time, additional events such as wrestling, boxing, and chariot racing were added.',
    significance:
      'The games mark the beginning of a chronological framework used throughout the Greek world, and Greek culture would later profoundly shape the world into which Christianity emerged.',
    historicalContext:
      'The first Olympics occurred during the early period of the divided monarchy in Israel, when the prophets Elijah and Elisha were active in the northern kingdom.',
    figures: [],
    location: { name: 'Olympia, Greece', lat: 37.6388, lng: 21.63 },
  },
  {
    id: 'world-rome-founded',
    track: 'world',
    era: 'rome',
    year: -753,
    approximate: false,
    title: 'Traditional Founding of Rome',
    description:
      'According to Roman tradition, the city of Rome was founded by Romulus, who became its first king after killing his twin brother Remus in a dispute over the city\'s location. While the founding legend is mythological, archaeological evidence confirms settlement on the Palatine Hill from around this period. Rome began as a small Latin settlement along the Tiber River.',
    significance:
      'Rome would grow from this small settlement into the empire that ruled the biblical world during the New Testament era, shaping the political context of Jesus\' life and the spread of early Christianity.',
    historicalContext:
      'The traditional founding date falls during the reign of several kings in Judah and Israel, roughly contemporary with the prophets Isaiah and Hosea.',
    figures: ['Romulus'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-assyria-samaria',
    track: 'world',
    era: 'assyria',
    year: -722,
    approximate: false,
    title: 'Assyria Conquers Samaria',
    description:
      'After a three-year siege begun by Shalmaneser V, the Assyrians under his successor Sargon II captured Samaria, the capital of the northern kingdom of Israel. The Assyrians deported a significant portion of the population and resettled foreign peoples in the region, a standard Assyrian practice to prevent rebellion. The conquest effectively ended the northern kingdom of Israel as an independent state.',
    significance:
      'This event fulfilled prophetic warnings from Amos and Hosea and permanently scattered the ten northern tribes, giving rise to the concept of the "lost tribes of Israel."',
    historicalContext:
      'The fall of Samaria occurred during the reign of Hoshea, the last king of Israel, and coincided with the early years of King Hezekiah in Judah.',
    figures: ['Shalmaneser V', 'Sargon II'],
    location: { name: 'Samaria', lat: 32.2747, lng: 35.1903 },
  },
  {
    id: 'world-fall-nineveh',
    track: 'world',
    era: 'assyria',
    year: -612,
    approximate: false,
    title: 'Fall of Nineveh',
    description:
      'A coalition of Babylonians under Nabopolassar and Medes under Cyaxares besieged and destroyed Nineveh, the capital of the Assyrian Empire. The city was so thoroughly devastated that its location was lost for over two millennia until archaeological excavation in the 19th century. The fall marked the effective end of the Neo-Assyrian Empire.',
    significance:
      'The destruction of Nineveh fulfilled the prophecy of Nahum and removed the greatest threat to Judah, though Babylon would soon replace Assyria as the dominant power.',
    historicalContext:
      'The fall occurred during the reign of the reformer King Josiah in Judah, a brief period of religious revival and political independence before Babylonian dominance.',
    figures: [],
    location: { name: 'Nineveh', lat: 36.3596, lng: 43.153 },
  },
  {
    id: 'world-nebuchadnezzar-jerusalem',
    track: 'world',
    era: 'babylon',
    year: -586,
    approximate: true,
    title: 'Nebuchadnezzar Destroys Jerusalem',
    description:
      'After an 18-month siege, Nebuchadnezzar II of Babylon breached the walls of Jerusalem, destroyed Solomon\'s Temple, and burned the city. King Zedekiah was captured while trying to flee, and the majority of the surviving population was deported to Babylon. The Temple treasures were looted and carried to Babylon.',
    significance:
      'The destruction of the Temple and the Babylonian exile represent the most traumatic event in Old Testament history, reshaping Jewish identity, worship, and theology for all subsequent generations.',
    historicalContext:
      'This was the culmination of multiple Babylonian campaigns against Judah. An earlier deportation in 597 BC had already taken King Jehoiachin and the prophet Ezekiel to Babylon.',
    figures: ['Nebuchadnezzar'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-cyrus-babylon',
    track: 'world',
    era: 'persia',
    year: -539,
    approximate: false,
    title: 'Cyrus Conquers Babylon',
    description:
      'Cyrus the Great of Persia captured Babylon with remarkably little resistance, reportedly diverting the Euphrates River to allow his troops to enter the city along the dry riverbed. He issued the Cyrus Cylinder, which proclaimed a policy of allowing deported peoples to return to their homelands and restore their temples. The conquest ended the Neo-Babylonian Empire.',
    significance:
      'Cyrus\' decree allowed the Jewish exiles to return to Jerusalem and rebuild the Temple, fulfilling the prophecy of Isaiah who named Cyrus as God\'s anointed instrument (Isaiah 44:28-45:1).',
    historicalContext:
      'The Persian Empire under Cyrus became the largest empire the world had yet seen, stretching from the Indus Valley to the Aegean Sea, and adopted a relatively tolerant policy toward subject peoples.',
    figures: ['Cyrus'],
    location: { name: 'Babylon', lat: 32.5363, lng: 44.4209 },
  },
  {
    id: 'world-marathon',
    track: 'world',
    era: 'persia',
    year: -490,
    approximate: false,
    title: 'Battle of Marathon',
    description:
      'An Athenian force of roughly 10,000 hoplites defeated a much larger Persian invasion army on the plain of Marathon northeast of Athens. The decisive Greek victory halted the first Persian attempt to conquer mainland Greece. According to legend, a runner was sent to Athens to announce the victory, inspiring the modern marathon race.',
    significance:
      'The battle preserved Greek independence and cultural development, which would later provide the language, philosophy, and cultural framework through which the New Testament was written and spread.',
    historicalContext:
      'The battle occurred during the reign of the Persian king Darius I, under whose authority the Jewish Temple in Jerusalem had been rebuilt (completed in 516 BC).',
    figures: [],
    location: { name: 'Marathon, Greece', lat: 38.1535, lng: 23.9628 },
  },
  {
    id: 'world-peloponnesian-war',
    track: 'world',
    era: 'persia',
    year: -431,
    endYear: -404,
    approximate: false,
    title: 'Peloponnesian War — Greece Exhausted',
    description:
      'Athens and its Delian League fought Sparta and its Peloponnesian League for hegemony over Greece in a devastating 27-year war. Key events included the plague that killed Pericles (429 BC), the disastrous Athenian expedition to Sicily (415-413 BC), and the decisive Spartan naval victory at Aegospotami (405 BC). Athens surrendered in 404 BC. The war left the Greek city-states so weakened that Philip II of Macedon was able to conquer Greece within two generations.',
    significance:
      'The Peloponnesian War destroyed the golden age of Athens and set in motion the chain of events — Macedonian conquest, Alexander\'s empire, the Hellenistic world — that created the cultural and linguistic environment in which the New Testament was written and early Christianity spread.',
    historicalContext:
      'Thucydides\' History of the Peloponnesian War, written by the Athenian general himself, is the primary source and one of the masterworks of ancient historiography. Persia intervened on Sparta\'s behalf from 413 BC, providing the funds that built the fleet which defeated Athens. The war occurred during the later Persian period of biblical history, overlapping with the beginning of the intertestamental period.',
    figures: [],
    location: { name: 'Athens / Sparta', lat: 37.9715, lng: 23.7257 },
  },
  {
    id: 'world-alexander',
    track: 'world',
    era: 'greece',
    year: -336,
    approximate: false,
    title: 'Alexander the Great Begins Conquests',
    description:
      'Alexander III of Macedon succeeded his father Philip II and within a decade conquered the Persian Empire, Egypt, and territories stretching to the borders of India. He spread Greek language, culture, and city-planning throughout the ancient Near East, founding numerous cities including Alexandria in Egypt. He died in Babylon at age 32.',
    significance:
      'Alexander\'s conquests created a Hellenistic world united by Greek language and culture, providing the common tongue (koine Greek) in which the New Testament would be written and the cultural milieu in which early Christianity spread.',
    historicalContext:
      'Alexander\'s empire was divided among his generals after his death in 323 BC, with the Ptolemies controlling Egypt and the Seleucids controlling Syria and Mesopotamia, both directly affecting Jewish life in Judea.',
    figures: ['Alexander'],
    location: { name: 'Macedonia', lat: 40.5931, lng: 22.9444 },
  },
  {
    id: 'world-diadochi',
    track: 'world',
    era: 'greece',
    year: -323,
    approximate: false,
    title: 'Death of Alexander; Empire Divided',
    description:
      'Alexander the Great died in the palace of Nebuchadnezzar II in Babylon on June 10-11, 323 BC, at age 32. With no clear successor, his generals (the Diadochi) fought a series of wars (322-281 BC) that ultimately divided the empire into three major kingdoms: Macedon under the Antigonids, Egypt under the Ptolemies, and the eastern territories under the Seleucids. The decisive Battle of Ipsus (301 BC) confirmed this partition.',
    significance:
      'The division placed Judea directly between the Ptolemaic kingdom to the south and the Seleucid kingdom to the north. For the next 150 years, Judea would be contested between these powers — the "king of the South" and "king of the North" of Daniel 11. This geopolitical reality shaped Jewish life throughout the intertestamental period.',
    historicalContext:
      'A Babylonian astronomical diary is the only contemporary source for Alexander\'s death; later accounts by Plutarch and Arrian draw on the lost "Royal Journal." The Wars of the Diadochi were among the most destructive of the ancient world and established the political map of the eastern Mediterranean for the next two centuries.',
    figures: ['Alexander'],
    location: { name: 'Babylon', lat: 32.5363, lng: 44.4209 },
  },
  {
    id: 'world-ptolemaic-judea',
    track: 'world',
    era: 'greece',
    year: -301,
    approximate: false,
    title: 'Ptolemaic Control of Judea',
    description:
      'Following the Battle of Ipsus (301 BC), Ptolemy I Soter consolidated control over Judea, which he had first seized in 320 BC by entering Jerusalem on a Sabbath when Jews did not fight, according to the historian Agatharchides (cited by Josephus). Under the Ptolemies, Jews were generally allowed to maintain their religious practices and enjoyed relative stability for a century (301-198 BC). Large Jewish communities flourished in Egypt, particularly in Alexandria.',
    significance:
      'The benign Ptolemaic period allowed Jewish religious and intellectual life to develop, most notably through the translation of the Septuagint in Alexandria under Ptolemy II Philadelphus. The Alexandrian Jewish community would later produce the philosopher Philo and provide an important bridge between Jewish thought and Greek philosophy.',
    historicalContext:
      'Josephus (Antiquities 12) is the primary source for Jewish life under the Ptolemies. The period corresponds to the first half of the intertestamental "silent years" between Malachi and the New Testament, during which Judaism developed the synagogue system, wisdom literature, and apocalyptic thought that would shape the world of Jesus and the apostles.',
    figures: ['Ptolemy I'],
    location: { name: 'Jerusalem / Alexandria', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-great-wall',
    track: 'world',
    era: 'greece',
    year: -221,
    approximate: false,
    title: 'Qin Shi Huang Unifies China; Great Wall Begun',
    description:
      'Qin Shi Huang defeated the last of the six rival Warring States and became the first emperor of a unified China. He standardized weights, measures, currency, and writing, and ordered existing defensive walls along the northern frontier connected and extended into a continuous fortification — the first version of the Great Wall, built with rammed earth by conscript labor under General Meng Tian. The historian Sima Qian documented these events in his Records of the Grand Historian (c. 94 BC).',
    significance:
      'While the biblical world was focused on the Hellenistic kingdoms that succeeded Alexander, the other great civilizations of the world were also taking shape. The unification of China occurred contemporaneously with Ptolemaic control of Judea and the translation of the Septuagint, providing global context for the intertestamental period.',
    historicalContext:
      'The Great Wall visible today dates mostly from the Ming Dynasty (1368-1644), not the Qin period. The original Qin walls were rammed earth, much of which has eroded. Qin Shi Huang\'s massive construction projects, including his famous terracotta army tomb complex, relied on forced labor on an enormous scale.',
    figures: ['Qin Shi Huang'],
    location: { name: 'China', lat: 40.4319, lng: 116.5704 },
  },
  {
    id: 'world-hannibal',
    track: 'world',
    era: 'greece',
    year: -218,
    approximate: false,
    title: 'Hannibal Crosses the Alps — Second Punic War',
    description:
      'The Carthaginian general Hannibal Barca marched roughly 1,000 miles from Spain, crossing the Pyrenees and the Alps with an army that included war elephants, to invade Italy during the Second Punic War (218-201 BC). He defeated Roman forces in a series of devastating battles, culminating in the annihilation of a larger Roman army at Cannae (216 BC) — one of the worst military defeats in Roman history. Despite these victories, Hannibal was unable to take Rome itself.',
    significance:
      'Rome\'s eventual victory over Carthage in 201 BC established it as the dominant power in the western Mediterranean, beginning the trajectory that would bring Roman legions to Judea within two centuries. The "legs of iron" in Nebuchadnezzar\'s statue (Daniel 2) and the fourth beast of Daniel 7 are traditionally interpreted by evangelical scholars as prophetically representing Rome.',
    historicalContext:
      'Polybius (a Greek historian who lived in Rome) and Livy are the primary sources for the Punic Wars. Carthage was permanently destroyed in the Third Punic War (146 BC), the same year Rome conquered Greece — twin events that left Rome as the unrivaled master of the Mediterranean.',
    figures: ['Hannibal'],
    location: { name: 'Alps / Italy', lat: 45.8326, lng: 6.8652 },
  },
  {
    id: 'world-seleucid-judea',
    track: 'world',
    era: 'greece',
    year: -198,
    approximate: false,
    title: 'Seleucids Seize Judea — Battle of Panium',
    description:
      'Antiochus III the Great defeated Ptolemaic forces under the general Scopas at the Battle of Panium (near Caesarea Philippi) in 200 BC, ending a century of Ptolemaic rule over Judea. While Antiochus III initially granted Jews a charter to govern themselves by the Torah, the Treaty of Apamea (188 BC) — imposed by Rome after defeating Antiochus — forced the Seleucids to pay crushing reparations that would drive later rulers to plunder temple treasuries.',
    significance:
      'The shift from Ptolemaic to Seleucid control directly set the stage for the persecution under Antiochus IV Epiphanes, who desecrated the Temple in 167 BC and provoked the Maccabean Revolt. Daniel 11:13-16 is widely understood by evangelical scholars as describing Antiochus III\'s conquest of Judea from the Ptolemies.',
    historicalContext:
      'Josephus (Antiquities 12) records that Antiochus III was warmly received by the Jews, who helped him expel the Ptolemaic garrison from Jerusalem. The Battle of Panium took place at Banias, near the source of the Jordan River — the same location where Jesus would later ask his disciples, "Who do you say that I am?" (Matthew 16:13-16).',
    figures: ['Antiochus III'],
    location: { name: 'Paneas (Caesarea Philippi)', lat: 33.2487, lng: 35.6943 },
  },
  {
    id: 'world-maccabees',
    track: 'world',
    era: 'greece',
    year: -167,
    approximate: false,
    title: 'Maccabean Revolt',
    description:
      'When the Seleucid king Antiochus IV Epiphanes desecrated the Jerusalem Temple by erecting an altar to Zeus and forbidding Jewish religious practices, Judas Maccabeus and his brothers led an armed revolt. After initial guerrilla victories against Seleucid forces, the rebels recaptured and rededicated the Temple in 164 BC. The revolt eventually established the Hasmonean dynasty as independent rulers of Judea.',
    significance:
      'The Temple rededication is commemorated by the festival of Hanukkah, and the revolt secured Jewish political and religious independence until Roman intervention, bridging the Old and New Testament periods.',
    historicalContext:
      'The events are recorded in 1 and 2 Maccabees, and the prophecy of Daniel 8 and 11 is often interpreted as referring to Antiochus IV. This period falls in the intertestamental era between Malachi and the New Testament.',
    figures: ['Judas Maccabeus', 'Antiochus IV'],
    location: { name: 'Judea', lat: 31.7, lng: 35.2 },
  },
  {
    id: 'world-rome-conquers-greece',
    track: 'world',
    era: 'rome',
    year: -146,
    approximate: false,
    title: 'Rome Conquers Greece and Destroys Carthage',
    description:
      'In 146 BC, Rome simultaneously destroyed two great Mediterranean civilizations. In Greece, the Roman consul Lucius Mummius defeated the Achaean League and sacked Corinth — killing the men, enslaving the women and children, and burning the city. In North Africa, Scipio Aemilianus razed Carthage after a three-year siege, ending the Third Punic War. The historian Polybius, who witnessed Corinth\'s destruction, recorded the event.',
    significance:
      'These twin destructions marked Rome\'s emergence as the undisputed master of the Mediterranean and the beginning of the Roman era that would govern the biblical world during the life of Christ. Paul would later write his most important letter to the church at Corinth — the very city the Romans destroyed and later rebuilt as a Roman colony.',
    historicalContext:
      'The conventional date of 146 BC marks the transition from the Greek/Hellenistic to the Roman era. Within eighty years, Roman forces under Pompey would conquer Jerusalem (63 BC), and within a century, Augustus would establish the empire into which Jesus was born.',
    figures: [],
    location: { name: 'Corinth / Carthage', lat: 37.9062, lng: 22.8805 },
  },
  {
    id: 'world-pompey-jerusalem',
    track: 'world',
    era: 'rome',
    year: -63,
    approximate: false,
    title: 'Pompey Conquers Jerusalem',
    description:
      'The Roman general Pompey intervened in a Hasmonean civil war between brothers Hyrcanus II and Aristobulus II. After a three-month siege, Roman forces breached the Temple Mount, and Pompey entered the Holy of Holies, though he did not plunder it. Judea was incorporated into the Roman sphere of influence as a client state.',
    significance:
      'Pompey\'s conquest ended Jewish political independence and established Roman authority over Judea, the political reality that would persist through the life of Jesus and the early church.',
    historicalContext:
      'Pompey\'s eastern campaigns reorganized much of the former Seleucid territory into Roman provinces and client kingdoms, placing Judea firmly within the Roman political orbit.',
    figures: ['Pompey'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-caesar-assassination',
    track: 'world',
    era: 'rome',
    year: -44,
    approximate: false,
    title: 'Assassination of Julius Caesar',
    description:
      'Julius Caesar was stabbed to death on the Ides of March by a group of Roman senators led by Brutus and Cassius, who feared his growing dictatorial power. Caesar had recently been declared dictator perpetuo (dictator in perpetuity), alarming defenders of the Roman Republic. His assassination triggered a series of civil wars that ultimately ended the Roman Republic.',
    significance:
      'Caesar\'s death set in motion the political transformation that produced the Roman Empire under Augustus, the emperor who would order the census that brought Joseph and Mary to Bethlehem.',
    historicalContext:
      'Caesar had previously granted favorable privileges to Jews in the empire, and his death created a period of instability that affected all Roman-controlled territories including Judea.',
    figures: ['Julius Caesar'],
    location: { name: 'Rome', lat: 41.8954, lng: 12.4823 },
  },
  {
    id: 'world-herod-king',
    track: 'world',
    era: 'rome',
    year: -37,
    approximate: false,
    title: 'Herod the Great Installed as King',
    description:
      'With Roman military support, Herod captured Jerusalem and secured his position as king of Judea, a title the Roman Senate had granted him in 40 BC. He was an Idumean (Edomite) by descent, which made his rule controversial among Jews. Herod undertook massive building projects including the expansion of the Second Temple, the fortress of Masada, and the port city of Caesarea Maritima.',
    significance:
      'Herod\'s reign provides the political backdrop for the birth of Jesus and the narrative of the massacre of the innocents in Bethlehem (Matthew 2).',
    historicalContext:
      'Herod maintained power through a combination of Roman patronage, political marriages, and ruthless elimination of rivals, including members of his own family.',
    figures: ['Herod the Great'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-augustus',
    track: 'world',
    era: 'rome',
    year: -27,
    approximate: false,
    title: 'Augustus Becomes First Emperor',
    description:
      'Octavian, the adopted son and heir of Julius Caesar, received the title "Augustus" from the Roman Senate, marking the official beginning of the Roman Empire. After defeating Mark Antony and Cleopatra at the Battle of Actium in 31 BC, he consolidated sole control over the Roman world. His reign inaugurated the Pax Romana, a roughly 200-year period of relative peace and stability.',
    significance:
      'Augustus\' census decree (Luke 2:1) brought Mary and Joseph to Bethlehem for the birth of Jesus. The Pax Romana and its road network later facilitated the rapid spread of Christianity.',
    historicalContext:
      'Augustus reorganized the Roman provinces, established a professional standing army, and created an administrative system that governed the Mediterranean world during the entire New Testament period.',
    figures: ['Augustus'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-herod-death',
    track: 'world',
    era: 'rome',
    year: -4,
    approximate: true,
    title: 'Death of Herod the Great',
    description:
      'Herod the Great died at his winter palace in Jericho after a prolonged and painful illness. His kingdom was divided among three of his sons: Archelaus received Judea, Antipas received Galilee and Perea, and Philip received territories to the northeast. His death was preceded by a final act of cruelty in ordering executions to ensure mourning at his funeral.',
    significance:
      'Herod\'s death provides a key chronological marker for dating the birth of Jesus, which Matthew\'s Gospel places before this event. The division of his kingdom shaped the political landscape of Jesus\' ministry.',
    historicalContext:
      'The division of Herod\'s kingdom required Roman approval, and Archelaus\' misrule in Judea eventually led to direct Roman governance through prefects, including Pontius Pilate.',
    figures: ['Herod the Great'],
    location: { name: 'Jericho', lat: 31.8611, lng: 35.4594 },
  },
  {
    id: 'world-tiberius',
    track: 'world',
    era: 'rome',
    year: 14,
    approximate: false,
    title: 'Tiberius Becomes Emperor',
    description:
      'Tiberius succeeded his stepfather Augustus as the second Roman emperor. He was an experienced military commander but a reluctant ruler who eventually withdrew from Rome to the island of Capri in 26 AD, governing the empire through intermediaries. His reign was marked by increasing use of treason trials and political paranoia.',
    significance:
      'The ministry and crucifixion of Jesus took place during the reign of Tiberius, and Luke 3:1 explicitly dates the beginning of John the Baptist\'s ministry to the fifteenth year of Tiberius\' reign.',
    historicalContext:
      'Tiberius appointed Pontius Pilate as prefect of Judea in 26 AD. The emperor\'s anti-Jewish advisor Sejanus may have influenced Roman policy toward Judea during this period.',
    figures: ['Tiberius'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-titus-temple',
    track: 'world',
    era: 'rome',
    year: 70,
    approximate: false,
    title: 'Titus Destroys Jerusalem and the Temple',
    description:
      'Roman forces under the future emperor Titus besieged Jerusalem during the First Jewish-Roman War and ultimately breached the city walls after months of brutal fighting. The Second Temple was burned and razed, and the city was systematically destroyed. Hundreds of thousands of Jews perished from warfare, famine, and disease during the siege.',
    significance:
      'The destruction of the Temple fulfilled Jesus\' prophecy in Mark 13 and Matthew 24, ended the sacrificial system of worship, and fundamentally transformed Judaism into a religion centered on synagogue and Torah study rather than temple ritual.',
    historicalContext:
      'The Jewish revolt had begun in 66 AD due to growing tensions between Jews and Roman authorities. The Arch of Titus in Rome still stands as a monument depicting the looting of the Temple treasures.',
    figures: ['Titus'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-vesuvius',
    track: 'world',
    era: 'rome',
    year: 79,
    approximate: false,
    title: 'Eruption of Vesuvius; Pompeii Destroyed',
    description:
      'Mount Vesuvius erupted catastrophically, burying the Roman cities of Pompeii and Herculaneum under volcanic ash and pumice. The eruption killed an estimated 2,000 people in Pompeii alone and preserved the city in remarkable detail. Pliny the Younger recorded a detailed eyewitness account of the eruption, one of the earliest surviving descriptions of a volcanic event.',
    significance:
      'The preserved ruins of Pompeii provide an unparalleled snapshot of daily life in the first-century Roman world, the same world in which Paul traveled and the early church spread across the Mediterranean.',
    historicalContext:
      'The eruption occurred just nine years after the destruction of the Jerusalem Temple. The preserved graffiti, shops, and homes in Pompeii illuminate the culture and economy of the Roman Empire during the apostolic period.',
    figures: [],
    location: { name: 'Pompeii', lat: 40.7462, lng: 14.4989 },
  },
  {
    id: 'world-judea-province',
    track: 'world',
    era: 'rome',
    year: 6,
    approximate: false,
    title: 'Judea Becomes a Roman Province',
    description:
      'After Herod Archelaus proved an incompetent and brutal ruler of Judea, Augustus deposed him and reorganized Judea, Samaria, and Idumea as the Roman province of Judaea, governed by a prefect appointed from Rome. The first Roman census of the province was conducted under Quirinius, governor of Syria, triggering a revolt led by Judas the Galilean.',
    significance:
      'Direct Roman governance of Judea set the stage for the political tensions that pervade the Gospels and Acts, including Roman taxation, the appointment of high priests, and the authority of prefects like Pontius Pilate over capital punishment.',
    historicalContext:
      'Luke 2:1-2 references a census under Quirinius in connection with the birth of Jesus. The shift to direct rule intensified Jewish resentment of foreign authority and fueled the Zealot movement.',
    figures: ['Augustus', 'Quirinius'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-pilate-appointed',
    track: 'world',
    era: 'rome',
    year: 26,
    approximate: false,
    title: 'Pontius Pilate Appointed Prefect of Judea',
    description:
      'Pontius Pilate was appointed as the fifth Roman prefect of Judea by Emperor Tiberius. His decade-long administration was marked by repeated clashes with the Jewish population, including provocative displays of Roman standards in Jerusalem and the use of Temple funds to build an aqueduct. The Pilate Stone, discovered at Caesarea Maritima in 1961, confirms his historical existence and title.',
    significance:
      'Pilate presided over the trial and execution of Jesus, making him one of the most widely known figures of the Roman provincial administration. His role is memorialized in the Apostles\' Creed: "suffered under Pontius Pilate."',
    historicalContext:
      'Pilate served under Tiberius and was eventually recalled to Rome around 36 AD after a violent confrontation with Samaritans. Both Josephus and Philo record his contentious relationship with the Jewish population.',
    figures: ['Pontius Pilate'],
    location: { name: 'Caesarea Maritima', lat: 32.5000, lng: 34.8903 },
  },
  {
    id: 'world-caligula',
    track: 'world',
    era: 'rome',
    year: 37,
    approximate: false,
    title: 'Caligula Becomes Emperor',
    description:
      'Gaius Caesar, known as Caligula, succeeded Tiberius as the third Roman emperor. Initially popular, his reign descended into despotism, extravagance, and erratic behavior. He ordered a statue of himself erected in the Jerusalem Temple, a crisis averted only by the delaying tactics of the Syrian governor Petronius and Caligula\'s assassination in 41 AD.',
    significance:
      'The statue crisis was the most serious threat to the Temple between the Maccabean desecration and its destruction in 70 AD. It heightened Jewish apocalyptic expectations and may be reflected in Paul\'s reference to the "man of lawlessness" in 2 Thessalonians 2.',
    historicalContext:
      'Caligula\'s demand echoed Antiochus IV\'s desecration two centuries earlier. The Jewish philosopher Philo of Alexandria led a delegation to Rome to plead against anti-Jewish policies during this period.',
    figures: ['Caligula'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-claudius-jews',
    track: 'world',
    era: 'rome',
    year: 49,
    approximate: true,
    title: 'Claudius Expels Jews from Rome',
    description:
      'Emperor Claudius issued an edict expelling Jews from Rome, an event recorded by the Roman historian Suetonius, who attributed it to disturbances "at the instigation of Chrestus." This likely refers to disputes within the Roman Jewish community over the claims of Christ. The expulsion scattered Jewish Christians across the Mediterranean.',
    significance:
      'Acts 18:2 records that Aquila and Priscilla came to Corinth because of this edict, where they met Paul and became key partners in his missionary work. The event illustrates how Roman political actions inadvertently spread the early church.',
    historicalContext:
      'Suetonius\' reference to "Chrestus" is one of the earliest non-Christian references to Christ. The expelled Jews returned to Rome after Claudius\' death in 54 AD, creating the mixed Jewish-Gentile church Paul later addressed in his letter to the Romans.',
    figures: ['Claudius'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-nero-emperor',
    track: 'world',
    era: 'rome',
    year: 54,
    approximate: false,
    title: 'Nero Becomes Emperor',
    description:
      'Nero succeeded his adoptive father Claudius as the fifth Roman emperor at age sixteen. His early reign under the guidance of the philosopher Seneca and the prefect Burrus was considered competent, but he grew increasingly tyrannical after their influence waned. He is believed to have ordered the Great Fire of Rome in 64 AD or at least exploited it to rebuild the city to his liking.',
    significance:
      'Paul appealed to Nero\'s tribunal (Acts 25:11) and was likely tried in Rome during Nero\'s reign. Nero\'s persecution of Christians after the Great Fire became the first organized Roman suppression of the church, and tradition holds that both Peter and Paul were martyred under his authority.',
    historicalContext:
      'Nero\'s reign coincided with the peak of Paul\'s missionary activity and letter writing. The emperor\'s suicide in 68 AD triggered a civil war known as the Year of the Four Emperors, destabilizing the empire.',
    figures: ['Nero'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-great-fire-rome',
    track: 'world',
    era: 'rome',
    year: 64,
    approximate: false,
    title: 'Great Fire of Rome',
    description:
      'A devastating fire swept through Rome for nine days — burning for six days, briefly brought under control, then reigniting for three more — destroying or severely damaging ten of the city\'s fourteen districts. Nero deflected suspicion from himself by blaming the Christians, initiating the first Roman persecution specifically targeting the church. According to the historian Tacitus, Christians were arrested and subjected to brutal public executions, including being burned alive and fed to animals.',
    significance:
      'The Great Fire marks the beginning of state-sponsored persecution of Christianity. Early church tradition places the martyrdoms of the apostles Peter and Paul in Rome during this period, around 64-67 AD.',
    historicalContext:
      'Tacitus, writing decades later, described Christians as holding a "deadly superstition" but acknowledged that public sympathy turned in their favor due to the excessive cruelty of their punishments.',
    figures: ['Nero'],
    location: { name: 'Rome', lat: 41.8925, lng: 12.4853 },
  },
  {
    id: 'world-jewish-revolt',
    track: 'world',
    era: 'rome',
    year: 66,
    approximate: false,
    title: 'First Jewish Revolt Begins',
    description:
      'Long-simmering tensions between the Jewish population and Roman authorities erupted into open revolt when the Roman procurator Gessius Florus seized money from the Temple treasury and killed protesters. Jewish rebels overwhelmed the Roman garrison in Jerusalem and defeated a relief column led by Cestius Gallus. The revolt quickly spread across Judea and Galilee.',
    significance:
      'The revolt set in motion the events leading to the destruction of the Temple in 70 AD. Early Christians in Jerusalem, heeding Jesus\' warning in Mark 13:14, are reported to have fled to Pella in Transjordan before the Roman siege.',
    historicalContext:
      'The war is extensively documented by Josephus, a Jewish commander who defected to the Romans and became a historian. His works The Jewish War and Antiquities of the Jews are primary sources for first-century Jewish history.',
    figures: [],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-masada',
    track: 'world',
    era: 'rome',
    year: 73,
    approximate: true,
    title: 'Fall of Masada',
    description:
      'The mountaintop fortress of Masada, the last stronghold of Jewish rebels, fell to the Roman Tenth Legion after a prolonged siege. The Romans built a massive earthen ramp to breach the walls. According to Josephus, the 960 defenders chose mass suicide rather than surrender, though archaeological evidence suggests the final events may have been more complex.',
    significance:
      'Masada symbolizes the definitive end of the Jewish revolt and the complete Roman subjugation of Judea. The fall underscores the political and military context in which the early church spread — a world where Jewish national hopes had been crushed.',
    historicalContext:
      'Herod the Great had originally fortified Masada as a personal refuge. The Roman siege ramp and camps remain visible at the site today, providing one of the best-preserved examples of Roman siege warfare.',
    figures: [],
    location: { name: 'Masada', lat: 31.3156, lng: 35.3536 },
  },
  {
    id: 'world-domitian',
    track: 'world',
    era: 'rome',
    year: 81,
    approximate: false,
    title: 'Domitian Becomes Emperor',
    description:
      'Domitian succeeded his brother Titus as emperor and ruled for fifteen years. He demanded to be addressed as "Dominus et Deus" (Lord and God) and enforced emperor worship more aggressively than his predecessors. His reign was marked by efficient but autocratic administration and sporadic persecutions of those who refused to participate in the imperial cult.',
    significance:
      'Domitian\'s insistence on divine honors created a direct conflict with Christian confession of Jesus as Lord. Many scholars date the book of Revelation to his reign, viewing its imagery of imperial beast worship as a response to Domitian\'s enforcement of the emperor cult.',
    historicalContext:
      'The apostle John\'s exile to Patmos (Rev 1:9) is traditionally placed during Domitian\'s persecution. Domitian was assassinated in 96 AD, after which the Senate condemned his memory in an act of damnatio memoriae.',
    figures: ['Domitian'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },

  // ── World Events 100–1000 AD ─────────────────────────────────────
  {
    id: 'world-trajan-extent',
    track: 'world',
    era: 'rome',
    year: 117,
    approximate: false,
    title: 'Roman Empire at Greatest Extent',
    description:
      'Under Emperor Trajan, the Roman Empire reached its maximum territorial extent, stretching from Britain to Mesopotamia, encompassing the entire Mediterranean basin. Trajan conquered Dacia (modern Romania) and briefly held Mesopotamia. The empire governed an estimated 55-70 million people across three continents.',
    significance:
      'The vastness of the Roman road network, common language, and legal system at its peak provided the infrastructure through which Christianity spread during the second century. Trajan\'s rescript to Pliny the Younger (c. 112) also established the first formal Roman policy for dealing with Christians.',
    historicalContext:
      'Trajan\'s conquests coincided with the ministry of Ignatius of Antioch, who was transported along Roman roads to his martyrdom in Rome. The Pax Romana, despite sporadic persecutions, enabled Christian missionaries and letter-carriers to travel safely across the empire.',
    figures: ['Trajan'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-bar-kokhba',
    track: 'world',
    era: 'rome',
    year: 132,
    approximate: false,
    title: 'Bar Kokhba Revolt; Jews Expelled from Jerusalem',
    description:
      'Simon bar Kokhba led the last major Jewish revolt against Rome (132-135 AD). Rabbi Akiva endorsed him as the Messiah. After initial successes, the revolt was crushed by Emperor Hadrian with devastating losses: an estimated 580,000 Jews killed. Hadrian renamed Jerusalem "Aelia Capitolina," built a temple to Jupiter on the Temple Mount, and banned Jews from entering the city.',
    significance:
      'The Bar Kokhba revolt completed the separation of Judaism and Christianity, as Jewish Christians who refused to acknowledge bar Kokhba as Messiah were expelled from the Jewish community. The ban on Jews in Jerusalem shifted the church there from Jewish to Gentile leadership permanently.',
    historicalContext:
      'The revolt was likely triggered by Hadrian\'s plan to build a Roman colony on Jerusalem\'s ruins and his ban on circumcision. The destruction was so complete that the location of many Jewish sites was lost for centuries. The Judean Jewish population was largely destroyed or dispersed.',
    figures: ['Hadrian'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-antonine-plague',
    track: 'world',
    era: 'rome',
    year: 166,
    approximate: true,
    title: 'Antonine Plague Devastates the Roman Empire',
    description:
      'A devastating pandemic, likely smallpox, struck the Roman Empire during the reign of Marcus Aurelius and Lucius Verus, killing an estimated 5-10 million people over fifteen years (165-180 AD). The disease was brought back by legions returning from campaigns in Mesopotamia. At its peak, 2,000 people died per day in Rome alone. Co-emperor Lucius Verus succumbed to the plague in 169 AD.',
    significance:
      'The plague severely weakened the Roman military and economy, contributing to the instability of the third century. The physician Galen documented the symptoms in his Methodus Medendi, providing one of antiquity\'s most important medical case studies. Christian communities gained a reputation for caring for the sick during plagues, contributing to the faith\'s growth.',
    historicalContext:
      'The pandemic struck during the period when the early church was expanding across the empire. Marcus Aurelius, the Stoic philosopher-emperor, wrote much of his Meditations during this crisis. Cassius Dio\'s Roman History provides the historical context, while Galen\'s medical writings describe the clinical symptoms in detail.',
    figures: ['Marcus Aurelius'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-edict-caracalla',
    track: 'world',
    era: 'rome',
    year: 212,
    approximate: false,
    title: 'Edict of Caracalla — Universal Roman Citizenship',
    description:
      'Emperor Caracalla issued the Constitutio Antoniniana, granting Roman citizenship to all free inhabitants of the empire. Previously, citizenship had been a carefully guarded privilege. The edict extended to millions of people across three continents, making all free men and women legal Romans. According to the historian Cassius Dio, Caracalla\'s primary motive was to increase tax revenue by expanding the number of people liable to inheritance and manumission taxes.',
    significance:
      'The edict erased the legal distinction between Roman citizen and provincial subject that had structured Paul\'s world (Acts 22:25-29). By universalizing citizenship, it also universalized Roman law, creating a more uniform legal framework across the territories where Christianity was spreading.',
    historicalContext:
      'The sole surviving copy of the edict is the fragmentary Papyrus Giessen 40, preserved in Greek. Cassius Dio\'s Roman History (79.9.5) provides the chief literary account. The edict came during a period of growing Christian communities across the empire, and its extension of legal rights affected the standing of Christians in provincial courts.',
    figures: ['Caracalla'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-decian-persecution',
    track: 'world',
    era: 'rome',
    year: 250,
    approximate: false,
    title: 'Decian Persecution — First Empire-Wide Anti-Christian Decree',
    description:
      'Emperor Decius issued an edict requiring all inhabitants of the empire to sacrifice to the Roman gods and obtain a signed certificate (libellus) as proof. Though not explicitly targeting Christians, the decree forced a direct confrontation with the church. Pope Fabian of Rome and bishops Babylas of Antioch and Alexander of Jerusalem were among those martyred. Many Christians complied under duress, creating a crisis over readmitting the "lapsed" that divided churches for decades.',
    significance:
      'The Decian persecution was the first systematic, empire-wide action against Christians, unlike the earlier localized persecutions under Nero and Domitian. Forty-six surviving libelli (certificates of sacrifice) from Egypt provide documentary evidence of the decree\'s enforcement. The controversy over readmitting lapsed Christians led to the Novatianist schism and shaped early church discipline.',
    historicalContext:
      'Cyprian of Carthage, who fled during the persecution, documented its impact in his treatise De Lapsis and in his extensive correspondence. Eusebius of Caesarea preserved eyewitness accounts from Dionysius of Alexandria in his Ecclesiastical History. The persecution lasted roughly two years before Decius was killed fighting the Goths in 251.',
    figures: ['Decius'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-constantinople-founded',
    track: 'world',
    era: 'rome',
    year: 330,
    approximate: false,
    title: 'Constantinople Founded',
    description:
      'Emperor Constantine dedicated his new capital at Byzantium on the Bosporus, renaming it Constantinople ("City of Constantine"). The city was designed as a "New Rome," complete with a senate, imperial palace, hippodrome, and numerous churches. Its strategic location between Europe and Asia made it virtually impregnable and the center of political power for over a millennium.',
    significance:
      'The founding of Constantinople shifted the center of gravity of the Roman Empire eastward and created the context for the eventual divergence of Eastern and Western Christianity. The city became the seat of the ecumenical patriarch and the stage for most of the major theological controversies of the early church.',
    historicalContext:
      'Constantine chose the site for its defensibility and commercial location. Unlike Rome, Constantinople was founded as a Christian city, with no pagan temples. The city would survive the fall of the Western Empire by nearly a thousand years, falling to the Ottoman Turks only in 1453.',
    figures: ['Constantine'],
    location: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 },
  },
  {
    id: 'world-theodosius-state-religion',
    track: 'world',
    era: 'rome',
    year: 380,
    approximate: false,
    title: 'Christianity Becomes State Religion',
    description:
      'Emperor Theodosius I issued the Edict of Thessalonica, declaring Nicene Christianity the official state religion of the Roman Empire. The edict required all subjects to profess the faith defined by the councils of Nicaea and Constantinople, effectively outlawing Arianism. Subsequent legislation in 391-392 closed pagan temples and prohibited pagan worship.',
    significance:
      'The Edict of Thessalonica completed the transformation begun at the Edict of Milan (313), changing Christianity from a tolerated religion to the only legal religion of the empire. This raised new questions about the relationship between church and state, religious coercion, and the meaning of Christian identity in a nominally Christian society.',
    historicalContext:
      'Theodosius was baptized by Acholius, bishop of Thessalonica, after a severe illness. He convened the Council of Constantinople (381), which finalized the Nicene Creed. His reign marked the definitive end of imperial support for Arianism and the last serious attempt to restore paganism under Julian the Apostate (361-363) was already a generation past.',
    figures: ['Theodosius I'],
    location: { name: 'Thessalonica', lat: 40.6401, lng: 22.9444 },
  },
  {
    id: 'world-empire-divided',
    track: 'world',
    era: 'rome',
    year: 395,
    approximate: false,
    title: 'Roman Empire Permanently Divided',
    description:
      'Emperor Theodosius I died at Mediolanum (Milan) on January 17, 395, having been the last emperor to rule both halves of the Roman Empire. His elder son Arcadius inherited the Eastern Empire with its capital at Constantinople, while his younger son Honorius received the Western Empire. Real power rested with their regents: Rufinus in the East and the general Stilicho in the West, who immediately entered into rivalry.',
    significance:
      'Though the empire had been divided administratively before, after 395 it was never reunited. The permanent split shaped the divergent trajectories of Eastern and Western Christianity, with the Greek-speaking East developing its own theological, liturgical, and political traditions distinct from the Latin West.',
    historicalContext:
      'The division occurred just fifteen years after Theodosius had made Christianity the state religion. The historian Zosimus and the poet Claudian are the principal sources. The Western Empire collapsed within eighty years under barbarian pressure, while the Eastern (Byzantine) Empire endured for another millennium.',
    figures: ['Theodosius I', 'Arcadius', 'Honorius'],
    location: { name: 'Milan', lat: 45.4642, lng: 9.19 },
  },
  {
    id: 'world-sack-of-rome',
    track: 'world',
    era: 'rome',
    year: 410,
    approximate: false,
    title: 'Sack of Rome by the Visigoths',
    description:
      'Alaric and his Visigothic army besieged and entered Rome on August 24, 410, plundering the city for three days. Although the damage was limited compared to later sacks, the psychological impact was enormous. For the first time in 800 years, a foreign army had entered the Eternal City. Jerome, writing from Bethlehem, lamented: "The city which had taken the whole world was itself taken."',
    significance:
      'The sack of Rome provoked a crisis of confidence in the Roman order and generated accusations that Christianity had weakened the empire. Augustine wrote The City of God (413-426) directly in response, arguing that no earthly city is permanent and that Christians are ultimately citizens of the heavenly city.',
    historicalContext:
      'The Visigoths were Arian Christians; Alaric spared the churches and those who took refuge in them. The sack was part of the broader migration period that saw Germanic peoples settle throughout the Western Empire. Rome would be sacked again by the Vandals in 455 and the Ostrogoths in 546.',
    figures: ['Alaric'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-vandal-sack-rome',
    track: 'world',
    era: 'rome',
    year: 455,
    approximate: false,
    title: 'Vandals Sack Rome',
    description:
      'King Genseric of the Vandals sailed from Carthage and plundered Rome for fourteen days beginning June 2, 455 — far more thoroughly than the Visigothic sack of 410. The Vandals stripped the Temple of Jupiter\'s gilt bronze roof, looted artworks, and carried off the sacred vessels from the Jerusalem Temple that had been in Rome since Titus\'s triumph in 71 AD. Empress Licinia Eudoxia and her daughters were taken as hostages, and shiploads of captives were sent to North Africa.',
    significance:
      'The sack was so thorough that the word "vandalism" entered European languages from it. Pope Leo the Great\'s negotiation with Genseric — securing a promise to refrain from murder and arson — demonstrated the growing role of the bishop of Rome as a political leader in the vacuum left by imperial weakness.',
    historicalContext:
      'The chronicler Prosper of Aquitaine and the later historian Procopius are the principal sources for the sack. The Jerusalem Temple vessels, which had been displayed in Rome for nearly four centuries, were taken to Carthage and eventually disappeared from the historical record after the Byzantine reconquest of North Africa in 534.',
    figures: ['Genseric'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'world-fall-western-rome',
    track: 'world',
    era: 'rome',
    year: 476,
    approximate: false,
    title: 'Fall of the Western Roman Empire',
    description:
      'The Germanic chieftain Odoacer deposed Romulus Augustulus, the last Western Roman emperor, and sent the imperial regalia to Constantinople. He ruled Italy as a patrician under nominal Eastern authority. The event is traditionally marked as the end of the Western Roman Empire, though contemporary sources barely noted it, as real power had long since passed to barbarian generals.',
    significance:
      'The fall of the Western Empire marks the conventional boundary between antiquity and the medieval period. In the power vacuum that followed, the church and its bishops became the primary institutional continuity, with monasteries preserving learning and the papacy assuming administrative functions formerly performed by the imperial government.',
    historicalContext:
      'The Eastern Roman (Byzantine) Empire continued uninterrupted and would endure for another millennium. In the West, Roman cultural and legal traditions were gradually fused with Germanic customs under the church\'s mediation, creating the foundations of medieval European civilization.',
    figures: ['Odoacer'],
    location: { name: 'Ravenna', lat: 44.4184, lng: 12.2035 },
  },
  {
    id: 'world-justinian-hagia-sophia',
    track: 'world',
    era: 'byzantine',
    year: 537,
    approximate: false,
    title: 'Justinian Builds Hagia Sophia',
    description:
      'Emperor Justinian I completed the cathedral of Hagia Sophia ("Holy Wisdom") in Constantinople after just five years of construction. Designed by the mathematicians Anthemius of Tralles and Isidore of Miletus, its massive dome (approximately 31-33 meters in diameter, 55 meters high) was an engineering marvel. At its dedication Justinian reportedly exclaimed, "Solomon, I have surpassed you!"',
    significance:
      'Hagia Sophia was the largest cathedral in the world for nearly a thousand years and the architectural masterpiece of Byzantine civilization. It served as the seat of the Ecumenical Patriarch and the site of imperial coronations. Justinian\'s reign also produced the Corpus Juris Civilis, the codification of Roman law that became the foundation of European legal systems.',
    historicalContext:
      'Justinian\'s reign (527-565) represented the last great attempt to reunify the Roman Empire, with his generals Belisarius and Narses reconquering North Africa, Italy, and southern Spain. The Justinianic Plague (541-542) killed an estimated 25-50 million people and weakened the empire permanently.',
    figures: ['Justinian I'],
    location: { name: 'Constantinople', lat: 41.0086, lng: 28.9802 },
  },
  {
    id: 'world-justinianic-plague',
    track: 'world',
    era: 'byzantine',
    year: 541,
    approximate: false,
    title: 'Justinianic Plague — First Bubonic Pandemic',
    description:
      'The first recorded pandemic of bubonic plague (Yersinia pestis, confirmed by modern DNA analysis) struck the Byzantine Empire, arriving at the Egyptian port of Pelusium in 541 and reaching Constantinople in spring 542. The historian Procopius reported up to 10,000 deaths per day in Constantinople at its peak. The initial wave swept across the Mediterranean, and recurrences continued until approximately 750, with at least fourteen documented outbreaks.',
    significance:
      'The plague permanently weakened the Byzantine Empire, undermining Justinian\'s ambitious reconquest of the Western Roman territories and reducing imperial tax revenues. The catastrophic population loss left the empire vulnerable to the Arab conquests a century later, which would transform the Christian heartlands of Syria, Egypt, and North Africa.',
    historicalContext:
      'Procopius of Caesarea provided the most detailed eyewitness account in his History of the Wars. Evagrius Scholasticus, who contracted the disease as a child in Antioch, and John of Ephesus also left contemporary accounts. Modern estimates of total mortality across the pandemic\'s two-century span range widely from 15 to 100 million people.',
    figures: ['Justinian I'],
    location: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 },
  },
  {
    id: 'world-hijra',
    track: 'world',
    era: 'islamic',
    year: 622,
    approximate: false,
    title: 'Muhammad\'s Hijra — Rise of Islam',
    description:
      'Muhammad and his followers migrated from Mecca to Medina (the Hijra), an event that marks year one of the Islamic calendar. Within a decade, Muhammad unified much of the Arabian Peninsula under Islam. After his death in 632, Arab armies rapidly conquered the Sassanid Persian Empire and the Byzantine provinces of Syria, Palestine, and Egypt, permanently reshaping the religious and political landscape of the Near East.',
    significance:
      'The rise of Islam transformed the world in which the church fathers had written and worked. Within a century, the ancient Christian heartlands of North Africa, Egypt, Syria, and Mesopotamia came under Islamic rule. The churches of Origen, Cyprian, Athanasius, and Augustine found themselves minorities in a new civilization, profoundly altering the trajectory of Eastern Christianity.',
    historicalContext:
      'The Arab conquests succeeded partly because the Byzantine and Sassanid empires had exhausted each other in decades of war (602-628). Many conquered populations, including Monophysite Christians who had been persecuted by Constantinople, initially welcomed Arab rule as less oppressive than Byzantine governance.',
    figures: ['Muhammad'],
    location: { name: 'Medina', lat: 24.4672, lng: 39.6024 },
  },
  {
    id: 'world-arab-jerusalem',
    track: 'world',
    era: 'islamic',
    year: 637,
    approximate: true,
    title: 'Caliph Umar Conquers Jerusalem',
    description:
      'After a siege of several months, Patriarch Sophronius surrendered Jerusalem to Caliph Umar ibn al-Khattab, on condition that the caliph accept the surrender in person. Umar traveled to Jerusalem and signed a treaty guaranteeing that Christian churches would not be destroyed and that Christians could worship freely. When Sophronius invited Umar to pray inside the Church of the Holy Sepulchre, Umar declined, fearing Muslims would later demand the church be converted into a mosque.',
    significance:
      'Jerusalem\'s capture transferred the holy city from Christian to Muslim control for the first time, a status that would persist — with the brief interruption of the Crusader Kingdom — for centuries. Umar\'s treaty established a model of religious coexistence that, while unequal, preserved Christian access to their holy sites.',
    historicalContext:
      'The Arab conquests succeeded in part because decades of war between the Byzantine and Sassanid empires (602-628) had exhausted both powers. The chroniclers al-Tabari and Theophanes the Confessor provide the primary accounts. Umar also cleared the Temple Mount, which had been used as a refuse dump, and established a place of prayer there.',
    figures: ['Umar ibn al-Khattab'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'world-dome-of-rock',
    track: 'world',
    era: 'islamic',
    year: 691,
    approximate: false,
    title: 'Dome of the Rock Built on the Temple Mount',
    description:
      'Umayyad Caliph Abd al-Malik ibn Marwan completed the Dome of the Rock on the Temple Mount in Jerusalem, making it the oldest surviving Islamic monument. The octagonal shrine was built directly over the Foundation Stone — the exposed bedrock that Jewish tradition identifies as the site of the Holy of Holies in Solomon\'s Temple. Its architecture and mosaics drew on Byzantine models, and a dedicatory Kufic inscription inside the dome records the date of completion.',
    significance:
      'The Dome of the Rock physically claimed the most sacred site in Judaism for Islam, marking a visible theological and political assertion over the site where both Jewish Temples had stood. Its construction made tangible the religious transformation of Jerusalem under Islamic rule and created one of the most contested religious sites in the world.',
    historicalContext:
      'Abd al-Malik built the shrine partly as a political statement during the Second Fitna (Islamic civil war), asserting Umayyad legitimacy against a rival caliphate in Mecca. The 10th-century geographer al-Muqaddasi described the building in detail. The Abbasids later altered the dedicatory inscription to replace Abd al-Malik\'s name with their own.',
    figures: ['Abd al-Malik'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'world-islamic-iberia',
    track: 'world',
    era: 'islamic',
    year: 711,
    approximate: false,
    title: 'Islamic Conquest of Iberia',
    description:
      'A Berber-Arab army under Tariq ibn Ziyad crossed the Strait of Gibraltar and defeated the Visigothic King Roderic at the Battle of Guadalete. Within seven years, Muslim forces controlled most of the Iberian Peninsula, establishing al-Andalus. Only small Christian kingdoms survived in the mountainous north, beginning the centuries-long Reconquista.',
    significance:
      'The conquest of Iberia brought Islam to the western edge of Europe and created a zone of cultural exchange between Christianity and Islam that produced significant developments in philosophy, science, and theology. The transmission of Greek philosophical texts through Arabic translations later profoundly influenced Scholastic theology.',
    historicalContext:
      'The Visigothic kingdom in Spain had been weakened by internal conflicts and succession disputes. The rapid Islamic expansion across North Africa and into Iberia demonstrated the military and organizational strength of the Umayyad Caliphate, the largest empire the world had yet seen.',
    figures: ['Tariq ibn Ziyad'],
    location: { name: 'Gibraltar', lat: 36.1408, lng: -5.3536 },
  },
  {
    id: 'world-battle-tours',
    track: 'world',
    era: 'medieval-west',
    year: 732,
    approximate: false,
    title: 'Battle of Tours',
    description:
      'Charles Martel, Frankish mayor of the palace, defeated an Umayyad raiding force near Tours (or Poitiers) in central France. The Frankish heavy infantry held firm against Arab cavalry charges, and the Muslim commander Abd al-Rahman was killed. The victory halted the northward expansion of Islamic military campaigns into Western Europe.',
    significance:
      'The Battle of Tours is traditionally seen as a decisive turning point that preserved Christian Western Europe from Islamic conquest, though modern historians debate whether the Arab force intended permanent conquest or was a large raid. Charles Martel\'s prestige from the victory established the Carolingian dynasty that would produce Charlemagne.',
    historicalContext:
      'The battle occurred during a period of Umayyad expansion into Gaul from al-Andalus. The Frankish victory, combined with internal Umayyad conflicts that led to the Abbasid Revolution (750), effectively ended Islamic military expansion into Western Europe.',
    figures: ['Charles Martel'],
    location: { name: 'Tours', lat: 47.3941, lng: 0.6848 },
  },
  {
    id: 'world-abbasid-revolution',
    track: 'world',
    era: 'islamic',
    year: 750,
    approximate: false,
    title: 'Abbasid Revolution — Islamic Golden Age Begins',
    description:
      'Abu Muslim raised the black banner of revolt in Khorasan in 747, and Abbasid forces decisively defeated the last Umayyad caliph Marwan II at the Battle of the Zab on January 25, 750. Abu al-Abbas al-Saffah was proclaimed the first Abbasid caliph. In 762, Caliph al-Mansur founded Baghdad as the new capital, which became one of the largest and most cosmopolitan cities on earth.',
    significance:
      'The Abbasid Revolution shifted the center of Islamic civilization eastward from Damascus to Baghdad and inaugurated the Islamic Golden Age. Baghdad\'s House of Wisdom translated Greek philosophical and scientific works into Arabic, preserving texts of Aristotle, Plato, Galen, and Euclid that would later be transmitted to medieval Europe and profoundly influence Scholastic theology.',
    historicalContext:
      'The revolution is extensively documented in al-Tabari\'s History of the Prophets and Kings. The Abbasid caliphate brought Persians and other non-Arab Muslims into positions of power, transforming Islam from an Arab-dominated polity into a multi-ethnic civilization. One Umayyad prince, Abd al-Rahman, escaped to Spain and established an independent emirate at Cordoba.',
    figures: ['Abu al-Abbas al-Saffah'],
    location: { name: 'Baghdad', lat: 33.3152, lng: 44.3661 },
  },
  {
    id: 'world-lindisfarne',
    track: 'world',
    era: 'medieval-west',
    year: 793,
    approximate: false,
    title: 'Viking Raid on Lindisfarne',
    description:
      'Norse raiders attacked the monastery of Lindisfarne on the northeast coast of England, killing monks, plundering treasures, and carrying off captives. The Anglo-Saxon Chronicle recorded: "the ravaging of wretched heathen people destroyed God\'s church at Lindisfarne." The attack sent shockwaves throughout Christendom; Alcuin of York wrote letters expressing horror at the sacrilege.',
    significance:
      'The raid on Lindisfarne is conventionally taken as the beginning of the Viking Age. The subsequent two centuries of Norse raids and invasions severely disrupted monastic life across Britain, Ireland, and Francia, destroying libraries, scattering communities, and threatening the intellectual and spiritual infrastructure that monasteries had built since Benedict and Gregory the Great.',
    historicalContext:
      'Lindisfarne had been a major center of Christian learning and art since its founding by the Irish monk Aidan in 635. The Lindisfarne Gospels, one of the masterpieces of Insular art, had been produced there around 715. The monastery was eventually abandoned in 875 due to continued Viking raids.',
    figures: [],
    location: { name: 'Lindisfarne', lat: 55.6690, lng: -1.8008 },
  },
  {
    id: 'world-charlemagne',
    track: 'world',
    era: 'medieval-west',
    year: 800,
    approximate: false,
    title: 'Charlemagne Crowned Emperor',
    description:
      'On Christmas Day 800, Pope Leo III crowned Charles, king of the Franks, as "Emperor of the Romans" in St. Peter\'s Basilica in Rome. Charlemagne had united most of Western and Central Europe under Frankish rule, promoted education and literacy through the Carolingian Renaissance, standardized handwriting (Carolingian minuscule), and enforced Christian worship and instruction throughout his realm.',
    significance:
      'Charlemagne\'s coronation revived the concept of a Christian Roman Empire in the West and established the precedent for the Holy Roman Empire. The Carolingian Renaissance, directed by the scholar Alcuin of York, preserved and copied classical and patristic texts in monastic scriptoria, rescuing much of ancient literature from oblivion.',
    historicalContext:
      'Charlemagne\'s empire stretched from the Pyrenees to the Elbe and from the North Sea to central Italy. His coronation by the pope created tensions with the Byzantine Empire, which considered itself the sole legitimate successor to Rome. The partnership between the Frankish crown and the papacy shaped Western European politics for centuries.',
    figures: ['Charlemagne'],
    location: { name: 'Rome', lat: 41.9022, lng: 12.4539 },
  },
  {
    id: 'world-alfred-great',
    track: 'world',
    era: 'medieval-west',
    year: 878,
    approximate: false,
    title: 'Alfred the Great Defeats the Danes at Edington',
    description:
      'After the Danish king Guthrum seized Wessex in a surprise winter attack, King Alfred retreated to the marshes of Athelney and organized guerrilla resistance. In May 878, Alfred assembled forces from Wiltshire, Somerset, and Hampshire and routed the Danes at the Battle of Edington. Under the resulting Treaty of Wedmore, Guthrum surrendered and accepted baptism, with Alfred standing as his godfather.',
    significance:
      'Alfred\'s victory preserved the last independent Anglo-Saxon kingdom and with it the organizational structure of the English church. He promoted learning by personally translating Latin works into Old English — including Gregory the Great\'s Pastoral Care and Augustine\'s Soliloquies — believing the Viking invasions were divine punishment for the neglect of education.',
    historicalContext:
      'The Welsh monk Asser wrote the Life of King Alfred (893), the primary source for his reign. Alfred also commissioned the Anglo-Saxon Chronicle, the most important narrative source for early English history. His cultural program rescued monastic learning from the devastation of the Viking raids and laid the foundations for a unified English kingdom under his descendants.',
    figures: ['Alfred the Great'],
    location: { name: 'Edington, England', lat: 51.2632, lng: -2.1145 },
  },
  {
    id: 'world-cluny-abbey',
    track: 'world',
    era: 'medieval-west',
    year: 910,
    approximate: false,
    title: 'Cluny Abbey Founded — Monastic Reform Begins',
    description:
      'Duke William I of Aquitaine founded the Abbey of Cluny in Burgundy, placing it under direct papal authority and freeing it from all interference by local lords or bishops — a structure unprecedented in Western monasticism. Under its first abbot Berno, and his successors Odo, Majolus, Odilo, and Hugh, Cluny enforced strict adherence to the Rule of Saint Benedict during a period of widespread monastic decline.',
    significance:
      'The Cluniac reform movement revitalized Western monasticism and became the driving force behind broader church reform, including the campaign against simony and clerical marriage that culminated in the Gregorian Reform. By the twelfth century, over 1,000 monasteries across Europe were part of the Cluniac network. Cluny\'s third church (built 1088-1130) was the largest in Christendom until the rebuilding of St. Peter\'s in Rome.',
    historicalContext:
      'William I\'s founding charter, which survives in multiple copies, explicitly freed the abbey from lay control — a radical innovation that challenged the prevailing feudal order. The Cluniac reforms reshaped the relationship between church and state in medieval Europe and influenced monastic movements from Normandy to England to the Holy Roman Empire.',
    figures: ['William I of Aquitaine'],
    location: { name: 'Cluny, France', lat: 46.4344, lng: 4.6593 },
  },
  {
    id: 'world-baptism-vladimir',
    track: 'world',
    era: 'byzantine',
    year: 988,
    approximate: true,
    title: 'Baptism of Vladimir — Christianization of Rus\'',
    description:
      'Prince Vladimir of Kiev accepted Orthodox Christianity and was baptized at Chersonesus in Crimea, then ordered the mass baptism of the people of Kiev in the Dnieper River. According to the Primary Chronicle, Vladimir\'s envoys had visited various religious centers and reported that in the Hagia Sophia "we knew not whether we were in heaven or on earth." Vladimir married Anna, sister of the Byzantine emperor Basil II.',
    significance:
      'The Baptism of Rus\' is the founding event of Russian, Ukrainian, and Belarusian Christianity. It brought the Slavic peoples into the orbit of Byzantine civilization, adopting the Cyrillic alphabet (developed by disciples of the monks Cyril and Methodius, who had created the earlier Glagolitic script), Byzantine liturgy, church architecture, and theological tradition.',
    historicalContext:
      'Vladimir\'s conversion was also a political act, securing an alliance with the Byzantine Empire. Prior to his conversion, Vladimir had been a zealous pagan who maintained a large collection of idols. The Christianization of the Slavic world was part of the broader expansion of Christianity beyond the boundaries of the old Roman Empire.',
    figures: ['Vladimir I'],
    location: { name: 'Kiev', lat: 50.4501, lng: 30.5234 },
  },
];
