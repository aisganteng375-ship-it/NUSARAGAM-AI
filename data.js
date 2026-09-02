/**
 * ============================================================================
 * NUSARAGAM AI — MASTER KNOWLEDGE BASE & LINGUISTIC REPOSITORY (data.js)
 * Official Release for Young Coders World Cup (YCWC) 2026
 * Theme: AI for Daily Life & Cultural Preservation
 * 
 * Includes:
 *  1. Bilingual UI Internationalization (ID 🇮🇩 / EN 🇬🇧)
 *  2. 20 Regional Languages Database (200+ Lexicon, Examples & Tiers)
 *  3. 7 Categories of Daily Social Situations (2-Way Dialogue & Audio)
 *  4. Authentic Nusantara Daily Wisdom (20+ Regional Proverbs)
 *  5. 6 Traditional Scripts (Jawa, Sunda, Bali, Bugis, Batak, Lampung)
 *  6. Multimodal Vision Lens Cultural Knowledge Base
 *  7. Fact-First Historical & Cultural RAG Database (Verified Entities)
 *  8. Regional Cultural Dossiers & 3-Tier Multi-Level Quiz Challenge
 * ============================================================================
 */

const NUSANTARA_DATA = {
  // --------------------------------------------------------------------------
  // 0. BILINGUAL INTERNATIONALIZATION (I18N)
  // --------------------------------------------------------------------------
  i18n: {
    id: {
      tagline: "Penerjemah 20 Bahasa, Voice STT, Aksara & Vision Lens Budaya",
      tab_translator: "🗣️ Penerjemah 20 Bahasa",
      tab_daily: "🧭 Panduan Situasi Harian",
      tab_aksara: "📜 Aksara Nusantara",
      tab_vision: "📷 Vision Lens AI",
      tab_chat: "💬 Tanya Mpu Nusantara",
      tab_map: "🗺️ Peta Interaktif",
      tab_quiz: "🎮 Kuis Budaya & Skor",
      tab_inspector: "🔍 AI Inspector & RAG",
      lbl_from: "DARI:",
      lbl_to: "KE BAHASA:",
      btn_formal: "👑 Sopan (Halus/Krama)",
      btn_informal: "☕ Santai (Akrab/Ngoko)",
      btn_speak: "Bicara",
      btn_clear: "🧹 Bersihkan",
      btn_translate: "✨ Terjemahkan",
      btn_copy: "📋 Salin",
      btn_audio: "🔊 Audio",
      btn_swap: "🔄 Tukar",
      lbl_quick_example: "Contoh Cepat:",
      placeholder_input: "Ketik kata, satu kalimat, atau paragraf panjang di sini (misal: Selamat pagi, saya ingin membeli makanan di pasar dengan harga murah)...",
      placeholder_output: "Hasil terjemahan kontekstual akan muncul di sini...",
      cot_title: "🧠 Alur Berpikir AI (Agentic Cultural Reasoning Steps)",
      cot_step1_title: "1. Deteksi Semantik & Frasa",
      cot_step2_title: "2. Kalibrasi Tingkat Tutur (Etika)",
      cot_step3_title: "3. Validasi Linguistik & Keamanan",
      aksara_title: "PILIH AKSARA TRADISIONAL:",
      aksara_placeholder: "Ketik teks alfabet Latin di sini (misal: hanacaraka, rahayu, mejuah-juah)...",
      aksara_btn_convert: "Transliterasi ➔",
      aksara_result_label: "HASIL AKSARA ASLI:",
      vision_title: "📷 Pindai & Identifikasi Citra Budaya",
      vision_desc: "Unggah foto kain batik, keris pusaka, atau rumah adat untuk dianalisis oleh Model Multimodal Vision AI.",
      vision_upload_prompt: "Klik untuk Unggah Foto Artefak",
      vision_quick_label: "Atau Pilih Sampel Warisan Cepat:",
      chat_persona_title: "Pilih Persona AI:",
      chat_clear_btn: "🗑️ Hapus Chat",
      chat_placeholder: "Tanyakan tokoh pahlawan (Diponegoro, Gajah Mada), kerajaan (Majapahit), atau filosofi adat...",
      chat_send_btn: "Kirim 🚀",
      daily_title: "🧭 Panduan Situasi Keseharian (7 Kategori Sosial)",
      daily_desc: "Pilih situasi sosial nyata untuk melihat contoh percakapan santun 2 arah di seluruh 20 bahasa daerah.",
      wisdom_title: "📜 Daily Wisdom & Story Generator",
      wisdom_desc: "Bagikan 1 petuah bijak Nusantara setiap hari ke status WhatsApp atau Instagram Story Anda!",
      btn_new_wisdom: "🔄 Ganti Petuah Hari Ini",
      btn_download_card: "⬇️ Unduh Kartu (PNG)",
      btn_share_wa: "📲 Bagikan ke WhatsApp",
      map_title: "🗺️ Peta Warisan Budaya Nusantara",
      map_desc: "Klik wilayah kepulauan Indonesia untuk melihat dossier budaya, bahasa, tarian, dan etika lokal.",
      quiz_title: "🎮 Kuis Tantangan Budaya & Dialek",
      quiz_desc: "Uji pengetahuan etika, bahasa daerah, dan tradisi Nusantara.",
      inspector_title: "🔍 Arsitektur Sistem & Transparansi LLM",
      inspector_desc: "Panel pembuktian teknis kepada juri: Model System Prompt, RAG Context Grounding, dan Representasi Modular."
    },
    en: {
      tagline: "20 Regional Languages, Voice STT, Traditional Scripts & Cultural Vision AI",
      tab_translator: "🗣️ 20 Languages Translator",
      tab_daily: "🧭 Daily Situations",
      tab_aksara: "📜 Nusantara Scripts",
      tab_vision: "📷 Vision Lens AI",
      tab_chat: "💬 Ask Mpu Nusantara",
      tab_map: "🗺️ Interactive Map",
      tab_quiz: "🎮 Cultural Quiz & Score",
      tab_inspector: "🔍 AI Inspector & RAG",
      lbl_from: "FROM:",
      lbl_to: "TO LANGUAGE:",
      btn_formal: "👑 Polite (Formal/Honorific)",
      btn_informal: "☕ Casual (Informal/Friendly)",
      btn_speak: "Speak",
      btn_clear: "🧹 Clear",
      btn_translate: "✨ Translate",
      btn_copy: "📋 Copy",
      btn_audio: "🔊 Audio",
      btn_swap: "🔄 Swap",
      lbl_quick_example: "Quick Examples:",
      placeholder_input: "Type a word, a full sentence, or a long paragraph here (e.g., Good morning, I would like to buy food at the market)...",
      placeholder_output: "Contextual translation results will appear here...",
      cot_title: "🧠 AI Reasoning Flow (Agentic Cultural Reasoning Steps)",
      cot_step1_title: "1. Semantic & Phrase Parsing",
      cot_step2_title: "2. Social Politeness Calibration (Etiquette)",
      cot_step3_title: "3. Linguistic Validation & Safety",
      aksara_title: "SELECT TRADITIONAL SCRIPT:",
      aksara_placeholder: "Type Latin text here (e.g., hanacaraka, rahayu, mejuah-juah)...",
      aksara_btn_convert: "Transliterate ➔",
      aksara_result_label: "ORIGINAL NATIVE SCRIPT:",
      vision_title: "📷 Scan & Identify Cultural Artifacts",
      vision_desc: "Upload a photo of traditional batik, heirlooms, or vernacular architecture for Multimodal Vision AI analysis.",
      vision_upload_prompt: "Click to Upload Artifact Image",
      vision_quick_label: "Or Select a Quick Heritage Sample:",
      chat_persona_title: "Select AI Persona:",
      chat_clear_btn: "🗑️ Clear Chat",
      chat_placeholder: "Ask about historical heroes, Majapahit/Sriwijaya empires, or local wisdom...",
      chat_send_btn: "Send 🚀",
      daily_title: "🧭 Daily Life Survival & Etiquette Kit (7 Social Categories)",
      daily_desc: "Explore authentic 2-way dialogues across all 20 regional languages for market, dining, and greetings.",
      wisdom_title: "📜 Daily Wisdom & Story Generator",
      wisdom_desc: "Share 1 authentic Indonesian cultural proverb daily to your WhatsApp or Instagram Story!",
      btn_new_wisdom: "🔄 Change Daily Proverb",
      btn_download_card: "⬇️ Download Card (PNG)",
      btn_share_wa: "📲 Share to WhatsApp",
      map_title: "🗺️ Interactive Archipelago Cultural Map",
      map_desc: "Click on Indonesian island regions to explore language dossiers, dances, and local customs.",
      quiz_title: "🎮 Cultural & Dialect Challenge Quiz",
      quiz_desc: "Test your knowledge of Indonesian regional etiquette, languages, and living traditions.",
      inspector_title: "🔍 AI Architecture & LLM Transparency",
      inspector_desc: "Technical inspection console: System Prompts, RAG Context Grounding, and Modular Data Storage."
    }
  },

  // --------------------------------------------------------------------------
  // 1. 20 REGIONAL LANGUAGES COMPREHENSIVE REPOSITORY
  // --------------------------------------------------------------------------
  languages: {
    // 1. Jawa
    jawa: {
      name: "Bahasa Jawa",
      code: "jv",
      region: "Jawa Tengah, D.I. Yogyakarta, Jawa Timur",
      speakers: "± 84.3 Juta Penutur",
      family: "Austronesia (Melayu-Polinesia)",
      script_type: "jawa",
      politeness_tiers: ["Ngoko (Santai)", "Krama Madya", "Krama Inggil (Sangat Halus)"],
      fun_fact: "Bahasa daerah terbesar di Indonesia dengan 3 strata unggah-ungguh yang melatih kehalusan budi pekerti.",
      words: {
        "satu": { formal: "Setunggal", informal: "Siji", phonetic: "[sĕ-tung-gal]" },
        "dua": { formal: "Kalih", informal: "Loro", phonetic: "[ka-lih]" },
        "tiga": { formal: "Tiga", informal: "Telu", phonetic: "[ti-go]" },
        "empat": { formal: "Sekawan", informal: "Papat", phonetic: "[sĕ-ka-wan]" },
        "lima": { formal: "Gangsal", informal: "Lima", phonetic: "[gang-sal]" },
        "enam": { formal: "Enem", informal: "Enem", phonetic: "[e-nĕm]" },
        "tujuh": { formal: "Pitu", informal: "Pitu", phonetic: "[pi-tu]" },
        "delapan": { formal: "Wolu", informal: "Wolu", phonetic: "[wo-lu]" },
        "sembilan": { formal: "Sanga", informal: "Sanga", phonetic: "[so-ngo]" },
        "sepuluh": { formal: "Sedasa", informal: "Sepuluh", phonetic: "[sĕ-da-so]" },
        "sebelas": { formal: "Setunggal welas", informal: "Sewelas", phonetic: "[sĕ-tung-gal we-las]" },
        "dua puluh": { formal: "Kalih dasa", informal: "Rong puluh", phonetic: "[ka-lih da-so]" },
        "dua puluh lima": { formal: "Selangkung", informal: "Selawe", phonetic: "[sĕ-lang-kung]" },
        "lima puluh": { formal: "Seket", informal: "Seket", phonetic: "[sĕ-ket]" },
        "seratus": { formal: "Setunggal atus", informal: "Satus", phonetic: "[sĕ-tung-gal a-tus]" },
        "seribu": { formal: "Setunggal ewu", informal: "Sewu", phonetic: "[sĕ-tung-gal e-wu]" },
        "hari ini": { formal: "Dinten menika", informal: "Dina iki", phonetic: "[din-tĕn mĕ-ni-ko]" },
        "besok": { formal: "Mbenjing", informal: "Sesuk", phonetic: "[mben-jing]" },
        "kemarin": { formal: "Kala wingi", informal: "Wingi", phonetic: "[ko-lo wing-i]" },
        "sekarang": { formal: "Sakmenika", informal: "Saiki", phonetic: "[sak-mĕ-ni-ko]" },
        "pagi": { formal: "Enjang", informal: "Esuk", phonetic: "[en-jang]" },
        "siang": { formal: "Siang", informal: "Awan", phonetic: "[si-ang]" },
        "sore": { formal: "Sonten", informal: "Sore", phonetic: "[son-tĕn]" },
        "malam": { formal: "Dalu", informal: "Bengi", phonetic: "[da-lu]" },
        "utara": { formal: "Ler", informal: "Lor", phonetic: "[ler]" },
        "selatan": { formal: "Kidul", informal: "Kidul", phonetic: "[ki-dul]" },
        "timur": { formal: "Wetan", informal: "Wetan", phonetic: "[we-tan]" },
        "barat": { formal: "Kulon", informal: "Kulon", phonetic: "[ku-lon]" },
        "saya": { formal: "Kula / Dalem", informal: "Aku", phonetic: "[ku-lo]" },
        "kamu": { formal: "Panjenengan / Sampeyan", informal: "Kowe", phonetic: "[pan-jĕ-nĕng-an]" },
        "dia": { formal: "Piyambakipun", informal: "Dheweke", phonetic: "[pi-yam-ba-ki-pun]" },
        "kita": { formal: "Kula sedaya", informal: "Awakedhewe", phonetic: "[ku-lo sĕ-do-yo]" },
        "ayah": { formal: "Rama", informal: "Bapak", phonetic: "[ro-mo]" },
        "ibu": { formal: "Ibu", informal: "Simbah / Mbok", phonetic: "[i-bu]" },
        "makan": { formal: "Dhahar / Nedha", informal: "Mangan", phonetic: "[dha-har]" },
        "minum": { formal: "Ngunjuk", informal: "Ngombe", phonetic: "[ngun-juk]" },
        "tidur": { formal: "Sare", informal: "Turu", phonetic: "[sa-re]" },
        "pergi": { formal: "Tindak / Kesah", informal: "Lunga", phonetic: "[tin-dak]" },
        "datang": { formal: "Rawuh / Dhateng", informal: "Teka", phonetic: "[ra-wuh]" },
        "pulang": { formal: "Kondur / Mantuk", informal: "Mulih", phonetic: "[kon-dur]" },
        "beli": { formal: "Mundhut / Tumbas", informal: "Tuku", phonetic: "[mun-dhut]" },
        "jual": { formal: "Sadean", informal: "Dodol", phonetic: "[sa-de-an]" },
        "lihat": { formal: "Mriksani / Ningali", informal: "Ndeleng", phonetic: "[mrik-sa-ni]" },
        "bicara": { formal: "Ngendika", informal: "Ngomong", phonetic: "[ngĕn-di-ko]" },
        "rumah": { formal: "Griya / Dalem", informal: "Omah", phonetic: "[gri-yo]" },
        "pasar": { formal: "Peken", informal: "Pasar", phonetic: "[pĕ-kĕn]" },
        "uang": { formal: "Arta", informal: "Dhuwit", phonetic: "[ar-to]" },
        "air": { formal: "Tirta / Toya", informal: "Banyu", phonetic: "[to-yo]" },
        "nasi": { formal: "Sekul", informal: "Sega", phonetic: "[sĕ-kul]" },
        "baik": { formal: "Sae", informal: "Apik", phonetic: "[sa-e]" },
        "besar": { formal: "Ageng", informal: "Gedhe", phonetic: "[a-gĕng]" },
        "kecil": { formal: "Alit", informal: "Cilik", phonetic: "[a-lit]" },
        "banyak": { formal: "Kathah", informal: "Akeh", phonetic: "[ka-thah]" },
        "mahal": { formal: "Awis", informal: "Larang", phonetic: "[a-wis]" },
        "murah": { formal: "Mirah", informal: "Murah", phonetic: "[mi-rah]" },
        "enak": { formal: "Eca", informal: "Enak", phonetic: "[e-co]" },
        "apa": { formal: "Punapa", informal: "Apa", phonetic: "[pu-no-po]" },
        "siapa": { formal: "Sinten", informal: "Sapa", phonetic: "[sin-tĕn]" },
        "di mana": { formal: "Wonten pundi", informal: "Nang endi", phonetic: "[won-tĕn pun-di]" },
        "berapa": { formal: "Pinten", informal: "Piro", phonetic: "[pin-tĕn]" },
        "tidak": { formal: "Mboten", informal: "Ora", phonetic: "[m-bo-tĕn]" },
        "selamat pagi": { formal: "Sugeng enjang", informal: "Sugeng esuk", phonetic: "[su-gĕng en-jang]" },
        "selamat siang": { formal: "Sugeng siang", informal: "Sugeng awan", phonetic: "[su-gĕng si-ang]" },
        "selamat malam": { formal: "Sugeng dalu", informal: "Sugeng bengi", phonetic: "[su-gĕng da-lu]" },
        "apa kabar": { formal: "Kados pundi pawartosipun?", informal: "Piye kabare?", phonetic: "[ka-dos pun-di pa-war-tos-i-pun]" },
        "terima kasih": { formal: "Matur nuwun sanget", informal: "Matur nuwun", phonetic: "[ma-tur nu-wun sa-ngĕt]" },
        "sama-sama": { formal: "Sami-sami", informal: "Padha-padha", phonetic: "[sa-mi sa-mi]" },
        "permisi": { formal: "Kula nuwun / Nyuwun sewu", informal: "Nuwun sewu", phonetic: "[nyu-wun se-wu]" },
        "maaf": { formal: "Nyuwun pangapunten", informal: "Njaluk ngapura", phonetic: "[nyu-wun pa-nga-pun-tĕn]" },
        "berapa harganya": { formal: "Pinten regiipun niki?", informal: "Piro regane iki?", phonetic: "[pin-tĕn rĕ-gi-i-pun ni-ki]" },
        "mari makan": { formal: "Mangga sami dhahar", informal: "Ayo mangan", phonetic: "[mang-ga sa-mi dha-har]" }
      },
      etiquette: "Gunakan Krama Inggil saat berbicara dengan orang tua, mertua, atau atasan sebagai wujud rasa hormat (andhap asor)."
    },

    // 2. Sunda
    sunda: {
      name: "Bahasa Sunda",
      code: "su",
      region: "Jawa Barat, Banten",
      speakers: "± 38 Juta Penutur",
      family: "Austronesia (Melayu-Polinesia)",
      script_type: "sunda",
      politeness_tiers: ["Kasar / Loma (Santai)", "Lemes (Halus/Sopan)"],
      fun_fact: "Memiliki keunikan vokal 'eu' dan sistem kesantunan lisan 'Tatakrama Basa Sunda' yang sangat anggun.",
      words: {
        "satu": { formal: "Hiji", informal: "Hiji", phonetic: "[hi-ji]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "tiga": { formal: "Tilu", informal: "Tilu", phonetic: "[ti-lu]" },
        "empat": { formal: "Opat", informal: "Opat", phonetic: "[o-pat]" },
        "lima": { formal: "Lima", informal: "Lima", phonetic: "[li-ma]" },
        "sepuluh": { formal: "Sapuluh", informal: "Sapuluh", phonetic: "[sa-pu-luh]" },
        "hari ini": { formal: "Dinten ieu", informal: "Poe ieu", phonetic: "[din-tĕn i-eu]" },
        "besok": { formal: "Enjing", informal: "Isuk", phonetic: "[en-jing]" },
        "sekarang": { formal: "Ayeuna", informal: "Ayeuna", phonetic: "[a-yeu-na]" },
        "pagi": { formal: "Enjing-enjing", informal: "Isuk-isuk", phonetic: "[en-jing en-jing]" },
        "siang": { formal: "Siang", informal: "Beurang", phonetic: "[si-ang]" },
        "malam": { formal: "Wengi", informal: "Peuting", phonetic: "[wĕng-i]" },
        "saya": { formal: "Abdi / Simkuring", informal: "Urang / Kuring", phonetic: "[ab-di]" },
        "kamu": { formal: "Anjeun / Salira", informal: "Maneh", phonetic: "[an-jeun]" },
        "makan": { formal: "Tuang / Neda", informal: "Dahar", phonetic: "[tu-ang]" },
        "minum": { formal: "Leueut", informal: "Nginum", phonetic: "[leu-eut]" },
        "tidur": { formal: "Kulem / Mondok", informal: "Sare / Hees", phonetic: "[ku-lĕm]" },
        "pergi": { formal: "Angkat / Mios", informal: "Indit", phonetic: "[ang-kat]" },
        "datang": { formal: "Sumping / Dongkap", informal: "Datang", phonetic: "[sum-ping]" },
        "pulang": { formal: "Mulih", informal: "Balik", phonetic: "[mu-lih]" },
        "beli": { formal: "Mésér / Ngagaleuh", informal: "Meuli", phonetic: "[me-ser]" },
        "rumah": { formal: "Bumi", informal: "Imah", phonetic: "[bu-mi]" },
        "pasar": { formal: "Pasar", informal: "Pasar", phonetic: "[pa-sar]" },
        "uang": { formal: "Artos", informal: "Duit", phonetic: "[ar-tos]" },
        "air": { formal: "Cai", informal: "Cai", phonetic: "[ca-i]" },
        "nasi": { formal: "Sangu", informal: "Kejo", phonetic: "[sa-ngu]" },
        "baik": { formal: "Sae", informal: "Hade / Alus", phonetic: "[sa-e]" },
        "mahal": { formal: "Awis", informal: "Mahal", phonetic: "[a-wis]" },
        "murah": { formal: "Mirah", informal: "Murah", phonetic: "[mi-rah]" },
        "enak": { formal: "Raos", informal: "Ngeunah", phonetic: "[ra-os]" },
        "apa": { formal: "Naon", informal: "Naon", phonetic: "[na-on]" },
        "siapa": { formal: "Saha", informal: "Saha", phonetic: "[sa-ha]" },
        "berapa": { formal: "Sabaraha", informal: "Sabaraha", phonetic: "[sa-ba-ra-ha]" },
        "tidak": { formal: "Henteu", informal: "Teu", phonetic: "[hĕn-teu]" },
        "selamat pagi": { formal: "Wilujeng enjing", informal: "Wilujeng enjing", phonetic: "[wi-lu-jĕng en-jing]" },
        "apa kabar": { formal: "Kumaha damang?", informal: "Kumaha kabarna?", phonetic: "[ku-ma-ha da-mang]" },
        "terima kasih": { formal: "Hatur nuhun pisan", informal: "Nuhun nya", phonetic: "[ha-tur nu-hun pi-san]" },
        "sama-sama": { formal: "Sami-sami", informal: "Sarua-rua", phonetic: "[sa-mi sa-mi]" }
      },
      etiquette: "Bahasa Sunda Lemes wajib dipakai saat bertamu atau berbicara dengan orang tua untuk menjaga etika kesantunan."
    },

    // 3. Madura
    madura: {
      name: "Bahasa Madura",
      code: "mad",
      region: "Pulau Madura, Tapal Kuda Jawa Timur",
      speakers: "± 13.8 Juta Penutur",
      family: "Austronesia (Melayu-Polinesia)",
      script_type: "jawa",
      politeness_tiers: ["Enja'-Iya (Santai)", "Engghi-Enten", "Engghi-Bhunten (Halus)"],
      fun_fact: "Memiliki konsonan hembus (aspirated) yang tegas dan dinamis.",
      words: {
        "satu": { formal: "Settong", informal: "Settong", phonetic: "[sĕt-tong]" },
        "dua": { formal: "Dhuwa'", informal: "Dhuwa'", phonetic: "[dhu-wa']" },
        "tiga": { formal: "Tello'", informal: "Tello'", phonetic: "[tĕl-lo']" },
        "saya": { formal: "Kaula / Bula", informal: "Sengko'", phonetic: "[ka-u-la]" },
        "kamu": { formal: "Panjennengngan", informal: "Baa / Ba'na", phonetic: "[pan-jĕn-nĕng-ngan]" },
        "makan": { formal: "Adha'ar", informal: "Ngakan", phonetic: "[nga-kan]" },
        "tidur": { formal: "Tedhung", informal: "Tedhung", phonetic: "[te-dhung]" },
        "rumah": { formal: "Dhalem", informal: "Bengkona", phonetic: "[dha-lĕm]" },
        "uang": { formal: "Pesse", informal: "Pesse", phonetic: "[pĕs-se]" },
        "apa": { formal: "Ponapa", informal: "Apa", phonetic: "[po-na-pa]" },
        "terima kasih": { formal: "Mator sakalangkong", informal: "Mator sakalangkong", phonetic: "[ma-tor sa-ka-lang-kong]" }
      },
      etiquette: "Gunakan tingkat tutur 'Engghi-Bhunten' untuk menghormati orang yang lebih tua di Madura."
    },

    // 4. Betawi
    betawi: {
      name: "Bahasa Betawi",
      code: "bew",
      region: "DKI Jakarta, Tangerang, Bekasi, Depok",
      speakers: "± 5 Juta Penutur Asli",
      family: "Austronesia (Kreol Melayu)",
      script_type: "latin",
      politeness_tiers: ["Ragam Akrab (Gue-Lu)", "Ragam Sopan (Aye-Ncang/Ncing)"],
      fun_fact: "Bahasa egaliter yang sangat ekspresif dan ramah.",
      words: {
        "satu": { formal: "Satu", informal: "Satu", phonetic: "[sa-tu]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "tiga": { formal: "Tige", informal: "Tige", phonetic: "[ti-ge]" },
        "saya": { formal: "Aye", informal: "Gue / Ane", phonetic: "[a-ye]" },
        "kamu": { formal: "Abang / Mpok", informal: "Lu / Elu", phonetic: "[lu]" },
        "makan": { formal: "Makan", informal: "Makan / Madang", phonetic: "[ma-kan]" },
        "rumah": { formal: "Rumeh", informal: "Rumah", phonetic: "[ru-mah]" },
        "uang": { formal: "Duit", informal: "Duit / Cuan", phonetic: "[du-it]" },
        "apa": { formal: "Ape", informal: "Ape", phonetic: "[a-pe]" },
        "terima kasih": { formal: "Makasih banyak ye", informal: "Makasih ye", phonetic: "[ma-ka-sih ba-nyak ye]" }
      },
      etiquette: "Gunakan kata 'Aye' saat berbicara dengan orang tua/tokoh masyarakat Betawi agar santun."
    },

    // 5. Aceh
    aceh: {
      name: "Bahasa Aceh",
      code: "ace",
      region: "Provinsi Aceh",
      speakers: "± 3.5 Juta Penutur",
      family: "Austronesia (Chamic)",
      script_type: "latin",
      politeness_tiers: ["Ragam Biasa", "Ragam Sopan Adat (Teungku)"],
      fun_fact: "Memiliki kekerabatan dengan bahasa Chamic di daratan Asia Tenggara.",
      words: {
        "satu": { formal: "Sa", informal: "Sa", phonetic: "[sa]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Ulôn / Lôn", informal: "Kee", phonetic: "[u-lon]" },
        "kamu": { formal: "Drôn", informal: "Gata / Kah", phonetic: "[dron]" },
        "makan": { formal: "Pajôh / Pajoh bu", informal: "Pajoh", phonetic: "[pa-joh]" },
        "rumah": { formal: "Rumoh", informal: "Rumoh", phonetic: "[ru-moh]" },
        "uang": { formal: "Pèng", informal: "Pèng", phonetic: "[peng]" },
        "terima kasih": { formal: "Teurimong geunaseh that", informal: "Teurimong geunaseh", phonetic: "[teu-ri-mong geu-na-seh that]" }
      },
      etiquette: "Awali percakapan dengan salam persaudaraan 'Saleum' dan sapaan 'Teungku'."
    },

    // 6. Batak Toba
    batak_toba: {
      name: "Bahasa Batak Toba",
      code: "bbc",
      region: "Sumatera Utara (Tapanuli, Samosir, Toba)",
      speakers: "± 2.5 Juta Penutur",
      family: "Austronesia (Barat Daya)",
      script_type: "batak",
      politeness_tiers: ["Ragam Biasa", "Ragam Dalihan Na Tolu (Hormat)"],
      fun_fact: "Menjunjung tinggi filosofi Dalihan Na Tolu dan salam legendaris Horas.",
      words: {
        "satu": { formal: "Sada", informal: "Sada", phonetic: "[sa-da]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Ahu", informal: "Ahu", phonetic: "[a-hu]" },
        "kamu": { formal: "Hamu / Lae / Ito", informal: "Ho", phonetic: "[ha-mu]" },
        "makan": { formal: "Mangan", informal: "Mangan", phonetic: "[ma-ngan]" },
        "rumah": { formal: "Bagas", informal: "Jabu", phonetic: "[ja-bu]" },
        "uang": { formal: "Hepeng", informal: "Hepeng", phonetic: "[he-peng]" },
        "terima kasih": { formal: "Mauliate godang", informal: "Mauliate", phonetic: "[mau-li-a-te go-dang]" }
      },
      etiquette: "Ucapkan 'Horas' dengan penuh ketulusan dan sapa kerabat dengan marganya."
    },

    // 7. Batak Karo
    batak_karo: {
      name: "Bahasa Batak Karo",
      code: "btx",
      region: "Sumatera Utara (Tanah Karo, Berastagi)",
      speakers: "± 1.2 Juta Penutur",
      family: "Austronesia (Barat Daya)",
      script_type: "batak",
      politeness_tiers: ["Ragam Biasa", "Ragam Sopan Rakut Sitelu"],
      fun_fact: "Salam 'Mejuah-juah' melambangkan kedamaian, berkah, dan persaudaraan sejati.",
      words: {
        "satu": { formal: "Sada", informal: "Sada", phonetic: "[sa-da]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Aku", informal: "Aku", phonetic: "[a-ku]" },
        "kamu": { formal: "Kam / Turang", informal: "Kam", phonetic: "[kam]" },
        "makan": { formal: "Man", informal: "Man", phonetic: "[man]" },
        "terima kasih": { formal: "Bujur melala", informal: "Bujur", phonetic: "[bu-jur me-la-la]" }
      },
      etiquette: "Salam 'Mejuah-juah' melambangkan kesehatan, kedamaian, dan kemakmuran bersama."
    },

    // 8. Minangkabau
    minang: {
      name: "Bahasa Minangkabau",
      code: "min",
      region: "Sumatera Barat, Riau Barat",
      speakers: "± 6.5 Juta Penutur",
      family: "Austronesia (Melayik)",
      script_type: "latin",
      politeness_tiers: ["Ragam Sanak (Biasa)", "Ragam Baso-Basi (Sopan)"],
      fun_fact: "Memiliki kekayaan pantun pepatah petitih adat Minangkabau.",
      words: {
        "satu": { formal: "Ciek", informal: "Ciek", phonetic: "[ci-ek]" },
        "dua": { formal: "Duo", informal: "Duo", phonetic: "[du-o]" },
        "saya": { formal: "Ambo", informal: "Aden / Awak", phonetic: "[am-bo]" },
        "kamu": { formal: "Sanak / Uda / Uni", informal: "Ang / Kau", phonetic: "[sa-nak]" },
        "makan": { formal: "Batambuah / Makan", informal: "Makan", phonetic: "[ma-kan]" },
        "rumah": { formal: "Rumah Gadang", informal: "Rumah", phonetic: "[ru-mah]" },
        "uang": { formal: "Pitih", informal: "Pitih", phonetic: "[pi-tih]" },
        "terima kasih": { formal: "Tarimo kasih banyak", informal: "Tarimo kasih", phonetic: "[ta-ri-mo ka-sih ba-nyak]" }
      },
      etiquette: "Gunakan sapaan gelar kekeluargaan (Uda, Uni, Mak Dang, Etek) untuk menunjukkan sopan santun 'Baso-Basi'."
    },

    // 9. Melayu
    melayu: {
      name: "Bahasa Melayu",
      code: "ms",
      region: "Riau, Kepulauan Riau, Jambi, Pontianak",
      speakers: "± 18 Juta Penutur di Indonesia",
      family: "Austronesia (Melayik)",
      script_type: "latin",
      politeness_tiers: ["Ragam Halus Istiadat", "Ragam Santai Pesisir"],
      fun_fact: "Bahasa pemersatu yang menjadi fondasi Bahasa Indonesia pada Sumpah Pemuda 1928.",
      words: {
        "satu": { formal: "Satu", informal: "Satu", phonetic: "[sa-tu]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Saya / Hamba", informal: "Aku", phonetic: "[sa-ya]" },
        "kamu": { formal: "Tuan / Puan / Awak", informal: "Kau", phonetic: "[a-wak]" },
        "makan": { formal: "Santap", informal: "Makan", phonetic: "[san-tap]" },
        "rumah": { formal: "Rumah", informal: "Rumah", phonetic: "[ru-mah]" },
        "uang": { formal: "Duit / Wang", informal: "Duit", phonetic: "[wang]" },
        "terima kasih": { formal: "Terima kasih banyak-banyak", informal: "Terima kasih ye", phonetic: "[tĕ-ri-ma ka-sih]" }
      },
      etiquette: "Kekuatan Bahasa Melayu terletak pada pantun dan kesantunan bertutur kata yang lembut."
    },

    // 10. Lampung
    lampung: {
      name: "Bahasa Lampung",
      code: "ljp",
      region: "Provinsi Lampung",
      speakers: "± 1.5 Juta Penutur",
      family: "Austronesia (Lampungik)",
      script_type: "lampung",
      politeness_tiers: ["Dialek Api (Pesisir)", "Dialek Nyo (Abung)"],
      fun_fact: "Memiliki semboyan kehormatan adat 'Piil Pesenggiri' yang menjunjung tinggi harga diri.",
      words: {
        "satu": { formal: "Sai", informal: "Sai", phonetic: "[sai]" },
        "dua": { formal: "Ghua", informal: "Wo", phonetic: "[ghu-a]" },
        "saya": { formal: "Sikindua / Nyak", informal: "Nyak", phonetic: "[si-kin-du-a]" },
        "kamu": { formal: "Puskam", informal: "Niku", phonetic: "[pus-kam]" },
        "makan": { formal: "Mengan", informal: "Mangan", phonetic: "[ma-ngan]" },
        "rumah": { formal: "Lamban", informal: "Nuwo", phonetic: "[lam-ban]" },
        "uang": { formal: "Duit", informal: "Duit", phonetic: "[du-it]" },
        "terima kasih": { formal: "Niku gham terimakasih", informal: "Terimakasih", phonetic: "[tĕ-ri-ma ka-sih]" }
      },
      etiquette: "Awali percakapan formal dengan salam 'Tabik Pun' sebagai tanda penghormatan adat."
    },

    // 11. Bali
    bali: {
      name: "Bahasa Bali",
      code: "ban",
      region: "Pulau Bali, Lombok Barat",
      speakers: "± 3.3 Juta Penutur",
      family: "Austronesia (Melayu-Polinesia)",
      script_type: "bali",
      politeness_tiers: ["Basa Andap (Santai)", "Basa Madya", "Basa Alus Singgih (Luhur)"],
      fun_fact: "Menerapkan sistem tingkatan tutur 'Anggah-Ungguhing Basa Bali' selaras filosofi Tri Hita Karana.",
      words: {
        "satu": { formal: "Siki", informal: "Besik", phonetic: "[si-ki]" },
        "dua": { formal: "Kalih", informal: "Dua", phonetic: "[ka-lih]" },
        "saya": { formal: "Titiang", informal: "Icang / Tiang", phonetic: "[ti-ti-ang]" },
        "kamu": { formal: "Ragan ragane / Jero", informal: "Cai", phonetic: "[ra-gan ra-ga-ne]" },
        "makan": { formal: "Ngajeng / Nunas", informal: "Madaar", phonetic: "[nga-jĕng]" },
        "rumah": { formal: "Gria / Puri / Jero", informal: "Umah", phonetic: "[je-ro]" },
        "uang": { formal: "Jinah", informal: "Pipis", phonetic: "[ji-nah]" },
        "terima kasih": { formal: "Matur suksma banget", informal: "Suksma", phonetic: "[ma-tur suks-ma ba-ngĕt]" }
      },
      etiquette: "Gunakan 'Basa Alus Singgih' (sebut 'Titiang') saat berbicara dengan tetua adat atau di area Pura."
    },

    // 12. Sasak
    sasak: {
      name: "Bahasa Sasak",
      code: "sas",
      region: "Pulau Lombok, Nusa Tenggara Barat",
      speakers: "± 2.7 Juta Penutur",
      family: "Austronesia (Barat)",
      script_type: "bali",
      politeness_tiers: ["Basa Halus (Jamaq)", "Basa Menak (Luhur)"],
      fun_fact: "Masyarakat Sasak memiliki variasi dialek Menon-Mene dan Ngeno-Ngene.",
      words: {
        "satu": { formal: "Sopoq", informal: "Seke'", phonetic: "[so-poq]" },
        "dua": { formal: "Due", informal: "Due", phonetic: "[du-e]" },
        "saya": { formal: "Tiang", informal: "Kaji", phonetic: "[ti-ang]" },
        "kamu": { formal: "Pelungguh", informal: "Side", phonetic: "[pĕ-lung-guh]" },
        "makan": { formal: "Majan", informal: "Mangan", phonetic: "[ma-ngan]" },
        "rumah": { formal: "Bale", informal: "Bale", phonetic: "[ba-le]" },
        "terima kasih": { formal: "Tampi asih gati", informal: "Tampi asih", phonetic: "[tam-pi a-sih ga-ti]" }
      },
      etiquette: "Gunakan kata sapaan 'Pelungguh' saat menyapa lawan bicara yang dihormati di Pulau Lombok."
    },

    // 13. Bima
    bima: {
      name: "Bahasa Bima (Mbojo)",
      code: "bhp",
      region: "Kabupaten & Kota Bima, Dompu (NTB)",
      speakers: "± 600 Ribu Penutur",
      family: "Austronesia (Bima-Sumba)",
      script_type: "latin",
      politeness_tiers: ["Nggahi Rawi (Santai)", "Nggahi Mbojo Alus (Sopan)"],
      fun_fact: "Masyarakat Mbojo menjunjung tinggi semboyan moral luhur 'Maja Labo Dahu'.",
      words: {
        "satu": { formal: "Ida / Sa", informal: "Masa", phonetic: "[i-da]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Nahu", informal: "Mada", phonetic: "[na-hu]" },
        "kamu": { formal: "Ita", informal: "Ntau", phonetic: "[i-ta]" },
        "makan": { formal: "Ngaa", informal: "Ngaa", phonetic: "[ngaa]" },
        "rumah": { formal: "Uma", informal: "Uma", phonetic: "[u-ma]" },
        "terima kasih": { formal: "Nahu tarima kaseh", informal: "Tarima kaseh", phonetic: "[ta-ri-ma ka-seh]" }
      },
      etiquette: "Kekuatan tutur Mbojo terletak pada kearifan 'Maja Labo Dahu'."
    },

    // 14. Banjar
    banjar: {
      name: "Bahasa Banjar",
      code: "bjn",
      region: "Kalimantan Selatan, Kalimantan Tengah, Kalimantan Timur",
      speakers: "± 4.5 Juta Penutur",
      family: "Austronesia (Melayik)",
      script_type: "latin",
      politeness_tiers: ["Bahasa Banjar Kuala", "Bahasa Banjar Halus (Ulun-Pian)"],
      fun_fact: "Menjadi bahasa pergaulan antarsuku di seluruh penjuru daratan pulau Kalimantan.",
      words: {
        "satu": { formal: "Saikung / Asa", informal: "Asa", phonetic: "[a-sa]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Ulun", informal: "Aku", phonetic: "[u-lun]" },
        "kamu": { formal: "Pian", informal: "Ikam", phonetic: "[pi-an]" },
        "makan": { formal: "Makan", informal: "Makan", phonetic: "[ma-kan]" },
        "rumah": { formal: "Rumah", informal: "Rumah", phonetic: "[ru-mah]" },
        "uang": { formal: "Duit", informal: "Duit", phonetic: "[du-it]" },
        "terima kasih": { formal: "Tarima kasih banyak Pian", informal: "Tarima kasih lah", phonetic: "[ta-ri-ma ka-sih ba-nyak]" }
      },
      etiquette: "Gunakan kata 'Ulun' (saya) dan 'Pian' (kamu) untuk bertata krama santun."
    },

    // 15. Dayak Ngaju
    dayak_ngaju: {
      name: "Bahasa Dayak Ngaju",
      code: "nij",
      region: "Kalimantan Tengah (Kapuas, Kahayan, Barito)",
      speakers: "± 1 Juta Penutur",
      family: "Austronesia (Barat Daya)",
      script_type: "latin",
      politeness_tiers: ["Ragam Biasa", "Ragam Tutur Huma Betang"],
      fun_fact: "Memiliki filosofi hidup Huma Betang yang mengutamakan musyawarah mufakat.",
      words: {
        "satu": { formal: "Ije", informal: "Ije", phonetic: "[i-je]" },
        "dua": { formal: "Due", informal: "Due", phonetic: "[du-e]" },
        "saya": { formal: "Yaku", informal: "Yaku", phonetic: "[ya-ku]" },
        "kamu": { formal: "Pahari", informal: "Ikeh", phonetic: "[pa-ha-ri]" },
        "makan": { formal: "Kuman", informal: "Kuman", phonetic: "[ku-man]" },
        "rumah": { formal: "Betang", informal: "Huma", phonetic: "[hu-ma]" },
        "terima kasih": { formal: "Tarima kasih hai", informal: "Tarima kasih", phonetic: "[ta-ri-ma ka-sih hai]" }
      },
      etiquette: "Sapaan 'Pahari' (saudaraku) mencerminkan nilai luhur persaudaraan Huma Betang."
    },

    // 16. Bugis
    bugis: {
      name: "Bahasa Bugis",
      code: "bug",
      region: "Sulawesi Selatan (Bone, Soppeng, Wajo, Sidrap)",
      speakers: "± 5 Juta Penutur",
      family: "Austronesia (Sulawesi Selatan)",
      script_type: "bugis",
      politeness_tiers: ["Basa Kasar / Biasa", "Basa Alus Singkerru (Idi'-Puang)"],
      fun_fact: "Memiliki karya sastra epik La Galigo dan aksara Lontara.",
      words: {
        "satu": { formal: "Sedi", informal: "Seddi", phonetic: "[sĕd-di]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Iya' / Iyya", informal: "Iyya", phonetic: "[iy-ya]" },
        "kamu": { formal: "Idi' / Puang", informal: "Iko", phonetic: "[i-di']" },
        "makan": { formal: "Manre / Nanre", informal: "Manre", phonetic: "[man-re]" },
        "rumah": { formal: "Saoraja", informal: "Bola", phonetic: "[bo-la]" },
        "uang": { formal: "Doi'", informal: "Doi'", phonetic: "[do-i']" },
        "terima kasih": { formal: "Kurru' sumange' ma'ki", informal: "Kurru' sumange'", phonetic: "[kur-ru' su-ma-nge']" }
      },
      etiquette: "Junjung tinggi prinsip 'Siri Na Pacce' dan gunakan kata 'Idi'' untuk menghormati lawan bicara."
    },

    // 17. Makassar
    makassar: {
      name: "Bahasa Makassar",
      code: "mak",
      region: "Kota Makassar, Gowa, Takalar, Jeneponto",
      speakers: "± 2.1 Juta Penutur",
      family: "Austronesia (Sulawesi Selatan)",
      script_type: "bugis",
      politeness_tiers: ["Basa Biasa", "Basa Alus Daeng (Hormat)"],
      fun_fact: "Memiliki partikel sufiks unik '-mi', '-pi', '-ji', '-ki'.",
      words: {
        "satu": { formal: "Se're", informal: "Se're", phonetic: "[sĕ'-re]" },
        "dua": { formal: "Rua", informal: "Rua", phonetic: "[ru-a]" },
        "saya": { formal: "Nakké", informal: "Inakké", phonetic: "[nak-ke]" },
        "kamu": { formal: "Katé / Daeng", informal: "Ikau", phonetic: "[ka-te]" },
        "makan": { formal: "Nganre", informal: "Nganre", phonetic: "[ngan-re]" },
        "rumah": { formal: "Balla'", informal: "Balla'", phonetic: "[bal-la']" },
        "terima kasih": { formal: "Tarima kasi' dudua'", informal: "Tarima kasi'", phonetic: "[ta-ri-ma ka-si' du-dua']" }
      },
      etiquette: "Gunakan sapaan 'Daeng' dan akhiran santun 'ki'' untuk menghormati lawan bicara."
    },

    // 18. Toraja
    toraja: {
      name: "Bahasa Toraja",
      code: "sda",
      region: "Tana Toraja, Toraja Utara",
      speakers: "± 750 Ribu Penutur",
      family: "Austronesia (Sulawesi Selatan)",
      script_type: "latin",
      politeness_tiers: ["Basa Biasa", "Basa Tominaa (Sastra Sakral)"],
      fun_fact: "Kaya akan ungkapan sastra adat Tominaa pada upacara Rambu Solo'.",
      words: {
        "satu": { formal: "Misa'", informal: "Misa'", phonetic: "[mi-sa']" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Mangkan", informal: "Aku", phonetic: "[a-ku]" },
        "kamu": { formal: "Komi", informal: "Iko", phonetic: "[ko-mi]" },
        "makan": { formal: "Kumande", informal: "Kande", phonetic: "[ku-man-de]" },
        "rumah": { formal: "Tongkonan", informal: "Banua", phonetic: "[tong-ko-nan]" },
        "terima kasih": { formal: "Kurre sumanga' buda", informal: "Kurre sumanga'", phonetic: "[kur-re su-ma-nga']" }
      },
      etiquette: "Ucapkan 'Kurre Sumanga'' dengan tulus saat menerima jamuan atau berkunjung."
    },

    // 19. Melayu Ambon
    ambon: {
      name: "Bahasa Melayu Ambon",
      code: "abs",
      region: "Maluku (Ambon, Lease, Seram)",
      speakers: "± 1.8 Juta Penutur",
      family: "Austronesia (Kreol Melayu)",
      script_type: "latin",
      politeness_tiers: ["Ragam Basudara (Akrab)", "Ragam Sopan Gandong"],
      fun_fact: "Terkenal dengan nyanyian dan persaudaraan Pela Gandong yang sakral.",
      words: {
        "satu": { formal: "Satu", informal: "Satu", phonetic: "[sa-tu]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Beta", informal: "Beta", phonetic: "[be-ta]" },
        "kamu": { formal: "Basudara / Kaka", informal: "Ose / Ale", phonetic: "[o-se]" },
        "makan": { formal: "Makan", informal: "Makan", phonetic: "[ma-kan]" },
        "rumah": { formal: "Baileo", informal: "Rumah", phonetic: "[ru-mah]" },
        "terima kasih": { formal: "Dangke banya lai", informal: "Dangke", phonetic: "[dang-ke ban-ya lai]" }
      },
      etiquette: "Salam persaudaraan 'Pela Gandong' dan sapaan 'Basudara' adalah perekat kebersamaan di Maluku."
    },

    // 20. Melayu Papua
    papua: {
      name: "Bahasa Melayu Papua",
      code: "pmy",
      region: "Papua, Papua Barat, Papua Tengah, Papua Selatan",
      speakers: "± 2.5 Juta Penutur",
      family: "Austronesia (Kreol Melayu Timur)",
      script_type: "latin",
      politeness_tiers: ["Ragam Pace/Mace (Sopan)", "Ragam Kawan (Akrab)"],
      fun_fact: "Bahasa pemersatu ratusan suku di Tanah Papua dengan pronomina khas 'sa' & 'ko'.",
      words: {
        "satu": { formal: "Satu", informal: "Satu", phonetic: "[sa-tu]" },
        "dua": { formal: "Dua", informal: "Dua", phonetic: "[du-a]" },
        "saya": { formal: "Saya", informal: "Sa", phonetic: "[sa]" },
        "kamu": { formal: "Pace / Mace", informal: "Ko", phonetic: "[ko]" },
        "makan": { formal: "Makan", informal: "Makan", phonetic: "[ma-kan]" },
        "rumah": { formal: "Honai", informal: "Rumah", phonetic: "[ru-mah]" },
        "terima kasih": { formal: "Terima kasih banyak kawan", informal: "Trims yo", phonetic: "[tĕ-ri-ma ka-sih ba-nyak]" }
      },
      etiquette: "Gunakan sapaan hangat 'Pace' (pria) dan 'Mace' (wanita) dengan senyum ramah."
    }
  },

  // --------------------------------------------------------------------------
  // 2. 7 CATEGORIES OF DAILY SOCIAL SITUATIONS (ALL 20 REGIONAL LANGUAGES)
  // --------------------------------------------------------------------------
  situations: {
    pasar: {
      title: "Tawar-Menawar di Pasar Tradisional",
      description: "Frasa menawar harga, menanyakan kesegaran bahan pangan, dan menyepakati transaksi secara santun.",
      dialogs: {
        jawa: [
          { speaker: "Pembeli", phrase: "Kula nuwun Bu, menika lombokipun sakilo pinten nggih?", sub: "Permisi Bu, ini cabainya sekilo berapa harganya ya?", tip: "Gunakan Krama Inggil saat pertama kali menyapa pedagang." },
          { speaker: "Penjual", phrase: "Sekilo tigang dasa ewu Mas, taksih seger sanget niki saking kebon.", sub: "Sekilo tiga puluh ribu Mas, masih segar sekali ini dari kebun.", tip: "Pedagang menegaskan kualitas barang dagangannya." },
          { speaker: "Pembeli", phrase: "Menawi kalih likur ewu pikantuk mboten Bu? Kula mundhut kalih kilo.", sub: "Kalau dua puluh dua ribu boleh tidak Bu? Saya beli dua kilo.", tip: "Menawar dengan sopan tanpa meremehkan barang." },
          { speaker: "Penjual", phrase: "Nggih sampun mangga Mas, kersanipun dados langganan.", sub: "Ya sudah silakan Mas, biar jadi langganan tetap.", tip: "Kesepakatan tercapai dengan senyum dan rasa persaudaraan." }
        ],
        sunda: [
          { speaker: "Pembeli", phrase: "Punten Teh, ieu cengek sakilona sabaraha pangaosna?", sub: "Permisi Mbak, ini cabai rawit sekilonya berapa harganya?", tip: "Gunakan sapaan Teh/Kang dengan intonasi ramah." },
          { speaker: "Penjual", phrase: "Tilu puluh rebu Kang, nembe pisan dongkap ti perkebunan.", sub: "Tiga puluh ribu Mas, baru saja datang dari perkebunan.", tip: "Menjelaskan kesegaran bahan pangan." },
          { speaker: "Pembeli", phrase: "Tiasa kirang sakedik teu Teh? Dua puluh lima rebu nya?", sub: "Bisa kurang sedikit tidak Mbak? Dua puluh lima ribu ya?", tip: "Tawaran santun menggunakan kata 'tiasa kirang'." },
          { speaker: "Penjual", phrase: "Mangga atuh Kang, supados enggal seep dagangan abdi.", sub: "Silakan Mas, supaya cepat habis dagangan saya.", tip: "Pedagang menyetujui transaksi dengan senang hati." }
        ],
        minang: [
          { speaker: "Pembeli", phrase: "Bara lado sakilo ko Mak?", sub: "Berapa cabai sekilo ini Bu?", tip: "Gunakan sapaan 'Mak' atau 'Uni' di pasar Minang." },
          { speaker: "Penjual", phrase: "Tigo puluah ribu Da, rancak bana ladanyo kureng aia.", sub: "Tiga puluh ribu Mas, bagus sekali cabainya segar.", tip: "Menjelaskan kualitas lado merah yang padat." },
          { speaker: "Pembeli", phrase: "Kuranglah saketek Mak, duo puluah limo ribu yo?", sub: "Kurangilah sedikit Bu, dua puluh lima ribu ya?", tip: "Tawar-menawar santun khas urang awak." },
          { speaker: "Penjual", phrase: "Yo lah Da, ambiaklah, tarimo kasih banyak.", sub: "Ya sudahlah Mas, ambillah, terima kasih banyak.", tip: "Ijab kabul jual beli yang bersahabat." }
        ]
      }
    },
    tamu: {
      title: "Bertamu ke Rumah Tetangga / Calon Mertua",
      description: "Etika mengetuk pintu, salam masuk, mempersilakan duduk, dan pamit pulang santun.",
      dialogs: {
        jawa: [
          { speaker: "Tamu", phrase: "Kula nuwun, sugeng siang Bapak/Ibu.", sub: "Permisi, selamat siang Bapak/Ibu.", tip: "Ucapkan salam sambil sedikit membungkukkan badan." },
          { speaker: "Tuan Rumah", phrase: "Mangga-mangga pinarak, monggo lenggah wonten lebet.", sub: "Silakan masuk, mari duduk di dalam.", tip: "Mempersilakan tamu dengan tangan kanan terbuka." },
          { speaker: "Tamu", phrase: "Matur nuwun sanget, nyuwun pangapunten ngrepoti.", sub: "Terima kasih banyak, mohon maaf merepotkan.", tip: "Menunjukkan sikap andhap asor (rendah hati)." }
        ],
        sunda: [
          { speaker: "Tamu", phrase: "Sampurasun, wilujeng siang Ibu/Bapa.", sub: "Sampurasun, selamat siang Ibu/Bapak.", tip: "Salam pembuka adiluhung Sunda." },
          { speaker: "Tuan Rumah", phrase: "Rampes! Mangga kalebet, calik di lebet.", sub: "Rampes! Silakan masuk, duduk di dalam.", tip: "Menjawab dengan kata Rampes penuh senyum." }
        ]
      }
    },
    kuliner: {
      title: "Memesan & Menjamu Makanan",
      description: "Menawarkan hidangan, menerima makanan dengan hormat, dan memuji kelezatan masakan.",
      dialogs: {
        jawa: [
          { speaker: "Tuan Rumah", phrase: "Mangga sami dhahar rumiyin, menika unjukanipun dipun unjuk.", sub: "Mari silakan makan dahulu, ini minumannya silakan diminum.", tip: "Menjamu tamu dengan Krama Inggil yang sangat santun." },
          { speaker: "Tamu", phrase: "Matur nuwun sanget Bapak, masakanipun eca sanget.", sub: "Terima kasih banyak Bapak, masakannya lezat sekali.", tip: "Memuji masakan tuan rumah sebagai bentuk apresiasi." }
        ]
      }
    },
    bantuan: {
      title: "Meminta Izin & Bantuan",
      description: "Memohon bantuan dengan adab luhur dan menyampaikan rasa terima kasih mendalam.",
      dialogs: {
        jawa: [
          { speaker: "Pemohon", phrase: "Nyuwun tulung sanget Bapak, menawi kepareng kula nyuwun pirsa.", sub: "Mohon tolong sekali Bapak, sekiranya berkenan saya ingin bertanya.", tip: "Meminta tolong dengan Krama Inggil." },
          { speaker: "Pemberi", phrase: "Nggih mangga Mas, menapa ingkang saged kula biyantu?", sub: "Ya silakan Mas, apa yang bisa saya bantu?", tip: "Menjawab dengan lapang dada." }
        ]
      }
    },
    arah: {
      title: "Menanyakan Alamat & Bertanya Kabar",
      description: "Menanyakan arah jalan kepada warga lokal dan menyapa sahabat yang lama tak jumpa.",
      dialogs: {
        jawa: [
          { speaker: "Penanya", phrase: "Nyuwun sewu Mas, menawi badhe dhateng Alun-alun marganipun pundi nggih?", sub: "Permisi Mas, kalau mau ke Alun-alun jalannya lewat mana ya?", tip: "Gunakan kata 'Nyuwun sewu' saat bertanya di jalan." },
          { speaker: "Warga", phrase: "Mangga Mas, lurus kemawon ngaler, mangke wonten prapatan menggok tengen.", sub: "Silakan Mas, lurus saja ke utara, nanti di perempatan belok kanan.", tip: "Warga Jawa memberikan petunjuk arah dengan mata angin (ler/kidul/wetan/kulon)." }
        ]
      }
    },
    selamat: {
      title: "Ucapan Selamat & Doa Restu",
      description: "Memberikan ucapan selamat hari raya, keberangkatan merantau, dan kelulusan.",
      dialogs: {
        jawa: [
          { speaker: "Pengucap", phrase: "Sugeng Riyadi, nyuwun gunging pangaksama lair lan batin.", sub: "Selamat Hari Raya, mohon maaf lahir dan batin.", tip: "Ucapan sungkeman Idulfitri yang sakral." },
          { speaker: "Penerima", phrase: "Sami-sami Mas, mugi tansah pinaringan berkah lan kawilujengan.", sub: "Sama-sama Mas, semoga senantiasa diberi berkah dan keselamatan.", tip: "Mendoakan keselamatan bersama." }
        ]
      }
    },
    maaf: {
      title: "Meminta Maaf & Menolak dengan Sopan",
      description: "Menolak ajakan atau tawaran secara halus tanpa menyinggung perasaan lawan bicara.",
      dialogs: {
        jawa: [
          { speaker: "Penolak", phrase: "Nyuwun pangapunten sanget Bapak, sakmenika kula dereng saged ndherek.", sub: "Mohon maaf sekali Bapak, saat ini saya belum bisa ikut.", tip: "Menolak dengan Krama Inggil agar tidak menyakiti hati." },
          { speaker: "Pengajak", phrase: "Mboten dados menapa Mas, mbenjing malih taksih wonten wekdal.", sub: "Tidak apa-apa Mas, lain kali masih ada kesempatan.", tip: "Menerima penolakan dengan lapang dada." }
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // 3. AUTHENTIC NUSANTARA DAILY WISDOM COLLECTION (20+ REGIONAL PROVERBS)
  // --------------------------------------------------------------------------
  wisdom: [
    { 
      text: "Urip Iku Urup", 
      lang: "Jawa", 
      meaning: "Hidup itu hendaknya memberi manfaat dan menerangi sesama di sekitar kita.",
      philosophy: "Filosofi luhur tentang makna pengabdian diri dan kebajikan sosial." 
    },
    { 
      text: "Silih Asih, Silih Asah, Silih Asuh", 
      lang: "Sunda", 
      meaning: "Saling menyayangi, saling mengasah ilmu pengetahuan, dan saling menjaga keselamatan satu sama lain.",
      philosophy: "Pilar kebudayaan Parahyangan untuk membangun masyarakat yang harmonis dan tercerahkan." 
    },
    { 
      text: "Barek Manangis Sakik Basamo", 
      lang: "Minangkabau", 
      meaning: "Berat sama dipikul, ringan sama dijinjing dalam semangat gotong royong dan kesetiakawanan.",
      philosophy: "Kearifan lokal Ranah Minang yang merekatkan hubungan persaudaraan di perantauan maupun kampung halaman." 
    },
    { 
      text: "Siri' Na Pacce", 
      lang: "Bugis-Makassar", 
      meaning: "Menjaga harga diri dan martabat, serta memiliki empati mendalam untuk membela sesama yang tertindas.",
      philosophy: "Prinsip moralitas tertinggi masyarakat Sulawesi Selatan dalam menegakkan kebenaran dan kehormatan." 
    },
    { 
      text: "Mitreka Satata", 
      lang: "Jawa Kuno", 
      meaning: "Semua bangsa dan manusia adalah sahabat yang setara dalam persaudaraan yang kokoh dan abadi.",
      philosophy: "Doktrin diplomasi damai Kerajaan Majapahit yang melandasi politik luar negeri bebas aktif Indonesia." 
    },
    { 
      text: "Pela Gandong", 
      lang: "Melayu Ambon", 
      meaning: "Ikatan persaudaraan sejati yang lahir dari satu rahim tanpa memandang perbedaan latar belakang keyakinan.",
      philosophy: "Kearifan sakral Maluku yang menjadi jangkar perdamaian abadi kepulauan rempah." 
    },
    { 
      text: "Tri Hita Karana", 
      lang: "Bali", 
      meaning: "Tiga penyebab kebahagiaan hidup: keharmonisan manusia dengan Tuhan, sesama manusia, dan alam lingkungan.",
      philosophy: "Pedoman hidup spiritual masyarakat Bali yang menciptakan keselarasan jagat raya." 
    },
    { 
      text: "Huma Betang", 
      lang: "Dayak Ngaju", 
      meaning: "Hidup rukun berdampingan dalam satu rumah besar dengan musyawarah, toleransi, dan kesetaraan derajat.",
      philosophy: "Kearifan suku Dayak Kalimantan Tengah yang mengajarkan kerukunan di tengah keberagaman." 
    },
    { 
      text: "Dalihan Na Tolu", 
      lang: "Batak Toba", 
      meaning: "Tungku nan tiga: Somba marhula-hula (hormat pada mertua/istri), Manat mardongan tubu (hati-hati pada saudara), Elek marboru (sayang pada wanita).",
      philosophy: "Sistem kekerabatan masyarakat Batak yang menjaga keseimbangan sosial dan adab bermasyarakat." 
    },
    { 
      text: "Piil Pesenggiri", 
      lang: "Lampung", 
      meaning: "Menjaga kehormatan moral, berjiwa besar, ramah menyambut tamu, dan mengutamakan tolong-menolong.",
      philosophy: "Landasan kepribadian luhur masyarakat Sai Batin dan Pepadun di Bumi Ruwa Jurai." 
    },
    { 
      text: "Maja Labo Dahu", 
      lang: "Bima Mbojo", 
      meaning: "Rasa malu untuk berbuat kesalahan dan rasa takut melanggar norma agama serta adat istiadat.",
      philosophy: "Benteng moral masyarakat Mbojo di Pulau Sumbawa NTB." 
    },
    { 
      text: "Waja Sampai Kaputing", 
      lang: "Banjar", 
      meaning: "Berjuang dengan tekad sekuat baja pantang menyerah hingga titik akhir keberhasilan tercapai.",
      philosophy: "Semboyan perjuangan Pangeran Antasari yang membakar semangat pantang mundur rakyat Banjar." 
    }
  ],

  // --------------------------------------------------------------------------
  // 4. 6 TRADITIONAL SCRIPTS TRANSLITERATION MATRICES
  // --------------------------------------------------------------------------
  aksara_maps: {
    jawa: {
      name: "Aksara Jawa (Hanacaraka)",
      chars: {
        "ha": "ꦲ", "na": "ꦤ", "ca": "ꦕ", "ra": "ꦫ", "ka": "ꦏ",
        "da": "ꦢ", "ta": "ꦠ", "sa": "ꦱ", "wa": "ꦮ", "la": "ꦭ",
        "pa": "ꦥ", "dha": "ꦝ", "ja": "ꦗ", "ya": "ꦪ", "nya": "ꦚ",
        "ma": "ꦩ", "ga": "ꦒ", "ba": "ꦧ", "tha": "ꦛ", "nga": "ꦔ",
        "a": "ꦲ", "i": "ꦲꦶ", "u": "ꦲꦸ", "e": "ꦲꦺ", "o": "ꦲꦺꦴ",
        "k": "ꦏ꧀", "t": "ꦠ꧀", "n": "ꦤ꧀", "m": "ꦩ꧀", "r": "ꦂ", "s": "ꦱ꧀", "h": "ꦃ", "ng": "ꦁ"
      }
    },
    sunda: {
      name: "Aksara Sunda (Kaganga)",
      chars: {
        "ka": "ᮊ", "qa": "ᮋ", "ga": "ᮌ", "nga": "ᮍ", "ca": "ᮎ",
        "ja": "ᮏ", "za": "ᮐ", "nya": "ᮑ", "ta": "ᮒ", "da": "ᮓ",
        "na": "ᮔ", "pa": "ᮕ", "fa": "ᮖ", "va": "ᮗ", "ba": "ᮘ",
        "ma": "ᮙ", "ya": "ᮚ", "ra": "ᮛ", "la": "ᮜ", "wa": "ᮝ",
        "sa": "ᮞ", "xa": "ᮟ", "ha": "ᮠ",
        "a": "ᮃ", "i": "ᮄ", "u": "ᮅ", "e": "ᮈ", "o": "ᮇ"
      }
    },
    bali: {
      name: "Aksara Bali",
      chars: {
        "ha": "ᬳ", "na": "ᬦ", "ca": "ᬘ", "ra": "ᬭ", "ka": "ᬓ",
        "da": "ᬤ", "ta": "ᬢ", "sa": "ᬲ", "wa": "ᬯ", "la": "ᬮ",
        "pa": "ᬧ", "ja": "ᬚ", "ya": "ᬬ", "nya": "ᬜ", "ma": "ᬫ",
        "ga": "ᬕ", "ba": "ᬩ", "nga": "ᬗ",
        "a": "ᬅ", "i": "ᬇ", "u": "ᬉ", "e": "ᬏ", "o": "ᬑ"
      }
    },
    bugis: {
      name: "Aksara Bugis (Lontara)",
      chars: {
        "ka": "ᨀ", "ga": "ᨁ", "nga": "ᨂ", "ngka": "ᨃ",
        "pa": "ᨄ", "ba": "ᨅ", "ma": "ᨆ", "mpa": "ᨇ",
        "ta": "ᨈ", "da": "ᨉ", "na": "ᨊ", "nra": "ᨋ",
        "ca": "ᨌ", "ja": "ᨍ", "nya": "ᨎ", "nca": "ᨏ",
        "ya": "ᨐ", "ra": "ᨑ", "la": "ᨒ", "wa": "ᨓ",
        "sa": "ᨔ", "a": "ᨕ", "ha": "ᨖ"
      }
    },
    batak: {
      name: "Surat Batak (Toba)",
      chars: {
        "a": "ᯀ", "ha": "ᯂ", "ka": "ᯄ", "ba": "ᯅ", "pa": "ᯇ",
        "na": "ᯉ", "wa": "ᯋ", "ga": "ᯎ", "ja": "ᯐ", "da": "ᯑ",
        "ra": "ᯒ", "ma": "ᯔ", "ta": "ᯖ", "sa": "ᯘ", "ya": "ᯛ",
        "nga": "ᯝ", "la": "ᯞ", "nya": "ᯠ", "i": "ᯤ", "u": "ᯥ"
      }
    },
    lampung: {
      name: "Aksara Lampung (Had Lampung)",
      chars: {
        "ka": "ꥆ", "ga": "ꥇ", "nga": "ꥈ", "pa": "ꥉ", "ba": "ꥊ",
        "ma": "ꥋ", "ta": "ꥌ", "da": "ꥍ", "na": "ꥎ", "ca": "ꥏ",
        "ja": "ꥐ", "nya": "ꥑ", "ya": "ꥒ", "a": "꥓", "la": "꥔",
        "ra": "꥕", "sa": "꥖", "wa": "꥗", "ha": "꥘"
      }
    }
  },

  // --------------------------------------------------------------------------
  // 5. MULTIMODAL VISION LENS KNOWLEDGE BASE
  // --------------------------------------------------------------------------
  vision_artifacts: {
    "batik_megamendung": {
      title: "Motif Batik Megamendung",
      origin: "Cirebon, Jawa Barat",
      category: "Kain Tradisional (Wastra)",
      hallmarks: "Bentuk awan berlapis gradasi warna tegas (biasanya biru atau merah) yang dinamis dan berputar.",
      philosophy: "Melambangkan awan pembawa hujan penyejuk bumi. Mengajarkan manusia untuk selalu menahan amarah, berkepala dingin, dan membawa keteduhan bagi lingkungan sekitar.",
      daily_usage: "Dikenakan pada acara kehormatan, upacara adat, serta busana resmi modern."
    },
    "batik_parang": {
      title: "Motif Batik Parang Rusak",
      origin: "Yogyakarta & Surakarta, Jawa Tengah",
      category: "Kain Tradisional Keraton",
      hallmarks: "Pola garis diagonal berulang menyerupai ombak laut atau pedang yang bersambung tanpa putus.",
      philosophy: "Melambangkan ombak karang yang pantang menyerah. Mengajarkan manusia untuk memiliki semangat juang tiada henti, menjaga moralitas luhur, dan integritas kepemimpinan.",
      daily_usage: "Dahulu busana sakral para Raja dan ksatria; kini dipakai pada perhelatan resmi dan wisuda."
    },
    "batik_kawung": {
      title: "Motif Batik Kawung",
      origin: "Jawa Tengah & D.I. Yogyakarta",
      category: "Kain Tradisional Klasik",
      hallmarks: "Susunan empat lingkaran elips menyerupai irisan buah aren atau kolang-kaling.",
      philosophy: "Melambangkan kesucian hati, ketulusan, keadilan, serta pengendalian hawa nafsu yang sempurna.",
      daily_usage: "Sering digunakan oleh tokoh masyarakat dan tetua dalam musyawarah adat."
    },
    "keris_luk": {
      title: "Keris Pusaka Berluk",
      origin: "Nusantara (Jawa, Bali, Sumatera, Bugis)",
      category: "Senjata Pusaka & Tosan Aji",
      hallmarks: "Bilah besi berlapis pamor dengan lekukan (luk) ganjil (luk 3, 5, 7, 9, 13) dan hulu berukir indah.",
      philosophy: "Simbol kehormatan, keteguhan prinsip, dan ikhtiar spiritual untuk melindungi keluarga dan tanah air.",
      daily_usage: "Sebagai kelengkapan busana adat pengantin pria dan pusaka warisan keluarga turun-temurun."
    },
    "rumah_gadang": {
      title: "Rumah Gadang (Bagonjong)",
      origin: "Minangkabau, Sumatera Barat",
      category: "Arsitektur Adat Nusantara",
      hallmarks: "Atap melengkung runcing menyerupai tanduk kerbau (gonjong) dengan ukiran kayu floral khas Minang.",
      philosophy: "Melambangkan musyawarah mufakat dan penghormatan terhadap garis keturunan ibu (matrilineal).",
      daily_usage: "Pusat pertemuan kaum, upacara adat perkawinan, dan pengangkatan penghulu suku."
    },
    "honai_papua": {
      title: "Rumah Honai",
      origin: "Papua Pegunungan (Suku Dani)",
      category: "Arsitektur Adat Nusantara",
      hallmarks: "Bangunan bulat berbahan kayu dengan atap jerami/ilalang tebal tanpa jendela untuk menahan hawa dingin.",
      philosophy: "Melambangkan kehangatan keluarga, persatuan suku, dan ketahanan hidup selaras dengan alam.",
      daily_usage: "Tempat tinggal keluarga, tempat musyawarah pemuda, dan penyimpanan lumbung pangan."
    },
    "songket_palembang": {
      title: "Songket Palembang (Ratu Kain)",
      origin: "Sumatera Selatan",
      category: "Kain Tenun Mewah",
      hallmarks: "Tenunan benang emas dan perak berkilau dengan motif geometris mawar, bintang, atau naga.",
      philosophy: "Melambangkan kejayaan dan kemakmuran Kerajaan Sriwijaya, serta keanggunan budi pekerti wanita Melayu.",
      daily_usage: "Busana sakral upacara adat perkawinan dan penyambutan tamu kehormatan."
    },
    "rendang_padang": {
      title: "Rendang Daging Sapi",
      origin: "Minangkabau, Sumatera Barat",
      category: "Kuliner Warisan Dunia (UNESCO)",
      hallmarks: "Daging sapi dengan karamelisasi santan kelapa dan rempah pekat berwarna cokelat gelap.",
      philosophy: "Memiliki 4 pilar filosofi: Dagiang (pemimpin), Karambia/Kelapa (intelek), Lado/Cabai (ulama), dan Pemasak/Bumbu (masyarakat).",
      daily_usage: "Sajian utama hari raya Idulfitri, pesta adat, dan bekal perjalanan perantau Minang."
    }
  },

  // --------------------------------------------------------------------------
  // 6. FACT-FIRST HISTORICAL & CULTURAL RAG DATABASE
  // --------------------------------------------------------------------------
  rag_facts: [
    {
      topic: "diponegoro",
      keywords: ["pangeran diponegoro", "diponegoro", "perang jawa", "antawirya"],
      title: "Pangeran Diponegoro (Raden Mas Antawirya)",
      facts: {
        "Nama lengkap": "Raden Mas Antawirya (Pangeran Diponegoro)",
        "Lahir": "11 November 1785, Ngayogyakarta Hadiningrat",
        "Wafat": "8 Januari 1855, Benteng Rotterdam, Makassar, Sulawesi Selatan",
        "Peran": "Pahlawan Nasional Indonesia (ditetapkan sejak 1973)",
        "Perjuangan": "Memimpin Perang Diponegoro / Perang Jawa (1825–1830), perang terbesar dan terpanjang di tanah Jawa yang menguras kas kolonial Belanda sebesar 20 juta gulden",
        "Alasan": "Menentang campur tangan kolonial Belanda di Keraton Yogyakarta, menolak pemasangan patok jalan Belanda di atas makam leluhurnya di Tegalrejo tanpa izin, serta melindungi rakyat dari beban pajak yang menindas",
        "Peninggalan": "Naskah otobiografi 'Babad Diponegoro' (diakui UNESCO Memory of the World), Keris Kiai Naga Siluman, Tongkat Kiai Cokro",
        "Makna": "Simbol puncak integritas moral dan perlawanan rakyat pribumi dalam mempertahankan kehormatan tanah air"
      }
    },
    {
      topic: "gajah mada",
      keywords: ["gajah mada", "sumpah palapa", "mahapatih gajah mada", "patih gajah mada"],
      title: "Mahapatih Gajah Mada",
      facts: {
        "Nama lengkap": "Gajah Mada (Gelar: Patih Amangkubhumi Majapahit)",
        "Masa jabatan": "1331 – 1364 Masehi (Zaman Keemasan Kerajaan Majapahit)",
        "Peran": "Mahapatih Amangkubhumi, Panglima Perang Bhayangkara, dan Tokoh Pemersatu Nusantara",
        "Perjuangan": "Mengikrarkan Sumpah Palapa (1336 M) untuk tidak menikmati istirahat duniawi sebelum mempersatukan kepulauan Nusantara di bawah naungan Majapahit",
        "Karya hukum": "Kitab Kutaramanawa (Kitab Perundang-undangan Hukum Pidana dan Perdata Majapahit)",
        "Peninggalan": "Prasasti Singhasari (1351 M), Candi Singasari, Doktrin Pengamanan 'Bhayangkara'",
        "Makna": "Peletak fondasi wawasan geopolitik persatuan kepulauan Nusantara yang menginspirasi lahirnya Negara Kesatuan Republik Indonesia"
      }
    },
    {
      topic: "raden wijaya",
      keywords: ["raden wijaya", "pendiri majapahit", "kertarajasa jayawardhana"],
      title: "Raden Wijaya (Sri Kertarajasa Jayawardhana)",
      facts: {
        "Nama lengkap": "Raden Wijaya (Gelar: Sri Kertarajasa Jayawardhana)",
        "Masa bertakhta": "1293 – 1309 Masehi",
        "Peran": "Pendiri dan Raja Pertama Kemaharajaan Majapahit",
        "Perjuangan": "Menyusun taktik jitu memanfaatkan ekspedisi tentara Mongol (Kublai Khan) untuk menumpas Jayakatwang di Kediri, lalu berbalik mengusir tentara Mongol keluar dari pulau Jawa pada November 1293",
        "Pusat kerajaan": "Hutan Tarik (Trowulan, Mojokerto, Jawa Timur)",
        "Peninggalan": "Prasasti Sukamerta (1296 M), Prasasti Balawi (1305 M), Candi Simping (Makam pendarmaan)",
        "Makna": "Simbol kecerdasan diplomasi dan keberanian militer dalam mendirikan imperium terbesar di Asia Tenggara"
      }
    },
    {
      topic: "hayam wuruk",
      keywords: ["hayam wuruk", "raja majapahit", "sri rajasanagara"],
      title: "Raja Hayam Wuruk (Sri Rajasanagara)",
      facts: {
        "Nama lengkap": "Hayam Wuruk (Gelar: Sri Maharaja Rajasanagara)",
        "Lahir": "Tahun 1334 Masehi",
        "Wafat": "Tahun 1389 Masehi",
        "Masa pemerintahan": "1350 – 1389 Masehi (Masa Kejayaan Tertinggi Kemaharajaan Majapahit)",
        "Peran": "Raja Terbesar Majapahit yang didampingi Mahapatih Gajah Mada",
        "Pencapaian": "Mempersatukan lebih dari 98 wilayah kepulauan Nusantara dan menjalin hubungan persahabatan sejajar (Mitreka Satata) dengan kerajaan-kerajaan di Asia",
        "Peninggalan": "Kakawin Nagarakretagama (Mpu Prapanca 1365 M), Kakawin Sutasoma (Mpu Tantular), Candi Penataran, Candi Bajang Ratu, Candi Tikus",
        "Makna": "Mewujudkan era keemasan peradaban agraris, maritim, dan literasi hukum berstandar tinggi di Nusantara"
      }
    },
    {
      topic: "hasanuddin",
      keywords: ["sultan hasanuddin", "ayam jantan dari timur", "gowa", "hasanuddin"],
      title: "Sultan Hasanuddin (Ayam Jantan Dari Timur)",
      facts: {
        "Nama lengkap": "I Mallombasi Muhammad Bakir Daeng Mattawang Karaeng Bonto Mangape",
        "Lahir": "12 Januari 1631, Makassar, Kerajaan Gowa",
        "Wafat": "12 Juni 1670, Somba Opu, Gowa, Sulawesi Selatan",
        "Peran": "Raja Gowa ke-16 dan Pahlawan Nasional Indonesia",
        "Perjuangan": "Memimpin Perang Makassar (1666–1669) melawan monopoli dagang VOC Belanda untuk mempertahankan kedaulatan maritim kepulauan timur",
        "Julukan": "'De Haantjes van Het Oosten' (Ayam Jantan dari Timur) dari pihak Belanda karena kegigihan dan keberaniannya",
        "Peninggalan": "Benteng Somba Opu, Benteng Fort Rotterdam (Benteng Ujung Pandang), Kompleks Makam Katangka",
        "Makna": "Keteguhan prinsip dalam mempertahankan hak perdagangan bebas dan kedaulatan laut tanpa tunduk pada monopoli asing"
      }
    },
    {
      topic: "pattimura",
      keywords: ["pattimura", "kapitan pattimura", "thomas matulessy", "maluku"],
      title: "Kapitan Pattimura (Thomas Matulessy)",
      facts: {
        "Nama lengkap": "Thomas Matulessy (Kapitan Pattimura)",
        "Lahir": "8 Juni 1783, Hualoy / Haruku, Maluku",
        "Wafat": "16 Desember 1817 (Dihukum gantung di Benteng Victoria, Ambon)",
        "Peran": "Panglima Perang Maluku dan Pahlawan Nasional Indonesia",
        "Perjuangan": "Memimpin perlawanan rakyat Maluku pada tahun 1817 melawan penindasan monopoli rempah-rempah (cengkih) dan sistem kerja paksa kolonial Belanda",
        "Peristiwa penting": "Berhasil merebut Benteng Duurstede di Saparua dan mengalahkan tentara ekspedisi Belanda pimpinan Mayor Beetjes",
        "Makna": "Simbol pantang menyerah rakyat kepulauan Maluku dengan pesan abadi: 'Pattimura-Pattimura tua boleh gugur, namun kelak akan bangkit Pattimura-Pattimura muda meneruskan perjuangan'"
      }
    },
    {
      topic: "cut nyak dien",
      keywords: ["cut nyak dien", "cut nyak dhien", "perang aceh", "teuku umar"],
      title: "Cut Nyak Dien (Srikandi Perang Aceh)",
      facts: {
        "Nama lengkap": "Cut Nyak Dien",
        "Lahir": "Tahun 1848, Lampadang, Kerajaan Aceh",
        "Wafat": "6 November 1908, Sumedang, Jawa Barat",
        "Peran": "Panglima Gerilya Perang Aceh dan Pahlawan Nasional Indonesia",
        "Perjuangan": "Memimpin perang gerilya melawan agresi militer Belanda di rimba raya Aceh Barat selama puluhan tahun hingga usia senja",
        "Alasan": "Melindungi kedaulatan tanah air Aceh, membela agama Islam, dan membalas gugurnya suaminya Teuku Cik Ibrahim Lamnga dan Teuku Umar",
        "Makam": "Gunung Puyuh, Sumedang, Jawa Barat (Dihormati sebagai 'Ibu Perbu')",
        "Makna": "Teladan kepemimpinan wanita yang memiliki keteguhan iman, kecerdasan taktik militer, dan patriotisme sejati"
      }
    },
    {
      topic: "imam bonjol",
      keywords: ["tuanku imam bonjol", "imam bonjol", "perang padri", "peto syarif"],
      title: "Tuanku Imam Bonjol (Muhammad Syahab / Peto Syarif)",
      facts: {
        "Nama lengkap": "Muhammad Syahab (Gelar: Peto Syarif / Tuanku Imam Bonjol)",
        "Lahir": "Tahun 1772, Bonjol, Pasaman, Sumatera Barat",
        "Wafat": "6 November 1864, Lotak, Pineleng, Minahasa, Sulawesi Utara",
        "Peran": "Pemimpin Utama Kaum Padri dalam Perang Padri (1803–1838) dan Pahlawan Nasional Indonesia",
        "Perjuangan": "Mempertahankan Benteng Tujuh Lapis Bukit Tajadi dari gempuran artileri Belanda dan menyatukan seluruh elemen Minangkabau",
        "Peristiwa penting": "Memprakarsai Konsensus Puncak Pato yang melahirkan piagam 'Adat Basandi Syarak, Syarak Basandi Kitabullah' (ABSSBK)",
        "Makna": "Pelopor integrasi nilai syariat agama dan keluhuran adat istiadat dalam membentengi martabat bangsa"
      }
    },
    {
      topic: "sultan agung",
      keywords: ["sultan agung", "mataram islam", "penyerbuan batavia", "hanyokrokusumo"],
      title: "Sultan Agung Hanyokrokusumo",
      facts: {
        "Nama lengkap": "Raden Mas Jatmika (Gelar: Sultan Agung Senapati-ing-Ngalaga Abdurrahman)",
        "Lahir": "Tahun 1593, Kotagede, Kesultanan Mataram",
        "Wafat": "Tahun 1645, Karta (Bantul, Yogyakarta)",
        "Masa bertakhta": "1613 – 1645 Masehi (Raja Ketiga Kesultanan Mataram Islam)",
        "Peran": "Raja Terbesar Mataram Islam dan Pahlawan Nasional Indonesia",
        "Perjuangan": "Memimpin penyerbuan militer besar-besaran ke markas VOC di Batavia sebanyak dua kali (1628 dan 1629)",
        "Karya peradaban": "Menciptakan Kalender Jawa (Tahun Jawa Sultan Agungan 1633 M) yang memadukan tahun Saka dan Hijriah, serta menggubah Kitab Sastra Gendhing",
        "Peninggalan": "Kompleks Makam Raja-Raja Imogiri, Masjid Agung Kotagede",
        "Makna": "Pemimpin visioner yang memadukan kekuatan militer, ketahanan pangan, dan puncak kebudayaan adiluhung"
      }
    },
    {
      topic: "majapahit",
      keywords: ["majapahit", "kerajaan majapahit", "kemaharajaan majapahit"],
      title: "Kemaharajaan Majapahit (1293–1527 M)",
      facts: {
        "Nama kerajaan": "Kemaharajaan Majapahit (Wilwatikta)",
        "Tahun berdiri": "10 November 1293 Masehi",
        "Pusat ibu kota": "Trowulan (Mojokerto, Jawa Timur)",
        "Pendiri": "Raden Wijaya (Kertarajasa Jayawardhana)",
        "Raja terbesar": "Hayam Wuruk (1350–1389 M) didampingi Mahapatih Gajah Mada",
        "Wilayah kekuasaan": "Mencakup kepulauan Nusantara (Sumatera hingga Papua), Semenanjung Melayu, dan Tumasik (Singapura)",
        "Sebab kemunduran": "Perang Saudara Paregreg (1404–1406 M) pasca wafatnya Hayam Wuruk, krisis suksesi tahta, dan berkembangnya Kesultanan Demak di pesisir utara",
        "Peninggalan": "Candi Bajang Ratu, Candi Tikus, Candi Brahu, Gapura Wringin Lawang, Kitab Kakawin Nagarakretagama, Kitab Sutasoma",
        "Makna": "Puncak integrasi peradaban maritim dan agraris terbesar Nusantara yang melahirkan semboyan Bhinneka Tunggal Ika"
      }
    },
    {
      topic: "sriwijaya",
      keywords: ["sriwijaya", "kerajaan sriwijaya", "kedatuan sriwijaya", "palembang"],
      title: "Kedatuan Sriwijaya (Abad ke-7 – ke-14 M)",
      facts: {
        "Nama kerajaan": "Kedatuan Sriwijaya",
        "Tahun berdiri": "Sekitar tahun 671 Masehi (Berdasarkan catatan I-Tsing dan Prasasti Kedukan Bukit 683 M)",
        "Pusat ibu kota": "Palembang (Tepi Sungai Musi, Sumatera Selatan) dan Muaro Jambi",
        "Pendiri": "Dapunta Hyang Sri Jayanasa",
        "Raja terbesar": "Maharaja Balaputradewa (Abad ke-9 Masehi)",
        "Peran maritim": "Menguasai penuh jalur perdagangan internasional Selat Malaka dan Selat Sunda, serta menjadi pusat pendidikan agama Buddha Internasional di Asia Tenggara",
        "Sebab kemunduran": "Serangan ekspedisi Kerajaan Chola dari India Selatan (1025 M) dan Ekspedisi Pamalayu oleh Kerajaan Singasari (1275 M)",
        "Peninggalan": "Prasasti Kedukan Bukit, Prasasti Talang Tuwo, Prasasti Kota Kapur, Candi Muara Takus (Riau), Candi Muaro Jambi",
        "Makna": "Bukti kehebatan imperium maritim Nusantara yang diakui oleh Kekaisaran Tiongkok dan India kuno"
      }
    },
    {
      topic: "siri na pacce",
      keywords: ["siri na pacce", "siri", "pacce", "makassar", "bugis"],
      title: "Filosofi 'Siri' Na Pacce' (Bugis & Makassar)",
      facts: {
        "Nama filosofi": "Siri' Na Pacce (Bugis: Siri' Na Pesse)",
        "Asal kebudayaan": "Suku Bugis, Makassar, Mandar, dan Toraja (Sulawesi Selatan & Barat)",
        "Arti harfiah": "'Siri'' = Harga diri, kehormatan, integritas, dan rasa malu berbuat nista. 'Pacce' = Rasa empati batin yang mendalam dan kesetiakawanan membela sesama yang tertindas",
        "Kaidah moral": "\"Siri'mi naritau\" (Karena harga dirilah kita dinamakan manusia; tanpa harga diri, manusia tidak ubahnya seperti binatang)",
        "Penerapan": "Menjaga kejujuran dalam berdagang, menepati janji, membela kebenaran, dan pantang menyerah dalam mengarungi kehidupan",
        "Makna": "Pilar moralitas dan karakter pantang menyerah masyarakat maritim Sulawesi Selatan"
      }
    },
    {
      topic: "tri hita karana",
      keywords: ["tri hita karana", "bali", "parhyangan", "pawongan", "palemahan"],
      title: "Kearifan 'Tri Hita Karana' (Bali)",
      facts: {
        "Nama filosofi": "Tri Hita Karana",
        "Asal kebudayaan": "Masyarakat Adat Hindu Bali",
        "Arti harfiah": "Tiga penyebab terciptanya kebahagiaan dan keharmonisan hidup",
        "3 Pilar utama": "1. Parhyangan (Harmoni hubungan manusia dengan Sang Pencipta / Ida Sang Hyang Widhi Wasa); 2. Pawongan (Harmoni hubungan cinta kasih antar sesama manusia); 3. Palemahan (Harmoni hubungan pelestarian manusia dengan alam lingkungan)",
        "Penerapan": "Sistem irigasi persawahan Subak (Warisan Dunia UNESCO), tradisi gotong royong Ngayah di Banjar, dan perayaan Nyepi",
        "Makna": "Konsep ekologi spiritual holistik yang menjaga kelestarian alam dan kerukunan sosial"
      }
    }
  ],

  // --------------------------------------------------------------------------
  // 7. REGIONAL CULTURAL DOSSIERS
  // --------------------------------------------------------------------------
  regions: {
    sumatera: {
      title: "Kepulauan Sumatera",
      languages: "Aceh, Batak Toba, Batak Karo, Minangkabau, Melayu, Lampung",
      house: "Rumah Gadang (Minang), Rumah Bolon (Batak), Rumoh Aceh",
      dance: "Tari Saman (Aceh), Tari Piring (Minang), Tari Tor-Tor (Batak)",
      weapon: "Rencong (Aceh), Kerambit (Minang), Piso Surit (Batak)",
      culinary: "Rendang, Mie Aceh, Arsik Ikan Mas, Tempoyak, Pempek",
      etiquette: "Kekeluargaan sangat erat, selalu gunakan sapaan gelar kekerabatan (Uda/Uni/Lae) saat bertamu."
    },
    jawa: {
      title: "Pulau Jawa & Madura",
      languages: "Jawa (Krama/Ngoko), Sunda (Lemes/Loma), Madura, Betawi",
      house: "Rumah Joglo (Jawa), Imah Julang Ngapak (Sunda), Rumah Kebaya (Betawi)",
      dance: "Tari Bedhaya (Jawa), Tari Jaipong (Sunda), Tari Topeng Betawi",
      weapon: "Keris, Kujang (Sunda), Golok (Betawi), Clurit (Madura)",
      culinary: "Rawon, Gudeg, Nasi Liwet, Kerak Telor, Sate Madura",
      etiquette: "Sangat menjunjung tinggi unggah-ungguh (tata krama) dan bahasa halus saat berbicara dengan yang lebih tua."
    },
    nusa: {
      title: "Kepulauan Bali & Nusa Tenggara",
      languages: "Bali (Alus/Kasar), Sasak (Lombok), Bima (Mbojo)",
      house: "Gapura Candi Bentar / Bale Manten (Bali), Bale Lumbung (Sasak)",
      dance: "Tari Kecak & Pendet (Bali), Tari Gandrung (Sasak), Tari Buja Kadanda (Bima)",
      weapon: "Keris Bali, Tiuk (Pisau Bali), Keris Sumbawa",
      culinary: "Ayam Betutu, Sate Lilit, Ayam Taliwang, Plecing Kangkung",
      etiquette: "Jaga kesucian area pura dan hargai tradisi adat serta keharmonisan Tri Hita Karana."
    },
    kalimantan: {
      title: "Pulau Kalimantan (Borneo)",
      languages: "Banjar, Dayak Ngaju, Dayak Kenyah, Melayu Sambas",
      house: "Rumah Betang (Dayak), Rumah Bubungan Tinggi (Banjar)",
      dance: "Tari Kancet Papatai (Dayak), Tari Radap Rahayu (Banjar)",
      weapon: "Mandau (Dayak), Sumpit (Blowpipe)",
      culinary: "Soto Banjar, Juhu Singkah (Umbut Rotan), Ikan Patin Baubar",
      etiquette: "Hargai kearifan lokal suku Dayak dan junjung semangat persaudaraan Huma Betang."
    },
    sulawesi: {
      title: "Pulau Sulawesi",
      languages: "Bugis, Makassar, Toraja, Tae', Minahasa, Gorontalo",
      house: "Tongkonan (Toraja), Balla Lompoa (Makassar), Rumah Boyang (Mandar)",
      dance: "Tari Pakarena (Makassar), Tari Pa'gellu (Toraja), Tari Maengket (Minahasa)",
      weapon: "Badik (Bugis/Makassar), Gayang (Toraja)",
      culinary: "Coto Makassar, Konro, Pa'piong (Toraja), Tinutuan (Manado), Pallubasa",
      etiquette: "Prinsip Siri' Na Pacce dijunjung tinggi; bersikap sopan santun dan hargai adat leluhur."
    },
    maluku: {
      title: "Kepulauan Maluku (Kepulauan Rempah)",
      languages: "Melayu Ambon, Ternate, Tidore, Kei",
      house: "Rumah Baileo (Maluku)",
      dance: "Tari Cakalele (Maluku), Tari Saureka-reka",
      weapon: "Parang Salawaku (Maluku)",
      culinary: "Papeda Kuah Kuning, Ikan Kuah Pala Banda, Kohu-kohu",
      etiquette: "Junjung tinggi ikatan persaudaraan 'Pela Gandong' dengan sapaan hangat 'Basudara'."
    },
    papua: {
      title: "Tanah Papua",
      languages: "Melayu Papua, Dani, Asmat, Biak, Sentani",
      house: "Rumah Honai (Suku Dani), Rumah Rumsram (Biak), Ebai",
      dance: "Tari Suanggi, Tari Musyoh, Tari Yospan",
      weapon: "Busur & Panah Tradisional, Tombak Papua, Belati Tulang Kasuari",
      culinary: "Papeda, Ikan Bakar Manokwari, Udang Selingkuh, Kue Lontar",
      etiquette: "Sapa dengan hangat menggunakan kata 'Pace' dan 'Mace' serta hargai kearifan tradisi alam."
    }
  },

  // --------------------------------------------------------------------------
  // 8. 3-TIER MULTI-LEVEL QUIZ CHALLENGE
  // --------------------------------------------------------------------------
  quizzes: [
    {
      level: "Pemula",
      q: "Apa arti dari sapaan Jawa halus 'Kados pundi pawartosipun?'",
      options: ["Mau pergi ke mana?", "Apa kabar Anda?", "Berapa harga makanan ini?", "Mari kita makan bersama"],
      answer: 1,
      explanation: "'Kados pundi pawartosipun?' adalah bentuk Krama Inggil santun untuk menanyakan kabar lawan bicara."
    },
    {
      level: "Pemula",
      q: "Dalam tata krama Basa Sunda, tingkatan kata 'Tuang' digunakan untuk...",
      options: ["Diri sendiri secara santai", "Menghormati orang lain yang sedang makan", "Memarahi seseorang", "Menyuruh hewan makan"],
      answer: 1,
      explanation: "Dalam tata krama Basa Sunda, 'Tuang' adalah kata halus untuk orang lain yang dihormati, sedangkan untuk diri sendiri menggunakan 'Neda'."
    },
    {
      level: "Menengah",
      q: "Prinsip moralitas 'Siri Na Pacce' berasal dari kebudayaan suku...",
      options: ["Batak Toba", "Dayak Ngaju", "Bugis & Makassar", "Sasak Lombok"],
      answer: 2,
      explanation: "'Siri Na Pacce' adalah filosofi kehormatan moral dan empati mendalam masyarakat Bugis-Makassar."
    },
    {
      level: "Menengah",
      q: "Jika Anda berbelanja di Pasar Ambon, kata 'Dangke banya' bermakna...",
      options: ["Selamat pagi", "Berapa harganya", "Terima kasih banyak", "Kurang sedikit harganya"],
      answer: 2,
      explanation: "'Dangke' adalah serapan dialek Melayu Ambon yang berarti 'Terima kasih'."
    },
    {
      level: "Mahir",
      q: "Filosofi 'Tri Hita Karana' di Bali menekankan keharmonisan antara tiga pilar, yaitu...",
      options: ["Manusia dengan Tuhan, sesama manusia, dan alam lingkungan", "Raja, menteri, dan rakyat jelata", "Tiga dewa utama Trimurti saja", "Masa lalu, masa kini, dan masa depan"],
      answer: 0,
      explanation: "Tri Hita Karana berarti tiga penyebab kesejahteraan: Parhyangan (Tuhan), Pawongan (Manusia), dan Palemahan (Alam)."
    }
  ]
};
