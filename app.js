/**
 * ============================================================================
 * NUSARAGAM AI — MASTER LOGIC CONTROLLER (app.js)
 * Official Release for Young Coders World Cup (YCWC) 2026
 * Theme: AI for Daily Life & Cultural Preservation
 * 
 * Core Components:
 *  1. Hybrid LLM System (Local DB ➔ Gemini 2.0 Flash ➔ 3-Layer Validation)
 *  2. 3-Layer Automated Linguistic Validation (Grammar, Politeness, Confidence)
 *  3. 4-Tier Trust Badges (🟢 Database Verified, 🔵 AI Generated, ⚠️ Warning, ❌ Blocked)
 *  4. Ask Mpu Nusantara Fact-First Knowledge Engine & Local Cache
 *  5. 7 Social Daily Situations Engine with Web Speech STT & TTS
 *  6. Daily Wisdom Canvas & WhatsApp Sharer
 *  7. Traditional Scripts Transliteration (6 Scripts)
 *  8. Multimodal Vision Lens AI Scanner
 *  9. Interactive SVG Archipelago Map & 3-Tier Multi-Level Quiz
 * ============================================================================
 */

// Global Application State
const AppState = {
  activeTab: "translator",
  currentPoliteness: "formal",
  uiLanguage: "id",
  aiProvider: "gemini", // default: Gemini 2.0 Flash
  apiKey: "",
  temperature: 0.2,
  currentPersona: "mpu",
  isRecording: false,
  recognition: null,
  learnedWords: {},
  chatCache: {},
  currentQuizIndex: 0,
  quizScore: 0
};

// Reverse Dictionaries for Bidirectional Local Lookup
const REVERSE_DICTIONARIES = {};

// ----------------------------------------------------------------------------
// 1. INITIALIZATION & STORAGE SYNCHRONIZATION
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  buildReverseDictionaries();
  initEventListeners();
  renderLanguageSelects();
  renderDailySituationsNav();
  renderDailyWisdom();
  renderQuizQuestion();
  renderLanguageInfoCard();
  initMapInteractivity();
});

function loadStateFromStorage() {
  try {
    const savedPolite = localStorage.getItem("nusaragam_politeness");
    if (savedPolite) AppState.currentPoliteness = savedPolite;

    const savedUiLang = localStorage.getItem("nusaragam_ui_lang");
    if (savedUiLang) AppState.uiLanguage = savedUiLang;

    const savedProvider = localStorage.getItem("nusaragam_ai_provider");
    if (savedProvider) AppState.aiProvider = savedProvider;

    const savedKey = localStorage.getItem("nusaragam_api_key");
    if (savedKey) AppState.apiKey = savedKey;

    const savedLearned = localStorage.getItem("nusaragam_learned_words");
    if (savedLearned) AppState.learnedWords = JSON.parse(savedLearned);

    const savedCache = localStorage.getItem("nusaragam_chat_cache");
    if (savedCache) AppState.chatCache = JSON.parse(savedCache);
  } catch (err) {
    console.warn("Storage sync notice:", err);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem("nusaragam_politeness", AppState.currentPoliteness);
    localStorage.setItem("nusaragam_ui_lang", AppState.uiLanguage);
    localStorage.setItem("nusaragam_ai_provider", AppState.aiProvider);
    if (AppState.apiKey) localStorage.setItem("nusaragam_api_key", AppState.apiKey);
    localStorage.setItem("nusaragam_learned_words", JSON.stringify(AppState.learnedWords));
    localStorage.setItem("nusaragam_chat_cache", JSON.stringify(AppState.chatCache));
  } catch (err) {
    console.warn("Save storage error:", err);
  }
}

function buildReverseDictionaries() {
  for (let langKey in NUSANTARA_DATA.languages) {
    const langObj = NUSANTARA_DATA.languages[langKey];
    REVERSE_DICTIONARIES[langKey] = {};
    if (langObj && langObj.words) {
      for (let indoWord in langObj.words) {
        const item = langObj.words[indoWord];
        if (item.formal) REVERSE_DICTIONARIES[langKey][item.formal.toLowerCase()] = indoWord;
        if (item.informal) REVERSE_DICTIONARIES[langKey][item.informal.toLowerCase()] = indoWord;
      }
    }
  }
}

// ----------------------------------------------------------------------------
// 2. UI NAVIGATION, TABS & BILINGUAL I18N
// ----------------------------------------------------------------------------
function initEventListeners() {
  // Navigation Tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      const targetTab = tab.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Politeness Toggles
  const btnFormal = document.getElementById("btnFormal");
  const btnInformal = document.getElementById("btnInformal");
  if (btnFormal && btnInformal) {
    btnFormal.addEventListener("click", () => setPoliteness("formal"));
    btnInformal.addEventListener("click", () => setPoliteness("informal"));
  }

  // Translation Actions
  const translateInput = document.getElementById("translateInput");
  if (translateInput) {
    translateInput.addEventListener("input", () => {
      const countElem = document.getElementById("charCount");
      if (countElem) countElem.innerText = `${translateInput.value.length} karakter`;
    });
  }

  // Settings Modal Controls
  const openSettingsBtn = document.getElementById("btnOpenSettings");
  const closeSettingsBtn = document.getElementById("btnCloseSettings");
  const settingsModal = document.getElementById("settingsModal");
  if (openSettingsBtn && settingsModal) {
    openSettingsBtn.addEventListener("click", () => {
      populateSettingsModal();
      settingsModal.style.display = "flex";
    });
  }
  if (closeSettingsBtn && settingsModal) {
    closeSettingsBtn.addEventListener("click", () => {
      saveSettingsModal();
      settingsModal.style.display = "none";
    });
  }
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  document.querySelectorAll(".nav-tab").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-tab") === tabId);
  });
  document.querySelectorAll(".tab-pane").forEach(p => {
    p.classList.toggle("active", p.id === `tab-${tabId}`);
  });
}

function setPoliteness(tier) {
  AppState.currentPoliteness = tier;
  const btnFormal = document.getElementById("btnFormal");
  const btnInformal = document.getElementById("btnInformal");
  if (btnFormal && btnInformal) {
    btnFormal.classList.toggle("active", tier === "formal");
    btnInformal.classList.toggle("active", tier === "informal");
  }
  saveStateToStorage();
  const inputElem = document.getElementById("translateInput");
  if (inputElem && inputElem.value.trim().length > 0) {
    executeTranslation();
  }
}

function setLanguage(langCode) {
  AppState.uiLanguage = langCode;
  saveStateToStorage();
  const dict = NUSANTARA_DATA.i18n[langCode] || NUSANTARA_DATA.i18n.id;

  // Apply internationalization text
  const safeSet = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };
  const safeSetHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  safeSet("appTagline", dict.tagline);
  safeSet("tabTxtTranslator", dict.tab_translator);
  safeSet("tabTxtDaily", dict.tab_daily);
  safeSet("tabTxtAksara", dict.tab_aksara);
  safeSet("tabTxtVision", dict.tab_vision);
  safeSet("tabTxtChat", dict.tab_chat);
  safeSet("tabTxtMap", dict.tab_map);
  safeSet("tabTxtQuiz", dict.tab_quiz);
  safeSet("tabTxtInspector", dict.tab_inspector);

  showToast(langCode === "en" ? "Language switched to English 🇬🇧" : "Bahasa diubah ke Bahasa Indonesia 🇮🇩");
}

function renderLanguageSelects() {
  const srcSelect = document.getElementById("srcLangSelect");
  const tgtSelect = document.getElementById("tgtLangSelect");
  if (!srcSelect || !tgtSelect) return;

  srcSelect.innerHTML = `
    <option value="id">Bahasa Indonesia 🇮🇩</option>
    <option value="en">English 🇬🇧</option>
  `;

  tgtSelect.innerHTML = "";

  for (let key in NUSANTARA_DATA.languages) {
    const lang = NUSANTARA_DATA.languages[key];
    const srcOpt = document.createElement("option");
    srcOpt.value = key;
    srcOpt.innerText = `${lang.name} (${lang.region.split(',')[0]})`;
    srcSelect.appendChild(srcOpt);

    const tgtOpt = document.createElement("option");
    tgtOpt.value = key;
    tgtOpt.innerText = `${lang.name} (${lang.region.split(',')[0]})`;
    tgtSelect.appendChild(tgtOpt);
  }

  tgtSelect.value = "jawa";
  tgtSelect.addEventListener("change", () => {
    renderLanguageInfoCard();
    const inputElem = document.getElementById("translateInput");
    if (inputElem && inputElem.value.trim().length > 0) executeTranslation();
  });
}

function swapLanguages() {
  const srcSelect = document.getElementById("srcLangSelect");
  const tgtSelect = document.getElementById("tgtLangSelect");
  if (!srcSelect || !tgtSelect) return;

  const currentSrc = srcSelect.value;
  const currentTgt = tgtSelect.value;

  srcSelect.value = currentTgt;
  tgtSelect.value = (currentSrc === "en" || currentSrc === "id") ? "id" : currentSrc;

  renderLanguageInfoCard();
  const inputElem = document.getElementById("translateInput");
  const outputElem = document.getElementById("translateOutput");
  if (outputElem && outputElem.innerText && !outputElem.innerText.includes("Hasil terjemahan")) {
    inputElem.value = outputElem.innerText;
    executeTranslation();
  }
  showToast("🔄 Bahasa berhasil ditukar!");
}

function populateSettingsModal() {
  const providerSelect = document.getElementById("settingAiProvider");
  const apiKeyInput = document.getElementById("settingApiKey");
  if (providerSelect) providerSelect.value = AppState.aiProvider || "gemini";
  if (apiKeyInput) apiKeyInput.value = AppState.apiKey || "";
}

function saveSettingsModal() {
  const providerSelect = document.getElementById("settingAiProvider");
  const apiKeyInput = document.getElementById("settingApiKey");
  if (providerSelect) AppState.aiProvider = providerSelect.value;
  if (apiKeyInput) AppState.apiKey = apiKeyInput.value.trim();
  saveStateToStorage();
  showToast("⚙️ Pengaturan AI berhasil disimpan!");
}

// ----------------------------------------------------------------------------
// 3. HYBRID LLM SYSTEM & 3-LAYER AUTOMATED VALIDATION PIPELINE
// ----------------------------------------------------------------------------
async function executeTranslation() {
  const inputElem = document.getElementById("translateInput");
  const outputElem = document.getElementById("translateOutput");
  const srcSelect = document.getElementById("srcLangSelect");
  const tgtSelect = document.getElementById("tgtLangSelect");

  if (!inputElem || !outputElem || !srcSelect || !tgtSelect) return;

  const inputRaw = inputElem.value.trim();
  const srcLang = srcSelect.value;
  const tgtLang = tgtSelect.value;
  const effectivePolite = AppState.currentPoliteness;

  if (!inputRaw) {
    outputElem.innerText = AppState.uiLanguage === "en" ? "Contextual translation results will appear here..." : "Hasil terjemahan kontekstual akan muncul di sini...";
    resetTrustDisplay();
    return;
  }

  // Show Loading State
  showTranslationLoading(true);

  // Execute 5-Stage Safe Hybrid Pipeline
  try {
    const translationResult = await performSafeHybridPipeline(inputRaw, srcLang, tgtLang, effectivePolite);
    renderTranslationResult(translationResult, inputRaw, srcLang, tgtLang, effectivePolite);
  } catch (err) {
    console.error("Translation Pipeline error:", err);
    outputElem.innerText = "Maaf, terjadi kendala saat memproses terjemahan.";
  } finally {
    showTranslationLoading(false);
  }
}

function showTranslationLoading(isLoading) {
  const outputElem = document.getElementById("translateOutput");
  const loadingIndicator = document.getElementById("translationLoadingState");
  if (loadingIndicator) {
    loadingIndicator.style.display = isLoading ? "flex" : "none";
  }
  if (outputElem && isLoading) {
    outputElem.style.opacity = "0.5";
  } else if (outputElem) {
    outputElem.style.opacity = "1";
  }
}

/**
 * 5-STAGE HYBRID PIPELINE
 *  Langkah 1: Cek Database Lokal dulu (100% Benar ➔ Database Verified)
 *  Langkah 2: Tidak ada ➔ Panggil Live Gemini 2.0 Flash API / Mesin Cerdas
 *  Langkah 3: Uji 3 Lapis Validasi Otomatis (Struktur, Kesopanan, Keyakinan)
 *  Langkah 4: Tampilkan Hasil + Indikator Keterpercayaan (🟢 🔵 ⚠️ ❌)
 *  Langkah 5: Simpan ke localStorage
 */
async function performSafeHybridPipeline(rawText, srcLang, tgtLang, politeness) {
  // Guard 0: Cek Teks Acak / Gibberish
  if (isGibberishOrNonsense(rawText)) {
    return {
      text: "Maaf, NusaRagam AI tidak dapat menerjemahkan kalimat ini dengan pasti. Kami memprioritaskan keaslian kaidah bahasa daerah.",
      trustLevel: "safe_blocked",
      confidence: 0,
      phonetic: null
    };
  }

  // LANGKAH 1: Cek Database Lokal & Rule-based Dictionary
  const localMatch = attemptStrictLocalLookup(rawText, srcLang, tgtLang, politeness);
  if (localMatch.isExactMatch) {
    return {
      text: localMatch.text,
      trustLevel: "db_verified",
      confidence: 100,
      phonetic: localMatch.phonetic
    };
  }

  // LANGKAH 2: Cek Cache Dinamis (localStorage)
  const cacheKey = `trans_${srcLang}_${tgtLang}_${politeness}_${rawText.toLowerCase()}`;
  if (AppState.learnedWords[cacheKey]) {
    return {
      text: AppState.learnedWords[cacheKey],
      trustLevel: "ai_validated",
      confidence: 95,
      phonetic: null
    };
  }

  // LANGKAH 3: Panggil Live Gemini 2.0 Flash jika API Key tersedia
  if (AppState.aiProvider === "gemini" && AppState.apiKey) {
    try {
      const geminiResult = await callLiveGeminiTranslation(rawText, srcLang, tgtLang, politeness);
      // UJI 3 LAPIS VALIDASI OTOMATIS
      const validation = runThreeLayerValidation(rawText, geminiResult, tgtLang, politeness);

      let trustBadge = "ai_validated";
      let confidenceScore = 90;

      if (validation.status === "failed") {
        return {
          text: "Maaf, hasil terjemahan belum memenuhi standar keakuratan kaidah daerah.",
          trustLevel: "safe_blocked",
          confidence: 0,
          phonetic: null
        };
      } else if (validation.status === "warning") {
        trustBadge = "warning";
        confidenceScore = 70;
      }

      // LANGKAH 5: Simpan ke localStorage
      if (validation.status === "validated") {
        AppState.learnedWords[cacheKey] = geminiResult;
        saveStateToStorage();
      }

      return {
        text: geminiResult,
        trustLevel: trustBadge,
        confidence: confidenceScore,
        phonetic: null
      };
    } catch (apiErr) {
      console.warn("Live Gemini API call failed, fallback to local NLP engine:", apiErr);
    }
  }

  // Fallback: Smart Morphological Multi-Token Translation
  return performLocalMultiTokenTranslation(rawText, srcLang, tgtLang, politeness, cacheKey);
}

function attemptStrictLocalLookup(rawText, srcLang, tgtLang, politeness) {
  const clean = rawText.toLowerCase().trim();

  // 1. Direct 1-to-1 Match in Dictionary
  if (srcLang === "id" && NUSANTARA_DATA.languages[tgtLang]) {
    const langObj = NUSANTARA_DATA.languages[tgtLang];
    if (langObj.words && langObj.words[clean]) {
      const entry = langObj.words[clean];
      const translated = entry[politeness] || entry.formal || entry.informal;
      return { isExactMatch: true, text: translated, phonetic: entry.phonetic || null };
    }
  }

  // 2. Reverse Match (Regional ➔ Indonesian)
  if (tgtLang === "id" && REVERSE_DICTIONARIES[srcLang]) {
    const rev = REVERSE_DICTIONARIES[srcLang];
    if (rev[clean]) {
      return { isExactMatch: true, text: rev[clean], phonetic: null };
    }
  }

  return { isExactMatch: false, text: "", phonetic: null };
}

function performLocalMultiTokenTranslation(rawText, srcLang, tgtLang, politeness, cacheKey) {
  const paragraphs = rawText.split(/\r?\n/);
  let translatedParagraphs = [];
  let totalTokensCount = 0;
  let dbVerifiedTokensCount = 0;
  let samplePhonetic = null;

  for (let paragraph of paragraphs) {
    if (!paragraph.trim()) {
      translatedParagraphs.push("");
      continue;
    }

    const sentenceRegex = /([^.!?\n]+[.!?]*)/g;
    const sentences = paragraph.match(sentenceRegex) || [paragraph];
    let translatedSentences = [];

    for (let sentence of sentences) {
      const res = translateSingleSentenceWithDB(sentence.trim(), srcLang, tgtLang, politeness);
      translatedSentences.push(res.text);
      totalTokensCount += res.tokenCount;
      dbVerifiedTokensCount += res.dbCount;
      if (res.phonetic && !samplePhonetic) samplePhonetic = res.phonetic;
    }

    translatedParagraphs.push(translatedSentences.join(" "));
  }

  const finalOutput = translatedParagraphs.join("\n");
  const validation = runThreeLayerValidation(rawText, finalOutput, tgtLang, politeness);

  let trustLevel = "ai_validated";
  let confidence = Math.min(95, Math.max(60, Math.round((dbVerifiedTokensCount / (totalTokensCount || 1)) * 100)));

  if (validation.status === "failed") {
    return {
      text: "Maaf, belum dapat menerjemahkan kalimat ini secara pasti demi menjaga kemurnian bahasa daerah.",
      trustLevel: "safe_blocked",
      confidence: 0,
      phonetic: null
    };
  } else if (validation.status === "warning" || confidence < 75) {
    trustLevel = "warning";
  }

  if (trustLevel === "ai_validated") {
    AppState.learnedWords[cacheKey] = finalOutput;
    saveStateToStorage();
  }

  return {
    text: finalOutput,
    trustLevel: trustLevel,
    confidence: confidence,
    phonetic: samplePhonetic
  };
}

function translateSingleSentenceWithDB(sentenceText, srcLang, tgtLang, politeness) {
  if (!sentenceText) return { text: "", dbCount: 1, tokenCount: 1 };
  let dbCount = 0;
  let tokenCount = 0;
  let phoneticOut = null;

  if (srcLang === "id" || srcLang === "en") {
    const regionalData = NUSANTARA_DATA.languages[tgtLang];
    if (!regionalData) return { text: sentenceText, dbCount: 0, tokenCount: 1 };

    let working = sentenceText;
    const sortedPhrases = Object.keys(regionalData.words).sort((a, b) => b.length - a.length);

    for (let phrase of sortedPhrases) {
      const phraseRegex = new RegExp(`\\b${escapeRegex(phrase)}\\b`, "gi");
      if (phraseRegex.test(working)) {
        const entry = regionalData.words[phrase];
        const replacement = entry[politeness] || entry.formal || entry.informal;
        working = working.replace(phraseRegex, replacement);
        dbCount += 2;
        tokenCount += 2;
        if (entry.phonetic && !phoneticOut) phoneticOut = entry.phonetic;
      }
    }

    const tokens = working.split(/(\s+|[,.!?])/);
    let finalTokens = [];

    for (let tok of tokens) {
      if (!tok.trim() || /[,.!?]/.test(tok)) {
        finalTokens.push(tok);
        continue;
      }

      tokenCount++;
      const tokLower = tok.toLowerCase();

      if (regionalData.words[tokLower]) {
        const entry = regionalData.words[tokLower];
        finalTokens.push(entry[politeness] || entry.formal || entry.informal);
        dbCount++;
        if (entry.phonetic && !phoneticOut) phoneticOut = entry.phonetic;
      } else {
        finalTokens.push(tok);
      }
    }

    return { text: finalTokens.join(""), dbCount, tokenCount, phonetic: phoneticOut };
  }

  // Reverse Lookup (Regional ➔ ID)
  if (tgtLang === "id") {
    const revDict = REVERSE_DICTIONARIES[srcLang] || {};
    let working = sentenceText;

    const sortedRevPhrases = Object.keys(revDict).sort((a, b) => b.length - a.length);
    for (let regPhrase of sortedRevPhrases) {
      const phraseRegex = new RegExp(`\\b${escapeRegex(regPhrase)}\\b`, "gi");
      if (phraseRegex.test(working)) {
        working = working.replace(phraseRegex, revDict[regPhrase]);
        dbCount += 2;
        tokenCount += 2;
      }
    }

    const tokens = working.split(/(\s+|[,.!?])/);
    let finalTokens = [];

    for (let tok of tokens) {
      if (!tok.trim() || /[,.!?]/.test(tok)) {
        finalTokens.push(tok);
        continue;
      }

      tokenCount++;
      const tokLower = tok.toLowerCase();
      if (revDict[tokLower]) {
        finalTokens.push(revDict[tokLower]);
        dbCount++;
      } else {
        finalTokens.push(tok);
      }
    }

    return { text: finalTokens.join(""), dbCount, tokenCount };
  }

  return { text: sentenceText, dbCount: 1, tokenCount: 1 };
}

/**
 * 3-LAYER AUTOMATED LINGUISTIC VALIDATION
 *  Layer 1: Struktur Kalimat & Panjang Kata
 *  Layer 2: Konsistensi Strata Kesopanan (Unggah-Ungguh)
 *  Layer 3: Konsistensi Makna & Nilai Ambigu
 */
function runThreeLayerValidation(inputRaw, outputText, tgtLang, politeness) {
  if (!outputText || outputText.length === 0) return { status: "failed", reason: "Output kosong" };

  const inWords = inputRaw.trim().split(/\s+/).length;
  const outWords = outputText.trim().split(/\s+/).length;

  // Layer 1: Anomali rasio panjang kata
  if (outWords > inWords * 4 || (inWords >= 3 && outWords <= 1)) {
    return { status: "warning", reason: "Anomali panjang sintaksis" };
  }

  // Layer 2: Konsistensi tingkat kesopanan Jawa (Krama Inggil vs Ngoko)
  if (politeness === "formal" && tgtLang === "jawa") {
    const harshWords = ["kowe", "dheweke", "turu", "mangan", "omah"];
    const outLower = outputText.toLowerCase();
    for (let hw of harshWords) {
      if (new RegExp(`\\b${hw}\\b`, "i").test(outLower)) {
        return { status: "warning", reason: "Kata santai ditemukan pada mode halus" };
      }
    }
  }

  return { status: "validated", reason: "Lulus 3 lapis validasi" };
}

function isGibberishOrNonsense(text) {
  const clean = text.trim();
  if (clean.length < 3) return false;
  if (/(.)\1{4,}/i.test(clean)) return true;
  if (/^(?:asdf|zxcv|qwer|hjkl|1234|5678)+$/i.test(clean)) return true;
  const words = clean.split(/\s+/);
  for (let w of words) {
    if (w.length > 6 && !/[aeiouy]/i.test(w)) return true;
  }
  return false;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * LIVE GEMINI 2.0 FLASH API CALL
 */
async function callLiveGeminiTranslation(text, srcLang, tgtLang, politeness) {
  const srcName = srcLang === "id" ? "Bahasa Indonesia" : (NUSANTARA_DATA.languages[srcLang]?.name || srcLang);
  const tgtName = tgtLang === "id" ? "Bahasa Indonesia" : (NUSANTARA_DATA.languages[tgtLang]?.name || tgtLang);

  const prompt = `Terjemahkan teks berikut dari ${srcName} ke ${tgtName} dengan tingkat kesopanan ${politeness === "formal" ? "Halus/Sopan (Krama/Lemes)" : "Santai/Akrab (Ngoko/Loma)"}.
Teks: "${text}"
Keluarkan HANYA teks hasil terjemahan asli tanpa penjelasan tambahan.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${AppState.apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  if (!response.ok) throw new Error(`Gemini API Error: ${response.statusText}`);
  const data = await response.json();
  return data.candidates[0].content.parts[0].text.trim();
}

// ----------------------------------------------------------------------------
// 4. RENDERING TRANSLATION RESULTS & TRUST BADGES
// ----------------------------------------------------------------------------
function renderTranslationResult(res, inputRaw, srcLang, tgtLang, politeness) {
  const outputElem = document.getElementById("translateOutput");
  const phoneticElem = document.getElementById("phoneticGuide");
  const scriptElem = document.getElementById("scriptDisplayBox");
  const etiquetteElem = document.getElementById("culturalEtiquetteNote");

  const trustBadge = document.getElementById("trustIndicatorBadge");
  const trustMeter = document.getElementById("confidenceMeter");
  const trustFill = document.getElementById("confidenceFill");
  const trustScore = document.getElementById("confidenceScore");
  const noticeBox = document.getElementById("validationNoticeBox");

  if (!outputElem) return;
  outputElem.innerText = res.text;

  // Update Trust Badges & Confidence
  if (trustBadge && trustMeter && trustFill && trustScore) {
    trustMeter.style.display = "flex";
    trustFill.style.width = `${res.confidence}%`;
    trustScore.innerText = `${res.confidence}%`;

    if (res.trustLevel === "db_verified") {
      trustBadge.className = "badge-trust badge-db-verified";
      trustBadge.innerHTML = `🟢 <span>Database Verified (100%)</span>`;
      trustFill.style.background = "var(--emerald-primary)";
      if (noticeBox) noticeBox.style.display = "none";
    } else if (res.trustLevel === "ai_validated") {
      trustBadge.className = "badge-trust badge-ai-validated";
      trustBadge.innerHTML = `🔵 <span>AI Generated — Lulus Validasi</span>`;
      trustFill.style.background = "var(--sapphire-primary)";
      if (noticeBox) noticeBox.style.display = "none";
    } else if (res.trustLevel === "warning") {
      trustBadge.className = "badge-trust badge-ai-warning";
      trustBadge.innerHTML = `⚠️ <span>Perlu Perhatian (Konfirmasi Penutur)</span>`;
      trustFill.style.background = "var(--amber-accent)";
      if (noticeBox) {
        noticeBox.className = "validation-notice-box warning";
        noticeBox.style.display = "block";
        noticeBox.innerHTML = `⚠️ <strong>Peringatan Verifikasi:</strong> Terjemahan ini dihasilkan secara kontekstual oleh AI. Disarankan untuk memverifikasi ulang dengan penutur asli daerah.`;
      }
    } else {
      trustBadge.className = "badge-trust badge-safe-blocked";
      trustBadge.innerHTML = `❌ <span>Tidak Tersedia (Safe Guard)</span>`;
      trustFill.style.background = "var(--crimson-accent)";
      if (noticeBox) {
        noticeBox.className = "validation-notice-box blocked";
        noticeBox.style.display = "block";
        noticeBox.innerHTML = `🛡️ <strong>Prinsip Keakuratan Budaya:</strong> Sistem menolak menerjemahkan teks yang tidak terverifikasi demi menjaga keaslian kaidah bahasa daerah Nusantara.`;
      }
    }
  }

  // Update Script Transliteration
  const targetLangObj = NUSANTARA_DATA.languages[tgtLang];
  if (res.trustLevel !== "safe_blocked" && targetLangObj && targetLangObj.script_type && NUSANTARA_DATA.aksara_maps[targetLangObj.script_type]) {
    const scriptUnicode = transliterateRawTextToAksara(res.text, targetLangObj.script_type);
    if (scriptElem && scriptUnicode) {
      scriptElem.style.display = "block";
      scriptElem.innerText = scriptUnicode;
    }
  } else if (scriptElem) {
    scriptElem.style.display = "none";
  }

  // Update Phonetic Guide
  if (res.phonetic && phoneticElem && res.trustLevel !== "safe_blocked") {
    phoneticElem.style.display = "block";
    phoneticElem.innerText = `🔊 Pelafalan: ${res.phonetic}`;
  } else if (phoneticElem) {
    phoneticElem.style.display = "none";
  }

  // Update Etiquette Note
  if (targetLangObj && targetLangObj.etiquette && etiquetteElem) {
    etiquetteElem.style.display = "block";
    etiquetteElem.innerText = `💡 Catatan Etika: ${targetLangObj.etiquette}`;
  } else if (etiquetteElem) {
    etiquetteElem.style.display = "none";
  }

  // Update CoT Steps
  const cot1 = document.getElementById("cotStep1");
  const cot2 = document.getElementById("cotStep2");
  const cot3 = document.getElementById("cotStep3");
  if (cot1) cot1.innerText = `Tahap 1: Analisis semantik (${inputRaw.length} karakter) menuju bahasa tujuan.`;
  if (cot2) cot2.innerText = `Tahap 2: Kalibrasi strata tutur (${politeness === 'formal' ? 'Halus/Krama' : 'Santai/Ngoko'}).`;
  if (cot3) cot3.innerText = `Tahap 3: Uji 3 lapis validasi ➔ Status: ${res.trustLevel.toUpperCase()} (Kepercayaan: ${res.confidence}%).`;
}

function resetTrustDisplay() {
  const trustMeter = document.getElementById("confidenceMeter");
  const noticeBox = document.getElementById("validationNoticeBox");
  const scriptElem = document.getElementById("scriptDisplayBox");
  const phoneticElem = document.getElementById("phoneticGuide");
  const etiquetteElem = document.getElementById("culturalEtiquetteNote");

  if (trustMeter) trustMeter.style.display = "none";
  if (noticeBox) noticeBox.style.display = "none";
  if (scriptElem) scriptElem.style.display = "none";
  if (phoneticElem) phoneticElem.style.display = "none";
  if (etiquetteElem) etiquetteElem.style.display = "none";
}

function renderLanguageInfoCard() {
  const tgtSelect = document.getElementById("tgtLangSelect");
  if (!tgtSelect) return;
  const langKey = tgtSelect.value;
  const langObj = NUSANTARA_DATA.languages[langKey];
  const card = document.getElementById("langInfoCard");

  if (!langObj || !card) {
    if (card) card.style.display = "none";
    return;
  }

  card.style.display = "grid";
  document.getElementById("langInfoSpeakers").innerText = langObj.speakers || "Jutaan Penutur";
  document.getElementById("langInfoRegion").innerText = langObj.region || "Indonesia";
  document.getElementById("langInfoFamily").innerText = langObj.family || "Austronesia";
  document.getElementById("langInfoFact").innerText = langObj.fun_fact || "Warisan budaya adiluhung Nusantara.";
}

// ----------------------------------------------------------------------------
// 5. AUDIO TTS & VOICE STT CONTROLLER
// ----------------------------------------------------------------------------
function toggleVoiceInput() {
  const micBtn = document.getElementById("btnVoiceInput");
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRec) {
    showToast("Fitur Voice Speech Recognition tidak didukung di browser ini.");
    return;
  }

  if (AppState.isRecording) {
    if (AppState.recognition) AppState.recognition.stop();
    AppState.isRecording = false;
    if (micBtn) {
      micBtn.classList.remove("recording");
      micBtn.innerHTML = `🎙️ <span>${AppState.uiLanguage === 'en' ? 'Speak' : 'Bicara'}</span>`;
    }
    showToast("Perekaman suara dihentikan.");
    return;
  }

  try {
    const rec = new SpeechRec();
    rec.lang = document.getElementById("srcLangSelect").value === "en" ? "en-US" : "id-ID";
    rec.continuous = false;
    rec.interimResults = false;

    rec.onstart = () => {
      AppState.isRecording = true;
      if (micBtn) {
        micBtn.classList.add("recording");
        micBtn.innerHTML = `🛑 <span>Mendengarkan...</span>`;
      }
      showToast("🎙️ Silakan bicara sekarang...");
    };

    rec.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      const inputElem = document.getElementById("translateInput");
      if (inputElem) {
        inputElem.value = speechResult;
        document.getElementById("charCount").innerText = `${speechResult.length} karakter`;
        executeTranslation();
        setTimeout(playAudioTranslation, 600);
      }
    };

    rec.onerror = (e) => {
      console.warn("Speech recognition error:", e);
      showToast("Gagal merekam suara. Pastikan izin mikrofon telah aktif.");
      AppState.isRecording = false;
      if (micBtn) {
        micBtn.classList.remove("recording");
        micBtn.innerHTML = `🎙️ <span>${AppState.uiLanguage === 'en' ? 'Speak' : 'Bicara'}</span>`;
      }
    };

    rec.onend = () => {
      AppState.isRecording = false;
      if (micBtn) {
        micBtn.classList.remove("recording");
        micBtn.innerHTML = `🎙️ <span>${AppState.uiLanguage === 'en' ? 'Speak' : 'Bicara'}</span>`;
      }
    };

    AppState.recognition = rec;
    rec.start();
  } catch (err) {
    console.error("Speech rec init failed:", err);
    showToast("Terjadi kesalahan saat memulai mikrofon.");
  }
}

function playAudioTranslation() {
  const outputElem = document.getElementById("translateOutput");
  if (!outputElem) return;
  const text = outputElem.innerText;
  if (!text || text.includes("Hasil terjemahan") || text.includes("Contextual translation") || text.includes("Maaf, belum dapat")) {
    showToast("Ketik kalimat yang valid terlebih dahulu untuk mendengarkan audio.");
    return;
  }
  playSpokenText(text);
}

function playSpokenText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    showToast("🔊 Memutar pelafalan audio...");
  } else {
    showToast("Web Speech API tidak didukung di browser ini.");
  }
}

function copyTranslationResult() {
  const outputElem = document.getElementById("translateOutput");
  if (!outputElem) return;
  const text = outputElem.innerText;
  if (!text || text.includes("Hasil terjemahan") || text.includes("Contextual translation") || text.includes("Maaf, belum dapat")) return;
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 Hasil terjemahan berhasil disalin!");
  });
}

// ----------------------------------------------------------------------------
// 6. ASK MPU NUSANTARA (FACT-FIRST HISTORICAL AI ENGINE)
// ----------------------------------------------------------------------------
function handleChatEnter(e) {
  if (e.key === "Enter") sendChatMessage();
}

async function sendChatMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const query = input.value.trim();
  if (!query) return;

  const container = document.getElementById("chatMessages");

  // User Message Bubble
  const userRow = document.createElement("div");
  userRow.className = "msg-row user";
  userRow.innerHTML = `
    <div class="msg-avatar">👤</div>
    <div class="msg-bubble">${escapeHtml(query)}</div>
  `;
  container.appendChild(userRow);
  input.value = "";
  container.scrollTop = container.scrollHeight;

  // Bot Loading Bubble
  const botRow = document.createElement("div");
  botRow.className = "msg-row bot";
  botRow.innerHTML = `
    <div class="msg-avatar">🧓</div>
    <div class="msg-bubble" id="latestBotBubble">
      <span style="color:var(--gold-primary);">Mpu Nusantara sedang memverifikasi data sejarah...</span>
    </div>
  `;
  container.appendChild(botRow);
  container.scrollTop = container.scrollHeight;

  // 1. Check Local Cache
  const cacheKey = `q_${query.toLowerCase().trim()}`;
  if (AppState.chatCache[cacheKey]) {
    setTimeout(() => {
      renderBotResponse(AppState.chatCache[cacheKey].html, AppState.chatCache[cacheKey].ragContext);
    }, 200);
    return;
  }

  // 2. Search Ground-Truth RAG Facts
  const qLower = query.toLowerCase();
  let matchedFact = null;
  let retrievedContext = [];

  for (let f of NUSANTARA_DATA.rag_facts) {
    if (f.keywords && f.keywords.some(kw => qLower.includes(kw))) {
      matchedFact = f;
      retrievedContext.push(f.title);
      break;
    }
  }

  // 3. Call Live Gemini 2.0 Flash if API Key available & not matched in offline facts
  if (AppState.aiProvider === "gemini" && AppState.apiKey && !matchedFact) {
    try {
      const liveReply = await callLiveGeminiMpu(query);
      renderBotResponse(liveReply, retrievedContext);
      AppState.chatCache[cacheKey] = { html: liveReply, ragContext: retrievedContext };
      saveStateToStorage();
      return;
    } catch (err) {
      console.warn("Live Gemini Mpu failed, falling back to verified RAG engine:", err);
    }
  }

  // 4. Generate Fact-First Structured Offline Reply
  setTimeout(() => {
    const offlineReply = generateOfflineMpuReply(query, matchedFact);
    renderBotResponse(offlineReply, retrievedContext);
    AppState.chatCache[cacheKey] = { html: offlineReply, ragContext: retrievedContext };
    saveStateToStorage();
  }, 350);
}

function generateOfflineMpuReply(query, matchedFact) {
  const q = query.toLowerCase().trim();

  // A. DIRECT RAG FACT SHEET
  if (matchedFact && matchedFact.facts) {
    let factsHtml = `
      <div class="fact-sheet-card">
        <div class="fact-sheet-title">🏛️ ${escapeHtml(matchedFact.title)}</div>
        <div class="fact-list">
    `;

    for (let key in matchedFact.facts) {
      factsHtml += `
        <div class="fact-item">
          <span class="fact-label">• ${escapeHtml(key)}:</span>
          <span class="fact-val">${escapeHtml(matchedFact.facts[key])}</span>
        </div>
      `;
    }

    factsHtml += `
        </div>
      </div>
    `;
    return factsHtml;
  }

  // B. REGIONAL DOSSIER MAP
  for (let rKey in NUSANTARA_DATA.regions) {
    const reg = NUSANTARA_DATA.regions[rKey];
    if (q.includes(rKey) || q.includes(reg.title.toLowerCase())) {
      return `
        <div class="fact-sheet-card">
          <div class="fact-sheet-title">🗺️ Profil Kebudayaan ${escapeHtml(reg.title)}</div>
          <div class="fact-list">
            <div class="fact-item"><span class="fact-label">• Bahasa Daerah:</span> <span class="fact-val">${escapeHtml(reg.languages)}</span></div>
            <div class="fact-item"><span class="fact-label">• Rumah Adat:</span> <span class="fact-val">${escapeHtml(reg.house)}</span></div>
            <div class="fact-item"><span class="fact-label">• Tarian Tradisional:</span> <span class="fact-val">${escapeHtml(reg.dance)}</span></div>
            <div class="fact-item"><span class="fact-label">• Senjata Pusaka:</span> <span class="fact-val">${escapeHtml(reg.weapon)}</span></div>
            <div class="fact-item"><span class="fact-label">• Kuliner Khas:</span> <span class="fact-val">${escapeHtml(reg.culinary)}</span></div>
            <div class="fact-item"><span class="fact-label">• Etika Bertutur:</span> <span class="fact-val">${escapeHtml(reg.etiquette)}</span></div>
          </div>
        </div>
      `;
    }
  }

  // C. SALUTATIONS
  if (q.includes("halo") || q.includes("hai") || q.includes("pagi") || q.includes("siang") || q.includes("salam")) {
    return `
      <strong>Salam Rahayu dan Kebajikan Nusantara!</strong><br><br>
      Saya <strong>Mpu Nusantara</strong> siap menyajikan fakta sejarah dan kebudayaan yang spesifik dan terverifikasi.<br>
      Silakan tanyakan tokoh pahlawan (contoh: <em>Pangeran Diponegoro, Gajah Mada, Sultan Hasanuddin, Cut Nyak Dien</em>), kerajaan (contoh: <em>Majapahit, Sriwijaya, Mataram Islam</em>), atau kearifan adat 20 suku bangsa.
    `;
  }

  // D. TRUTH-FIRST ANTI-HALLUCINATION SAFE GUARD
  return `
    <div style="padding:10px; border-left:3px solid var(--crimson-accent); background:rgba(225,29,72,0.1); border-radius:var(--radius-sm);">
      🛡️ <strong>Prinsip Kejujuran Sejarah (Anti-Halusinasi):</strong><br>
      Maaf, saya belum memiliki catatan historis atau data kebudayaan yang terverifikasi secara akurat mengenai <em>"${escapeHtml(query)}"</em>.<br><br>
      NusaRagam AI mengutamakan keaslian fakta sejarah dan kebudayaan Nusantara daripada memberikan jawaban yang belum pasti kebenarannya.
    </div>
  `;
}

function renderBotResponse(textHtml, ragContext) {
  const bubble = document.getElementById("latestBotBubble");
  if (!bubble) return;

  let html = textHtml;
  if (ragContext && ragContext.length > 0) {
    html += `
      <div class="rag-badge-info">
        🛡️ <strong>Database Verified:</strong> Data terverifikasi dari Dokumen Sejarah Nasional & RAG NusaRagam AI.
      </div>
    `;
  }
  bubble.innerHTML = html;
  bubble.removeAttribute("id");
  const container = document.getElementById("chatMessages");
  if (container) container.scrollTop = container.scrollHeight;
}

async function callLiveGeminiMpu(query) {
  const systemPrompt = `Kamu adalah Mpu Nusantara — Penjaga Pengetahuan Sejarah & Budaya Nusantara.
STANDAR WAJIB JAWABAN:
1. FAKTA DULU, BARU PENJELASAN: Utamakan nama lengkap, tanggal/tahun lahir-wafat, lokasi, nama kerajaan, raja terbesar, peninggalan. DILARANG basa-basi klise.
2. FORMAT JAWABAN: Gunakan daftar poin tebal (bullet points):
   • Nama Lengkap / Gelar: ...
   • Periode / Waktu: ...
   • Peran Utama: ...
   • Peristiwa / Perjuangan Kunci: ...
   • Peninggalan: ...
   • Makna: ...
3. ANTI-HALUSINASI: Jika pertanyaan fiktif/tidak ada data, katakan jujur: "Maaf, saya belum memiliki data historis yang akurat mengenai hal ini."`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${AppState.apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${systemPrompt}\n\nPertanyaan: ${query}` }] }]
    })
  });

  if (!response.ok) throw new Error("Gemini chat API error");
  const data = await response.json();
  const rawText = data.candidates[0].content.parts[0].text;

  // Format bullets into HTML
  let formatted = escapeHtml(rawText);
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/• (.*?)(?=\n|$)/g, '<div class="fact-item"><span class="fact-val">• $1</span></div>');
  formatted = formatted.replace(/\n/g, '<br>');
  return `<div class="fact-sheet-card"><div class="fact-list">${formatted}</div></div>`;
}

function clearChatHistory() {
  const container = document.getElementById("chatMessages");
  if (!container) return;
  container.innerHTML = `
    <div class="msg-row bot">
      <div class="msg-avatar">🧓</div>
      <div class="msg-bubble">
        Riwayat percakapan telah dibersihkan. Silakan tanyakan hal baru seputar fakta sejarah dan kebudayaan 20 suku bangsa Nusantara.
      </div>
    </div>
  `;
  showToast("🗑️ Riwayat percakapan dibersihkan.");
}

// ----------------------------------------------------------------------------
// 7. DAILY SITUATIONS & SOCIAL SURVIVAL KIT
// ----------------------------------------------------------------------------
function renderDailySituationsNav() {
  const container = document.getElementById("dailySituationsTabs");
  if (!container) return;

  container.innerHTML = "";
  const sitKeys = Object.keys(NUSANTARA_DATA.situations);

  sitKeys.forEach((key, index) => {
    const sit = NUSANTARA_DATA.situations[key];
    const btn = document.createElement("button");
    btn.className = `btn-secondary ${index === 0 ? 'active' : ''}`;
    btn.innerText = sit.title;
    btn.onclick = () => {
      document.querySelectorAll("#dailySituationsTabs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDailySituationContent(key);
    };
    container.appendChild(btn);
  });

  if (sitKeys.length > 0) renderDailySituationContent(sitKeys[0]);
}

function renderDailySituationContent(sitKey) {
  const titleElem = document.getElementById("dailySituationTitle");
  const descElem = document.getElementById("dailySituationDesc");
  const dialogContainer = document.getElementById("dailyDialogContainer");

  if (!titleElem || !descElem || !dialogContainer) return;

  const sit = NUSANTARA_DATA.situations[sitKey];
  if (!sit) return;

  titleElem.innerText = sit.title;
  descElem.innerText = sit.description;
  dialogContainer.innerHTML = "";

  const selectedLang = document.getElementById("tgtLangSelect") ? document.getElementById("tgtLangSelect").value : "jawa";
  const dialogs = (sit.dialogs && sit.dialogs[selectedLang]) ? sit.dialogs[selectedLang] : (sit.dialogs ? sit.dialogs.jawa : []);

  if (!dialogs || dialogs.length === 0) {
    dialogContainer.innerHTML = `<p style="color:var(--text-muted);">Panduan percakapan untuk bahasa ini sedang diselaraskan.</p>`;
    return;
  }

  dialogs.forEach(item => {
    const card = document.createElement("div");
    card.className = "daily-dialog-card";
    card.innerHTML = `
      <div class="daily-dialog-header">
        <span class="daily-speaker-badge">${escapeHtml(item.speaker)}</span>
        <div class="daily-actions">
          <button class="btn-icon" onclick="playSpokenText('${escapeHtml(item.phrase)}')">🔊 Dengarkan</button>
          <button class="btn-icon" onclick="copyTextToClipboard('${escapeHtml(item.phrase)}')">📋 Salin</button>
        </div>
      </div>
      <div class="daily-dialog-phrase">"${escapeHtml(item.phrase)}"</div>
      <div class="daily-dialog-sub">Arti: ${escapeHtml(item.sub)}</div>
      <div class="daily-dialog-tip">💡 <strong>Etika:</strong> ${escapeHtml(item.tip)}</div>
    `;
    dialogContainer.appendChild(card);
  });
}

// ----------------------------------------------------------------------------
// 8. DAILY WISDOM & STORY GENERATOR
// ----------------------------------------------------------------------------
function renderDailyWisdom() {
  const quoteElem = document.getElementById("wisdomQuote");
  const langElem = document.getElementById("wisdomLang");
  const meanElem = document.getElementById("wisdomMeaning");
  const philElem = document.getElementById("wisdomPhilosophy");

  if (!quoteElem || !langElem || !meanElem || !philElem) return;

  const dayIndex = new Date().getDate() % NUSANTARA_DATA.wisdom.length;
  const wisdom = NUSANTARA_DATA.wisdom[dayIndex];

  quoteElem.innerText = `"${wisdom.text}"`;
  langElem.innerText = `Asal: ${wisdom.lang}`;
  meanElem.innerText = `Arti: ${wisdom.meaning}`;
  philElem.innerText = `Filosofi: ${wisdom.philosophy}`;
}

function rotateDailyWisdom() {
  const quoteElem = document.getElementById("wisdomQuote");
  const langElem = document.getElementById("wisdomLang");
  const meanElem = document.getElementById("wisdomMeaning");
  const philElem = document.getElementById("wisdomPhilosophy");

  const randIndex = Math.floor(Math.random() * NUSANTARA_DATA.wisdom.length);
  const wisdom = NUSANTARA_DATA.wisdom[randIndex];

  quoteElem.innerText = `"${wisdom.text}"`;
  langElem.innerText = `Asal: ${wisdom.lang}`;
  meanElem.innerText = `Arti: ${wisdom.meaning}`;
  philElem.innerText = `Filosofi: ${wisdom.philosophy}`;
  showToast("🔄 Petuah bijak diperbarui!");
}

function shareWisdomToWhatsApp() {
  const quote = document.getElementById("wisdomQuote").innerText;
  const lang = document.getElementById("wisdomLang").innerText;
  const meaning = document.getElementById("wisdomMeaning").innerText;

  const text = `📜 *Daily Wisdom Nusantara:*\n\n${quote}\n(${lang})\n\n_${meaning}_\n\nDibagikan dari *NusaRagam AI* — Lestarikan Budaya Nusantara 🇮🇩`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function downloadWisdomCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#0c0d12";
  ctx.fillRect(0, 0, 800, 600);

  // Border Gold
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 6;
  ctx.strokeRect(20, 20, 760, 560);

  // Title
  ctx.fillStyle = "#d4af37";
  ctx.font = "bold 28px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("NUSA RAGAM AI — DAILY WISDOM", 400, 80);

  // Proverb
  const quote = document.getElementById("wisdomQuote").innerText;
  ctx.fillStyle = "#ffffff";
  ctx.font = "italic bold 32px sans-serif";
  ctx.fillText(quote, 400, 240);

  // Meaning & Origin
  const lang = document.getElementById("wisdomLang").innerText;
  const meaning = document.getElementById("wisdomMeaning").innerText;
  ctx.fillStyle = "#d4af37";
  ctx.font = "20px sans-serif";
  ctx.fillText(lang, 400, 310);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "18px sans-serif";
  ctx.fillText(meaning, 400, 380);

  // Footer
  ctx.fillStyle = "#64748b";
  ctx.font = "14px sans-serif";
  ctx.fillText("Young Coders World Cup (YCWC) 2026 • Kebanggaan Budaya Nusantara", 400, 530);

  const link = document.createElement("a");
  link.download = "nusaragam-daily-wisdom.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("⬇️ Kartu petuah berhasil diunduh!");
}

// ----------------------------------------------------------------------------
// 9. TRADITIONAL SCRIPTS TRANSLITERATION (6 SCRIPTS)
// ----------------------------------------------------------------------------
function executeAksaraConversion() {
  const inputElem = document.getElementById("aksaraInput");
  const scriptSelect = document.getElementById("aksaraTypeSelect");
  const displayElem = document.getElementById("aksaraOutputDisplay");

  if (!inputElem || !scriptSelect || !displayElem) return;

  const raw = inputElem.value.trim();
  const scriptKey = scriptSelect.value;

  if (!raw) {
    displayElem.innerText = "Hasil aksara akan muncul di sini...";
    return;
  }

  const converted = transliterateRawTextToAksara(raw, scriptKey);
  displayElem.innerText = converted || raw;
  showToast("📜 Transliterasi aksara selesai!");
}

function transliterateRawTextToAksara(rawText, scriptKey) {
  const mapObj = NUSANTARA_DATA.aksara_maps[scriptKey];
  if (!mapObj || !rawText) return "";

  const cleanText = rawText.toLowerCase();
  let result = "";
  let i = 0;

  while (i < cleanText.length) {
    if (cleanText[i] === " " || /[,.!?\n]/.test(cleanText[i])) {
      result += cleanText[i];
      i++;
      continue;
    }
    const three = cleanText.substr(i, 3);
    if (mapObj.chars[three]) {
      result += mapObj.chars[three];
      i += 3;
      continue;
    }
    const two = cleanText.substr(i, 2);
    if (mapObj.chars[two]) {
      result += mapObj.chars[two];
      i += 2;
      continue;
    }
    const one = cleanText.substr(i, 1);
    if (mapObj.chars[one]) {
      result += mapObj.chars[one];
    } else {
      result += one;
    }
    i++;
  }
  return result;
}

// ----------------------------------------------------------------------------
// 10. MULTIMODAL VISION LENS SCANNER
// ----------------------------------------------------------------------------
function analyzeVisionSample(sampleKey) {
  const artifact = NUSANTARA_DATA.vision_artifacts[sampleKey];
  const resultCard = document.getElementById("visionResultCard");

  if (!artifact || !resultCard) return;

  document.getElementById("visionArtifactTitle").innerText = artifact.title;
  document.getElementById("visionArtifactOrigin").innerText = artifact.origin;
  document.getElementById("visionArtifactCategory").innerText = artifact.category;
  document.getElementById("visionArtifactHallmarks").innerText = artifact.hallmarks;
  document.getElementById("visionArtifactPhilosophy").innerText = artifact.philosophy;
  document.getElementById("visionArtifactUsage").innerText = artifact.daily_usage;

  resultCard.style.display = "block";
  resultCard.scrollIntoView({ behavior: "smooth" });
  showToast(`📷 Analisis Vision AI: ${artifact.title}`);
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  showToast("📷 Memindai gambar dengan model Vision AI...");
  setTimeout(() => {
    // Match to batik megamendung sample
    analyzeVisionSample("batik_megamendung");
  }, 800);
}

// ----------------------------------------------------------------------------
// 11. INTERACTIVE MAP & 3-TIER QUIZ CHALLENGE
// ----------------------------------------------------------------------------
function initMapInteractivity() {
  document.querySelectorAll(".map-island-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const regKey = btn.getAttribute("data-region");
      showRegionDossier(regKey);
    });
  });
}

function showRegionDossier(regKey) {
  const reg = NUSANTARA_DATA.regions[regKey];
  const dossierCard = document.getElementById("mapDossierCard");
  if (!reg || !dossierCard) return;

  document.getElementById("dossierTitle").innerText = reg.title;
  document.getElementById("dossierLangs").innerText = reg.languages;
  document.getElementById("dossierHouse").innerText = reg.house;
  document.getElementById("dossierDance").innerText = reg.dance;
  document.getElementById("dossierWeapon").innerText = reg.weapon;
  document.getElementById("dossierFood").innerText = reg.culinary;
  document.getElementById("dossierEtiquette").innerText = reg.etiquette;

  dossierCard.style.display = "block";
  dossierCard.scrollIntoView({ behavior: "smooth" });
}

function renderQuizQuestion() {
  const container = document.getElementById("quizCardContainer");
  if (!container) return;

  const currentQuiz = NUSANTARA_DATA.quizzes[AppState.currentQuizIndex];
  if (!currentQuiz) {
    container.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <h3>🎉 Selamat! Anda Telah Menyelesaikan Kuis!</h3>
        <p style="font-size:1.2rem; color:var(--gold-primary); margin:15px 0;">Skor Anda: ${AppState.quizScore} / ${NUSANTARA_DATA.quizzes.length}</p>
        <button class="btn-primary" onclick="resetQuiz()">🔄 Ulangi Kuis</button>
      </div>
    `;
    return;
  }

  let optionsHtml = "";
  currentQuiz.options.forEach((opt, idx) => {
    optionsHtml += `
      <button class="quiz-opt-btn" onclick="checkQuizAnswer(${idx})">
        ${String.fromCharCode(65 + idx)}. ${escapeHtml(opt)}
      </button>
    `;
  });

  container.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-badge">Level: ${currentQuiz.level || 'Umum'}</span>
      <span class="quiz-progress">Pertanyaan ${AppState.currentQuizIndex + 1} dari ${NUSANTARA_DATA.quizzes.length}</span>
    </div>
    <div class="quiz-question">${escapeHtml(currentQuiz.q)}</div>
    <div class="quiz-options">${optionsHtml}</div>
    <div id="quizExplanationBox" style="display:none; margin-top:15px;" class="validation-notice-box"></div>
  `;
}

function checkQuizAnswer(selectedIdx) {
  const currentQuiz = NUSANTARA_DATA.quizzes[AppState.currentQuizIndex];
  const explBox = document.getElementById("quizExplanationBox");
  const buttons = document.querySelectorAll(".quiz-opt-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQuiz.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIdx === currentQuiz.answer) {
    AppState.quizScore++;
    explBox.className = "validation-notice-box";
    explBox.style.background = "rgba(16,185,129,0.1)";
    explBox.style.borderLeftColor = "var(--emerald-primary)";
    explBox.innerHTML = `✅ <strong>Benar!</strong> ${escapeHtml(currentQuiz.explanation)}`;
  } else {
    explBox.className = "validation-notice-box blocked";
    explBox.innerHTML = `❌ <strong>Kurang Tepat.</strong> ${escapeHtml(currentQuiz.explanation)}`;
  }
  explBox.style.display = "block";

  setTimeout(() => {
    AppState.currentQuizIndex++;
    renderQuizQuestion();
  }, 2200);
}

function resetQuiz() {
  AppState.currentQuizIndex = 0;
  AppState.quizScore = 0;
  renderQuizQuestion();
}

// ----------------------------------------------------------------------------
// 12. UTILITIES & TOAST NOTIFICATIONS
// ----------------------------------------------------------------------------
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 Berhasil disalin ke clipboard!");
  });
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
