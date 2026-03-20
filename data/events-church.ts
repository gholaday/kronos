import type { BiblicalEvent } from '@/lib/types';

export const eventsChurch: BiblicalEvent[] = [
  // ── Apostolic Fathers (100–200) ──────────────────────────────────
  {
    id: 'church-ignatius-martyrdom',
    track: 'church',
    era: 'apostolic-fathers',
    year: 108,
    approximate: true,
    title: 'Martyrdom of Ignatius of Antioch',
    description:
      'Ignatius, third bishop of Antioch, was arrested during the reign of Emperor Trajan and transported to Rome under armed guard. En route he wrote seven letters to churches in Asia Minor and Rome, addressing church governance, the real presence of Christ in the Eucharist, and the authority of bishops. He was executed in the arena in Rome, likely killed by wild beasts.',
    significance:
      'Ignatius\'s letters are the earliest post-apostolic witness to a threefold ministry of bishop, presbyter, and deacon, and contain the first known use of the phrase "catholic church" (Letter to the Smyrnaeans 8.2). His willingness to die echoes Paul\'s imprisonment epistles and the martyrdom of Stephen.',
    historicalContext:
      'Trajan\'s rescript to Pliny the Younger (c. 112) established the Roman legal framework for prosecuting Christians: they were not to be sought out, but if denounced and refusing to recant, they were to be punished. Ignatius was likely arrested under this policy.',
    figures: ['Ignatius of Antioch'],
    location: { name: 'Rome', lat: 41.8902, lng: 12.4922 },
  },
  {
    id: 'church-polycarp-martyrdom',
    track: 'church',
    era: 'apostolic-fathers',
    year: 155,
    approximate: true,
    title: 'Martyrdom of Polycarp',
    scripture: 'cf. Revelation 2:10',
    description:
      'Polycarp, bishop of Smyrna and a disciple of the apostle John, was arrested at age 86 during a local persecution. When urged to swear by Caesar and revile Christ, he replied: "Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King who saved me?" He was burned at the stake in the stadium at Smyrna.',
    significance:
      'The Martyrdom of Polycarp is the earliest surviving martyrdom account outside the New Testament. It established the literary genre of the martyrdom narrative and introduced the theology of martyrdom as participation in the sufferings of Christ.',
    historicalContext:
      'Polycarp represents a living link between the apostolic age and the second-century church. Irenaeus recorded that Polycarp had been instructed by the apostle John and had conversed with others who had seen the Lord. He visited Rome c. 155 to discuss the date of Easter with Bishop Anicetus.',
    figures: ['Polycarp'],
    location: { name: 'Smyrna', lat: 38.4192, lng: 27.1287 },
  },
  {
    id: 'church-justin-martyr',
    track: 'church',
    era: 'apostolic-fathers',
    year: 155,
    approximate: true,
    title: 'Justin Martyr\'s First Apology',
    description:
      'Justin, a philosopher from Samaria who converted to Christianity, addressed his First Apology to Emperor Antoninus Pius, arguing that Christianity was a rational philosophy deserving legal toleration. The work contains the earliest detailed description of Christian worship, including Sunday assembly, Scripture reading, the president\'s homily, communal prayer, and the Eucharist. He was later beheaded in Rome c. 165.',
    significance:
      'Justin\'s Apology provides the most complete picture of mid-second-century Christian liturgical practice and represents the first major intellectual engagement between Christianity and Greek philosophy. His concept of the logos spermatikos (seeds of the Word) argued that all truth, even in pagan philosophy, derives from Christ.',
    historicalContext:
      'Justin operated a Christian school in Rome and engaged in public debates with pagan and Jewish intellectuals. His Dialogue with Trypho is the earliest surviving Christian apologetic dialogue with Judaism. He was executed under the prefect Rusticus during the reign of Marcus Aurelius.',
    figures: ['Justin Martyr'],
    location: { name: 'Rome', lat: 41.8902, lng: 12.4922 },
  },
  {
    id: 'church-irenaeus',
    track: 'church',
    era: 'apostolic-fathers',
    year: 180,
    approximate: true,
    title: 'Irenaeus Writes Against Heresies',
    description:
      'Irenaeus, bishop of Lyon and a student of Polycarp, wrote Against Heresies (Adversus Haereses), a five-volume refutation of Gnosticism. He systematically exposed Valentinian and other Gnostic systems and argued that the true faith is preserved through the public succession of bishops in churches founded by apostles, especially Rome.',
    significance:
      'Against Heresies is the foundational work of Christian heresiological literature. Irenaeus articulated the concept of apostolic succession, the authority of the four-Gospel canon, and the "rule of faith" (regula fidei) as criteria for authentic Christian teaching. His theology of recapitulation presented Christ as the new Adam who reverses the fall by retracing and redeeming every stage of human life.',
    historicalContext:
      'Irenaeus was a Greek-speaker from Asia Minor who became bishop of the Latin-speaking church in Lyon (Lugdunum) in Gaul, reflecting the cosmopolitan character of second-century Christianity. The Lyon church had suffered a severe persecution in 177, recorded in a letter preserved by Eusebius.',
    figures: ['Irenaeus'],
    location: { name: 'Lyon', lat: 45.7640, lng: 4.8357 },
  },

  // ── Ante-Nicene Fathers (200–325) ────────────────────────────────
  {
    id: 'church-tertullian',
    track: 'church',
    era: 'ante-nicene',
    year: 200,
    approximate: true,
    title: 'Tertullian\'s Theological Writings',
    description:
      'Tertullian of Carthage, trained as a lawyer, became the first major Christian theologian to write in Latin. In approximately thirty surviving treatises, he coined the Latin theological vocabulary for the Trinity: tres personae, una substantia (three persons, one substance). He also wrote influential works on baptism, repentance, prayer, and the relationship between faith and philosophy.',
    significance:
      'Tertullian\'s Trinitarian formula became the foundation of Western orthodox theology and was later adopted by the councils. His legal mind shaped how Latin Christianity articulated doctrine. His famous question "What has Athens to do with Jerusalem?" framed the enduring debate about the relationship between faith and reason.',
    historicalContext:
      'Carthage in Roman North Africa was a major center of Latin Christianity. Tertullian later joined the Montanist movement (c. 207), a charismatic renewal group that emphasized prophetic gifts and strict moral discipline, though his pre-Montanist theological works remained authoritative.',
    figures: ['Tertullian'],
    location: { name: 'Carthage', lat: 36.8528, lng: 10.3234 },
  },
  {
    id: 'church-origen',
    track: 'church',
    era: 'ante-nicene',
    year: 230,
    approximate: true,
    title: 'Origen\'s Biblical Scholarship',
    description:
      'Origen of Alexandria was the most prolific writer of the early church, producing an estimated 6,000 works. He created the Hexapla, a six-column parallel edition of the Old Testament in Hebrew, Greek transliteration, and four Greek translations. He wrote extensive commentaries and homilies on most books of Scripture, and his On First Principles (De Principiis) was the first systematic presentation of Christian theology.',
    significance:
      'Origen established the foundations of biblical scholarship, including textual criticism and allegorical interpretation within a framework of the rule of faith. His theological influence, both positively and through later controversies, shaped Eastern Christianity profoundly. He was later condemned at Constantinople II (553) for certain speculative doctrines, though his exegetical legacy endured.',
    historicalContext:
      'Origen headed the catechetical school of Alexandria from a young age after his father Leonidas was martyred in 202. He later moved to Caesarea Maritima (c. 232) after conflict with Bishop Demetrius. During the Decian persecution (250), he was imprisoned and tortured, dying shortly after his release c. 254.',
    figures: ['Origen'],
    location: { name: 'Alexandria', lat: 31.2001, lng: 29.9187 },
  },
  {
    id: 'church-cyprian-martyrdom',
    track: 'church',
    era: 'ante-nicene',
    year: 258,
    approximate: false,
    title: 'Martyrdom of Cyprian of Carthage',
    description:
      'Cyprian, bishop of Carthage, was executed by beheading on September 14, 258, during the Valerian persecution. He had previously written On the Unity of the Church (De Unitate Ecclesiae) during the Decian persecution, arguing that the bishop is the center of church unity and that separation from the bishop means separation from the church. The official court transcript (Acta Proconsularia) of his trial survives.',
    significance:
      'Cyprian was the first African bishop-martyr. His ecclesiology, summarized in the maxim "He cannot have God as his father who does not have the Church as his mother," profoundly influenced the doctrine of the church in both East and West. His correspondence (81 letters survive) provides the most detailed picture of church life and governance in the mid-third century.',
    historicalContext:
      'The Valerian persecution (257-260) specifically targeted clergy, church properties, and Christian senators. Unlike the earlier Decian persecution which demanded universal sacrifice, Valerian\'s edicts directly attacked the institutional church. The persecution ended with Valerian\'s capture by the Persians in 260.',
    figures: ['Cyprian'],
    location: { name: 'Carthage', lat: 36.8528, lng: 10.3234 },
  },
  {
    id: 'church-anthony-desert',
    track: 'church',
    era: 'ante-nicene',
    year: 270,
    approximate: true,
    title: 'Anthony of Egypt — Desert Monasticism Begins',
    scripture: 'cf. Matthew 19:21',
    description:
      'Anthony, a young Egyptian Christian, heard the Gospel reading "Go, sell all that you have and give to the poor" and took it as a personal call. He withdrew into the Egyptian desert, first to the outskirts of his village, then to an abandoned fort, and finally deep into the desert near the Red Sea. Over decades, his holiness attracted followers who settled nearby, forming the earliest monastic communities.',
    significance:
      'Anthony is regarded as the father of Christian monasticism. His example inspired the entire monastic movement that would preserve learning, Scripture, and civilization through the early medieval period. Athanasius\'s Life of Anthony (written c. 360) became one of the most influential biographies in Christian history.',
    historicalContext:
      'The origins of Egyptian monasticism are rooted in the social and economic conditions of rural Egypt under Roman taxation, as well as the spiritual desire for radical gospel living. Anthony\'s contemporary Pachomius (c. 292-348) would organize the first cenobitic (communal) monasteries, complementing Anthony\'s eremitic (solitary) model.',
    figures: ['Anthony of Egypt'],
    location: { name: 'Egyptian Desert', lat: 28.6500, lng: 32.7500 },
  },
  {
    id: 'church-diocletian-persecution',
    track: 'church',
    era: 'ante-nicene',
    year: 303,
    approximate: false,
    title: 'Diocletian\'s Great Persecution',
    description:
      'On February 23, 303, Emperor Diocletian issued the first of four increasingly severe edicts against Christians. Churches were to be demolished, Scriptures confiscated and burned, and clergy arrested. Subsequent edicts required all citizens to sacrifice to the Roman gods on pain of death. The persecution was enforced most severely in the Eastern Empire and North Africa, producing thousands of martyrs.',
    significance:
      'The Great Persecution was the last and most systematic attempt by the Roman state to destroy Christianity. It tested the church severely, raising questions about how to treat those who had surrendered the Scriptures (traditores) or offered sacrifice under coercion, controversies that fueled the Donatist schism in North Africa.',
    historicalContext:
      'Diocletian\'s co-emperor Galerius is credited as the primary instigator. The persecution produced lasting heroes, including the deacon Lawrence in Rome and the virgin Agnes. It ended in the West under Maxentius (306) and in the East when Galerius issued an edict of toleration on his deathbed in 311.',
    figures: ['Diocletian'],
    location: { name: 'Nicomedia', lat: 40.7627, lng: 29.9194 },
  },
  {
    id: 'church-edict-of-milan',
    track: 'church',
    era: 'ante-nicene',
    year: 313,
    approximate: false,
    title: 'Edict of Milan — Toleration Granted',
    description:
      'Emperors Constantine and Licinius met at Milan and jointly issued a decree establishing religious toleration throughout the Roman Empire. The edict granted Christians full legal rights, restored confiscated church property, and declared that "no one whatsoever should be denied the opportunity to give his heart to the observance of the Christian religion." It effectively ended the era of persecution.',
    significance:
      'The Edict of Milan marks the decisive turning point from a persecuted church to a legally protected one. Within a generation, Christianity moved from the catacombs to the imperial court, transforming the relationship between church and state for the next millennium and beyond.',
    historicalContext:
      'Constantine had defeated Maxentius at the Battle of the Milvian Bridge in October 312, reportedly after seeing a vision of the cross. The edict built on Galerius\'s earlier edict of toleration (311) but went further by mandating the return of all church property. Constantine subsequently became sole emperor and personally presided over the Council of Nicaea.',
    figures: ['Constantine'],
    location: { name: 'Milan', lat: 45.4642, lng: 9.1900 },
  },

  // ── Nicene & Post-Nicene Fathers (325–451) ───────────────────────
  {
    id: 'church-council-nicaea',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 325,
    approximate: false,
    title: 'Council of Nicaea',
    description:
      'Emperor Constantine convened approximately 318 bishops at Nicaea (modern Iznik, Turkey) for the first ecumenical council. The primary issue was the teaching of Arius, an Alexandrian priest who held that the Son of God was a created being. The council produced the Nicene Creed, declaring the Son homoousios (of the same substance) with the Father, and condemned Arianism. It also established the date of Easter and issued twenty canons on church discipline.',
    significance:
      'Nicaea established the theological and conciliar framework for defining orthodox Christian doctrine. The term homoousios became the touchstone of Trinitarian orthodoxy. The council set the precedent for ecumenical councils as the highest authority for resolving doctrinal disputes, a model first established at the Council of Jerusalem (Acts 15).',
    historicalContext:
      'The Arian controversy had caused widespread division across the Eastern church. Athanasius, then a young deacon accompanying Bishop Alexander of Alexandria, played a key role in the theological debates. Despite the council\'s decision, Arianism remained politically powerful for decades, especially under emperors Constantius II and Valens.',
    figures: ['Constantine', 'Athanasius', 'Arius'],
    location: { name: 'Nicaea', lat: 40.4292, lng: 29.7211 },
  },
  {
    id: 'church-athanasius',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 328,
    endYear: 373,
    approximate: true,
    title: 'Athanasius Defends Nicene Orthodoxy',
    description:
      'Athanasius served as bishop of Alexandria for 45 years, during which he was exiled five times by four different emperors for his unwavering defense of the Nicene Creed against Arianism. He wrote On the Incarnation, a foundational Christological treatise, and the Life of Anthony, which popularized monasticism. His 367 Festal Letter contains the earliest list matching the 27-book New Testament canon.',
    significance:
      'Athanasius\'s phrase "Athanasius contra mundum" (Athanasius against the world) captured his solitary stand for orthodoxy when political and ecclesiastical pressures favored Arian compromise. His theological achievement was to demonstrate that the full divinity of Christ is not a philosophical abstraction but the necessary foundation for salvation: only God can save, so if Christ saves, Christ must be God.',
    historicalContext:
      'The decades following Nicaea saw a protracted political and theological struggle. Arian and semi-Arian factions gained imperial favor under several emperors, and Athanasius spent a cumulative 17 years in exile. His cause ultimately triumphed at the Council of Constantinople in 381.',
    figures: ['Athanasius'],
    location: { name: 'Alexandria', lat: 31.2001, lng: 29.9187 },
  },
  {
    id: 'church-cappadocians',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 370,
    endYear: 395,
    approximate: true,
    title: 'Cappadocian Fathers — Trinitarian Theology',
    description:
      'Basil of Caesarea (330-379), Gregory of Nazianzus (329-390), and Gregory of Nyssa (335-395) were three theologians from Cappadocia in central Asia Minor who refined the orthodox doctrine of the Trinity. Basil\'s On the Holy Spirit defended the full divinity of the Spirit. Gregory of Nazianzus\'s Five Theological Orations provided the definitive articulation of Trinitarian doctrine. Gregory of Nyssa\'s Against Eunomius refuted radical Arianism.',
    significance:
      'The Cappadocians resolved the Trinitarian controversy by developing precise theological vocabulary: one ousia (essence/substance) in three hypostases (persons). This formula, adopted at Constantinople I (381), became the permanent orthodox expression of the Trinity in both East and West. Basil also wrote the foundational rule for Eastern monasticism.',
    historicalContext:
      'The Cappadocians worked during the reign of the Arian emperor Valens (364-378), under constant threat of exile and political pressure. Their theology was vindicated at the Council of Constantinople (381), convened by the orthodox emperor Theodosius I, which expanded the Nicene Creed to its present form.',
    figures: ['Basil of Caesarea', 'Gregory of Nazianzus', 'Gregory of Nyssa'],
    location: { name: 'Cappadocia', lat: 38.6431, lng: 34.8290 },
  },
  {
    id: 'church-ambrose',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 374,
    endYear: 397,
    approximate: false,
    title: 'Ambrose of Milan — Bishop and Statesman',
    description:
      'Ambrose was elected bishop of Milan by popular acclamation while still an unbaptized catechumen serving as the provincial governor. He became one of the most influential bishops in the Western church, known for his preaching, hymn writing, and courageous confrontation with imperial power. In 390, he excommunicated Emperor Theodosius I for ordering a massacre of thousands at Thessalonica, requiring him to do public penance before readmission to communion.',
    significance:
      'Ambrose established the principle that the emperor is within the church, not above it, a precedent that shaped church-state relations throughout medieval Christendom. His preaching was instrumental in the conversion of Augustine, and his introduction of antiphonal hymn-singing transformed Western liturgy.',
    historicalContext:
      'Milan, not Rome, was the effective capital of the Western Empire during this period. Ambrose\'s confrontation with Theodosius occurred against the backdrop of the Arian controversy (the empress mother Justina supported Arianism) and increasing barbarian pressure on the empire\'s frontiers.',
    figures: ['Ambrose'],
    location: { name: 'Milan', lat: 45.4642, lng: 9.1900 },
  },
  {
    id: 'church-jerome-vulgate',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 382,
    endYear: 405,
    approximate: true,
    title: 'Jerome Translates the Vulgate',
    description:
      'Commissioned by Pope Damasus I, the scholar Jerome first revised the Latin Gospels in Rome, then relocated to Bethlehem where he spent over two decades translating the entire Bible from Hebrew and Greek into Latin. His translation, known as the Vulgate (from vulgata, "common"), was based on the Hebrew text of the Old Testament rather than the Greek Septuagint, a controversial decision at the time.',
    significance:
      'The Vulgate became the standard Bible of the Western church for over a thousand years and was declared the authoritative Latin text by the Council of Trent (1546). Jerome\'s decision to translate from the Hebrew (hebraica veritas) established the principle that translations should be based on original languages rather than intermediate versions.',
    historicalContext:
      'Jerome was one of the most learned men of his age, fluent in Latin, Greek, and Hebrew, and a student of the rabbi Bar Hanina. He lived in a monastery in Bethlehem from 386 until his death in 420, producing not only the Vulgate but extensive commentaries and a catalog of Christian writers (De Viris Illustribus).',
    figures: ['Jerome'],
    location: { name: 'Bethlehem', lat: 31.7054, lng: 35.2024 },
  },
  {
    id: 'church-chrysostom',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 398,
    endYear: 407,
    approximate: false,
    title: 'John Chrysostom — Bishop of Constantinople',
    description:
      'John Chrysostom ("Golden-mouthed"), trained in the rhetorical schools of Antioch, became archbishop of Constantinople in 398. He delivered extensive verse-by-verse homilies on Genesis, the Psalms, Matthew, John, Acts, and all of Paul\'s epistles, producing the largest surviving body of patristic exegesis. His reforming zeal and public criticism of the extravagance of Empress Eudoxia led to his deposition and exile twice; he died during forced march to a remote exile in 407.',
    significance:
      'Chrysostom\'s homilies remain the most complete patristic commentary on the New Testament and are still used as a primary reference for understanding the Greek fathers\' interpretation of Scripture. His liturgical legacy includes the Divine Liturgy of St. John Chrysostom, the most commonly used Eucharistic service in Eastern Orthodoxy.',
    historicalContext:
      'Constantinople in the late fourth century was the political capital of the Eastern Empire and an increasingly important ecclesiastical see. Chrysostom\'s conflicts with the imperial court, including the "Synod of the Oak" that deposed him, illustrate the tensions between prophetic preaching and political power that echoed Paul\'s own confrontations with authorities.',
    figures: ['John Chrysostom'],
    location: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 },
  },
  {
    id: 'church-augustine',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 397,
    approximate: true,
    title: 'Augustine — Confessions and City of God',
    description:
      'Augustine, bishop of Hippo Regius in North Africa, wrote the Confessions (c. 397), a spiritual autobiography tracing his journey from youthful dissipation through Manichaeism and Neoplatonism to conversion through the reading of Romans 13:13-14 in a Milan garden. After the sack of Rome in 410, he wrote The City of God (413-426), a monumental work distinguishing the heavenly city of God from the earthly city of human ambition, providing a Christian philosophy of history.',
    significance:
      'Augustine is arguably the most influential theologian in Western Christianity. His doctrines of original sin, grace, predestination, and the church shaped medieval Catholicism, and his theology was rediscovered and championed by the Protestant Reformers, particularly Luther and Calvin. Approximately five million words of his writing survive, an unprecedented volume for any ancient author.',
    historicalContext:
      'Augustine lived during the final decades of the Western Roman Empire, watching the collapse of the political order in which Christianity had established itself. The Vandals were besieging Hippo when he died in 430. His works against Pelagianism (which denied the necessity of grace) were endorsed by multiple councils and papal decrees.',
    figures: ['Augustine'],
    location: { name: 'Hippo Regius', lat: 36.8965, lng: 7.7567 },
  },
  {
    id: 'church-council-ephesus',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 431,
    approximate: false,
    title: 'Council of Ephesus',
    description:
      'The third ecumenical council was convened at Ephesus by Emperor Theodosius II to resolve the dispute between Cyril of Alexandria and Nestorius, patriarch of Constantinople. Nestorius objected to calling Mary Theotokos ("God-bearer"), arguing she bore only the human nature of Christ. The council, led by Cyril, affirmed Theotokos as an orthodox title and deposed Nestorius, upholding the unity of Christ\'s person.',
    significance:
      'Ephesus established that the one person of Christ, fully divine and fully human, was born of Mary, suffered, and died. The title Theotokos is not primarily a statement about Mary but about Christ: if Mary bore God incarnate, then the divine and human natures are inseparably united in one person from the moment of conception.',
    historicalContext:
      'The council was contentious and procedurally irregular, with Cyril convening before the Syrian bishops arrived. John of Antioch held a rival council. A fragile reunion was achieved in 433 through the Formula of Union, which both sides accepted. The Nestorian churches that rejected the council eventually spread Christianity eastward along the Silk Road to China.',
    figures: ['Cyril of Alexandria', 'Nestorius'],
    location: { name: 'Ephesus', lat: 37.9411, lng: 27.3419 },
  },
  {
    id: 'church-council-chalcedon',
    track: 'church',
    era: 'nicene-post-nicene',
    year: 451,
    approximate: false,
    title: 'Council of Chalcedon',
    description:
      'The fourth ecumenical council gathered 520 bishops at Chalcedon (modern Kadikoy, Istanbul) and produced the Chalcedonian Definition, the most precise Christological statement of the early church. It declared that Christ is "acknowledged in two natures, without confusion, without change, without division, without separation," united in one person (hypostasis). The council also elevated the see of Constantinople to equal rank with Rome.',
    significance:
      'Chalcedon\'s four negative adverbs ("without confusion, without change, without division, without separation") defined the boundaries of orthodox Christology and remain the standard for Catholic, Orthodox, and Protestant traditions. The definition balanced the concerns of both Alexandrian (unity of Christ) and Antiochene (distinction of natures) theology.',
    historicalContext:
      'The council was convened in response to the "Robber Council" of Ephesus (449), where Eutyches\'s teaching that Christ had only one nature (Monophysitism) had been endorsed through coercion. Churches that rejected Chalcedon (Coptic, Ethiopian, Syrian, Armenian) formed the Oriental Orthodox communion, a division that persists today.',
    figures: ['Leo I'],
    location: { name: 'Chalcedon', lat: 40.9833, lng: 29.0333 },
  },

  // ── Early Medieval Church (451–1000) ─────────────────────────────
  {
    id: 'church-benedict',
    track: 'church',
    era: 'early-medieval-church',
    year: 529,
    approximate: true,
    title: 'Benedict of Nursia Founds Monte Cassino',
    description:
      'Benedict of Nursia, after years as a hermit at Subiaco, established a monastery at Monte Cassino in southern Italy and composed his Rule (Regula Benedicti). The Rule organized monastic life around the principle of ora et labora (pray and work), dividing the day into eight canonical hours of prayer, manual labor, and sacred reading (lectio divina). It emphasized stability, obedience, and moderation.',
    significance:
      'The Rule of St. Benedict became the foundational document of Western monasticism. Benedictine monasteries preserved classical learning, copied manuscripts, cultivated land, and provided education and hospitality throughout the medieval period. Pope Gregory the Great called Benedict "a man of God" and devoted an entire book of his Dialogues to his life.',
    historicalContext:
      'Benedict wrote his Rule during the transition from Roman to barbarian rule in Italy. The Ostrogothic kingdom was collapsing, and Justinian\'s armies were reconquering Italy in devastating wars. Monasteries became islands of stability and learning in a fragmenting political landscape.',
    figures: ['Benedict of Nursia'],
    location: { name: 'Monte Cassino', lat: 41.4903, lng: 13.8139 },
  },
  {
    id: 'church-gregory-great',
    track: 'church',
    era: 'early-medieval-church',
    year: 590,
    endYear: 604,
    approximate: false,
    title: 'Gregory the Great — Pope',
    description:
      'Gregory I, a former Roman prefect turned monk, became pope in 590 and is considered the last of the four great Latin Doctors of the Church. He reorganized papal administration, sent Augustine of Canterbury to evangelize the Anglo-Saxons in England (597), wrote Pastoral Care (Liber Regulae Pastoralis) as a handbook for bishops, composed homilies on Ezekiel and the Gospels, and promoted liturgical music later named "Gregorian chant" in his honor.',
    significance:
      'Gregory bridged the ancient and medieval worlds, transforming the papacy from a primarily spiritual office into the administrative and political leader of Western Christendom. His mission to England led to the conversion of the Anglo-Saxon kingdoms, which in turn produced missionaries like Boniface who evangelized continental Europe.',
    historicalContext:
      'Gregory governed during the Lombard invasions of Italy, when the Byzantine emperor was unable to defend Rome. He negotiated directly with the Lombards, fed the population from papal estates, and effectively governed the city, establishing the temporal power of the papacy. Over 850 of his letters survive, providing an extraordinary window into early medieval administration.',
    figures: ['Gregory the Great'],
    location: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  },
  {
    id: 'church-maximus-confessor',
    track: 'church',
    era: 'early-medieval-church',
    year: 662,
    approximate: true,
    title: 'Maximus the Confessor\'s Witness',
    description:
      'Maximus, a former imperial secretary turned monk, became the foremost opponent of Monothelitism, the doctrine that Christ had only one will. He argued that Christ must have two wills (divine and human) to truly redeem the whole human person. For refusing to accept the imperial Typos suppressing the debate, his tongue was cut out and his right hand amputated. He died in exile in 662. His theology was vindicated at the Third Council of Constantinople (681).',
    significance:
      'Maximus\'s teaching that Christ possesses a complete human will, freely aligned with the divine will, preserved the full humanity of Christ against imperially sponsored compromise. His broader theological synthesis of Christology, cosmology, and asceticism made him one of the most profound thinkers of the Byzantine tradition.',
    historicalContext:
      'The Monothelite controversy was partly driven by imperial desire to reconcile the Chalcedonian and non-Chalcedonian churches in the face of the Islamic conquests, which had stripped away Egypt, Syria, and Palestine from Byzantine control. Maximus stood against both imperial and patriarchal authority in defense of Chalcedonian orthodoxy.',
    figures: ['Maximus the Confessor'],
    location: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 },
  },
  {
    id: 'church-john-damascus',
    track: 'church',
    era: 'early-medieval-church',
    year: 730,
    approximate: true,
    title: 'John of Damascus — Last Eastern Father',
    description:
      'John of Damascus (Yuhanna ibn Mansur), a Christian monk living under Islamic rule in the Umayyad Caliphate, wrote the Fount of Knowledge, whose third part, the Exact Exposition of the Orthodox Faith, systematically compiled the entire tradition of Greek patristic theology in 100 chapters. He also wrote three treatises defending the veneration of icons against the Iconoclast emperor Leo III.',
    significance:
      'John of Damascus is traditionally regarded as the last of the Eastern church fathers. His Exact Exposition served as the standard textbook of Eastern Orthodox theology for centuries and influenced Thomas Aquinas\'s Summa Theologiae. His defense of icons provided the theological foundation for the Second Council of Nicaea (787).',
    historicalContext:
      'Uniquely among the church fathers, John lived and wrote under Muslim rather than Roman rule. His grandfather had negotiated the surrender of Damascus to the Arab armies in 635. His position outside the Byzantine Empire gave him freedom to oppose the Iconoclast policies of Emperor Leo III without fear of imperial retribution.',
    figures: ['John of Damascus'],
    location: { name: 'Mar Saba Monastery', lat: 31.7033, lng: 35.3297 },
  },
  {
    id: 'church-bede',
    track: 'church',
    era: 'early-medieval-church',
    year: 731,
    approximate: false,
    title: 'Venerable Bede — Ecclesiastical History',
    description:
      'Bede, a monk at the twin monasteries of Wearmouth-Jarrow in Northumbria, completed his Ecclesiastical History of the English People in 731. The work traces Christianity in Britain from the Roman period through the conversion of the Anglo-Saxons. Bede also wrote extensive biblical commentaries, chronological works that popularized the AD dating system, and scientific treatises on natural phenomena.',
    significance:
      'Bede is called the "Father of English History." His careful use of sources and critical methodology set the standard for medieval historiography. His biblical commentaries transmitted patristic exegesis to the medieval West, and his chronological works established the BC/AD dating framework used worldwide today.',
    historicalContext:
      'Bede spent his entire life (673-735) within the monastery, yet had access to one of the finest libraries in Europe, assembled by his abbot Benedict Biscop from travels to Rome. Northumbria in Bede\'s time was a major center of learning, producing the Lindisfarne Gospels and the Codex Amiatinus.',
    figures: ['Bede'],
    location: { name: 'Jarrow', lat: 54.9808, lng: -1.4725 },
  },
  {
    id: 'church-nicaea-ii',
    track: 'church',
    era: 'early-medieval-church',
    year: 787,
    approximate: false,
    title: 'Second Council of Nicaea — Icons Restored',
    description:
      'The seventh ecumenical council, convened by Empress Irene, reversed over fifty years of Iconoclasm by affirming the legitimacy of venerating icons. The council distinguished between latreia (worship due to God alone) and proskynesis (veneration or honor given to icons, the cross, and the saints). It declared that the honor paid to the image passes to the prototype it represents.',
    significance:
      'Nicaea II resolved the Iconoclasm controversy by providing a theological basis for sacred art in Christian worship. The distinction between worship and veneration became fundamental to both Eastern Orthodox and Roman Catholic theology and practice. The council also affirmed the continuity of faith from the apostles through the seven ecumenical councils.',
    historicalContext:
      'The Iconoclast controversy had begun in 726 when Emperor Leo III ordered the destruction of icons, arguing they violated the commandment against graven images. The theological debate paralleled political struggles between the emperor and the monasteries, which were major producers and defenders of icons. Although Nicaea II restored icons, a second wave of Iconoclasm (815-843) followed before the final "Triumph of Orthodoxy" in 843.',
    figures: ['Irene'],
    location: { name: 'Nicaea', lat: 40.4292, lng: 29.7211 },
  },
];
