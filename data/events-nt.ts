import type { BiblicalEvent } from '@/lib/types';

export const eventsNT: BiblicalEvent[] = [
  {
    id: 'nt-birth-of-jesus',
    track: 'nt',
    era: 'life-of-christ',
    year: -5,
    approximate: true,
    title: 'Birth of Jesus in Bethlehem',
    scripture: 'Luke 2:1-20',
    description:
      'Jesus was born to Mary in Bethlehem during a Roman census ordered by Caesar Augustus. Shepherds in nearby fields were visited by angels announcing the birth and came to see the child lying in a manger. Joseph and Mary had traveled from Nazareth to Bethlehem because Joseph was of the house and lineage of David.',
    significance:
      'The incarnation of the Son of God fulfills the messianic prophecy of Micah 5:2 and inaugurates the New Covenant era. This event is the pivot point of redemptive history, uniting the promises to Abraham and David with their fulfillment.',
    historicalContext:
      'The birth occurred during the reign of Herod the Great and the census of Quirinius, placing it within the administrative machinery of the early Roman Empire. Judea was a client kingdom under Rome, with Herod ruling as a vassal king.',
    figures: ['Jesus', 'Mary', 'Joseph'],
    location: { name: 'Bethlehem', lat: 31.7054, lng: 35.2024 },
  },
  {
    id: 'nt-flight-to-egypt',
    track: 'nt',
    era: 'life-of-christ',
    year: -4,
    approximate: true,
    title: 'Flight to Egypt',
    scripture: 'Matthew 2:13-15',
    description:
      'An angel warned Joseph in a dream to flee to Egypt with Mary and the infant Jesus to escape King Herod, who planned to kill the child. The family remained in Egypt until Herod died. Matthew interprets this as fulfilling Hosea 11:1, "Out of Egypt I called my son."',
    significance:
      'The flight recapitulates Israel\'s sojourn in Egypt, presenting Jesus as the true Israel who retraces and fulfills the nation\'s history. It also demonstrates God\'s providential protection of the messianic line.',
    historicalContext:
      'Egypt had a large Jewish diaspora community, especially in Alexandria, making it a natural refuge. Herod the Great\'s final years were marked by paranoia and violent purges, consistent with the account of the massacre of infants in Bethlehem.',
    figures: ['Jesus', 'Mary', 'Joseph'],
    location: { name: 'Egypt', lat: 30.0444, lng: 31.2357 },
  },
  {
    id: 'nt-baptism',
    track: 'nt',
    era: 'life-of-christ',
    year: 27,
    approximate: true,
    title: 'Baptism of Jesus',
    scripture: 'Matthew 3:13-17',
    description:
      'Jesus came from Galilee to the Jordan River to be baptized by John the Baptist. As Jesus came up from the water, the heavens opened, the Spirit of God descended on him like a dove, and a voice from heaven declared, "This is my beloved Son, in whom I am well pleased." John initially protested, saying he needed to be baptized by Jesus instead.',
    significance:
      'The baptism marks the public beginning of Jesus\' ministry and provides a Trinitarian revelation of Father, Son, and Spirit. Jesus\' submission to baptism identifies him with sinful humanity and inaugurates his role as the Suffering Servant.',
    historicalContext:
      'John the Baptist\'s ministry of repentance baptism drew large crowds and attracted the attention of Jewish religious authorities. Ritual immersion was already practiced in Judaism through mikveh, but John\'s baptism in the Jordan carried eschatological overtones tied to prophetic expectation.',
    figures: ['Jesus', 'John the Baptist'],
    location: { name: 'Jordan River', lat: 31.8396, lng: 35.5502 },
  },
  {
    id: 'nt-temptation',
    track: 'nt',
    era: 'life-of-christ',
    year: 27,
    approximate: true,
    title: 'Temptation in the Wilderness',
    scripture: 'Matthew 4:1-11',
    description:
      'Immediately after his baptism, the Spirit led Jesus into the Judean wilderness where he fasted for forty days and was tempted by Satan. The three temptations targeted physical need, presumption upon God, and worldly power. Jesus resisted each by quoting Scripture from Deuteronomy.',
    significance:
      'Where Adam failed in the garden and Israel failed in the wilderness, Jesus succeeded, demonstrating his qualification as the sinless representative of his people. The temptation establishes that Jesus\' messianic mission will follow God\'s path of obedience rather than worldly shortcuts.',
    historicalContext:
      'The Judean wilderness west of the Dead Sea was associated with ascetic and prophetic movements, including the Essene community at Qumran. The forty-day period echoes Israel\'s forty years of wilderness wandering and Moses\' forty days on Sinai.',
    figures: ['Jesus'],
    location: { name: 'Judean Wilderness', lat: 31.7600, lng: 35.3800 },
  },
  {
    id: 'nt-sermon-on-mount',
    track: 'nt',
    era: 'life-of-christ',
    year: 28,
    approximate: true,
    title: 'Sermon on the Mount',
    scripture: 'Matthew 5-7',
    description:
      'Jesus delivered an extended discourse to his disciples and crowds on a mountainside in Galilee. The sermon includes the Beatitudes, teachings on the law, prayer (including the Lord\'s Prayer), and ethical instruction. It concludes with the parable of the wise and foolish builders.',
    significance:
      'The Sermon on the Mount presents the ethical standards of the kingdom of God and Jesus\' authoritative interpretation of the Torah. It establishes Jesus as the new Moses who delivers God\'s law from a mountain, deepening the moral demands beyond external compliance to the condition of the heart.',
    historicalContext:
      'First-century rabbis commonly taught through extended discourses, and mountain settings carried theological weight in Jewish tradition. Galilee in this period was a predominantly Jewish region under the tetrarchy of Herod Antipas, with a mixed population of farmers, fishermen, and artisans.',
    figures: ['Jesus'],
    location: { name: 'Galilee', lat: 32.8814, lng: 35.4954 },
  },
  {
    id: 'nt-feeding-5000',
    track: 'nt',
    era: 'life-of-christ',
    year: 29,
    approximate: true,
    title: 'Feeding of the 5,000',
    scripture: 'John 6:1-14',
    description:
      'Jesus fed a crowd of five thousand men, plus women and children, with five barley loaves and two fish provided by a boy. After everyone ate, the disciples collected twelve baskets of leftover fragments. The crowd responded by attempting to make Jesus king by force.',
    significance:
      'This miracle, the only one recorded in all four Gospels, identifies Jesus as the prophet like Moses who provides bread in the wilderness. It anticipates the eucharistic provision and demonstrates Jesus\' messianic authority over creation.',
    historicalContext:
      'The northeastern shore of the Sea of Galilee was a relatively remote area near the territory of Philip the Tetrarch. Messianic expectations in first-century Judea often included the hope for a new Moses who would repeat the miracle of manna.',
    figures: ['Jesus'],
    location: { name: 'Sea of Galilee', lat: 32.8231, lng: 35.5831 },
  },
  {
    id: 'nt-transfiguration',
    track: 'nt',
    era: 'life-of-christ',
    year: 29,
    approximate: true,
    title: 'Transfiguration',
    scripture: 'Matthew 17:1-9',
    description:
      'Jesus took Peter, James, and John up a high mountain where his appearance was transformed: his face shone like the sun and his garments became dazzling white. Moses and Elijah appeared and spoke with him. A voice from a bright cloud said, "This is my beloved Son; listen to him."',
    significance:
      'The transfiguration reveals Jesus\' divine glory and confirms his identity as the fulfillment of the Law (Moses) and the Prophets (Elijah). It previews his resurrection glory and reinforces the Father\'s endorsement of Jesus\' mission, which now turns toward the cross.',
    historicalContext:
      'The traditional location is Mount Tabor in Lower Galilee, though some scholars favor Mount Hermon near Caesarea Philippi based on the preceding narrative context. The appearance of Moses and Elijah reflects Jewish eschatological expectations about the return of these figures before the messianic age.',
    figures: ['Jesus', 'Peter', 'James', 'John'],
    location: { name: 'Mount Hermon', lat: 33.4167, lng: 35.8569 },
  },
  {
    id: 'nt-triumphal-entry',
    track: 'nt',
    era: 'life-of-christ',
    year: 30,
    approximate: true,
    title: 'Triumphal Entry into Jerusalem',
    scripture: 'Matthew 21:1-11',
    description:
      'Jesus rode into Jerusalem on a donkey while crowds spread cloaks and palm branches on the road, shouting "Hosanna to the Son of David." He entered from the Mount of Olives, deliberately fulfilling Zechariah 9:9. The entire city was stirred, asking "Who is this?"',
    significance:
      'The triumphal entry is Jesus\' public declaration of his messianic kingship, fulfilling Zechariah\'s prophecy of a humble king arriving on a donkey. By choosing a donkey rather than a war horse, Jesus signals that his kingdom comes through peace and sacrifice rather than military conquest.',
    historicalContext:
      'The entry occurred during Passover week, when Jerusalem\'s population swelled dramatically with pilgrims. Roman authorities and the temple establishment were on heightened alert during festivals due to the risk of messianic uprisings.',
    figures: ['Jesus'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'nt-last-supper',
    track: 'nt',
    era: 'life-of-christ',
    year: 30,
    approximate: true,
    title: 'Last Supper — New Covenant Instituted',
    scripture: 'Luke 22:14-20',
    description:
      'On the night before his crucifixion, Jesus shared a Passover meal with his twelve disciples in an upper room in Jerusalem. He took bread and wine and gave them new meaning, declaring the bread to be his body and the cup to be "the new covenant in my blood." He also washed the disciples\' feet and predicted his betrayal by Judas.',
    significance:
      'The Last Supper formally institutes the New Covenant prophesied in Jeremiah 31:31-34, replacing the Mosaic covenant with one sealed by Christ\'s own blood. It transforms the Passover from a memorial of the Exodus into the Lord\'s Supper commemorating redemption through the cross.',
    historicalContext:
      'The meal was a Passover seder, the most important annual Jewish observance commemorating the exodus from Egypt. The upper room (cenacle) is traditionally located on Mount Zion in Jerusalem, in what was a wealthy residential quarter of the city.',
    figures: ['Jesus'],
    location: { name: 'Jerusalem', lat: 31.7717, lng: 35.2286 },
  },
  {
    id: 'nt-crucifixion',
    track: 'nt',
    era: 'life-of-christ',
    year: 30,
    approximate: true,
    title: 'Crucifixion',
    scripture: 'Matthew 27; John 19',
    description:
      'After being arrested, tried before the Sanhedrin and Pontius Pilate, and scourged, Jesus was crucified at Golgotha outside the walls of Jerusalem. He was placed between two criminals and died after approximately six hours on the cross. Darkness covered the land, the temple curtain tore from top to bottom, and an earthquake occurred at his death.',
    significance:
      'The crucifixion is the central atoning event of Scripture, in which Jesus bears the sins of his people as the substitutionary sacrifice. It fulfills the Passover lamb typology, the suffering servant prophecy of Isaiah 53, and the Davidic lament of Psalm 22.',
    historicalContext:
      'Crucifixion was a Roman method of execution reserved primarily for slaves, pirates, and enemies of the state, designed to maximize public humiliation. Pontius Pilate governed Judea as prefect from 26-36 AD; his decision to execute Jesus was influenced by pressure from the temple authorities and the political volatility of Passover season.',
    figures: ['Jesus'],
    location: { name: 'Jerusalem (Golgotha)', lat: 31.7784, lng: 35.2296 },
  },
  {
    id: 'nt-resurrection',
    track: 'nt',
    era: 'life-of-christ',
    year: 30,
    approximate: true,
    title: 'Resurrection',
    scripture: 'Matthew 28; John 20',
    description:
      'On the third day after his crucifixion, Jesus rose bodily from the dead. Women who came to the tomb at dawn found the stone rolled away and were told by angels that Jesus had risen. Over the following forty days, Jesus appeared to the disciples and to more than five hundred people at once, eating with them and teaching about the kingdom of God.',
    significance:
      'The resurrection vindicates Jesus\' claims and confirms the efficacy of his atoning death, demonstrating his victory over sin and death. It is the foundation of Christian faith (1 Cor 15:17) and the firstfruits of the general resurrection promised to all believers.',
    historicalContext:
      'The tomb was likely a rock-cut tomb typical of wealthy first-century Jerusalem burials, sealed with a rolling stone. Roman soldiers were posted as guards at the request of the Jewish authorities, reflecting the political sensitivity surrounding Jesus\' execution and the claims about his identity.',
    figures: ['Jesus'],
    location: { name: 'Jerusalem', lat: 31.7784, lng: 35.2296 },
  },
  {
    id: 'nt-ascension',
    track: 'nt',
    era: 'life-of-christ',
    year: 30,
    approximate: true,
    title: 'Ascension',
    scripture: 'Acts 1:6-11',
    description:
      'Forty days after his resurrection, Jesus led his disciples to the Mount of Olives near Bethany. After commissioning them to be witnesses to the ends of the earth, he was lifted up and a cloud took him out of their sight. Two angels told the disciples that Jesus would return in the same way they had seen him go.',
    significance:
      'The ascension marks Jesus\' enthronement at the right hand of the Father, fulfilling the promise of Psalm 110:1 and Daniel 7:13-14. It inaugurates his heavenly reign and priestly intercession, and sets the stage for the sending of the Holy Spirit.',
    historicalContext:
      'The Mount of Olives, east of Jerusalem across the Kidron Valley, held prophetic significance in Jewish tradition as the place where God\'s glory would return (Ezek 43:1-4) and where the Lord would stand in the last days (Zech 14:4).',
    figures: ['Jesus'],
    location: { name: 'Mount of Olives', lat: 31.7783, lng: 35.2453 },
  },
  {
    id: 'nt-pentecost',
    track: 'nt',
    era: 'early-church',
    year: 30,
    approximate: true,
    title: 'Pentecost — Holy Spirit Poured Out',
    scripture: 'Acts 2',
    description:
      'Fifty days after Passover, the disciples were gathered in Jerusalem when the Holy Spirit descended upon them with the sound of a rushing wind and visible tongues of fire. They began speaking in other languages, and Jews from many nations heard the gospel in their own tongues. Peter preached a sermon explaining the event, and about three thousand people were baptized.',
    significance:
      'Pentecost marks the birth of the church and the fulfillment of Joel\'s prophecy (Joel 2:28-32) and Jesus\' promise of the Spirit (John 14:16-17). It reverses the scattering of languages at Babel and empowers the church for its worldwide mission.',
    historicalContext:
      'The Jewish festival of Shavuot (Pentecost) celebrated the wheat harvest and the giving of the Torah at Sinai, drawing pilgrims from across the diaspora to Jerusalem. The multilingual character of the crowd reflects the extent of the Jewish dispersion throughout the Roman Empire and Parthian territories.',
    figures: ['Peter'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'nt-stephen',
    track: 'nt',
    era: 'early-church',
    year: 34,
    approximate: true,
    title: 'Stoning of Stephen; First Martyr',
    scripture: 'Acts 7',
    description:
      'Stephen, one of the seven deacons, was brought before the Sanhedrin on charges of blasphemy. He delivered a lengthy speech recounting Israel\'s history of rejecting God\'s messengers, culminating in the accusation that they had betrayed and murdered the Righteous One. The crowd dragged him out of the city and stoned him to death while he prayed for their forgiveness. Saul of Tarsus was present, approving of his execution.',
    significance:
      'Stephen\'s martyrdom initiates the first major persecution of the church, which paradoxically scatters believers and accelerates the spread of the gospel beyond Jerusalem. His speech provides the theological framework for understanding Jesus as the culmination of Israel\'s history.',
    historicalContext:
      'The Sanhedrin\'s authority to carry out capital punishment under Roman rule is debated by scholars, and Stephen\'s stoning may have been a mob action rather than a formal execution. The event occurred during a period of relative Roman administrative instability between Pilate\'s governance and direct imperial oversight.',
    figures: ['Stephen', 'Saul'],
    location: { name: 'Jerusalem', lat: 31.7811, lng: 35.2364 },
  },
  {
    id: 'nt-paul-conversion',
    track: 'nt',
    era: 'early-church',
    year: 35,
    approximate: true,
    title: 'Conversion of Saul/Paul',
    scripture: 'Acts 9',
    description:
      'While traveling to Damascus with letters authorizing the arrest of Christians, Saul was struck down by a blinding light. The risen Jesus spoke to him, asking "Saul, Saul, why are you persecuting me?" Saul was blind for three days until Ananias, a disciple in Damascus, laid hands on him; his sight was restored and he was baptized.',
    significance:
      'The conversion of the church\'s most zealous persecutor into its greatest missionary demonstrates the sovereign grace of God and redirects the trajectory of early Christianity. Paul would become the primary apostle to the Gentiles and the author of thirteen New Testament epistles.',
    historicalContext:
      'Damascus was a major city in the Roman province of Syria with a significant Jewish population and multiple synagogues. The high priest in Jerusalem had limited jurisdictional authority in Damascus, suggesting Saul\'s mission relied on cooperation from local synagogue leaders.',
    figures: ['Paul'],
    location: { name: 'Damascus Road', lat: 33.5138, lng: 36.2765 },
  },
  {
    id: 'nt-paul-first-journey',
    track: 'nt',
    era: 'early-church',
    year: 46,
    approximate: true,
    title: "Paul's First Missionary Journey",
    scripture: 'Acts 13-14',
    description:
      'Commissioned by the church at Antioch, Paul and Barnabas traveled to Cyprus and then to cities in southern Galatia (Pisidian Antioch, Iconium, Lystra, Derbe). They preached in synagogues, converted both Jews and Gentiles, faced opposition and persecution, and established churches before returning to Antioch to report what God had done.',
    significance:
      'The first missionary journey marks the deliberate, organized expansion of Christianity beyond the Jewish homeland into the Gentile world. It establishes the pattern of Paul\'s ministry: synagogue preaching, Gentile outreach, church planting, and return visits for strengthening believers.',
    historicalContext:
      'Antioch in Syria was the third-largest city in the Roman Empire and a cosmopolitan center where the disciples were first called Christians. The Roman road system and the Pax Romana facilitated safe travel across Asia Minor, enabling the rapid spread of the new movement.',
    figures: ['Paul', 'Barnabas'],
    location: { name: 'Antioch / Cyprus / Galatia', lat: 36.2021, lng: 36.1602 },
  },
  {
    id: 'nt-council-jerusalem',
    track: 'nt',
    era: 'early-church',
    year: 49,
    approximate: true,
    title: 'Council of Jerusalem — Gentiles Included',
    scripture: 'Acts 15',
    description:
      'Church leaders gathered in Jerusalem to resolve whether Gentile converts must be circumcised and follow the Mosaic law. After debate, Peter testified to God\'s acceptance of Gentiles, and James proposed a compromise. The council issued a letter exempting Gentiles from circumcision but asking them to abstain from food sacrificed to idols, blood, strangled animals, and sexual immorality.',
    significance:
      'The council\'s decision is a watershed moment that affirms salvation by grace through faith apart from the works of the law. It preserves the unity of Jewish and Gentile believers and clears the theological path for the Gentile mission.',
    historicalContext:
      'The question of Gentile inclusion reflected broader tensions within Second Temple Judaism about the boundaries of covenant membership. The council\'s minimal requirements for Gentiles parallel elements of the Noahide laws recognized in rabbinic tradition as applicable to righteous Gentiles.',
    figures: ['Paul', 'Peter', 'James'],
    location: { name: 'Jerusalem', lat: 31.7781, lng: 35.2354 },
  },
  {
    id: 'nt-paul-corinth',
    track: 'nt',
    era: 'early-church',
    year: 50,
    approximate: true,
    title: 'Paul in Corinth; Early Epistles',
    scripture: 'Acts 18; 1 Thessalonians',
    description:
      'Paul spent eighteen months in Corinth during his second missionary journey, working as a tentmaker and planting a church. He was brought before the proconsul Gallio on charges of illegal religious teaching, but the case was dismissed. During this stay, Paul wrote his earliest surviving letters, including 1 Thessalonians.',
    significance:
      'The Corinthian church became one of Paul\'s most important and challenging congregations, generating extensive correspondence. The letters written during this period are among the earliest Christian documents and provide foundational teaching on the return of Christ and the nature of the church.',
    historicalContext:
      'Corinth was a major Roman colony and commercial hub on the isthmus connecting mainland Greece to the Peloponnese, known for its wealth and cultural diversity. The Gallio inscription found at Delphi dates the proconsulship to approximately 51-52 AD, providing one of the most important chronological anchors for Pauline chronology.',
    figures: ['Paul'],
    location: { name: 'Corinth', lat: 37.9060, lng: 22.8796 },
  },
  {
    id: 'nt-paul-romans',
    track: 'nt',
    era: 'early-church',
    year: 57,
    approximate: true,
    title: 'Paul Writes Romans',
    scripture: 'Romans 1:1',
    description:
      'Writing from Corinth near the end of his third missionary journey, Paul composed his letter to the church in Rome, a community he had not yet visited. The epistle systematically presents the gospel: human sinfulness, justification by faith, sanctification, the place of Israel in God\'s plan, and practical Christian living.',
    significance:
      'Romans is the most comprehensive theological statement in the New Testament, articulating the doctrine of justification by faith and God\'s plan for both Jews and Gentiles. It has profoundly shaped Christian theology from Augustine through the Reformation and beyond.',
    historicalContext:
      'The Roman church likely originated through Jewish Christians who had been in Jerusalem at Pentecost. Emperor Claudius had expelled Jews from Rome around 49 AD (Acts 18:2), and their return under Nero created tensions between Jewish and Gentile believers that Paul\'s letter addresses.',
    figures: ['Paul'],
    location: { name: 'Corinth', lat: 37.9060, lng: 22.8796 },
  },
  {
    id: 'nt-paul-imprisoned',
    track: 'nt',
    era: 'early-church',
    year: 60,
    approximate: true,
    title: 'Paul Imprisoned in Rome',
    scripture: 'Acts 28',
    description:
      'After being arrested in Jerusalem and held in Caesarea for two years, Paul appealed to Caesar as a Roman citizen and was sent to Rome. He survived a shipwreck on Malta during the voyage. In Rome, he lived under house arrest for two years, chained to a Roman guard but free to receive visitors and preach the gospel.',
    significance:
      'Paul\'s Roman imprisonment fulfills the book of Acts\' narrative arc of the gospel reaching "the ends of the earth" (Acts 1:8) by arriving at the capital of the empire. During this imprisonment, Paul wrote the Prison Epistles (Ephesians, Philippians, Colossians, Philemon), which contain some of his most mature theological reflections.',
    historicalContext:
      'Roman citizens had the right of provocatio, the legal appeal to the emperor\'s tribunal, which Paul exercised before the governor Festus. House arrest (custodia libera) was a mild form of detention that allowed Paul to continue his ministry, reflecting his status as a Roman citizen accused of non-capital offenses.',
    figures: ['Paul'],
    location: { name: 'Rome', lat: 41.8967, lng: 12.4822 },
  },
  {
    id: 'nt-nero-persecution',
    track: 'nt',
    era: 'early-church',
    year: 64,
    approximate: true,
    title: "Nero's Persecution of Christians",
    scripture: '',
    description:
      'After the Great Fire of Rome in July 64 AD, Emperor Nero blamed the Christians as scapegoats to deflect suspicion from himself. According to the Roman historian Tacitus, Christians were arrested, covered in animal skins and torn apart by dogs, crucified, or set ablaze as human torches to light Nero\'s gardens. Tradition holds that both Peter and Paul were martyred during this persecution.',
    significance:
      'Nero\'s persecution marks the first official Roman imperial action against Christians, establishing a precedent for state-sponsored persecution that would recur for centuries. It forced the church to develop a theology of suffering and martyrdom that shaped its identity and witness.',
    historicalContext:
      'The Great Fire destroyed ten of Rome\'s fourteen districts over six days. Tacitus reports that Nero was suspected of starting the fire to clear land for his Domus Aurea palace project. Christians were a convenient target because they were already regarded with suspicion as a secretive, antisocial sect distinct from Judaism.',
    figures: ['Nero'],
    location: { name: 'Rome', lat: 41.8902, lng: 12.4922 },
  },
  {
    id: 'nt-temple-destroyed',
    track: 'nt',
    era: 'early-church',
    year: 70,
    approximate: false,
    title: 'Destruction of the Second Temple',
    scripture: 'cf. Matthew 24:1-2',
    description:
      'Roman legions under the command of Titus besieged Jerusalem during the First Jewish-Roman War and breached the city walls in the summer of 70 AD. The Second Temple, which had been extensively renovated by Herod the Great, was burned and demolished. Josephus reports that over a million people died during the siege and its aftermath, and nearly 100,000 were enslaved.',
    significance:
      'The destruction of the temple fulfills Jesus\' prophecy in Matthew 24:1-2 and permanently ends the sacrificial system of the Mosaic covenant. It marks a decisive break between Judaism and Christianity and confirms the church\'s claim that Christ\'s sacrifice has superseded the temple worship.',
    historicalContext:
      'The First Jewish-Roman War began in 66 AD when Jewish rebels expelled the Roman garrison from Jerusalem. The war was fueled by Roman maladministration, Jewish nationalist movements, and internal factionalism among Jewish groups. Titus\' victory was commemorated by the Arch of Titus in Rome, which depicts Roman soldiers carrying the temple menorah and other sacred objects.',
    figures: ['Titus'],
    location: { name: 'Jerusalem', lat: 31.7776, lng: 35.2356 },
  },
  {
    id: 'nt-revelation',
    track: 'nt',
    era: 'early-church',
    year: 95,
    approximate: true,
    title: 'John Writes Revelation on Patmos',
    scripture: 'Revelation 1:9',
    description:
      'The apostle John, exiled to the island of Patmos "on account of the word of God and the testimony of Jesus," received a series of visions which he recorded in the book of Revelation. The visions include messages to seven churches in Asia Minor, symbolic depictions of cosmic conflict between God and evil, and the consummation of history in the new heaven and new earth.',
    significance:
      'Revelation is the capstone of the biblical canon, bringing to completion the themes of creation, fall, redemption, and restoration. It assures persecuted believers that God is sovereign over history and that Christ will return to establish his kingdom definitively and permanently.',
    historicalContext:
      'The traditional dating places the writing during the reign of Emperor Domitian (81-96 AD), who demanded worship as "Lord and God" and persecuted those who refused. Patmos is a small, rocky island in the Aegean Sea used by Rome as a place of banishment; the seven churches addressed in the letter were located in the Roman province of Asia (modern western Turkey).',
    figures: ['John'],
    location: { name: 'Patmos', lat: 37.3086, lng: 26.5467 },
  },
];
