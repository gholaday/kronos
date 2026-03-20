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

  // ── High & Late Medieval Church (1000–1500) ────────────────────
  {
    id: 'church-great-schism',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1054,
    approximate: false,
    title: 'Great Schism — East and West Divide',
    description:
      'Cardinal Humbert, papal legate of Pope Leo IX, placed a bull of excommunication on the altar of the Hagia Sophia against Patriarch Michael Cerularius of Constantinople. Cerularius responded by excommunicating the papal legates. The mutual excommunications formalized centuries of growing estrangement between the Latin West and Greek East over issues including the filioque clause in the Nicene Creed, papal authority, liturgical practices (leavened vs. unleavened bread), and clerical celibacy.',
    significance:
      'The Great Schism permanently divided Christendom into the Roman Catholic and Eastern Orthodox communions, a division that persists to this day despite the mutual lifting of excommunications in 1965 by Pope Paul VI and Patriarch Athenagoras. The schism shattered the visible unity of the church that had been maintained, however imperfectly, since Pentecost.',
    historicalContext:
      'Tensions between Rome and Constantinople had been building for centuries, rooted in linguistic, cultural, and political differences between the Latin West and Greek East. Previous ruptures (the Acacian Schism of 484-519, the Photian Schism of 863-867) had been healed, but the 1054 breach proved permanent. The Norman conquest of Byzantine southern Italy and the later sack of Constantinople during the Fourth Crusade (1204) deepened the hostility beyond repair.',
    figures: ['Michael Cerularius'],
    location: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 },
  },
  {
    id: 'church-anselm',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1098,
    approximate: true,
    title: 'Anselm of Canterbury — Cur Deus Homo',
    description:
      'Anselm, archbishop of Canterbury, completed Cur Deus Homo ("Why God Became Man"), the most influential medieval treatise on the atonement. He argued that human sin created an infinite debt of honor owed to God that no finite creature could repay, and that only a God-man (Christ) could make satisfaction sufficient to restore the broken relationship between God and humanity. Anselm also wrote the Proslogion, containing his famous ontological argument for God\'s existence.',
    significance:
      'Anselm\'s satisfaction theory of the atonement provided the dominant Western framework for understanding the cross for centuries, influencing both Catholic and later Protestant soteriology. His method of "faith seeking understanding" (fides quaerens intellectum) established the program for scholastic theology, earning him the title "Father of Scholasticism."',
    historicalContext:
      'Anselm wrote during the Investiture Controversy, when the church was asserting its independence from secular rulers. He was twice exiled from England for defending papal authority against King William II and Henry I. His theology was shaped by the feudal honor culture of his time, which is reflected in the "satisfaction" language of Cur Deus Homo.',
    figures: ['Anselm of Canterbury'],
    location: { name: 'Canterbury', lat: 51.2802, lng: 1.0789 },
  },
  {
    id: 'church-bernard-clairvaux',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1115,
    endYear: 1153,
    approximate: true,
    title: 'Bernard of Clairvaux — Cistercian Reform',
    description:
      'Bernard entered the newly reformed Cistercian order at Citeaux in 1113 and founded the abbey of Clairvaux in 1115, which became the motherhouse of 68 daughter monasteries. His mystical commentaries on the Song of Solomon (86 sermons), his treatise On Loving God, and his hymns (including "O Sacred Head Now Wounded") made him the most influential churchman of the twelfth century. He preached the Second Crusade (1147) and was instrumental in condemning the rationalist theology of Peter Abelard at the Council of Sens (1140).',
    significance:
      'Bernard revitalized Western monasticism through the Cistercian reform, emphasizing manual labor, simplicity, and contemplative prayer over the liturgical elaboration of Cluny. His mystical theology of love and union with Christ influenced later mystics including Meister Eckhart, Teresa of Avila, and Martin Luther, who called him "the best monk that ever lived."',
    historicalContext:
      'Bernard operated at the intersection of spiritual and political authority. He mediated papal schisms, advised kings, and shaped crusading ideology. His clash with Abelard represented the tension between monastic contemplation and emerging scholastic rationalism that would define twelfth-century intellectual life.',
    figures: ['Bernard of Clairvaux'],
    location: { name: 'Clairvaux', lat: 48.1508, lng: 4.7753 },
  },
  {
    id: 'church-fourth-lateran',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1215,
    approximate: false,
    title: 'Fourth Lateran Council',
    description:
      'Pope Innocent III convened the Fourth Lateran Council, the largest medieval council, with over 400 bishops, 800 abbots and priors, and representatives of secular rulers. The council issued 70 decrees, including the first official use of the term "transubstantiation" to describe the eucharistic change of bread and wine into the body and blood of Christ (Canon 1). It mandated annual confession and communion for all Christians (Canon 21), regulated preaching, and authorized the crusade against the Albigensian heresy.',
    significance:
      'The Fourth Lateran Council represents the high-water mark of medieval papal authority and defined doctrines that would become central points of contention in the Reformation. The doctrine of transubstantiation, the requirement of sacramental confession, and the assertion of papal supremacy were all later challenged by Protestant reformers who sought to return to what they considered more biblical foundations.',
    historicalContext:
      'Innocent III was the most powerful pope of the medieval period, asserting temporal authority over kings and claiming to be the Vicar of Christ on earth. The council met in the context of the Albigensian Crusade against the Cathar heresy in southern France and the broader consolidation of ecclesiastical power that characterized the thirteenth century.',
    figures: ['Innocent III'],
    location: { name: 'Rome', lat: 41.9022, lng: 12.4539 },
  },
  {
    id: 'church-francis-assisi',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1209,
    approximate: true,
    title: 'Francis of Assisi Founds the Franciscans',
    description:
      'Francis of Assisi, the son of a wealthy merchant, renounced his inheritance and embraced radical poverty after hearing the gospel reading of Matthew 10:7-10 ("Take no gold, nor silver... no bag for your journey"). He gathered companions and received verbal approval from Pope Innocent III for a simple rule of life based on literal obedience to Jesus\' instructions to the apostles. The Franciscan movement grew explosively, with thousands joining within a decade.',
    significance:
      'The Franciscan order, along with the Dominicans, represented a revolutionary new form of religious life: mendicant friars who lived among the people rather than in cloistered monasteries. Francis\'s radical identification with Christ\'s poverty and suffering, culminating in his reported reception of the stigmata in 1224, inspired a renewal of popular devotion that revitalized medieval Christianity.',
    historicalContext:
      'Francis emerged during a period of growing wealth, urbanization, and ecclesiastical corruption in Western Europe. His movement addressed the same dissatisfaction with institutional Christianity that had fueled heretical movements like the Cathars and Waldensians, but channeled it into orthodox devotion. The Franciscans and Dominicans quickly became the leading intellectual and pastoral forces in the medieval church.',
    figures: ['Francis of Assisi'],
    location: { name: 'Assisi', lat: 43.0707, lng: 12.6196 },
  },
  {
    id: 'church-aquinas',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1265,
    endYear: 1274,
    approximate: true,
    title: 'Thomas Aquinas — Summa Theologiae',
    description:
      'Thomas Aquinas, a Dominican friar, composed the Summa Theologiae, the most comprehensive systematic theology of the medieval period. Drawing on Aristotelian philosophy (newly available through Arabic and Latin translations), patristic theology (especially Augustine and John of Damascus), and Scripture, Aquinas addressed virtually every theological question in a rigorous question-and-answer format spanning three parts and thousands of articles. He died in 1274, leaving the work unfinished.',
    significance:
      'The Summa Theologiae became the standard textbook of Catholic theology and was placed on the altar alongside the Bible at the Council of Trent. Aquinas\'s synthesis of faith and reason, his doctrine of analogy, his natural law ethics, and his sacramental theology shaped Catholic thought definitively. The Reformers both drew upon and reacted against his legacy, particularly his teaching on grace, merit, and the relationship between nature and grace.',
    historicalContext:
      'Aquinas wrote during the intellectual ferment of the thirteenth-century university system, when the rediscovery of Aristotle\'s complete works through Arabic translations (particularly those of Averroes and Avicenna) posed a profound challenge to Christian theology. His achievement was to demonstrate that Aristotelian philosophy could serve as a handmaid to Christian theology without compromising revealed truth.',
    figures: ['Thomas Aquinas'],
    location: { name: 'Paris / Naples', lat: 48.8566, lng: 2.3522 },
  },
  {
    id: 'church-papal-schism',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1378,
    endYear: 1417,
    approximate: false,
    title: 'Western Papal Schism',
    description:
      'Following the contentious election of Urban VI in 1378, a faction of cardinals declared the election invalid and elected Clement VII as a rival pope, who established his court at Avignon. For nearly forty years, Western Christendom was divided between two (and eventually three) competing papal claimants, each excommunicating the others\' followers. The schism was finally resolved at the Council of Constance (1414-1418), which deposed all three claimants and elected Martin V.',
    significance:
      'The Western Schism severely damaged papal credibility and authority. The spectacle of rival popes excommunicating each other undermined claims of papal infallibility and universal jurisdiction. The conciliarist movement that emerged argued that a general council held authority over the pope, a position that, though eventually defeated, foreshadowed the Reformation\'s challenge to papal supremacy.',
    historicalContext:
      'The schism followed the Avignon Papacy (1309-1377), during which the popes resided in southern France under French royal influence, a period Petrarch called the "Babylonian Captivity of the Church." Catherine of Siena had successfully urged Pope Gregory XI to return to Rome in 1377, but his death triggered the crisis that produced the schism.',
    figures: ['Urban VI', 'Clement VII'],
    location: { name: 'Rome / Avignon', lat: 41.9022, lng: 12.4539 },
  },
  {
    id: 'church-wycliffe',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1382,
    approximate: true,
    title: 'Wycliffe\'s English Bible and Reform',
    description:
      'John Wycliffe, an Oxford theologian, supervised the first complete translation of the Bible into English (from the Latin Vulgate) and articulated a program of church reform that anticipated the Reformation by over a century. He argued that Scripture alone is the supreme authority for Christian faith and practice, denied transubstantiation, rejected the papacy as an institution without biblical warrant, and insisted that the Bible should be accessible to every literate person in their own language. His followers, the Lollards, carried his teachings across England.',
    significance:
      'Wycliffe is called the "Morning Star of the Reformation." His insistence on sola scriptura (Scripture alone), his rejection of papal claims, and his demand for vernacular Scripture directly anticipated Luther, Calvin, and Tyndale. The Council of Constance posthumously condemned him in 1415 and ordered his remains exhumed and burned.',
    historicalContext:
      'Wycliffe was protected during his lifetime by John of Gaunt and the English crown, who found his anti-papal arguments politically useful during the Western Schism. His academic positions at Oxford gave his ideas intellectual credibility. The Lollard movement he inspired was driven underground by persecution under Henry IV but survived as an underground tradition until the Reformation.',
    figures: ['John Wycliffe'],
    location: { name: 'Oxford', lat: 51.7520, lng: -1.2577 },
  },
  {
    id: 'church-hus',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1415,
    approximate: false,
    title: 'Jan Hus Martyred at Constance',
    description:
      'Jan Hus, rector of the University of Prague and the leading preacher in Bohemia, was summoned to the Council of Constance under a promise of safe conduct from Emperor Sigismund. Influenced by Wycliffe\'s writings, Hus had preached against indulgences, clerical corruption, and papal authority, insisting that Christ alone is the head of the church. The council condemned him as a heretic, and he was burned at the stake on July 6, 1415, reportedly singing hymns as the flames consumed him.',
    significance:
      'Hus\'s execution made him a national hero in Bohemia and sparked the Hussite Wars (1419-1434), the first successful military resistance to papal authority in European history. His followers maintained an independent church in Bohemia that anticipated Protestant principles, including communion in both kinds for the laity. Luther later acknowledged his debt to Hus, declaring at Leipzig (1519), "We are all Hussites without knowing it."',
    historicalContext:
      'The Council of Constance (1414-1418) was primarily convened to end the Western Schism, but also addressed reform and heresy. Hus traveled to Constance believing the emperor\'s safe conduct would protect him. The council\'s violation of this pledge became a cause celebre that discredited both conciliar and papal authority in the eyes of many, paving the way for the Reformation a century later.',
    figures: ['Jan Hus'],
    location: { name: 'Constance', lat: 47.6779, lng: 9.1732 },
  },
  {
    id: 'church-council-florence',
    track: 'church',
    era: 'high-late-medieval-church',
    year: 1439,
    approximate: false,
    title: 'Council of Florence — Failed Reunion',
    description:
      'The Council of Florence (also called Basel-Ferrara-Florence) achieved a short-lived reunion between the Roman Catholic and Eastern Orthodox churches. Byzantine Emperor John VIII Palaiologos and Patriarch Joseph II of Constantinople traveled to Italy seeking Western military aid against the Ottoman Turks. After prolonged debates on the filioque, papal primacy, purgatory, and the eucharist, the Greek delegation signed the decree of union (Laetentur Caeli) on July 6, 1439.',
    significance:
      'The reunion was repudiated by the Orthodox faithful and most Eastern clergy upon the delegates\' return. Mark of Ephesus, the one Orthodox bishop who refused to sign, was hailed as a hero. The failure demonstrated that the theological and ecclesial differences between East and West had become irreconcilable through diplomatic means. The council also defined the doctrine of purgatory and papal primacy in terms that would later be contested by the Reformers.',
    historicalContext:
      'The council met against the backdrop of the Ottoman threat to Constantinople, which would fall in 1453. The Greek delegation signed partly under political duress, needing Western military assistance. The council\'s definitions of papal primacy and purgatory reflected Western theological development that had occurred independently of Eastern input since the Great Schism.',
    figures: ['John VIII Palaiologos'],
    location: { name: 'Florence', lat: 43.7696, lng: 11.2558 },
  },

  // ── Protestant Reformation (1500–1650) ────────────────────
  {
    id: 'church-95-theses',
    track: 'church',
    era: 'reformation',
    year: 1517,
    approximate: false,
    title: 'Luther\'s 95 Theses',
    description:
      'On October 31, 1517, Martin Luther, an Augustinian friar and professor of theology at the University of Wittenberg, posted his Ninety-Five Theses on the door of the Castle Church. The theses challenged the sale of indulgences, particularly the campaign of Johann Tetzel, who promised that purchasing an indulgence could release souls from purgatory. Luther argued that the pope had no authority over purgatory, that true repentance involves the entire life of the believer (Thesis 1), and that Christians should be taught that buying pardons does not compare with being forgiven by Christ through faith. Though written in Latin for academic debate, the theses were quickly translated into German and spread across Europe within weeks thanks to the printing press.',
    significance:
      'The 95 Theses are traditionally regarded as the spark that ignited the Protestant Reformation, the most consequential division in Western Christianity since the Great Schism. Luther\'s challenge to indulgences quickly expanded into a comprehensive critique of papal authority, sacramental theology, and the doctrine of justification, leading to the recovery of sola scriptura (Scripture alone), sola fide (faith alone), and sola gratia (grace alone) as foundational Protestant principles.',
    scripture: 'Romans 1:17; Romans 3:21-28; Ephesians 2:8-9',
    historicalContext:
      'Luther\'s protest emerged from a convergence of forces: widespread popular resentment of ecclesiastical corruption, the humanist recovery of biblical languages (Erasmus had published his Greek New Testament in 1516), and the political interests of German princes who chafed under papal taxation. The printing press, invented by Gutenberg only sixty years earlier, enabled Luther\'s ideas to spread with unprecedented speed, making him the first figure in history whose message was amplified by mass media.',
    figures: ['Martin Luther', 'Johann Tetzel'],
    location: { name: 'Wittenberg', lat: 51.8671, lng: 12.6368 },
  },
  {
    id: 'church-diet-worms',
    track: 'church',
    era: 'reformation',
    year: 1521,
    approximate: false,
    title: 'Diet of Worms — "Here I Stand"',
    description:
      'Emperor Charles V summoned Martin Luther to the Imperial Diet at Worms to answer charges of heresy. On April 18, 1521, Luther was presented with a table of his writings and asked to recant. After a day\'s reflection, he delivered his famous reply: "Unless I am convinced by the testimony of the Scriptures or by clear reason... I cannot and will not recant anything, since it is neither safe nor right to go against conscience. Here I stand. I can do no other. God help me. Amen." The emperor issued the Edict of Worms, declaring Luther an outlaw, but Elector Frederick the Wise arranged his "kidnapping" to the Wartburg Castle, where Luther translated the New Testament into German in eleven weeks.',
    significance:
      'Luther\'s stand at Worms established the principle of individual conscience informed by Scripture against institutional ecclesiastical authority. His German New Testament (published September 1522) was a landmark of vernacular Bible translation that shaped the modern German language and inspired translations across Europe, including Tyndale\'s English New Testament (1526). The event marks the point of no return for the Reformation — reconciliation with Rome was no longer possible.',
    scripture: 'Acts 5:29; 2 Timothy 3:16-17',
    historicalContext:
      'Charles V, newly elected Holy Roman Emperor at age 19, was committed to maintaining Catholic unity in his vast domains. However, the political fragmentation of the Holy Roman Empire into hundreds of semi-autonomous principalities meant he could not enforce the edict. German princes who protected Luther gained both religious independence and political leverage against the emperor, beginning the process that would culminate in the Peace of Augsburg (1555).',
    figures: ['Martin Luther', 'Charles V', 'Frederick the Wise'],
    location: { name: 'Worms', lat: 49.6341, lng: 8.3507 },
  },
  {
    id: 'church-augsburg-confession',
    track: 'church',
    era: 'reformation',
    year: 1530,
    approximate: false,
    title: 'Augsburg Confession',
    description:
      'Philip Melanchthon, Luther\'s closest collaborator, drafted the Augsburg Confession and presented it to Emperor Charles V at the Imperial Diet of Augsburg on June 25, 1530. The confession articulated Lutheran theology in 28 articles, covering justification by faith alone, the authority of Scripture, the proper distinction between Law and Gospel, and the nature of the church and sacraments. Written in a deliberately irenic tone, it aimed to demonstrate that Lutheran teaching was in continuity with the ancient catholic faith and departed only from medieval additions that lacked scriptural warrant.',
    significance:
      'The Augsburg Confession became the foundational confessional document of Lutheranism and the model for subsequent Protestant confessions of faith. Its presentation at an imperial diet gave the Reformation formal political recognition. The confession\'s careful balance of evangelical conviction and catholic continuity established the pattern of confessional Protestantism that would define European Christianity for centuries.',
    scripture: 'Romans 3:21-26; Romans 4:5; Galatians 2:16',
    historicalContext:
      'Charles V called the Diet of Augsburg hoping to resolve the religious division threatening his empire. The Ottoman Turks under Suleiman the Magnificent had besieged Vienna in 1529, and the emperor needed Protestant military support. This political leverage gave the Lutherans an opportunity to present their case formally. When reconciliation failed, the Protestant princes formed the Schmalkaldic League (1531) for mutual defense.',
    figures: ['Philip Melanchthon', 'Martin Luther', 'Charles V'],
    location: { name: 'Augsburg', lat: 48.3705, lng: 10.8978 },
  },
  {
    id: 'church-act-supremacy',
    track: 'church',
    era: 'reformation',
    year: 1534,
    approximate: false,
    title: 'English Reformation — Act of Supremacy',
    description:
      'The English Parliament passed the Act of Supremacy, declaring King Henry VIII the "Supreme Head on earth of the Church of England," severing England\'s allegiance to the papacy. The immediate cause was Pope Clement VII\'s refusal to annul Henry\'s marriage to Catherine of Aragon, but the act built on longstanding English anti-papal sentiment and the influence of reformers like Thomas Cranmer and Thomas Cromwell. The dissolution of the monasteries (1536-1541) followed, transferring vast ecclesiastical wealth to the crown and gentry.',
    significance:
      'The English Reformation created a distinct national church that would develop its own theological identity, combining Catholic liturgical tradition with Protestant doctrine. The Church of England\'s via media (middle way) between Rome and Geneva became the basis of the worldwide Anglican Communion. The dissolution of the monasteries was the largest redistribution of property in English history since the Norman Conquest, permanently altering the social and economic landscape.',
    scripture: 'Romans 13:1-7; 1 Peter 2:13-17',
    historicalContext:
      'Henry\'s break with Rome was initially political rather than theological — he died believing in transubstantiation and clerical celibacy. True theological reform came under his successors: Edward VI\'s reign (1547-1553) saw Cranmer\'s Book of Common Prayer and the Forty-Two Articles. After Mary I\'s brief Catholic restoration (1553-1558), Elizabeth I\'s Settlement of 1559 established the moderate Protestantism that defined Anglicanism.',
    figures: ['Henry VIII', 'Thomas Cranmer', 'Thomas More'],
    location: { name: 'London', lat: 51.5074, lng: -0.1278 },
  },
  {
    id: 'church-calvin-institutes',
    track: 'church',
    era: 'reformation',
    year: 1536,
    approximate: false,
    title: 'Calvin\'s Institutes of the Christian Religion',
    description:
      'John Calvin, a French lawyer turned reformer, published the first edition of his Institutes of the Christian Religion in Basel at age 26. Originally a slim six-chapter handbook, it grew through successive editions into the most comprehensive and influential systematic theology of the Reformation (final edition 1559, 80 chapters in four books). Calvin settled in Geneva in 1536 at the urging of Guillaume Farel and transformed the city into a model Reformed community, establishing a consistory for church discipline, an academy for training ministers, and a system of governance that influenced republican political theory.',
    significance:
      'Calvin\'s Institutes provided the Reformed tradition with its definitive theological framework: the sovereignty of God, unconditional election, the authority of Scripture, covenant theology, and the "third use of the law" as a guide for Christian living. His theology shaped the Reformed churches of Switzerland, France (Huguenots), the Netherlands, Scotland (Knox), England (Puritans), and eventually colonial America. His emphasis on God\'s sovereignty over all of life profoundly influenced Western political, economic, and intellectual development.',
    scripture: 'Romans 8:28-30; Romans 9:10-24; Ephesians 1:3-14; John 6:37-44',
    historicalContext:
      'Calvin fled France after the Affair of the Placards (1534), when anti-Mass posters were placed even on the door of King Francis I\'s bedchamber, triggering a wave of persecution against French Protestants. Basel, where Calvin published the first Institutes, was a center of humanist learning and printing. Geneva\'s strategic location between France, Italy, and the German lands made it a natural hub for the international Reformed movement.',
    figures: ['John Calvin', 'Guillaume Farel'],
    location: { name: 'Geneva', lat: 46.2044, lng: 6.1432 },
  },
  {
    id: 'church-council-trent',
    track: 'church',
    era: 'reformation',
    year: 1545,
    endYear: 1563,
    approximate: false,
    title: 'Council of Trent — Counter-Reformation',
    description:
      'The Council of Trent, convened by Pope Paul III and meeting in three sessions over eighteen years (1545-1547, 1551-1552, 1562-1563), was the Catholic Church\'s definitive response to the Protestant Reformation. The council reaffirmed and clarified Catholic doctrine on every point contested by the Reformers: justification by faith and works together, the seven sacraments, transubstantiation, the authority of Scripture and tradition equally, the legitimacy of indulgences, purgatory, the veneration of saints, and papal supremacy. It also enacted sweeping disciplinary reforms, including the establishment of seminaries for priestly training, requirements for bishops to reside in their dioceses, and the reform of religious orders.',
    significance:
      'Trent defined Roman Catholic identity for the next four centuries until the Second Vatican Council (1962-1965). Its doctrinal decrees drew clear lines between Catholic and Protestant teaching, ending hopes of reunification. Its disciplinary reforms addressed many of the legitimate grievances that had fueled the Reformation, producing a revitalized, better-educated, and more disciplined Catholic clergy. The council launched the Counter-Reformation, which recovered much of Central Europe for Catholicism through the Jesuits, reformed religious orders, and Catholic political power.',
    scripture: 'James 2:14-26; John 6:53-56; Matthew 16:18-19',
    historicalContext:
      'The council was delayed for decades by the rivalry between Charles V (who wanted doctrinal reconciliation with Protestants) and the papacy (which feared a council might assert authority over the pope). Meeting in Trent, an imperial city on the Italian side of the Alps, was a compromise. The Jesuit order, founded by Ignatius of Loyola in 1540, provided the intellectual and missionary energy for the Counter-Reformation that Trent authorized.',
    figures: ['Pope Paul III', 'Charles V'],
    location: { name: 'Trent', lat: 46.0748, lng: 11.1217 },
  },
  {
    id: 'church-peace-augsburg',
    track: 'church',
    era: 'reformation',
    year: 1555,
    approximate: false,
    title: 'Peace of Augsburg',
    description:
      'The Peace of Augsburg, signed on September 25, 1555, established the principle of cuius regio, eius religio ("whose realm, his religion"), granting each prince within the Holy Roman Empire the right to determine whether his territory would be Catholic or Lutheran. The settlement recognized Lutheranism as a legal religion alongside Catholicism for the first time, but excluded Calvinists, Anabaptists, and other Reformed groups. An "ecclesiastical reservation" clause attempted to prevent further Protestant expansion by requiring Catholic bishops who converted to forfeit their territories.',
    significance:
      'The Peace of Augsburg was the first permanent legal recognition of religious pluralism in European history. It ended decades of religious warfare within the Holy Roman Empire, though only temporarily — the exclusion of Calvinists and unresolved tensions led eventually to the catastrophic Thirty Years\' War (1618-1648). The principle of cuius regio, eius religio established the framework of confessional states that would define European politics until the Enlightenment.',
    historicalContext:
      'Charles V, exhausted by decades of fruitless attempts to restore religious unity, abdicated shortly after the peace was signed, dividing his domains between his son Philip II (Spain, Netherlands, Italy) and his brother Ferdinand I (the Empire). The peace reflected the political reality that the emperor could not defeat the Protestant princes militarily, especially while fighting the Ottoman Turks on his eastern frontier.',
    figures: ['Charles V', 'Ferdinand I'],
    location: { name: 'Augsburg', lat: 48.3705, lng: 10.8978 },
  },
];
