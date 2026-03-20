import type { BiblicalEvent } from '@/lib/types';

export const eventsOT: BiblicalEvent[] = [
  {
    id: 'ot-creation',
    track: 'ot',
    era: 'primeval',
    year: -3500,
    approximate: true,
    title: 'Creation',
    scripture: 'Genesis 1-2',
    description:
      'God created the heavens and the earth in six days and rested on the seventh. He formed the first human from the dust of the ground and breathed life into him, placing him in the Garden of Eden. God created woman from the man\'s side as a suitable companion. He declared all of creation "very good" and gave humanity the mandate to be fruitful, multiply, and exercise stewardship over the earth.',
    significance:
      'The creation account establishes God as the sovereign origin of all things, defines humanity as made in His image, and introduces the pattern of Sabbath rest. These themes of original goodness, divine purpose, and cosmic order are recalled throughout Scripture and find their culmination in the new creation of Revelation 21-22.',
    historicalContext:
      'Genesis 1-2 stands in deliberate contrast to ancient Near Eastern creation myths such as the Babylonian Enuma Elish. Where pagan myths depict creation as the byproduct of divine conflict, Genesis presents a single God who creates by sovereign command, without struggle or opposition.',
    figures: ['Adam', 'Eve'],
    location: { name: 'Eden', lat: 31.0, lng: 35.0 },
  },
  {
    id: 'ot-flood',
    track: 'ot',
    era: 'primeval',
    year: -2500,
    approximate: true,
    title: 'Noah\'s Flood',
    scripture: 'Genesis 6-9',
    description:
      'As human wickedness spread across the earth, God determined to destroy all living things through a catastrophic flood. He commanded Noah, the one righteous man of his generation, to build an ark of gopher wood and bring his family and pairs of every animal aboard. Rain fell for forty days and nights, and the floodwaters prevailed for 150 days. After the waters receded, Noah offered sacrifice, and God established a covenant never to destroy the earth by flood again, setting the rainbow as its sign.',
    significance:
      'The Flood narrative establishes the pattern of divine judgment and gracious salvation that recurs throughout Scripture. Noah\'s ark becomes a type of salvation through water and wood, explicitly connected to baptism in 1 Peter 3:20-21. The Noahic covenant is the first universal covenant in Scripture.',
    historicalContext:
      'Flood narratives appear widely in ancient Near Eastern literature, including the Epic of Gilgamesh and the Atrahasis Epic. While sharing some structural similarities, the Genesis account is distinctive in its monotheistic theology, its emphasis on human moral accountability, and its covenantal framework.',
    figures: ['Noah'],
    location: { name: 'Mountains of Ararat', lat: 39.7, lng: 44.3 },
  },
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
    id: 'ot-melchizedek',
    track: 'ot',
    era: 'patriarchs',
    year: -1950,
    approximate: true,
    title: 'Melchizedek Blesses Abraham',
    scripture: 'Genesis 14:17-20',
    description:
      'After Abraham defeated the coalition of kings who had captured his nephew Lot, Melchizedek, king of Salem and priest of God Most High, brought out bread and wine and blessed Abraham. Abraham gave Melchizedek a tenth of everything he had taken in battle. Melchizedek appears without recorded genealogy, parentage, or death in the Genesis narrative.',
    significance:
      'Melchizedek represents a priesthood that precedes and transcends the Levitical order. Psalm 110:4 prophesies a coming ruler who is "a priest forever after the order of Melchizedek." The book of Hebrews (chapters 5-7) argues at length that Christ fulfills this Melchizedekian priesthood, which is superior to the Aaronic priesthood because it is eternal and not dependent on lineage.',
    historicalContext:
      'Salem is widely identified with Jerusalem (cf. Psalm 76:2). The combination of kingship and priesthood in a single figure was common in Canaanite city-states but was separated in Israel between the tribes of Judah and Levi. Melchizedek\'s unique status as both king and priest made him a fitting type of Christ, who holds both offices.',
    figures: ['Abraham', 'Melchizedek'],
    location: { name: 'Salem (Jerusalem)', lat: 31.7683, lng: 35.2137 },
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
    id: 'ot-tabernacle',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1445,
    approximate: true,
    title: 'Tabernacle Constructed',
    scripture: 'Exodus 25-40',
    description:
      'God gave Moses detailed instructions on Mount Sinai for constructing the tabernacle, a portable sanctuary where God would dwell among His people during their wilderness journey. The skilled craftsmen Bezalel and Oholiab oversaw the construction using gold, silver, bronze, fine linen, and acacia wood. When the tabernacle was completed, the glory of the Lord filled it as a cloud, so that even Moses could not enter.',
    significance:
      'The tabernacle established the central pattern of Israelite worship: God dwelling in the midst of His people, approachable only through prescribed sacrifice and mediation. Its structure, furnishings, and rituals are interpreted in Hebrews 8-9 as shadows of heavenly realities fulfilled in Christ, the true tabernacle (John 1:14, Hebrews 8:2).',
    historicalContext:
      'The tabernacle\'s portable design suited Israel\'s nomadic wilderness existence. Its tripartite structure (outer court, Holy Place, Most Holy Place) parallels temple architecture found across the ancient Near East, while its theological function as the dwelling place of the invisible God distinguished it from pagan shrines housing idol images.',
    figures: ['Moses', 'Bezalel'],
    location: { name: 'Mount Sinai / Wilderness', lat: 28.5394, lng: 33.9750 },
  },
  {
    id: 'ot-day-of-atonement',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1445,
    approximate: true,
    title: 'Day of Atonement Instituted',
    scripture: 'Leviticus 16',
    description:
      'God prescribed Yom Kippur, the Day of Atonement, as the most solemn day in Israel\'s liturgical calendar. Once a year, the high priest entered the Most Holy Place with the blood of a bull and a goat to make atonement for the sins of the entire nation. A second goat, the scapegoat, was symbolically laden with the people\'s sins and driven into the wilderness, never to return.',
    significance:
      'The Day of Atonement is the supreme Old Testament ritual for dealing with sin, combining substitutionary sacrifice with the complete removal of guilt. Hebrews 9:11-14 identifies Christ as the ultimate high priest who entered the heavenly Most Holy Place once for all with His own blood, rendering the annual repetition of Yom Kippur unnecessary.',
    historicalContext:
      'The two-goat ritual is unique in the ancient Near East. Some scholars note parallels with Hittite elimination rituals that transferred impurity to an animal, but the theological framework of Leviticus 16 is distinctively Israelite. The scapegoat ritual was practiced at the Second Temple; the Mishnah (Yoma) preserves detailed traditions about its observance.',
    figures: ['Aaron'],
    location: { name: 'Tabernacle / Wilderness', lat: 28.5394, lng: 33.9750 },
  },
  {
    id: 'ot-bronze-serpent',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1407,
    approximate: true,
    title: 'Bronze Serpent Raised',
    scripture: 'Numbers 21:4-9',
    description:
      'When the Israelites spoke against God and Moses during the wilderness journey, God sent venomous serpents among the people and many died. The people confessed their sin and asked Moses to intercede. God instructed Moses to make a bronze serpent and mount it on a pole; anyone who was bitten could look at the bronze serpent and live.',
    significance:
      'Jesus explicitly identified the bronze serpent as a type of His own crucifixion: "As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, that whoever believes in him may have eternal life" (John 3:14-15). The parallel lies in the instrument of death being raised up as the means of salvation for all who look to it in faith.',
    historicalContext:
      'The bronze serpent was preserved as a relic and later became an object of idolatrous worship in Israel. King Hezekiah destroyed it during his religious reforms, calling it "Nehushtan" (2 Kings 18:4). Snake iconography was widespread in ancient Near Eastern healing cults, but the biblical narrative redirects the symbolism toward faith in God alone.',
    figures: ['Moses'],
    location: { name: 'Wilderness (Transjordan)', lat: 30.5, lng: 35.5 },
  },
  {
    id: 'ot-wilderness-wandering',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1445,
    endYear: -1406,
    approximate: true,
    title: 'Forty Years in the Wilderness',
    scripture: 'Numbers 14; Deuteronomy 8:2-5',
    description:
      'After the twelve spies returned from Canaan, ten reported that the land was unconquerable. The people rebelled and wished to return to Egypt. God sentenced that generation to forty years of wilderness wandering until all adults who had refused to trust Him had died. During these decades, God sustained Israel with manna and water, their clothes did not wear out, and He disciplined them "as a man disciplines his son" (Deuteronomy 8:5).',
    significance:
      'Israel\'s forty years of testing in the wilderness became the paradigmatic period of trial and divine provision in Scripture. Jesus\'s forty days of fasting and temptation in the wilderness (Matthew 4:1-11) deliberately recapitulates Israel\'s experience: where Israel failed the test, Jesus — quoting Deuteronomy three times — succeeded, proving Himself the faithful Son that Israel was called but failed to be.',
    historicalContext:
      'The Sinai Peninsula and Negev region through which Israel wandered were arid but not uninhabited. Oases such as Kadesh-barnea (modern Ain el-Qudeirat) served as gathering points. The forty-year period may represent a full generation in ancient reckoning.',
    figures: ['Moses', 'Aaron', 'Joshua', 'Caleb'],
    location: { name: 'Sinai Wilderness', lat: 30.0, lng: 34.0 },
  },
  {
    id: 'ot-rahab',
    track: 'ot',
    era: 'exodus-conquest',
    year: -1406,
    approximate: true,
    title: 'Rahab and the Scarlet Cord',
    scripture: 'Joshua 2',
    description:
      'Before the Israelites crossed the Jordan, Joshua sent two spies into Jericho. The Canaanite prostitute Rahab hid them on her rooftop, confessing her faith that the Lord had given Israel the land. In return, the spies promised to spare her household. They instructed her to tie a scarlet cord in her window as a sign, and when Jericho fell, Rahab and her entire family were saved.',
    significance:
      'Rahab\'s scarlet cord, like the Passover blood on the doorposts, marks a household for salvation by faith. Hebrews 11:31 commends Rahab for her faith, and James 2:25 cites her as an example of faith demonstrated through works. She is included in Christ\'s genealogy (Matthew 1:5), demonstrating that God\'s redemptive plan embraces even Gentile outsiders who turn to Him in faith.',
    historicalContext:
      'Rahab\'s house was built into the city wall of Jericho, consistent with archaeological evidence that residences were constructed within the casemate walls of Bronze Age Canaanite cities. Her occupation and Canaanite identity made her an unlikely candidate for inclusion in the covenant community, heightening the theological significance of her faith and redemption.',
    figures: ['Rahab', 'Joshua'],
    location: { name: 'Jericho', lat: 31.8711, lng: 35.4444 },
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
    id: 'ot-ruth-boaz',
    track: 'ot',
    era: 'judges',
    year: -1100,
    approximate: true,
    title: 'Ruth and Boaz — The Kinsman-Redeemer',
    scripture: 'Ruth 1-4',
    description:
      'Ruth, a Moabite widow, chose to remain with her Israelite mother-in-law Naomi, declaring "Your people shall be my people, and your God my God" (Ruth 1:16). In Bethlehem, she gleaned in the fields of Boaz, a wealthy relative of Naomi\'s deceased husband. Boaz acted as the kinsman-redeemer (go\'el), purchasing the family property and marrying Ruth to preserve the family line. Their son Obed became the grandfather of King David.',
    significance:
      'The institution of the kinsman-redeemer — one who has the right, the resources, and the willingness to redeem — is one of the clearest Old Testament types of Christ\'s redemptive work. Ruth\'s inclusion in the messianic lineage (Matthew 1:5) also demonstrates that God\'s redemptive plan extends beyond ethnic Israel to include Gentiles.',
    historicalContext:
      'The book of Ruth is set "in the days when the judges ruled" (Ruth 1:1) and provides a counterpoint to the violence and moral decay depicted in the book of Judges. The kinsman-redeemer (go\'el) institution is rooted in Leviticus 25:25-55, which prescribes the redemption of property and persons within Israelite clan structures.',
    figures: ['Ruth', 'Boaz', 'Naomi'],
    location: { name: 'Bethlehem', lat: 31.7054, lng: 35.2024 },
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
    id: 'ot-jonah',
    track: 'ot',
    era: 'divided-kingdom',
    year: -780,
    approximate: true,
    title: 'Jonah and the Great Fish',
    scripture: 'Jonah 1-4',
    description:
      'God commanded the prophet Jonah to preach judgment against Nineveh, the capital of Assyria. Jonah fled by ship in the opposite direction, but God sent a great storm. The sailors threw Jonah overboard, and he was swallowed by a great fish, remaining in its belly three days and three nights. After being vomited onto dry land, Jonah obeyed and preached to Nineveh, and the entire city repented.',
    significance:
      'Jesus explicitly cited Jonah as a sign pointing to His own death and resurrection: "For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth" (Matthew 12:40). Jonah\'s mission to the Gentile city of Nineveh also prefigures the extension of God\'s mercy beyond Israel.',
    historicalContext:
      '2 Kings 14:25 identifies Jonah son of Amittai as a prophet from Gath-hepher in the northern kingdom during the reign of Jeroboam II. Nineveh was the capital of the Neo-Assyrian Empire and one of the largest cities in the ancient world, located on the Tigris River opposite modern Mosul, Iraq.',
    figures: ['Jonah'],
    location: { name: 'Joppa / Nineveh', lat: 36.3600, lng: 43.1500 },
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

  // ── Intertestamental Period ────────────────────────────────────
  {
    id: 'ot-septuagint',
    track: 'ot',
    era: 'intertestamental',
    year: -250,
    approximate: true,
    title: 'Septuagint — Hebrew Bible Translated into Greek',
    description:
      'Jewish scholars in Alexandria, Egypt, translated the Torah (and later the remaining Hebrew Scriptures) into Greek under the patronage of Ptolemy II Philadelphus. The translation is called the Septuagint (LXX) after the tradition of seventy-two translators, six from each tribe. The Pentateuch was translated first (c. 250 BC), with the remaining books completed over the following century.',
    significance:
      'The Septuagint became the Bible of the early church and the version most frequently quoted in the New Testament. Roughly two-thirds of OT quotations in the NT follow the Septuagint rather than what became the Masoretic Hebrew text. Key messianic passages used by early Christians, such as Isaiah 7:14 ("virgin" rather than "young woman"), rely on the LXX rendering.',
    historicalContext:
      'The Letter of Aristeas (a 2nd-century BC Jewish pseudepigraphal work, not canonical Scripture) provides the traditional account of the translation. Josephus corroborates the basic story in Antiquities 12.2. The translation reflects the large Greek-speaking Jewish diaspora in Egypt and the dominance of Greek as the lingua franca of the Hellenistic world.',
    figures: [],
    location: { name: 'Alexandria, Egypt', lat: 31.2001, lng: 29.9187 },
  },
  {
    id: 'ot-ben-sira',
    track: 'ot',
    era: 'intertestamental',
    year: -180,
    approximate: true,
    title: 'Ben Sira Writes Ecclesiasticus (Apocrypha)',
    description:
      'Yeshua ben Sira, a Jewish scribe and wisdom teacher in Jerusalem, composed a book of wisdom instruction similar to Proverbs. His grandson later translated it into Greek in Egypt around 132 BC, adding a prologue that provides one of the earliest references to the three-part division of the Hebrew Bible ("the Law, the Prophets, and the other books"). Note: This book (also called Sirach or Ecclesiasticus) is part of the Apocrypha — included in Catholic and Orthodox canons but not in the Protestant canon.',
    significance:
      'Sirach is the longest wisdom book from antiquity and provides a window into Jewish piety in the generation before the Maccabean crisis. Its "Praise of the Fathers" (chapters 44-50) includes a vivid portrait of Second Temple worship under the High Priest Simon II. Hebrew fragments found among the Dead Sea Scrolls and at Masada confirm the original language.',
    historicalContext:
      'Ben Sira wrote at a time when Hellenistic culture was increasingly influential in Judea, and his work urges fidelity to traditional Jewish wisdom and Torah. The book is quoted occasionally in the Talmud and was known to early church fathers, though Protestants classify it as useful for historical and devotional reading rather than as inspired Scripture.',
    figures: [],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-qumran',
    track: 'ot',
    era: 'intertestamental',
    year: -150,
    approximate: true,
    title: 'Qumran Community Established; Dead Sea Scrolls',
    description:
      'A Jewish sectarian community, widely identified with the Essenes described by Josephus and Philo, settled at Qumran near the Dead Sea under a leader they called the "Teacher of Righteousness." The community produced and preserved an extraordinary library of scrolls, discovered in 1947 when a Bedouin shepherd found clay jars in nearby caves. Over 981 manuscripts were recovered from eleven caves, including copies of every book of the Hebrew Bible except Esther.',
    significance:
      'The Great Isaiah Scroll (1QIsa-a), a complete copy of all 66 chapters dating to approximately 150 BC, is over 1,000 years older than the previously oldest known Hebrew manuscript of Isaiah. Its near-identical agreement with the later Masoretic Text powerfully demonstrates the extraordinary fidelity of biblical transmission across a millennium — a finding of immense significance for the reliability of the Old Testament text.',
    historicalContext:
      'The community rejected the Hasmonean priesthood as illegitimate and withdrew to the wilderness to await God\'s intervention. Their sectarian writings (Community Rule, War Scroll, pesharim) are not canonical Scripture but provide invaluable context for understanding the diversity of Jewish belief and practice in the centuries before Christ. Josephus (Jewish War 2.8) and Pliny the Elder (Natural History 5.73) independently describe the Essenes.',
    figures: [],
    location: { name: 'Qumran', lat: 31.7414, lng: 35.4593 },
  },
  {
    id: 'ot-hasmonean-dynasty',
    track: 'ot',
    era: 'intertestamental',
    year: -140,
    approximate: true,
    title: 'Hasmonean Dynasty — Jewish Independence',
    description:
      'Simon Maccabeus, the last surviving son of Mattathias, secured Jewish political independence from the Seleucid Empire and expelled their garrison from the Akra citadel in Jerusalem in 141 BC. The Hasmonean dynasty ruled as both kings and high priests for roughly a century until Roman intervention in 63 BC. Under John Hyrcanus (135-104 BC) and Alexander Jannaeus (103-76 BC), the kingdom expanded to approach the borders of the old Davidic realm.',
    significance:
      'The Hasmoneans\' controversial combination of kingship and high priesthood — offices that Scripture assigned to different tribes (Judah and Levi) — divided Jewish opinion and contributed to the emergence of the Pharisees, Sadducees, and Essenes as distinct parties. Note: The primary narrative source is 1 Maccabees (Apocrypha, not in the Protestant canon), supplemented by Josephus\' Antiquities. Daniel 8 and 11 are widely understood by evangelical scholars as prophetically referencing the events leading to the Maccabean period.',
    historicalContext:
      'During the Hasmonean period, the Pharisees emerged as defenders of the oral law and the resurrection, while the Sadducees represented the priestly aristocracy who accepted only the written Torah and denied the resurrection (cf. Matthew 22:23, Acts 23:8). This party division — described by Josephus in Antiquities 13 — directly shaped the religious landscape that Jesus encountered.',
    figures: ['Simon Maccabeus'],
    location: { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
  },
  {
    id: 'ot-herods-temple',
    track: 'ot',
    era: 'intertestamental',
    year: -20,
    approximate: true,
    title: 'Herod Begins Rebuilding the Temple',
    scripture: 'John 2:20',
    description:
      'Herod the Great began a massive renovation of the Second Temple around 20-19 BC, doubling the Temple Mount platform to approximately 36 acres with enormous retaining walls (the Western Wall is a surviving section). The sanctuary itself was completed in about eighteen months by priests trained as masons, but work on the surrounding courts and porticoes continued for decades. During Jesus\' ministry, the Jews said: "It has taken forty-six years to build this temple" (John 2:20), and the entire complex was not fully finished until approximately AD 63 — just seven years before the Romans destroyed it.',
    significance:
      'Herod\'s Temple was one of the architectural wonders of the ancient world. Josephus wrote that the exterior "appeared from a distance like a snow-clad mountain; for all that was not overlaid with gold was of purest white" (Jewish War 5.5.6). This was the Temple in which Jesus taught, overturned the money changers\' tables, and prophesied destruction (Mark 13:1-2).',
    historicalContext:
      'Josephus (Antiquities 15.11, Jewish War 5.5) provides the most detailed description. Individual stones measured up to 37 feet long. The Mishnah tractate Middot preserves additional architectural details from Jewish tradition. Despite its grandeur, Herod\'s Temple was an expansion of the Second Temple built by Zerubbabel, not a wholly new structure, preserving continuity with the post-exilic sanctuary.',
    figures: ['Herod the Great'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
];
