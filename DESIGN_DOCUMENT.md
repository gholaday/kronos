# Chronos: Biblical Timeline Explorer

## Design Document — v1

---

## 1. Concept

**Chronos** is an interactive, visual timeline explorer that maps the narrative of Scripture — from Abraham through the early Church — while weaving in two layers of context that make the Bible come alive:

1. **Old Testament ↔ New Testament cross-references**: Visual connections showing how the New Testament fulfills, echoes, and reinterprets the Old. Prophecy and fulfillment. Type and antitype. Recurring patterns across covenants.
2. **Secular historical context**: A parallel track of world history events (Egyptian, Assyrian, Babylonian, Persian, Greek, Roman) running alongside the biblical timeline so users can see _when_ biblical events happened relative to the empires and civilizations surrounding Israel.

The result is a tool that helps users see the Bible not as a disconnected collection of stories but as a single unfolding narrative set within real human history.

### Why This Matters

- Many readers struggle to place biblical events in historical time. When did Abraham live relative to the Egyptian pyramids? Was Daniel in Babylon before or after Homer wrote the Iliad? Was Herod the Great a contemporary of Cicero? Chronos answers these questions visually.
- The Old and New Testaments are deeply interwoven — the NT authors constantly quote, allude to, and reinterpret the OT. But most readers encounter these connections only as footnotes. Chronos makes them visible, spatial, and explorable.
- Seeing Scripture in its historical context doesn't diminish it — it grounds it. The Exodus isn't just a story; it happened during the reign of real pharaohs. The Babylonian exile wasn't metaphorical; Nebuchadnezzar's armies are documented in cuneiform. Jesus was born under Augustus and crucified under Tiberius.

---

## 2. Core Features

### 2.1 Zoomable Timeline with Era Layers

The central UI element is a horizontal, scrollable timeline spanning from the Patriarchal period (~2000 BC) through the early Church (~100 AD), with optional extension back to Creation narratives and forward to the completion of the NT canon.

**Zoom Levels:**

| Level                        | What You See                                                                                                                                                                                                             | Interaction                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Macro** (fully zoomed out) | Broad biblical eras as colored bands (Patriarchs, Exodus & Conquest, Judges, United Kingdom, Divided Kingdom, Exile, Return & Restoration, Intertestamental Period, Life of Christ, Early Church). Minimal event detail. | Get the sweep of redemptive history at a glance. See how long Israel waited between the Testaments.                                                    |
| **Meso** (mid-zoom)          | Individual events appear as dots/pins along the timeline. Short titles visible. Era bands remain as background context.                                                                                                  | Browse and scan. Notice clusters — the density of events around the Exodus, the silence of the intertestamental period, the intensity of Passion Week. |
| **Micro** (fully zoomed in)  | Full event cards with title, date, Scripture references, description, key figures, and significance.                                                                                                                     | Deep reading. Explore cross-references. Click through to related events.                                                                               |

**Technical approach:**

- The timeline is a single continuous axis. Years are mapped to pixel positions via a scale function that adjusts with zoom level.
- Era bands are rendered as colored rectangles behind the event layer.
- Zoom is controlled by scroll wheel / pinch gesture / zoom buttons, centered on the cursor position.
- Smooth animated transitions between zoom levels.

**Date handling — an important note:**
Biblical chronology is debated, especially for early periods (Patriarchs, Exodus, Conquest). Chronos will adopt a mainstream evangelical chronology as its default but should:

- Display dates as approximate where scholarship is uncertain (e.g., "~1446 BC" for the Exodus).
- Avoid dogmatism — the app is educational, not polemical.
- Consider offering an optional "chronology toggle" in v2 (e.g., early vs. late Exodus date).

### 2.2 Three-Track Layout

Events are organized into three horizontal tracks:

```
┌──────────────────────────────────────────────────────────────┐
│  OLD TESTAMENT TRACK    ●──●───●──●●──●───●──●────●──●      │
│──────────────────────────────────────────────────────────────│
│  TIMELINE AXIS       2000 BC ──────────────────── 100 AD    │
│──────────────────────────────────────────────────────────────│
│  NEW TESTAMENT TRACK                              ●●●●●●●   │
│──────────────────────────────────────────────────────────────│
│  WORLD HISTORY TRACK  ●───●──●──●──●──●───●──●──●──●──●──●  │
└──────────────────────────────────────────────────────────────┘
```

- **Old Testament track**: Events from Genesis through Malachi.
- **New Testament track**: Events from the birth of Christ through Revelation / early Church.
- **World History track**: Secular events from surrounding civilizations — Egypt, Assyria, Babylon, Persia, Greece, Rome — that provide historical context.

Each track can be toggled on/off independently. When both OT and NT tracks are visible, **cross-reference lines** connect fulfilled prophecies, types/antitypes, and thematic echoes.

### 2.3 Cross-Reference Connections (OT ↔ NT)

This is the heart of what makes Chronos distinctive. Visual lines connect Old Testament events to their New Testament counterparts.

**Connection Types:**

| Type                       | Description                                                      | Example                                                     |
| -------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| **Prophecy → Fulfillment** | An OT prophecy and its NT fulfillment                            | Isaiah's Suffering Servant (Isa 53) → Crucifixion of Christ |
| **Type → Antitype**        | An OT figure, event, or institution that prefigures a NT reality | Passover Lamb → Christ as Lamb of God                       |
| **Quotation / Allusion**   | A direct OT quote or allusion in the NT                          | "Out of Egypt I called my son" (Hos 11:1 → Matt 2:15)       |
| **Thematic Echo**          | A recurring pattern or theme across testaments                   | Exile and return → Death and resurrection                   |
| **Covenant Progression**   | How God's covenant relationship develops                         | Abrahamic covenant → New covenant in Christ                 |

**Rendering:**

- Connections are curved lines (quadratic bezier) drawn between the OT and NT tracks.
- Each connection type has a distinct visual style (solid, dashed, dotted) and/or color.
- Hovering a connection line reveals a tooltip with the connection label, both Scripture references, and a brief explanation.
- A "Show all connections" toggle draws every link at once — revealing the dense web of intertextual relationships.
- Users can filter connections by type (prophecy, type, quotation, etc.).

### 2.4 World Map Panel

A map panel shows the geographic context of biblical and historical events.

**Scope:** The map needs to cover:

- **Ancient Near East**: Mesopotamia (Ur, Babylon, Nineveh), Egypt (Nile Delta, Thebes), Canaan/Israel, Syria, Persia
- **Mediterranean basin**: Greece, Asia Minor (for Paul's journeys), Rome, North Africa
- **Detail insets**: Jerusalem, the route of the Exodus, Paul's missionary journeys

**Behavior:**

- Selecting an event on the timeline highlights its location on the map.
- Selecting a location on the map filters the timeline to events at/near that location.
- As you scroll the timeline, the map subtly shifts emphasis to the relevant region.

**Technical approach for v1:** Custom SVG map of the Ancient Near East + Eastern Mediterranean. Clean, stylized, and lightweight. Upgrade to Leaflet/MapLibre in v2 if needed.

### 2.5 Event Detail Cards

Clicking an event opens a detail card:

| Field                  | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| **Title**              | Event name                                                  |
| **Date**               | Year (approximate where uncertain)                          |
| **Scripture**          | Primary passage reference(s) — e.g., "Exodus 14:1–31"       |
| **Location**           | Place name + map highlight                                  |
| **Description**        | 2–4 sentence narrative summary                              |
| **Key Figures**        | People involved                                             |
| **Significance**       | Why this event matters in the arc of redemptive history     |
| **Cross-References**   | Links to connected OT/NT events with connection type labels |
| **Historical Context** | What was happening in the surrounding world at this time    |
| **Era**                | Which biblical era this falls in                            |

### 2.6 Scripture Reference Integration (v2)

In v2, tapping a Scripture reference in an event card could:

- Display the passage text inline (using the ESV API).
- Link out to an online Bible (Bible Gateway, ESV.org).
- Show a "read in context" expandable that loads surrounding verses.

### 2.7 AI-Powered Deep Dives (v2)

Click "Tell me more" on any event for a Claude-generated narrative with:

- Extended historical and theological context.
- How this event connects to the broader biblical narrative.
- Key scholarly perspectives.
- Suggested further reading.

---

## 3. Data Model

### 3.1 Event Schema

```typescript
interface BiblicalEvent {
  id: string;
  track: 'ot' | 'nt' | 'world';
  era: string; // e.g., "patriarchs", "exile", "life-of-christ"
  year: number; // negative for BC; approximate where uncertain
  endYear?: number; // for events spanning a range (e.g., the Exile)
  approximate: boolean; // flag for uncertain dates
  title: string;
  scripture?: string; // primary reference, e.g., "Gen 12:1–3"
  description: string; // 2–4 sentence narrative
  significance: string; // redemptive-historical significance
  figures: string[]; // key people
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  connections?: CrossReference[];
  tags?: string[]; // "prophecy", "covenant", "miracle", "judgment", "worship", etc.
  historicalContext?: string; // what was happening in the world at this time
}

interface CrossReference {
  targetEventId: string;
  type: 'prophecy-fulfillment' | 'type-antitype' | 'quotation' | 'thematic' | 'covenant';
  label: string; // e.g., "Suffering Servant → Crucifixion"
  otReference?: string; // e.g., "Isa 53:3–7"
  ntReference?: string; // e.g., "Matt 27:27–50"
  explanation: string; // 1–2 sentences explaining the connection
}
```

### 3.2 Era Schema

```typescript
interface Era {
  id: string;
  track: 'ot' | 'nt' | 'world';
  label: string;
  start: number;
  end: number;
  color: string;
  summary: string;
}
```

### 3.3 Biblical Eras

| Era                     | Track | Approximate Range | Color                                                     |
| ----------------------- | ----- | ----------------- | --------------------------------------------------------- |
| Patriarchs              | OT    | 2000–1800 BC      | Warm sand `#C9A84C`                                       |
| Exodus & Conquest       | OT    | 1446–1370 BC      | Burnt orange `#B8612A`                                    |
| Judges                  | OT    | 1370–1050 BC      | Dusty red-brown `#8B5E3C`                                 |
| United Kingdom          | OT    | 1050–930 BC       | Royal gold `#A67C32`                                      |
| Divided Kingdom         | OT    | 930–586 BC        | Split: Israel olive `#6B7C3F` / Judah deep blue `#3B4F7A` |
| Exile                   | OT    | 586–538 BC        | Ash gray `#6B6B6B`                                        |
| Return & Restoration    | OT    | 538–400 BC        | Muted teal `#4A7C6F`                                      |
| Intertestamental Period | —     | 400 BC – 5 BC     | Faded/dimmed `#9E9685`                                    |
| Life of Christ          | NT    | ~5 BC – 33 AD     | Deep crimson `#8B1A1A`                                    |
| Early Church & Apostles | NT    | 33–100 AD         | Rich purple `#5B3A6B`                                     |

### 3.4 World History Eras (for context track)

| Era                     | Range            | Color                       |
| ----------------------- | ---------------- | --------------------------- |
| Egyptian Kingdoms       | 2000–525 BC      | Nile blue-green `#2E6B5A`   |
| Assyrian Empire         | 900–612 BC       | Iron gray `#5A5A5A`         |
| Babylonian Empire       | 626–539 BC       | Deep amber `#8B6914`        |
| Persian Empire          | 539–330 BC       | Persian blue `#1B4D6E`      |
| Greek / Hellenistic     | 330–146 BC       | Marble white-blue `#6A8CAF` |
| Roman Republic & Empire | 146 BC – 100 AD+ | Imperial red `#7B1535`      |

### 3.5 Seed Dataset — Old Testament Track

| Year (approx) | Event                                                 | Era               | Key Scripture      |
| ------------- | ----------------------------------------------------- | ----------------- | ------------------ |
| ~2000 BC      | Call of Abraham                                       | Patriarchs        | Gen 12:1–3         |
| ~1900 BC      | Binding of Isaac                                      | Patriarchs        | Gen 22             |
| ~1850 BC      | Jacob wrestles God at Peniel                          | Patriarchs        | Gen 32:22–32       |
| ~1800 BC      | Joseph sold into Egypt                                | Patriarchs        | Gen 37             |
| ~1446 BC      | The Exodus; Passover instituted                       | Exodus & Conquest | Exod 12–14         |
| ~1446 BC      | Law given at Sinai                                    | Exodus & Conquest | Exod 19–20         |
| ~1406 BC      | Crossing the Jordan; Fall of Jericho                  | Exodus & Conquest | Josh 3–6           |
| ~1200 BC      | Deborah judges Israel                                 | Judges            | Judg 4–5           |
| ~1100 BC      | Samson and the Philistines                            | Judges            | Judg 13–16         |
| ~1050 BC      | Samuel anoints Saul as first king                     | United Kingdom    | 1 Sam 10           |
| ~1010 BC      | David becomes king                                    | United Kingdom    | 2 Sam 5            |
| ~1000 BC      | Davidic covenant — "your throne forever"              | United Kingdom    | 2 Sam 7:12–16      |
| ~960 BC       | Solomon builds the Temple                             | United Kingdom    | 1 Kgs 6–8          |
| ~930 BC       | Kingdom divides — Rehoboam vs. Jeroboam               | Divided Kingdom   | 1 Kgs 12           |
| ~870 BC       | Elijah on Mount Carmel                                | Divided Kingdom   | 1 Kgs 18           |
| ~760 BC       | Amos prophesies judgment on Israel                    | Divided Kingdom   | Amos               |
| ~740 BC       | Isaiah called; messianic prophecies begin             | Divided Kingdom   | Isa 6; 7:14; 9:6–7 |
| 722 BC        | Fall of Samaria; Northern Kingdom exiled by Assyria   | Divided Kingdom   | 2 Kgs 17           |
| ~620 BC       | Josiah's reforms; Book of the Law rediscovered        | Divided Kingdom   | 2 Kgs 22–23        |
| 605 BC        | Daniel taken to Babylon (first deportation)           | Exile             | Dan 1              |
| 586 BC        | Fall of Jerusalem; Temple destroyed by Nebuchadnezzar | Exile             | 2 Kgs 25           |
| ~573 BC       | Ezekiel's vision of the restored Temple               | Exile             | Ezek 40–48         |
| 539 BC        | Cyrus conquers Babylon; decree to return              | Return            | Ezra 1             |
| 516 BC        | Second Temple completed                               | Return            | Ezra 6             |
| ~458 BC       | Ezra's reforms                                        | Return            | Ezra 7–10          |
| ~445 BC       | Nehemiah rebuilds the walls of Jerusalem              | Return            | Neh 1–6            |
| ~430 BC       | Malachi — last OT prophet; "the sun of righteousness" | Return            | Mal 4:2            |

### 3.6 Seed Dataset — New Testament Track

| Year (approx) | Event                                    | Era            | Key Scripture     |
| ------------- | ---------------------------------------- | -------------- | ----------------- |
| ~5 BC         | Birth of Jesus in Bethlehem              | Life of Christ | Luke 2:1–20       |
| ~4 BC         | Flight to Egypt                          | Life of Christ | Matt 2:13–15      |
| ~27 AD        | Baptism of Jesus; beginning of ministry  | Life of Christ | Matt 3:13–17      |
| ~27 AD        | Temptation in the wilderness             | Life of Christ | Matt 4:1–11       |
| ~28 AD        | Sermon on the Mount                      | Life of Christ | Matt 5–7          |
| ~29 AD        | Feeding of the 5,000                     | Life of Christ | John 6:1–14       |
| ~29 AD        | Transfiguration                          | Life of Christ | Matt 17:1–9       |
| ~30 AD        | Triumphal Entry into Jerusalem           | Life of Christ | Matt 21:1–11      |
| ~30 AD        | Last Supper — new covenant instituted    | Life of Christ | Luke 22:14–20     |
| ~30 AD        | Crucifixion                              | Life of Christ | Matt 27; John 19  |
| ~30 AD        | Resurrection                             | Life of Christ | Matt 28; John 20  |
| ~30 AD        | Ascension                                | Life of Christ | Acts 1:6–11       |
| ~30 AD        | Pentecost — Holy Spirit poured out       | Early Church   | Acts 2            |
| ~34 AD        | Stoning of Stephen; first martyr         | Early Church   | Acts 7            |
| ~35 AD        | Conversion of Saul/Paul on Damascus road | Early Church   | Acts 9            |
| ~46 AD        | Paul's first missionary journey          | Early Church   | Acts 13–14        |
| ~49 AD        | Council of Jerusalem — Gentiles included | Early Church   | Acts 15           |
| ~50 AD        | Paul in Corinth; early epistles written  | Early Church   | Acts 18; 1 Thess  |
| ~57 AD        | Paul writes Romans                       | Early Church   | Rom 1:1           |
| ~60 AD        | Paul imprisoned in Rome                  | Early Church   | Acts 28           |
| ~64 AD        | Nero's persecution of Christians         | Early Church   | (tradition)       |
| ~70 AD        | Destruction of the Second Temple by Rome | Early Church   | (cf. Matt 24:1–2) |
| ~95 AD        | John writes Revelation on Patmos         | Early Church   | Rev 1:9           |

### 3.7 Seed Dataset — World History Track

| Year (approx) | Event                                       | Empire/Civ      | Significance for Biblical Context                     |
| ------------- | ------------------------------------------- | --------------- | ----------------------------------------------------- |
| ~2560 BC      | Great Pyramid of Giza built                 | Egypt           | The world Abraham's ancestors knew                    |
| ~1792 BC      | Hammurabi's Code                            | Babylon         | Near-contemporary legal code; compare with Mosaic law |
| ~1274 BC      | Battle of Kadesh (Ramesses II vs. Hittites) | Egypt           | Possible context for Israel's time in Egypt           |
| ~1200 BC      | Bronze Age Collapse                         | Mediterranean   | Upheaval that created the power vacuum Israel filled  |
| 883 BC        | Ashurnasirpal II expands Assyria            | Assyria         | The empire that will devour Northern Israel           |
| 776 BC        | First Olympic Games                         | Greece          | Greek civilization rising as Israel's prophets preach |
| 753 BC        | Traditional founding of Rome                | Rome            | Rome begins its long climb toward empire              |
| 722 BC        | Assyria conquers Samaria                    | Assyria         | Fall of the Northern Kingdom — directly biblical      |
| 612 BC        | Fall of Nineveh                             | Assyria/Babylon | Nahum's prophecy fulfilled; Babylon ascendant         |
| 586 BC        | Nebuchadnezzar destroys Jerusalem           | Babylon         | The Exile begins                                      |
| 539 BC        | Cyrus conquers Babylon                      | Persia          | "God's anointed" (Isa 45:1) frees Israel              |
| 490 BC        | Battle of Marathon                          | Greece          | Greece vs. Persia while Judah rebuilds                |
| 336 BC        | Alexander the Great begins conquests        | Greece          | Hellenization sets the stage for the NT world         |
| 167 BC        | Maccabean Revolt against Antiochus IV       | Greek/Jewish    | Context for Hanukkah; intertestamental period         |
| 63 BC         | Pompey conquers Jerusalem                   | Rome            | Rome takes control of Judea                           |
| 44 BC         | Assassination of Julius Caesar              | Rome            | The Republic's death throes; Empire coming            |
| 37 BC         | Herod the Great installed as King of Judea  | Rome            | The political world into which Jesus is born          |
| 27 BC         | Augustus becomes first Emperor              | Rome            | Pax Romana enables the gospel's spread                |
| ~4 BC         | Death of Herod the Great                    | Rome            | Confirms Jesus' birth timeline                        |
| 14 AD         | Tiberius becomes Emperor                    | Rome            | Emperor during Jesus' ministry and crucifixion        |
| 70 AD         | Titus destroys Jerusalem and the Temple     | Rome            | Jesus' prophecy fulfilled (Matt 24:2)                 |
| 79 AD         | Eruption of Vesuvius; Pompeii destroyed     | Rome            | Contemporary world of the early Church                |

### 3.8 Seed Cross-References (OT → NT)

| OT Event                                              | NT Event                                                                            | Type                   | Label                               |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------- | ----------------------------------- |
| Call of Abraham — "all nations blessed" (Gen 12:3)    | Great Commission — "all nations" (Matt 28:19)                                       | Covenant               | Blessing to all nations             |
| Binding of Isaac (Gen 22)                             | Crucifixion of Christ                                                               | Type → Antitype        | Father offers his son               |
| Passover lamb (Exod 12)                               | Christ crucified — "Lamb of God" (John 1:29)                                        | Type → Antitype        | The Passover Lamb                   |
| Law given at Sinai (Exod 19–20)                       | Sermon on the Mount (Matt 5–7)                                                      | Thematic               | New Moses, new law from a mountain  |
| Tabernacle/Temple — God dwells with his people        | "The Word became flesh and tabernacled among us" (John 1:14)                        | Type → Antitype        | God dwelling with humanity          |
| Davidic covenant — "throne forever" (2 Sam 7)         | Angel to Mary — "the throne of his father David" (Luke 1:32)                        | Prophecy → Fulfillment | The eternal throne                  |
| Elijah on Carmel (1 Kgs 18)                           | John the Baptist — "in the spirit of Elijah" (Luke 1:17)                            | Type → Antitype        | The forerunner                      |
| Isaiah's Suffering Servant (Isa 53)                   | Crucifixion — "by his wounds we are healed"                                         | Prophecy → Fulfillment | The Suffering Servant               |
| Isaiah 7:14 — "a virgin shall conceive"               | Birth of Jesus (Matt 1:22–23)                                                       | Prophecy → Fulfillment | Immanuel — God with us              |
| Jonah — three days in the fish (Jonah 1:17)           | Jesus — "three days in the heart of the earth" (Matt 12:40)                         | Type → Antitype        | Three days and resurrection         |
| Daniel's "Son of Man" (Dan 7:13–14)                   | Jesus' self-designation as Son of Man                                               | Prophecy → Fulfillment | The Son of Man                      |
| Fall of Jerusalem / Exile (586 BC)                    | Destruction of the Temple (70 AD)                                                   | Thematic               | Judgment on the covenant people     |
| Cyrus' decree — return from exile (Ezra 1)            | Resurrection — return from death                                                    | Thematic               | God restores what was lost          |
| Nehemiah rebuilds the walls                           | Jesus: "Destroy this temple and I will raise it in three days" (John 2:19)          | Thematic               | Rebuilding what was broken          |
| Malachi — "sun of righteousness" (Mal 4:2)            | Birth of Christ — "light of the world" (John 8:12)                                  | Prophecy → Fulfillment | The long-awaited light              |
| Bronze serpent in the wilderness (Num 21:8–9)         | "As Moses lifted up the serpent... so must the Son of Man be lifted up" (John 3:14) | Type → Antitype        | Lifted up for salvation             |
| Joseph sold by brothers, saves them later (Gen 37–45) | Christ rejected by his people, saves the world                                      | Type → Antitype        | Rejected savior who redeems         |
| High priest enters the Holy of Holies (Lev 16)        | Christ enters the heavenly holy place (Heb 9:11–12)                                 | Type → Antitype        | The true High Priest                |
| Manna in the wilderness (Exod 16)                     | "I am the bread of life" (John 6:35)                                                | Type → Antitype        | Bread from heaven                   |
| Crossing the Red Sea (Exod 14)                        | Baptism (1 Cor 10:1–2)                                                              | Type → Antitype        | Passing through water into new life |

---

## 4. UI Layout

### 4.1 Desktop Layout

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER BAR                                                  │
│  [Chronos logo]   [OT] [NT] [World] [All]   [Map] [Links] [?] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │                    MAP PANEL                        │     │
│  │          (collapsible, ~30% height)                 │     │
│  │   Mesopotamia ←──── Canaan ────→ Mediterranean     │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  OT ERA BANDS (colored background)                  │     │
│  │  Patriarchs | Exodus | Judges | Kingdom | Exile ... │     │
│  │─────────────────────────────────────────────────────│     │
│  │  OT TRACK        ●───●──●────●───●──────●────●      │     │
│  │─────────────────────────────────────────────────────│     │
│  │  ←── 2000 BC ──────────────────────── 100 AD ────→  │     │
│  │─────────────────────────────────────────────────────│     │
│  │  NT TRACK                                 ●●●●●●●   │     │
│  │─────────────────────────────────────────────────────│     │
│  │  NT ERA BANDS                                       │     │
│  │                              Life of Christ | Church │     │
│  │─────────────────────────────────────────────────────│     │
│  │  WORLD HISTORY TRACK  ●──●──●──●──●──●──●──●──●──● │     │
│  │  (Egyptian / Assyrian / Babylonian / Persian / ...)  │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  DETAIL PANEL (slides up when event selected)       │     │
│  │  Title / Date / Scripture / Desc / Cross-References  │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  FOOTER: Zoom [−][+] | Era jumps | Connection type filter   │
└──────────────────────────────────────────────────────────────┘
```

### 4.2 Mobile Layout

- Map panel becomes a toggleable overlay / bottom sheet.
- Timeline scrolls horizontally with touch; consider vertical mode as alternative.
- Event detail cards appear as bottom sheets.
- Track toggles become a tab bar or pill selector.
- Cross-reference lines simplify to a list of links within event cards.

### 4.3 Navigation & Controls

| Control                | Action                                                  |
| ---------------------- | ------------------------------------------------------- |
| Scroll wheel / pinch   | Zoom in/out on timeline                                 |
| Click + drag           | Pan the timeline                                        |
| Click event dot        | Open detail card                                        |
| Era band click         | Zoom to fit that era                                    |
| Track toggles (header) | Show/hide OT / NT / World tracks                        |
| Map toggle             | Show/hide map panel                                     |
| Connection toggle      | Show/hide cross-reference lines                         |
| Connection type filter | Filter by prophecy, type, quotation, thematic, covenant |
| Era jump buttons       | Jump directly to any era                                |
| Keyboard ← →           | Navigate between events                                 |
| Search (v2)            | Search by figure, book, keyword                         |

---

## 5. Visual Design

### 5.1 Aesthetic Direction

**Sacred Codex** — The feel of an illuminated manuscript meets a modern scholarly atlas. Warm parchment tones, careful serif typography, restrained decorative elements (subtle cross motifs, vine-like divider lines). Not kitschy "church graphics" — think Crossway ESV Study Bible aesthetics or a well-designed Ignatius Press edition. Dignified, beautiful, readable.

### 5.2 Color Palette

```
Background:          #F7F2E8  (warm parchment)
Surface:             #EDE7D9  (slightly darker parchment)
Text primary:        #2C2416  (warm near-black)
Text secondary:      #6B5D4F  (muted brown)
Border/divider:      #C4B8A4  (warm gray)

OT Eras:
  Patriarchs:        #C9A84C  (warm sand/gold)
  Exodus & Conquest: #B8612A  (burnt orange)
  Judges:            #8B5E3C  (dusty red-brown)
  United Kingdom:    #A67C32  (royal gold)
  Divided Kingdom:   #6B7C3F / #3B4F7A  (olive / deep blue)
  Exile:             #6B6B6B  (ash gray)
  Return:            #4A7C6F  (muted teal)

Intertestamental:    #9E9685  (faded, dimmed — the silent years)

NT Eras:
  Life of Christ:    #8B1A1A  (deep crimson)
  Early Church:      #5B3A6B  (rich purple)

World History:
  Egypt:             #2E6B5A  (Nile green)
  Assyria:           #5A5A5A  (iron gray)
  Babylon:           #8B6914  (deep amber)
  Persia:            #1B4D6E  (Persian blue)
  Greece:            #6A8CAF  (marble blue)
  Rome:              #7B1535  (imperial red)

Cross-reference lines:
  Prophecy:          #C4956A  (warm bronze, solid)
  Type/Antitype:     #8B5A2B  (deep wood, dashed)
  Quotation:         #4A7C6F  (teal, dotted)
  Thematic:          #9E9685  (muted gray, long-dash)
  Covenant:          #A67C32  (gold, solid thick)

Map:
  Water:             #C8D6D0  (muted sage-blue)
  Land:              #E2DACC  (light warm tan)
  Borders:           #B8AD9A  (soft brown)
```

### 5.3 Typography

| Element               | Font             | Weight | Size |
| --------------------- | ---------------- | ------ | ---- |
| App title / Logo      | Playfair Display | 700    | 28px |
| Era labels            | Playfair Display | 600    | 16px |
| Event titles          | Source Serif 4   | 600    | 18px |
| Body / descriptions   | Source Serif 4   | 400    | 15px |
| Scripture references  | DM Mono          | 400    | 13px |
| Dates, metadata       | DM Mono          | 400    | 13px |
| UI controls / buttons | DM Sans          | 500    | 14px |

### 5.4 Iconography & Visual Elements

- **Event dots**: Small filled circles, color-coded by era. Subtle border. Pulse on hover.
- **Selected event**: Larger dot with halo/ring effect.
- **Cross-reference lines**: Curved bezier paths between tracks, styled by connection type (see color palette). Animated stroke-dashoffset on reveal.
- **Era bands**: Semi-transparent colored rectangles behind event tracks.
- **Map pins**: Small circles with drop shadow, matching event color. Cluster when dense.
- **Intertestamental gap**: Visually distinct zone — muted/desaturated, possibly with a subtle pattern or text reading "~400 years of silence."
- **Decorative accents**: Thin vine or scroll dividers. Small cross or chi-rho mark in the header. Avoid heaviness.

### 5.5 Animations & Transitions

| Interaction            | Animation                                                              |
| ---------------------- | ---------------------------------------------------------------------- |
| Zoom in/out            | Smooth scale + translate; events fade in/out at zoom thresholds        |
| Event hover            | Dot scales up, subtle glow                                             |
| Event select           | Card slides up; map pans to location; related connection lines draw in |
| Connection line draw   | Animated stroke-dashoffset (line "draws" itself along the curve)       |
| Era jump               | Smooth scroll + zoom to fit target era                                 |
| Track toggle           | Track slides vertically with opacity fade                              |
| Map pin appear         | Scale-up with subtle bounce                                            |
| "Show all connections" | Lines stagger-animate in, creating a web effect                        |

---

## 6. Interaction Design

### 6.1 First-Time Experience

On first load:

1. App opens zoomed out to **macro** level showing all three tracks with era bands.
2. A brief welcome overlay: _"Explore the story of Scripture — from Abraham to the early Church — and see how the Old and New Testaments speak to each other across the centuries. World history runs alongside to show you when it all happened."_
3. Suggested first action: click on a glowing event (e.g., the Exodus or the Crucifixion) to start exploring.

### 6.2 Event Selection Flow

1. User clicks an event dot.
2. Dot enlarges and highlights.
3. Detail card animates into view.
4. Map pans to event location and drops a pin.
5. Cross-reference lines appear, connecting to related events on the other testament track.
6. Clicking a cross-reference navigates to the connected event (smooth scroll + detail card swap).

### 6.3 Cross-Reference Exploration Flow

1. User enables "Show connections" toggle.
2. All cross-reference lines draw in with staggered animation.
3. User can filter by connection type (prophecy, type, quotation, thematic, covenant).
4. Hovering any line reveals a tooltip with the connection label and both Scripture references.
5. Clicking a line selects both connected events, showing them in a split detail view.

### 6.4 Historical Context Mode

When the World History track is enabled:

- Secular events appear below the biblical tracks.
- Hovering a biblical event shows a subtle highlight on contemporary world events (±50 years).
- This helps answer questions like: "What empire was in power when Nehemiah rebuilt the walls?" (Persia, under Artaxerxes).

---

## 7. Technical Architecture

### 7.1 Stack — Next.js Application

| Layer              | Technology                                                        |
| ------------------ | ----------------------------------------------------------------- |
| Framework          | **Next.js 14+** (App Router)                                      |
| Language           | TypeScript                                                        |
| Styling            | Tailwind CSS                                                      |
| UI Components      | shadcn/ui for base components; custom for timeline                |
| Animation          | Framer Motion                                                     |
| Map                | Custom SVG (v1); Leaflet/MapLibre (v2)                            |
| Timeline rendering | SVG + absolutely-positioned elements                              |
| State management   | React useState/useReducer; Zustand if complexity grows            |
| Fonts              | Google Fonts (Playfair Display, Source Serif 4, DM Sans, DM Mono) |
| Data               | Static JSON/TS files (v1); database in v2                         |
| Bible text         | ESV API integration (v2)                                          |
| AI features        | Anthropic Claude API (v2)                                         |
| Deployment         | Vercel                                                            |
| Database (v2)      | Supabase or Turso (SQLite)                                        |

### 7.2 Project Structure

```
chronos/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Main timeline page
│   ├── globals.css             # Tailwind + custom CSS variables
│   └── api/
│       ├── esv/route.ts        # ESV API proxy (v2)
│       └── ai/route.ts         # Claude API proxy (v2)
├── components/
│   ├── timeline/
│   │   ├── Timeline.tsx        # Main timeline container (zoom, pan, render)
│   │   ├── TimelineAxis.tsx    # The year axis with tick marks
│   │   ├── EraBand.tsx         # Colored era background band
│   │   ├── EventDot.tsx        # Individual event marker
│   │   ├── EventCard.tsx       # Expanded detail card
│   │   ├── CrossRefLine.tsx    # SVG bezier connection line
│   │   └── TrackRow.tsx        # A single horizontal track (OT / NT / World)
│   ├── map/
│   │   ├── MapPanel.tsx        # Map container
│   │   ├── MapSVG.tsx          # The actual SVG map
│   │   └── MapPin.tsx          # Event location pin
│   ├── controls/
│   │   ├── Header.tsx          # Top nav bar with toggles
│   │   ├── ZoomControls.tsx    # Zoom in/out buttons + slider
│   │   ├── EraJumper.tsx       # Era quick-jump buttons
│   │   ├── TrackToggles.tsx    # Show/hide track controls
│   │   └── ConnectionFilter.tsx # Filter cross-refs by type
│   ├── shared/
│   │   ├── ScriptureRef.tsx    # Formatted Scripture reference chip
│   │   ├── FigureBadge.tsx     # Key figure name badge
│   │   └── Tooltip.tsx         # Hover tooltip
│   └── layout/
│       ├── AppShell.tsx        # Overall app layout orchestration
│       └── DetailPanel.tsx     # Slide-up detail panel
├── data/
│   ├── events-ot.ts            # Old Testament events
│   ├── events-nt.ts            # New Testament events
│   ├── events-world.ts         # World history events
│   ├── eras.ts                 # Era definitions
│   ├── cross-references.ts     # OT↔NT connections
│   └── map-locations.ts        # Named locations with coordinates
├── lib/
│   ├── timeline-math.ts        # Year→pixel mapping, zoom calculations
│   ├── types.ts                # TypeScript interfaces
│   └── constants.ts            # Colors, sizes, config
├── hooks/
│   ├── useTimelineZoom.ts      # Zoom + pan state management
│   ├── useEventSelection.ts    # Selected event state + keyboard nav
│   └── useMapSync.ts           # Sync map view with timeline selection
├── public/
│   └── fonts/                  # Self-hosted fonts if needed
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

### 7.3 Key State

```typescript
interface AppState {
  // Timeline
  zoomLevel: number; // 0 (macro) to 1 (micro), continuous
  panOffset: number; // horizontal position in pixels
  viewportWidth: number; // current viewport width

  // Visibility
  visibleTracks: ('ot' | 'nt' | 'world')[];
  showMap: boolean;
  showConnections: boolean;
  connectionTypeFilter: CrossRefType[] | 'all';

  // Selection
  selectedEventId: string | null;
  hoveredEventId: string | null;

  // Navigation
  activeEraFilter: string | null;
}
```

### 7.4 Timeline Math

The core challenge is mapping years to pixel positions across a huge range (2000 BC to 100 AD = ~2100 years) at variable zoom levels.

```typescript
// Simplified year-to-pixel mapping
function yearToX(year: number, zoom: number, panOffset: number): number {
  const PIXELS_PER_YEAR_BASE = 2; // at zoom = 0
  const ZOOM_MULTIPLIER = 50; // at zoom = 1, pixels_per_year = 2 * 50 = 100
  const pixelsPerYear = PIXELS_PER_YEAR_BASE * (1 + zoom * ZOOM_MULTIPLIER);
  const YEAR_ORIGIN = -2000; // leftmost year
  return (year - YEAR_ORIGIN) * pixelsPerYear + panOffset;
}
```

### 7.5 Performance Considerations

- **Event culling**: Only render events within the visible viewport (± buffer). With ~75 seed events this is fine, but good to architect for growth.
- **SVG optimization**: Cross-reference lines are the most expensive render. Batch them; hide when not needed.
- **Zoom debounce**: Debounce wheel/pinch zoom to 16ms (frame-aligned).
- **Font loading**: Use `next/font` for optimized font loading.

---

## 8. Content Strategy

### 8.1 Writing Voice

Event descriptions should be:

- **Narrative and vivid** — "God calls a childless man out of Ur and makes him a promise that will reshape history" not "Abraham was called by God to leave his homeland."
- **Theologically aware but not preachy** — Present the biblical narrative faithfully without turning every description into a sermon. Let the connections speak for themselves.
- **Historically grounded** — Include concrete details. Dates, places, political context.
- **Concise** — 2–4 sentences for description; 1–2 sentences for significance.

### 8.2 Significance Framing

Every event's significance field should answer: _"Where does this fit in the arc of redemptive history?"_ — connecting backward (what led here) and forward (what this leads to).

### 8.3 Cross-Reference Labels

Short, evocative phrases that invite exploration:

- "The Passover Lamb"
- "Father offers his son"
- "God dwelling with humanity"
- "Lifted up for salvation"
- "The long-awaited light"

### 8.4 Handling the Intertestamental Period

The ~400-year gap between Malachi and the birth of Christ is significant thematically ("the silent years") and historically (Greek conquest, Maccabees, Roman conquest). The app should:

- Visually distinguish this period (muted/desaturated era band).
- Include world history events during this period (Alexander, Maccabees, Pompey, Herod).
- Optionally include a brief narrative: _"For four hundred years, no prophet spoke in Israel. But the world was being prepared..."_

---

## 9. Roadmap

### v1 — Core Experience

- [ ] Next.js project setup with Tailwind, TypeScript, fonts
- [ ] Static data files for all events, eras, and cross-references
- [ ] Zoomable horizontal timeline with era bands
- [ ] Three-track layout (OT / NT / World History)
- [ ] Event dots with hover states
- [ ] Event detail cards with Scripture references, figures, significance
- [ ] Cross-reference lines (OT ↔ NT) with connection type styling
- [ ] SVG map panel with event location pins
- [ ] Track toggles, map toggle, connection toggle
- [ ] Connection type filter (prophecy, type, quotation, thematic, covenant)
- [ ] Era jump navigation
- [ ] Polished "Sacred Codex" visual design
- [ ] Responsive layout (desktop-first, mobile-aware)

### v2 — Scripture & Search

- [ ] ESV API integration — display passage text in event cards
- [ ] Search by figure, book, keyword, Scripture reference
- [ ] "What else was happening?" sidebar (contemporaneous events)
- [ ] Event tags and tag-based filtering
- [ ] Keyboard navigation
- [ ] Deep-linkable URLs (share a specific event or view)
- [ ] Onboarding walkthrough
- [ ] Chronology toggle (early vs. late Exodus dating)

### v3 — AI & Expansion

- [ ] AI "Tell me more" deep dives via Claude API
- [ ] Additional OT/NT events (expand to 150+ total)
- [ ] Paul's missionary journeys as animated map routes
- [ ] Curated guided tours ("The Covenants", "Prophecy & Fulfillment", "Empires & Israel")
- [ ] Reading plans tied to the timeline
- [ ] Leaflet/MapLibre map upgrade
- [ ] User accounts and bookmarked events
- [ ] PWA for offline use

### v4 — Community & Depth

- [ ] Community-contributed events and connections (with moderation)
- [ ] Primary source integration (Dead Sea Scrolls, Josephus, etc.)
- [ ] Archaeological evidence layer (photos, dig site locations)
- [ ] Multi-language support
- [ ] Quiz / self-assessment mode
- [ ] Print-friendly timeline export

---

## 10. Open Questions

1. **Chronology debates**: How prominently should we surface disagreements about biblical dating? (e.g., early vs. late Exodus, dating of the Patriarchs). A toggle? Footnotes? Ignore for v1?
2. **Apocrypha / Deuterocanonical**: Should the intertestamental period include events from 1–2 Maccabees? This is historically valuable but theologically contested in some traditions. Probably yes for the World History track, with a note.
3. **Scope of "early Church"**: Where do we stop? Revelation (~95 AD)? The apostolic fathers? The Council of Nicaea (325 AD)? Suggest stopping at ~100 AD for v1 with room to extend.
4. **Mobile timeline direction**: Horizontal scroll (matching desktop) or vertical scroll (more natural on mobile)? Could offer both.
5. **Accessibility**: Screen reader strategy for a spatial, visual app. Consider an alternative "list view" that presents events chronologically with connections as text links.
6. **ESV API terms**: The ESV API has usage limits and attribution requirements. Confirm these are compatible with the app's intended use before v2.
7. **Event density around the Gospels**: The ~3 years of Jesus' ministry could contain dozens of events. How granular do we go? Stick to major milestones for v1, with a "Gospel deep dive" expansion in v3.
