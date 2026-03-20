import type { BiblicalEvent } from '@/lib/types';

export const eventsOT: BiblicalEvent[] = [
  {
    id: 'ot-call-of-abraham',
    track: 'ot',
    era: 'patriarchs',
    year: -2000,
    approximate: true,
    title: 'Call of Abraham',
    scripture: 'Genesis 12:1-3',
    description:
      'God called Abram to leave his homeland in Ur of the Chaldeans and travel to an unspecified land that God would show him. God promised to make Abram into a great nation, bless him, and make his name great. Through Abram, all the families of the earth would be blessed.',
    significance:
      'The call of Abraham marks the beginning of God\'s covenant relationship with a chosen people and initiates the redemptive plan that runs through the rest of Scripture, culminating in Christ.',
    historicalContext:
      'Ur was a prosperous Sumerian city-state in southern Mesopotamia. Haran, the midpoint of Abraham\'s journey, was a major trading hub on caravan routes connecting Mesopotamia to the Mediterranean world.',
    figures: ['Abraham'],
    location: { name: 'Ur / Haran', lat: 36.8667, lng: 39.0333 },
  },
  {
    id: 'ot-binding-of-isaac',
    track: 'ot',
    era: 'patriarchs',
    year: -1900,
    approximate: true,
    title: 'Binding of Isaac',
    scripture: 'Genesis 22',
    description:
      'God tested Abraham by commanding him to offer his son Isaac as a burnt offering on a mountain in the land of Moriah. Abraham obeyed, and as he raised the knife, an angel stopped him. God provided a ram caught in a thicket as a substitute sacrifice.',
    significance:
      'The binding of Isaac (the Aqedah) demonstrates the depth of Abraham\'s faith and foreshadows the concept of substitutionary sacrifice that becomes central to Israel\'s worship and is ultimately fulfilled in Christ.',
    historicalContext:
      'Child sacrifice was practiced in some ancient Near Eastern cultures, including among Canaanite peoples. God\'s provision of a substitute ram stood in sharp contrast to these practices and established a different pattern for Israelite worship.',
    figures: ['Abraham', 'Isaac'],
    location: { name: 'Mount Moriah', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'ot-jacob-wrestles',
    track: 'ot',
    era: 'patriarchs',
    year: -1850,
    approximate: true,
    title: 'Jacob Wrestles God at Peniel',
    scripture: 'Genesis 32:22-32',
    description:
      'On the night before reuniting with his estranged brother Esau, Jacob wrestled with a mysterious figure until daybreak at the Jabbok River crossing. The figure dislocated Jacob\'s hip but Jacob refused to let go without a blessing. Jacob was renamed Israel, meaning "he struggles with God."',
    significance:
      'Jacob\'s renaming to Israel gives the covenant people their national name and marks a turning point in Jacob\'s character from deceiver to one who perseveres with God.',
    historicalContext:
      'The Jabbok River (modern Zarqa River in Jordan) was a significant boundary in the Transjordan region. The narrative reflects the semi-nomadic pastoral lifestyle of the patriarchal period in the Levant.',
    figures: ['Jacob'],
    location: { name: 'Peniel', lat: 32.1833, lng: 35.7167 },
  },
  {
    id: 'ot-joseph-sold',
    track: 'ot',
    era: 'patriarchs',
    year: -1800,
    approximate: true,
    title: 'Joseph Sold into Egypt',
    scripture: 'Genesis 37',
    description:
      'Joseph\'s brothers, jealous of their father\'s favoritism and Joseph\'s prophetic dreams, sold him to Midianite traders for twenty pieces of silver. The traders carried Joseph to Egypt, where he was sold to Potiphar, an officer of Pharaoh. The brothers deceived Jacob into believing Joseph was dead.',
    significance:
      'Joseph\'s journey to Egypt sets in motion the relocation of Israel\'s entire family to Egypt, fulfilling God\'s earlier prophecy to Abraham and establishing the conditions that would lead to the Exodus.',
    historicalContext:
      'The Dothan valley was a well-known stop on the trade route from Gilead to Egypt. The price of twenty silver pieces and the involvement of Midianite/Ishmaelite traders aligns with known second-millennium BC slave trade practices in the ancient Near East.',
    figures: ['Joseph'],
    location: { name: 'Dothan / Egypt', lat: 32.4092, lng: 35.2314 },
  },
  {
    id: 'ot-exodus-passover',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1446,
    approximate: true,
    title: 'The Exodus; Passover Instituted',
    scripture: 'Exodus 12-14',
    description:
      'After ten devastating plagues upon Egypt, God commanded each Israelite household to slaughter a lamb and apply its blood to their doorposts. The angel of death passed over the marked houses, killing Egypt\'s firstborn. Pharaoh released the Israelites, who departed and crossed the Red Sea on dry ground while the pursuing Egyptian army was destroyed.',
    significance:
      'The Exodus is the defining act of deliverance in the Old Testament, establishing Israel as a nation and providing the foundational metaphor for salvation. The Passover lamb becomes a key type fulfilled in Christ.',
    historicalContext:
      'The Exodus is traditionally dated to the reign of Amenhotep II or Ramesses II. Egypt was the dominant power in the ancient Near East, and the departure of a large labor force would have had significant economic impact on Egyptian building projects.',
    figures: ['Moses', 'Aaron'],
    location: { name: 'Egypt / Red Sea', lat: 30.0444, lng: 31.2357 },
  },
  {
    id: 'ot-law-at-sinai',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1446,
    approximate: true,
    title: 'Law Given at Sinai',
    scripture: 'Exodus 19-20',
    description:
      'Three months after leaving Egypt, Israel camped at the base of Mount Sinai. God descended on the mountain with thunder, lightning, and thick cloud, and spoke the Ten Commandments directly to the people. Moses then ascended the mountain to receive the full body of covenant law, including civil, ceremonial, and moral regulations.',
    significance:
      'The Sinai covenant established the terms of Israel\'s relationship with God and defined them as a holy nation and a kingdom of priests. The Law became the foundation of Israelite religion, ethics, and national identity.',
    historicalContext:
      'The form of the Sinai covenant closely parallels ancient Near Eastern suzerainty treaties, particularly Hittite vassal treaties of the second millennium BC, with preamble, historical prologue, stipulations, and blessings and curses.',
    figures: ['Moses'],
    location: { name: 'Mount Sinai', lat: 28.5394, lng: 33.9750 },
  },
  {
    id: 'ot-crossing-jordan',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1406,
    approximate: true,
    title: 'Crossing the Jordan; Fall of Jericho',
    scripture: 'Joshua 3-6',
    description:
      'Under Joshua\'s leadership, Israel crossed the Jordan River on dry ground during flood season, with the waters held back as the priests carrying the Ark of the Covenant stood in the riverbed. The Israelites then besieged Jericho, marching around the city for seven days, after which the walls collapsed and the city was taken.',
    significance:
      'The crossing of the Jordan and the fall of Jericho mark the beginning of Israel\'s possession of the Promised Land, fulfilling the land promise made to Abraham centuries earlier.',
    historicalContext:
      'Jericho is one of the oldest continuously inhabited cities in the world. Archaeological excavations at Tell es-Sultan have revealed massive fortification walls and evidence of destruction layers, though the dating of these layers remains debated among archaeologists.',
    figures: ['Joshua'],
    location: { name: 'Jordan River / Jericho', lat: 31.8711, lng: 35.4444 },
  },
  {
    id: 'ot-deborah',
    track: 'ot',
    era: 'judges',
    year: -1200,
    approximate: true,
    title: 'Deborah Judges Israel',
    scripture: 'Judges 4-5',
    description:
      'Deborah, a prophetess and judge, led Israel during a period of Canaanite oppression under King Jabin of Hazor and his general Sisera. She summoned Barak to raise an army and, together, they defeated Sisera\'s iron chariot force at the Kishon River near Mount Tabor. Sisera fled and was killed by Jael.',
    significance:
      'Deborah\'s judgeship demonstrates God\'s ability to deliver Israel through unexpected instruments and provides a rare Old Testament example of prominent female leadership in both judicial and military contexts.',
    historicalContext:
      'The reference to iron chariots reflects the technological advantage held by Canaanite city-states during the Late Bronze to Early Iron Age transition. The battle site at the Kishon River in the Jezreel Valley was a strategic crossroads frequently contested in ancient warfare.',
    figures: ['Deborah', 'Barak'],
    location: { name: 'Mount Tabor', lat: 32.6869, lng: 35.3914 },
  },
  {
    id: 'ot-samson',
    track: 'ot',
    era: 'judges',
    year: -1100,
    approximate: true,
    title: 'Samson and the Philistines',
    scripture: 'Judges 13-16',
    description:
      'Samson, a Nazirite from birth, was endowed with supernatural strength by the Spirit of the Lord to fight the Philistines. After a series of conflicts and personal failures, he was betrayed by Delilah, captured, blinded, and imprisoned. In a final act, he collapsed the temple of Dagon, killing himself along with thousands of Philistines.',
    significance:
      'Samson\'s story illustrates both the power of God\'s Spirit and the consequences of personal unfaithfulness. His life serves as a cautionary example within the downward spiral of the judges period.',
    historicalContext:
      'The Philistines were part of the Sea Peoples who settled along the southern coastal plain of Canaan around 1175 BC. They established a pentapolis of five city-states (Gaza, Ashkelon, Ashdod, Ekron, Gath) and were a dominant military threat to Israel during this period.',
    figures: ['Samson'],
    location: { name: 'Philistia', lat: 31.5000, lng: 34.4667 },
  },
  {
    id: 'ot-saul-anointed',
    track: 'ot',
    era: 'united-kingdom',
    year: -1050,
    approximate: true,
    title: 'Samuel Anoints Saul as First King',
    scripture: '1 Samuel 10',
    description:
      'In response to Israel\'s demand for a king "like all the nations," the prophet Samuel, directed by God, privately anointed Saul of the tribe of Benjamin as Israel\'s first king. Saul was then publicly selected by lot before the assembly at Mizpah and acclaimed by the people.',
    significance:
      'The institution of the monarchy marks a major transition in Israel\'s governance from the theocratic judge system to a dynastic kingship, setting the stage for the Davidic covenant and the messianic expectation of a coming king.',
    historicalContext:
      'Israel\'s request for a king arose during a period when surrounding nations like Moab, Edom, and Ammon already had established monarchies. The Philistine military threat in particular made centralized leadership seem necessary for national survival.',
    figures: ['Samuel', 'Saul'],
    location: { name: 'Mizpah', lat: 31.8403, lng: 35.1747 },
  },
  {
    id: 'ot-david-king',
    track: 'ot',
    era: 'united-kingdom',
    year: -1010,
    approximate: true,
    title: 'David Becomes King',
    scripture: '2 Samuel 5',
    description:
      'After Saul\'s death, David was first anointed king over Judah at Hebron, where he reigned for seven and a half years. Following the collapse of Saul\'s dynasty under Ish-bosheth, all the tribes of Israel came to Hebron and anointed David king over the united nation. David then conquered Jerusalem from the Jebusites and made it his capital.',
    significance:
      'David\'s kingship and his capture of Jerusalem established the political and spiritual center of Israel. Jerusalem ("the City of David") became the seat of the Davidic dynasty and the future site of the Temple.',
    historicalContext:
      'David\'s rise to power coincided with a period of relative weakness among Egypt and Mesopotamian powers, creating a power vacuum in the Levant that allowed Israel to expand. Jerusalem\'s location on the border between Judah and Benjamin made it a politically neutral choice as capital.',
    figures: ['David'],
    location: { name: 'Hebron / Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-davidic-covenant',
    track: 'ot',
    era: 'united-kingdom',
    year: -1000,
    approximate: true,
    title: 'Davidic Covenant — "Your Throne Forever"',
    scripture: '2 Samuel 7:12-16',
    description:
      'When David proposed to build a permanent house (temple) for God, the prophet Nathan delivered God\'s response: God would instead build David a "house" (dynasty). God promised that David\'s offspring would establish an eternal kingdom and that God would be a father to David\'s heir. David\'s throne would be established forever.',
    significance:
      'The Davidic covenant is the foundation of messianic expectation in Israel. The promise of an eternal throne and kingdom becomes the basis for prophetic hope in a coming Davidic king, fulfilled in the New Testament identification of Jesus as the Son of David.',
    historicalContext:
      'Royal grant covenants, in which a sovereign rewarded a loyal vassal with an unconditional promise, were a known form in ancient Near Eastern diplomacy. The Davidic covenant shares features with such grants, particularly the emphasis on an unconditional divine commitment.',
    figures: ['David', 'Nathan'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-solomon-temple',
    track: 'ot',
    era: 'united-kingdom',
    year: -960,
    approximate: true,
    title: 'Solomon Builds the Temple',
    scripture: '1 Kings 6-8',
    description:
      'Solomon began constructing the Temple in Jerusalem in the fourth year of his reign, using cedar from Lebanon, hewn stone, and gold overlays. The construction took seven years. At the dedication, Solomon offered prayer and sacrifices, and the glory of the Lord filled the Temple as a cloud, signifying God\'s presence among his people.',
    significance:
      'The Temple became the central place of Israelite worship and the physical symbol of God\'s dwelling among his people. It unified the nation\'s religious life and became inseparable from Israel\'s identity and theology.',
    historicalContext:
      'Solomon\'s Temple followed a long-room architectural plan common to Syro-Phoenician temples of the period. Solomon employed Phoenician craftsmen from Tyre, and the use of Lebanese cedar reflects the strong trade alliance between Israel and the Phoenician king Hiram.',
    figures: ['Solomon'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'ot-kingdom-divides',
    track: 'ot',
    era: 'divided-kingdom',
    year: -930,
    approximate: true,
    title: 'Kingdom Divides — Rehoboam vs. Jeroboam',
    scripture: '1 Kings 12',
    description:
      'After Solomon\'s death, the northern tribes approached his son Rehoboam at Shechem requesting reduced labor burdens. Rehoboam refused, threatening even harsher treatment. The ten northern tribes rejected Rehoboam\'s authority and made Jeroboam king of a new northern kingdom called Israel, while Rehoboam retained Judah and Benjamin in the south.',
    significance:
      'The division of the kingdom ended the united monarchy and created two rival states whose separate histories dominate the remainder of the Old Testament historical books. The split also led to religious apostasy in the north, where Jeroboam established alternative worship sites.',
    historicalContext:
      'Solomon\'s extensive building projects and forced labor had created deep resentment, particularly in the northern tribes. Shechem, where the assembly took place, was a site with long-standing associations of covenant-making, dating back to Abraham and Joshua.',
    figures: ['Rehoboam', 'Jeroboam'],
    location: { name: 'Shechem', lat: 32.2142, lng: 35.2811 },
  },
  {
    id: 'ot-elijah-carmel',
    track: 'ot',
    era: 'divided-kingdom',
    year: -870,
    approximate: true,
    title: 'Elijah on Mount Carmel',
    scripture: '1 Kings 18',
    description:
      'During a three-year drought, Elijah challenged King Ahab and 450 prophets of Baal to a contest on Mount Carmel. Each side prepared a sacrifice and called upon their deity to send fire. When Baal\'s prophets received no answer, Elijah drenched his altar with water and prayed. Fire from the Lord consumed the sacrifice, the wood, the stones, and the water.',
    significance:
      'The confrontation on Mount Carmel was a decisive demonstration of the Lord\'s supremacy over Baal and a turning point in the struggle against Canaanite syncretism in the northern kingdom.',
    historicalContext:
      'Baal worship had been officially promoted in Israel by King Ahab and his Phoenician wife Jezebel. The Baal cult was the dominant Canaanite fertility religion, and Mount Carmel, a prominent headland overlooking the Mediterranean, was a traditional boundary site between Israelite and Phoenician territory.',
    figures: ['Elijah'],
    location: { name: 'Mount Carmel', lat: 32.7417, lng: 34.9861 },
  },
  {
    id: 'ot-amos',
    track: 'ot',
    era: 'divided-kingdom',
    year: -760,
    approximate: true,
    title: 'Amos Prophesies Judgment on Israel',
    scripture: 'Amos',
    description:
      'Amos, a shepherd and fig farmer from Tekoa in Judah, was sent by God to prophesy against the northern kingdom of Israel during a time of prosperity under Jeroboam II. He pronounced judgment on Israel and its neighbors for social injustice, exploitation of the poor, and corrupt worship. He declared that God would send Israel into exile.',
    significance:
      'Amos introduced the concept of the "Day of the Lord" as a day of judgment rather than deliverance, and established that God\'s covenant demands social justice, not merely ritual observance.',
    historicalContext:
      'The reign of Jeroboam II (c. 786-746 BC) was a period of territorial expansion and economic prosperity for Israel, enabled by Assyria\'s temporary focus elsewhere. However, the wealth was concentrated among elites while the peasant class suffered, which Amos directly addressed.',
    figures: ['Amos'],
    location: { name: 'Bethel', lat: 31.9397, lng: 35.2272 },
  },
  {
    id: 'ot-isaiah-called',
    track: 'ot',
    era: 'divided-kingdom',
    year: -740,
    approximate: true,
    title: 'Isaiah Called; Messianic Prophecies Begin',
    scripture: 'Isaiah 6; 7:14; 9:6-7',
    description:
      'In the year King Uzziah died, Isaiah received a vision of the Lord enthroned in the Temple, surrounded by seraphim. After his lips were cleansed with a burning coal, Isaiah was commissioned as a prophet. He subsequently delivered oracles including the sign of Immanuel ("a virgin shall conceive") and the promise of a child who would sit on David\'s throne as "Mighty God, Everlasting Father, Prince of Peace."',
    significance:
      'Isaiah\'s prophecies provide the most detailed messianic portrait in the Old Testament, including the virgin birth, the Davidic king, the suffering servant, and the new creation. These texts became central to early Christian interpretation of Jesus.',
    historicalContext:
      'Isaiah prophesied during the Assyrian crisis, when the expanding Neo-Assyrian Empire under Tiglath-Pileser III threatened the small kingdoms of the Levant. The Syro-Ephraimite War (735-732 BC) forms the immediate backdrop to the Immanuel prophecy in Isaiah 7.',
    figures: ['Isaiah'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-fall-of-samaria',
    track: 'ot',
    era: 'divided-kingdom',
    year: -722,
    approximate: false,
    title: 'Fall of Samaria; Northern Kingdom Exiled',
    scripture: '2 Kings 17',
    description:
      'After a three-year siege, the Assyrian Empire under Shalmaneser V (completed by Sargon II) conquered Samaria, the capital of the northern kingdom of Israel. The population was deported to various locations in Assyria and Media, and foreign peoples were resettled in the land. The ten northern tribes effectively ceased to exist as a distinct national entity.',
    significance:
      'The fall of Samaria fulfilled prophetic warnings from Amos, Hosea, and others, and served as a sobering precedent for the southern kingdom of Judah. It demonstrated that covenant unfaithfulness would result in the loss of the Promised Land.',
    historicalContext:
      'The Neo-Assyrian Empire employed mass deportation as imperial policy to prevent revolts and break national identities. Sargon II\'s own inscriptions claim the deportation of 27,290 inhabitants from Samaria. The resettlement of foreign peoples led to the mixed population later known as the Samaritans.',
    figures: [],
    location: { name: 'Samaria', lat: 32.2747, lng: 35.1903 },
  },
  {
    id: 'ot-josiah-reforms',
    track: 'ot',
    era: 'divided-kingdom',
    year: -620,
    approximate: true,
    title: "Josiah's Reforms; Book of the Law Rediscovered",
    scripture: '2 Kings 22-23',
    description:
      'During Temple repairs ordered by King Josiah, the high priest Hilkiah discovered the Book of the Law (likely Deuteronomy or a portion of the Torah). When Josiah heard its contents read aloud, he tore his robes in distress and initiated sweeping religious reforms: destroying pagan altars, removing idols, abolishing high places, and centralizing worship in Jerusalem. He also reinstituted the Passover celebration.',
    significance:
      'Josiah\'s reforms represent the last major spiritual revival in Judah before the exile. The rediscovery of the Law highlights how far the nation had drifted from its covenant obligations and underscores the centrality of Scripture to faithful worship.',
    historicalContext:
      'Josiah\'s reforms were enabled by the decline of Assyrian power following the death of Ashurbanipal (c. 627 BC). The weakening Assyrian grip on vassal states allowed Josiah to assert religious and political independence and even extend his influence into former northern territory.',
    figures: ['Josiah'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-daniel-babylon',
    track: 'ot',
    era: 'exile',
    year: -605,
    approximate: false,
    title: 'Daniel Taken to Babylon',
    scripture: 'Daniel 1',
    description:
      'In the first deportation from Judah, Nebuchadnezzar took captives from the royal family and nobility, including Daniel and his three companions (Hananiah, Mishael, and Azariah). They were selected for training in Babylonian language and literature to serve in the king\'s court. Daniel resolved not to defile himself with the royal food and demonstrated that faithfulness to God was compatible with service in a pagan empire.',
    significance:
      'Daniel\'s story establishes a model for faithful living in exile and demonstrates God\'s sovereignty over pagan empires. His apocalyptic visions provide the framework for later Jewish and Christian eschatology.',
    historicalContext:
      'Nebuchadnezzar\'s first campaign against Judah in 605 BC followed his decisive victory over Egypt at the Battle of Carchemish, which established Babylon as the dominant power in the Near East. The deportation of elite youth for court service was standard Babylonian imperial practice.',
    figures: ['Daniel'],
    location: { name: 'Babylon', lat: 32.5364, lng: 44.4208 },
  },
  {
    id: 'ot-fall-of-jerusalem',
    track: 'ot',
    era: 'exile',
    year: -586,
    approximate: false,
    title: 'Fall of Jerusalem; Temple Destroyed',
    scripture: '2 Kings 25',
    description:
      'After King Zedekiah rebelled against Babylon, Nebuchadnezzar besieged Jerusalem for eighteen months. The city walls were breached, Zedekiah was captured and blinded, and the Babylonians burned the Temple, the royal palace, and every significant building. The bulk of the surviving population was deported to Babylon, leaving only the poorest to tend the land.',
    significance:
      'The destruction of Solomon\'s Temple and the end of the Davidic monarchy represented the greatest catastrophe in Israel\'s history. It raised urgent theological questions about God\'s faithfulness to his covenant promises and reshaped Israelite religion around synagogue, Scripture, and hope for restoration.',
    historicalContext:
      'Judah\'s rebellion was part of a broader anti-Babylonian coalition encouraged by Egypt. The destruction of Jerusalem in 586 BC is well attested in Babylonian chronicles and confirmed by archaeological evidence, including the "Lachish Letters" and destruction layers at multiple Judean sites.',
    figures: ['Nebuchadnezzar'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-ezekiel-vision',
    track: 'ot',
    era: 'exile',
    year: -573,
    approximate: true,
    title: "Ezekiel's Vision of the Restored Temple",
    scripture: 'Ezekiel 40-48',
    description:
      'In the twenty-fifth year of exile, Ezekiel received an elaborate vision of a future temple, described with precise architectural measurements and detailed liturgical prescriptions. The vision included the return of God\'s glory to the temple from the east, a river flowing from the temple that brings life wherever it goes, and the redistribution of the land among the twelve tribes.',
    significance:
      'Ezekiel\'s temple vision gave the exiles hope for a future restoration that would surpass the original. The imagery of God\'s glory returning and life-giving waters flowing from the temple became foundational for later prophetic and apocalyptic expectations.',
    historicalContext:
      'Ezekiel prophesied from Tel-abib, a settlement of Jewish exiles along the Chebar canal near Nippur in southern Babylonia. The detailed temple measurements reflect the architectural conventions of Mesopotamian temple-building traditions familiar to the exilic community.',
    figures: ['Ezekiel'],
    location: { name: 'Babylon', lat: 32.5364, lng: 44.4208 },
  },
  {
    id: 'ot-cyrus-decree',
    track: 'ot',
    era: 'return-restoration',
    year: -539,
    approximate: false,
    title: 'Cyrus Conquers Babylon; Decree to Return',
    scripture: 'Ezra 1',
    description:
      'Cyrus the Great of Persia conquered Babylon in 539 BC and issued a decree permitting the Jewish exiles to return to Jerusalem and rebuild the Temple. He also restored the sacred vessels that Nebuchadnezzar had taken from the Temple. The first wave of returnees, led by Sheshbazzar, departed for Jerusalem with the task of rebuilding.',
    significance:
      'The decree of Cyrus fulfilled Jeremiah\'s prophecy of a seventy-year exile and Isaiah\'s remarkable naming of Cyrus as God\'s "anointed." It demonstrated God\'s sovereignty over world empires and initiated the restoration of the covenant community.',
    historicalContext:
      'Cyrus\'s policy of allowing deported peoples to return and rebuild their sanctuaries is confirmed by the Cyrus Cylinder, a clay document discovered in Babylon in 1879. This policy reversed Assyrian and Babylonian deportation practices and was part of Cyrus\'s strategy for governing a vast multi-ethnic empire.',
    figures: ['Cyrus'],
    location: { name: 'Babylon / Jerusalem', lat: 32.5364, lng: 44.4208 },
  },
  {
    id: 'ot-second-temple',
    track: 'ot',
    era: 'return-restoration',
    year: -516,
    approximate: false,
    title: 'Second Temple Completed',
    scripture: 'Ezra 6',
    description:
      'After years of delay caused by local opposition and the returnees\' own neglect, the prophets Haggai and Zechariah urged the people to resume construction. Under the leadership of Zerubbabel the governor and Joshua the high priest, the Second Temple was completed in the sixth year of the Persian king Darius I. The dedication was celebrated with sacrifices and the observance of Passover.',
    significance:
      'The completion of the Second Temple restored the center of Israelite worship and fulfilled prophetic promises of restoration. This temple, later expanded by Herod the Great, would stand for nearly six centuries and be the temple in which Jesus taught.',
    historicalContext:
      'The Second Temple was considerably more modest than Solomon\'s original, causing older returnees to weep at the comparison. Darius I\'s support for the project was consistent with Persian imperial policy of patronizing local religious institutions to maintain loyalty among subject peoples.',
    figures: ['Zerubbabel'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'ot-ezra-reforms',
    track: 'ot',
    era: 'return-restoration',
    year: -458,
    approximate: true,
    title: "Ezra's Reforms",
    scripture: 'Ezra 7-10',
    description:
      'Ezra, a priest and scribe descended from Aaron, traveled from Babylon to Jerusalem with royal authorization from the Persian king Artaxerxes I to teach and enforce the Law of Moses. Upon arrival, he discovered widespread intermarriage between returned exiles and surrounding pagan peoples. Ezra led the community in public confession and enacted reforms requiring the dissolution of these marriages.',
    significance:
      'Ezra\'s reforms reestablished the Torah as the governing constitution of the Jewish community and reinforced the boundaries of covenant identity. His emphasis on scriptural literacy laid the groundwork for the synagogue tradition and rabbinic Judaism.',
    historicalContext:
      'Artaxerxes I authorized Ezra\'s mission as part of Persian policy to stabilize provincial governance through local law codes. The intermarriage issue reflected the social reality of a small returned community living among established populations in the province of Yehud.',
    figures: ['Ezra'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-nehemiah-walls',
    track: 'ot',
    era: 'return-restoration',
    year: -445,
    approximate: true,
    title: 'Nehemiah Rebuilds the Walls of Jerusalem',
    scripture: 'Nehemiah 1-6',
    description:
      'Nehemiah, a Jewish cupbearer to the Persian king Artaxerxes I, received permission to return to Jerusalem after learning that the city\'s walls were still in ruins. Despite fierce opposition from Sanballat, Tobiah, and Geshem, Nehemiah organized the populace to rebuild the walls in just fifty-two days, with workers carrying construction materials in one hand and weapons in the other.',
    significance:
      'The rebuilding of Jerusalem\'s walls restored the city\'s security and dignity, marking the physical completion of the post-exilic restoration. It demonstrated that the covenant community had been reestablished in the Promised Land.',
    historicalContext:
      'Nehemiah\'s opponents represented the political interests of surrounding provinces (Samaria, Ammon, and the Arab tribes) who saw a fortified Jerusalem as a threat to their regional influence. The rapid wall construction organized by work gangs from different families and towns reflects effective emergency mobilization.',
    figures: ['Nehemiah'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-malachi',
    track: 'ot',
    era: 'return-restoration',
    year: -430,
    approximate: true,
    title: 'Malachi — Last OT Prophet',
    scripture: 'Malachi 4:2',
    description:
      'Malachi, the last of the Old Testament prophets, delivered God\'s message to a post-exilic community that had grown spiritually apathetic. He rebuked the priests for offering blemished sacrifices, condemned the people for withholding tithes and divorcing their wives, and warned of a coming day of judgment. He also promised that the "sun of righteousness" would rise with healing in its wings for those who fear God\'s name.',
    significance:
      'Malachi\'s prophecy closes the Old Testament canon with both warning and promise. His prediction of a messenger who would prepare the way (identified in the New Testament as John the Baptist) bridges the Old and New Testaments across four centuries of prophetic silence.',
    historicalContext:
      'Malachi prophesied during the Persian period, likely during or shortly after Nehemiah\'s governorship. The abuses he addressed (corrupt priesthood, intermarriage, neglect of tithes) mirror the problems that Nehemiah and Ezra also confronted, suggesting an overlapping historical setting.',
    figures: ['Malachi'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
];
