var step1Data = [
  {
    englishWord: "the",
    englishSupplement: "nominative masculine singular",
    greekWord: "ο",
  },
  {
    englishWord: "the",
    englishSupplement: "nominative feminine singular",
    greekWord: "η",
  },
  {
    englishWord: "the",
    englishSupplement: "nominative neuter singular",
    greekWord: "το",
  },
  {
    englishWord: ["at the", "in the", "on the"],
    englishSupplement: "followed by masculine singular noun",
    greekWord: "στον",
  },
  {
    englishWord: ["at the", "in the", "on the"],
    englishSupplement: "followed by feminine singular noun",
    greekWord: "στην",
  },
  {
    englishWord: ["at the", "in the", "on the"],
    englishSupplement: "followed by neuter singular noun",
    greekWord: "στο",
  },
  { englishWord: ["man", "husband"], greekWord: "ο άντρας" },
  { englishWord: ["Mr", "sir"], greekWord: "ο κύριος" },
  {
    englishWord: ["Mr", "sir"],
    englishSupplement: "vocative",
    greekWord: "κύριε",
  },
  { englishWord: "dog", greekWord: "ο σκύλος" },
  {
    englishWord: "Aegina",
    englishSupplement:
      "an island in the Saronic Islands, an archipelago close to Athens",
    greekWord: "η Αίγινα",
  },
  { englishWord: "cat", greekWord: "η γάτα" },
  { englishWord: ["woman", "wife"], greekWord: "η γυναίκα" },
  { englishWord: ["Mrs", "madam"], greekWord: "η κυρία" },
  {
    englishWord: ["Mrs, madam"],
    englishSupplement: "vocative",
    greekWord: "κυρία",
  },
  { englishWord: "family", greekWord: "η οικογένεια" },
  { englishWord: "port", greekWord: "το λιμάνι" },
  { englishWord: "hotel", greekWord: "το ξενοδοχείο" },
  { englishWord: "child", greekWord: "το παιδί" },
  { englishWord: "children", greekWord: "τα παιδιά" },
  { englishWord: ["home", "house"], greekWord: "το σπίτι" },
  { englishWord: "village", greekWord: "το χωριό" },
  { englishWord: "he", greekWord: "αυτός" },
  { englishWord: "she", greekWord: "αυτή" },
  { englishWord: "it", greekWord: "αυτό" },
  { englishWord: "they", englishSupplement: "masculine", greekWord: "αυτοί" },
  { englishWord: "they", englishSupplement: "feminine", greekWord: "αυτές" },
  { englishWord: "they", englishSupplement: "neuter", greekWord: "αυτά" },
  { englishWord: "I", greekWord: "εγώ" },
  { englishWord: "we", greekWord: "εμείς" },
  { englishWord: "you", englishSupplement: "singular", greekWord: "εσύ" },
  { englishWord: "you", englishSupplement: "plural", greekWord: "εσείς" },
  { englishWord: "my", greekWord: "μου" },
  { englishWord: "your", englishSupplement: "singular", greekWord: "σου" },
  { englishWord: "your", englishSupplement: "plural", greekWord: "σας" },
  { englishWord: "I am", greekWord: "είμαι" },
  { englishWord: "don't/doesn't", greekWord: "δεν" },
  { englishWord: "here", greekWord: "εδώ" },
  { englishWord: "yes", greekWord: "ναι" },
  { englishWord: "no", greekWord: "όχι" },
  { englishWord: "from", greekWord: "από" },
  {
    englishWord: "goodbye",
    englishSupplement: "informally",
    greekWord: "αντίο",
  },
  {
    englishWord: "goodbye",
    englishSupplement: "to multiple people or formally to one person",
    greekWord: "αντίο σας",
  },
  {
    englishWord: "hello/hi",
    englishSupplement: "informally",
    greekWord: "γεια",
  },
  {
    englishWord: "hello/hi",
    englishSupplement: "informally to one person",
    greekWord: "γεια σου",
  },
  {
    englishWord: "hello/hi",
    englishSupplement: "to multiple people or formally to one person",
    greekWord: ["γεια σας", "χαίρετε"],
  },
  {
    englishWord: "welcome",
    englishSupplement: "informally to one person",
    greekWord: "καλώς ήρθες/καλώς ήλθες",
  },
  {
    englishWord: "welcome",
    englishSupplement: "to multiple people or formally to one person",
    greekWord: "καλώς ήρθατε/καλώς ήλθατε",
  },
];

var step2Data = [
  { englishWord: "pupil", englishSupplement: "male", greekWord: "ο μαθητής" },
  { englishWord: "friend", englishSupplement: "male", greekWord: "ο φίλος" },
  {
    englishWord: "secretary",
    englishSupplement: "male",
    greekWord: "ο γραμματέας",
  },
  {
    englishWord: "secretary",
    englishSupplement: "female",
    greekWord: "η γραμματέας",
  },
  {
    englishWord: "resident",
    englishSupplement: "male",
    greekWord: "ο κάτοικος",
  },
  {
    englishWord: "resident",
    englishSupplement: "female",
    greekWord: "η κάτοικος",
  },
  { englishWord: "administration office", greekWord: "η γραμματεία" },
  { englishWord: "nationality", greekWord: "η εθνικότητα" },
  { englishWord: "day", greekWord: "η ημέρα/η μέρα" },
  {
    englishWord: "pupil",
    englishSupplement: "female",
    greekWord: "η μαθήτρια",
  },
  { englishWord: "night", greekWord: ["η νύχτα", "το βράδυ"] },
  { englishWord: "friend", englishSupplement: "female", greekWord: "η φίλη" },
  { englishWord: "country", greekWord: "η χώρα" },
  { englishWord: "boy", greekWord: "το αγόρι" },
  { englishWord: "afternoon", greekWord: "το απόγευμα" },
  { englishWord: "surname", greekWord: "το επώνυμο" },
  { englishWord: "girl", greekWord: "το κορίτσι" },
  { englishWord: "museum", greekWord: "το μουσείο" },
  { englishWord: "name", greekWord: "το όνομα" },
  { englishWord: "portait", greekWord: "το πορτρέτο" },
  { englishWord: "programme", greekWord: "το πρόγραμμα" },
  { englishWord: "morning", greekWord: "το πρωί" },
  { englishWord: "school", greekWord: "το σχολείο" },
  { englishWord: "this", englishSupplement: "masculine", greekWord: "αυτός" },
  { englishWord: "this", englishSupplement: "feminine", greekWord: "αυτή" },
  { englishWord: "this", englishSupplement: "neuter", greekWord: "αυτό" },
  {
    englishWord: "who?",
    englishSupplement: "nominative masculine singular",
    greekWord: "ποιος;",
  },
  {
    englishWord: "who?",
    englishSupplement: "nominative feminine singular",
    greekWord: "ποια;",
  },
  {
    englishWord: "who?",
    englishSupplement: "nominative neuter singular",
    greekWord: "ποιο;",
  },
  { englishWord: "his", greekWord: "του" },
  { englishWord: "her", greekWord: "της" },
  { englishWord: "I leave", greekWord: "φεύγω" },
  { englishWord: "tomorrow", greekWord: "αύριο" },
  { englishWord: "sure", greekWord: "μάλιστα" },
  { englishWord: "again", greekWord: "πάλι" },
  { englishWord: "very", greekWord: "πολύ" },
  { englishWord: "this year", greekWord: "φέτος" },
  {
    englishWord: ["well", "nice"],
    englishSupplement: ["adverb", undefined],
    greekWord: "ωραία",
  },
  { englishWord: "or", greekWord: "ή" },
  {
    englishWord: "and",
    englishSupplement:
      "before words starting with consonants or in formal writing",
    greekWord: "και",
  },
  {
    englishWord: "and",
    englishSupplement: "before words starting with vowels",
    greekWord: "κι",
  },
  { englishWord: "so", greekWord: "λοιπόν" },
  { englishWord: "ah!", greekWord: "α!" },
  { englishWord: "good morning", greekWord: "καλημέρα" },
  { englishWord: "good night", greekWord: "καληνύχτα" },
  { englishWord: "good evening", greekWord: "καλησπέρα" },
  { englishWord: "here it is/here you are", greekWord: "ορίστε" },
];

var step3Data = [
  { englishWord: "a/an", englishSupplement: "masculine", greekWord: "ένας" },
  { englishWord: "a/an", englishSupplement: "feminine", greekWord: "μια/μία" },
  { englishWord: "a/an", englishSupplement: "neuter", greekWord: "ένα" },
  { englishWord: ["air", "wind"], greekWord: "ο αέρας" },
  { englishWord: "North", greekWord: "ο Βορράς" },
  { englishWord: "sun", greekWord: "ο ήλιος" },
  {
    englishWord: "Nestos",
    englishSupplement: "a river dividing Greek Macedonia and Thrace",
    greekWord: "ο Νέστος",
  },
  { englishWord: "South", greekWord: "ο Νότος" },
  {
    englishWord: "Olympus",
    englishSupplement: "the highest mountain in Greece",
    greekWord: "ο Όλυμπος",
  },
  { englishWord: "sky", greekWord: "ο ουρανός" },
  {
    englishWord: "Piraeus",
    englishSupplement: "a port city within Greater Athens",
    greekWord: "ο Πειραιάς",
  },
  { englishWord: "river", greekWord: "ο ποταμός" },
  { englishWord: "map", greekWord: "ο χάρτης" },
  {
    englishWord: "Athens",
    englishSupplement: "the capital city of Greece",
    greekWord: "η Αθήνα",
  },
  { englishWord: "East", greekWord: "η Ανατολή" },
  { englishWord: "suitcase", greekWord: "η βαλίτσα" },
  { englishWord: "geography", greekWord: "η γεωγραφία" },
  { englishWord: "Earth", greekWord: "η Γη" },
  {
    englishWord: "Dadia",
    englishSupplement: "a forest in Thrace, close to the Turkish border",
    greekWord: "η Δαδιά",
  },
  { englishWord: "West", greekWord: "η Δύση" },
  { englishWord: "Greece", greekWord: "η Ελλάδα" },
  { englishWord: "Europe", greekWord: "η Ευρώπη" },
  { englishWord: "continent", greekWord: "η ήπειρος" },
  { englishWord: "sea", greekWord: "η θάλασσα" },
  {
    englishWord: "Kerkini",
    englishSupplement: "a lake in Greek Macedonia",
    greekWord: "η Κερκίνη",
  },
  { englishWord: "lake", greekWord: "η λίμνη" },
  {
    englishWord: "Mediterrenean Sea",
    englishSupplement: "the sea surrounding Greece",
    greekWord: "η Μεσόγειος",
  },
  {
    englishWord: "Portaria",
    englishSupplement: "a village located on Pelion, a mountain in Thessaly",
    greekWord: "η Πορταριά",
  },
  { englishWord: ["town", "city"], greekWord: "η πόλη" },
  { englishWord: "compass", greekWord: "η πυξίδα" },
  { englishWord: "star", greekWord: "το αστέρι" },
  { englishWord: "moutain", greekWord: "το βουνό" },
  { englishWord: "forest", greekWord: "το δάσος" },
  { englishWord: "passport", greekWord: "το διαβατήριο" },
  { englishWord: "ticket", greekWord: "το εισιτήριο" },
  { englishWord: "island", greekWord: "το νησί" },
  { englishWord: "cloud", greekWord: "το σύννεφο" },
  { englishWord: "moon", greekWord: "το φεγγάρι" },
  {
    englishWord: "a little/a bit of/few",
    englishSupplement: "masculine adjective",
    greekWord: "λίγος",
  },
  {
    englishWord: "a little/a bit of/few",
    englishSupplement: "feminine adjective",
    greekWord: "λίγη",
  },
  {
    englishWord: "a little/a bit of/few",
    englishSupplement: "neuter adjective",
    greekWord: "λίγο",
  },
  {
    englishWord: "what?",
    greekWord: "τι;",
  },
];

var step4Data = [
  {
    englishWord: "teacher",
    englishSupplement: "male",
    greekWord: "ο δάσκαλος",
  },
  { englishWord: "computer", greekWord: "ο υπολογιστής" },
  { englishWord: "charger", greekWord: "ο φορτιστής" },
  {
    englishWord: "teacher",
    englishSupplement: "female",
    greekWord: "η δασκάλα",
  },
  { englishWord: "work", greekWord: "η δουλειά" },
  { englishWord: "week", greekWord: "η εβδομάδα" },
  { englishWord: ["TV programme", "radio broadcast"], greekWord: "η εκπομπή" },
  { englishWord: "newspaper", greekWord: "η εφημερίδα" },
  { englishWord: "battery", greekWord: "η μπαταρία" },
  { englishWord: "screen", greekWord: "η οθόνη" },
  { englishWord: "class", greekWord: "η τάξη" },
  { englishWord: "in the class", greekWord: "στην τάξη" },
  { englishWord: "joy", greekWord: "η χαρά" },
  { englishWord: "book", greekWord: "το βιβλίο" },
  { englishWord: "bus", greekWord: "το λεωφορείο" },
  { englishWord: "lesson", greekWord: "το μάθημα" },
  { englishWord: "keyboard", greekWord: "το πληκτρολόγιο" },
  { englishWord: "ship", greekWord: "το πλοίο" },
  { englishWord: "mouse", greekWord: "το ποντίκι" },
  { englishWord: "tea", greekWord: "το τσάι" },
  { englishWord: "food", greekWord: "το φαγητό" },
  {
    englishWord: "me",
    englishSupplement: "strong personal pronoun",
    greekWord: "εμένα",
  },
  {
    englishWord: "you",
    englishSupplement: "strong personal pronoun",
    greekWord: "εσένα",
  },
  { englishWord: "I go out", greekWord: "βγαίνω" },
  { englishWord: "I watch", greekWord: "βλέπω" },
  { englishWord: "I read", greekWord: "διαβάζω" },
  { englishWord: "I prepare", greekWord: "ετοιμάζω" },
  { englishWord: "thank you/I thank", greekWord: "ευχαριστώ" },
  { englishWord: "he/she/it was", greekWord: "ήταν" },
  { englishWord: "they were", greekWord: "ήταν" },
  { englishWord: "he/she/it will be", greekWord: "θα είναι" },
  { englishWord: "I do", greekWord: "κάνω" },
  { englishWord: "I understand", greekWord: "καταλαβαίνω" },
  { englishWord: "I take", greekWord: "παίρνω" },
  { englishWord: "please/I beg", greekWord: "παρακαλώ" },
  { englishWord: "I wait", greekWord: "περιμένω" },
  { englishWord: "I drink", greekWord: "πίνω" },
  { englishWord: "late", greekWord: "αργά" },
  { englishWord: "later", greekWord: "αργότερα" },
  { englishWord: "in Greek", greekWord: "ελληνικά" },
  { englishWord: "alright", greekWord: "εντάξει" },
  { englishWord: "like this", greekWord: "έτσι" },
  { englishWord: "well", englishSupplement: "adverb", greekWord: "καλά" },
  { englishWord: "after/then", greekWord: "μετά" },
  { englishWord: "more", greekWord: "πιο" },
  { englishWord: "where?", greekWord: "πού;" },
  { englishWord: "from where?", greekWord: "από πού;" },
  { englishWord: "how?", greekWord: "πώς;" },
  { englishWord: "today", greekWord: "σήμερα" },
  { englishWord: "awful/very bad", greekWord: "χάλια" },
  { englishWord: "yesterday", greekWord: "χτες/χθες" },
  { englishWord: "for", greekWord: "για" },
  { englishWord: "with", greekWord: "με" },
  { englishWord: ["to", "in", "at", "on"], greekWord: "σε" },
  { englishWord: "my name is", greekWord: ["με λένε", "λέγομαι"] },
  { englishWord: "how are you?", greekWord: ["τι κάνεις;", "πώς είσαι;"] },
  { englishWord: "very well", greekWord: "μια χαρά" },
  { englishWord: "so and so", greekWord: "έτσι κι έτσι" },
  {
    englishWord: "How do you say that in Greek?",
    greekWord: "πώς το λένε αυτό ελληνικά;",
  },
];

var step5Data = [
  {
    englishWord: ["at the", "in the", "on the", "to the"],
    englishSupplement: "followed by masculine singular noun",
    greekWord: "στον",
  },
  {
    englishWord: ["at the", "in the", "on the", "to the"],
    englishSupplement: "followed by feminine singular noun",
    greekWord: "στην",
  },
  {
    englishWord: ["at the", "in the", "on the", "to the"],
    englishSupplement: "followed by neuter singular noun",
    greekWord: "στο",
  },
  { englishWord: "number", greekWord: "ο αριθμός" },
  { englishWord: "garden", greekWord: "ο κήπος" },
  { englishWord: "marker", greekWord: "ο μαρκαδόρος" },
  { englishWord: "guest house", greekWord: "ο ξενώνας" },
  { englishWord: "floor", greekWord: "ο όροφος" },
  { englishWord: "skyscraper", greekWord: "ο ουρανοξύστης" },
  { englishWord: "ruler", greekWord: "ο χάρακας" },
  {
    englishWord: "lawyer",
    englishSupplement: "male",
    greekWord: "ο δικηγόρος",
  },
  {
    englishWord: "lawyer",
    englishSupplement: "female",
    greekWord: "η δικηγόρος",
  },
  { englishWord: "Ankara", greekWord: "η Άγκυρα" },
  { englishWord: "Antwerp", greekWord: "η Αμβέρσα" },
  { englishWord: "eraser", greekWord: "η γόμα" },
  { englishWord: "address", greekWord: "η διεύθυνση" },
  {
    englishWord: "Kalymnos",
    englishSupplement: "and island in the Aegean Sea",
    greekWord: "η Κάλυμνος",
  },
  {
    englishWord: "Crete",
    englishSupplement: "the largest island of Greece",
    greekWord: "η Κρήτη",
  },
  {
    englishWord: "Chios",
    englishSupplement: "an island in the Aegean sea",
    greekWord: "η Χίος",
  },
  { englishWord: "avenue", greekWord: "η λεωφόρος" },
  { englishWord: "detached house", greekWord: "η μονοκατοικία" },
  { englishWord: "sharpener", greekWord: "η ξύστρα" },
  { englishWord: "street", greekWord: "η οδός" },

  { englishWord: "square", greekWord: "η πλατεία" },
  {
    englishWord: "apartment building/block of flats",
    greekWord: "η πολυκατοικία",
  },
  {
    englishWord: "Hydra",
    englishSupplement:
      "an island in the Saronic Islands, an archipelago close to Athens",
    greekWord: "η Ύδρα",
  },
  { englishWord: "apartment", greekWord: "το διαμέρισμα" },
  { englishWord: "ground floor", greekWord: "το ισόγειο" },
  { englishWord: "centre", greekWord: "το κέντρο" },
  { englishWord: "mobile phone", greekWord: "το κινητό" },
  { englishWord: "pencil", greekWord: "το μολύβι" },
  {
    englishWord: "Pelion",
    englishSupplement: "a mountain in Thessaly",
    greekWord: "το Πήλιο",
  },
  { englishWord: "suburb", greekWord: "το προάστιο" },
  { englishWord: "home telephone", greekWord: "το σταθερό" },
  { englishWord: "pen", greekWord: "το στυλό" },
  { englishWord: "post office", greekWord: "το ταχυδρομείο" },
  { englishWord: "telephone", greekWord: "το τηλέφωνο" },
  { englishWord: "pistachio", greekWord: "το φιστίκι" },
  { englishWord: "paper", greekWord: "το χαρτί" },
  { englishWord: "I was born", greekWord: "γεννήθηκα" },
  { englishWord: "I have", greekWord: "έχω" },
  { englishWord: "I stay", greekWord: "μένω" },
  { englishWord: "exactly", greekWord: "ακριβώς" },
  { englishWord: "near", greekWord: "κοντά" },
  { englishWord: "a little", englishSupplement: "adverb", greekWord: "λίγο" },
  { englishWord: "far", greekWord: "μακριά" },
  { englishWord: "now", greekWord: "τώρα" },
  { englishWord: "but", greekWord: "αλλά" },
  { englishWord: "first", englishSupplement: "masculine", greekWord: "πρώτος" },
  { englishWord: "first", englishSupplement: "feminine", greekWord: "πρώτη" },
  { englishWord: "first", englishSupplement: "neuter", greekWord: "πρώτο" },
  {
    englishWord: "second",
    englishSupplement: "masculine",
    greekWord: "δεύτερος",
  },
  {
    englishWord: "second",
    englishSupplement: "feminine",
    greekWord: "δεύτερη",
  },
  { englishWord: "second", englishSupplement: "neuter", greekWord: "δεύτερο" },
  { englishWord: "third", englishSupplement: "masculine", greekWord: "τρίτος" },
  { englishWord: "third", englishSupplement: "feminine", greekWord: "τρίτη" },
  { englishWord: "third", englishSupplement: "neuter", greekWord: "τρίτο" },
  {
    englishWord: "twentieth",
    englishSupplement: "masculine",
    greekWord: "εικοστός",
  },
  {
    englishWord: "twentieth",
    englishSupplement: "feminine",
    greekWord: "εικοστή",
  },
  {
    englishWord: "twentieth",
    englishSupplement: "neuter",
    greekWord: "εικοστό",
  },
];

var step6Data = [
  {
    englishWord: "unemployed person",
    englishSupplement: "male",
    greekWord: "ο άνεργος",
  },
  { englishWord: "organisation", greekWord: "ο οργανισμός" },
  { englishWord: "father", greekWord: "ο πατέρας" },
  {
    englishWord: "university student",
    englishSupplement: "male",
    greekWord: "ο φοιτητής",
  },
  { englishWord: "bakery", greekWord: "ο φούρνος" },
  {
    englishWord: "unemployed person",
    englishSupplement: "female",
    greekWord: "η άνεργη",
  },
  {
    englishWord: "National Bank",
    englishSupplement: "The oldest Greek bank in operation",
    greekWord: "η Εθνική Τράπεζα",
  },
  { englishWord: "business", greekWord: "η επιχείρηση" },
  { englishWord: "company", greekWord: "η εταιρεία" },
  { englishWord: "medicine", greekWord: "η ιατρική" },
  { englishWord: "girl", greekWord: "η κοπέλα" },
  {
    englishWord: "Pahia Rahi",
    englishSupplement: "a village on the island of Aegina",
    greekWord: "η Παχιά Ράχη",
  },
  { englishWord: "information technology", greekWord: "η πληροφορική" },
  { englishWord: "technical company", greekWord: "η τεχνική εταιρεία" },
  { englishWord: "bank", greekWord: "η τράπεζα" },
  { englishWord: "literature", greekWord: "φιλολογία" },
  {
    englishWord: "university student",
    englishSupplement: "female",
    greekWord: "η φοιτήτρια",
  },
  { englishWord: "car", greekWord: "το αυτοκίνητο" },
  { englishWord: "gymnasium", greekWord: "το γυμναστήριο" },
  { englishWord: "profession", greekWord: "το επάγγελμα" },
  { englishWord: "factory", greekWord: "το εργοστάσιο" },
  { englishWord: "restaurant", greekWord: "το εστιατόριο" },
  { englishWord: "theatre", greekWord: "το θέατρο" },
  { englishWord: "hospital", greekWord: "το νοσοκομείο" },
  { englishWord: "university", greekWord: "το πανεπιστήμιο" },
  { englishWord: "wheat", greekWord: "το σιτάρι" },
  { englishWord: "travel agency", greekWord: "το τουριστικό γραφείο" },
  { englishWord: "pharmacy", greekWord: "το φαρμακείο" },
  { englishWord: "employment", greekWord: "η απασχόληση" },
  { englishWord: "manpower/workforce", greekWord: "το εργατικό δυναμικό" },
  {
    englishWord: "married",
    englishSupplement: "masculine adjective",
    greekWord: "παντρεμένος",
  },
  {
    englishWord: "married",
    englishSupplement: "feminine adjective",
    greekWord: "παντρεμένη",
  },
  {
    englishWord: "married",
    englishSupplement: "neuter adjective",
    greekWord: "παντρεμένο",
  },
  {
    englishWord: "that",
    englishSupplement: "masculine pronoun",
    greekWord: "εκείνος",
  },
  {
    englishWord: "that",
    englishSupplement: "feminine pronoun",
    greekWord: "εκείνη",
  },
  {
    englishWord: "that",
    englishSupplement: "neuter pronoun",
    greekWord: "εκείνο",
  },
  { englishWord: "I know", greekWord: ["γνωρίζω", "ξέρω"] },
  { englishWord: "I teach", greekWord: "διδάσκω" },
  { englishWord: "I work", greekWord: "δουλεύω" },
  { englishWord: "I study", greekWord: "σπουδάζω" },
  { englishWord: "still/yet", greekWord: "ακόμα/ακόμη" },
  { englishWord: "beside/next to", greekWord: "δίπλα" },
  { englishWord: "there", greekWord: "εκεί" },
  { englishWord: "only", greekWord: "μόνο" },
  { englishWord: "but", greekWord: "όμως" },
  { englishWord: "how nice", greekWord: "τι ωραία" },
];

const quizData = {
  "step-1": step1Data,
  "step-2": step2Data,
  "step-3": step3Data,
  "step-4": step4Data,
  "step-5": step5Data,
  "step-6": step6Data,
};

const specificQuizInputToQuizName = {
  "step-1": "Step 1 (Page 53)",
  "step-2": "Step 2 (Page 57)",
  "step-3": "Step 3 (Page 59)",
  "step-4": "Step 4 (Page 63)",
  "step-5": "Step 5 (Page 67)",
  "step-6": "Step 6 (Page 71)",
  all: "All of the Above",
};

var cleanCurrentQuizDataLength = 0;

function cleanGreekWordField(greekWord) {
  var newGreekWord = [];
  if (typeof greekWord == "string") {
    var tempGreekWordList = greekWord.split("/");
    newGreekWord.push(tempGreekWordList);
  } else if (typeof greekWord == "object") {
    for (var i = 0; i < greekWord.length; i++) {
      var tempGreekWordString = greekWord[i];
      var tempGreekWordList = [tempGreekWordString];
      newGreekWord.push(tempGreekWordList);
    }
  }

  return newGreekWord;
}

function getNewEnglishSupplement(englishSupplement, index) {
  var newEnglishSupplement = "";
  if (typeof englishSupplement == "string") {
    newEnglishSupplement = englishSupplement;
  } else if (typeof englishSupplement == "object") {
    newEnglishSupplement = englishSupplement[index];
  }

  return newEnglishSupplement;
}

function getCleanCurrentQuizData(specificQuizInput) {
  var currentQuizData = quizData[specificQuizInput];

  var cleanCurrentQuizData = [];
  for (var i = 0; i < currentQuizData.length; i++) {
    var wordObject = currentQuizData[i];
    wordObject["greekWord"] = cleanGreekWordField(wordObject["greekWord"]);

    var englishWord = wordObject["englishWord"];

    if (typeof englishWord == "string") {
      cleanCurrentQuizData.push(wordObject);
    } else if (typeof englishWord == "object") {
      for (var j = 0; j < englishWord.length; j++) {
        var newEnglishWord = englishWord[j];
        var newEnglishSupplement = getNewEnglishSupplement(
          wordObject["englishSupplement"],
          j
        );

        cleanCurrentQuizData.push({
          englishWord: newEnglishWord,
          englishSupplement: newEnglishSupplement,
          greekWord: wordObject["greekWord"],
        });
      }
    }
  }

  cleanCurrentQuizDataLength = cleanCurrentQuizData.length;

  return cleanCurrentQuizData;
}

function getRandomWordObject(wordPairList) {
  var randomIndex = Math.floor(Math.random() * cleanCurrentQuizDataLength);
  return wordPairList[randomIndex];
}

export {
  getCleanCurrentQuizData,
  getRandomWordObject,
  specificQuizInputToQuizName,
};
