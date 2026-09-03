/* Gemini Vision gateway for the browser-only NusaRagam build. */
(function () {
  const CULTURAL_SCOPE = "batik/wastra, rumah adat, pakaian adat, tarian adat, kerajinan, atau alat musik tradisional Indonesia";

  async function analyzeVision(base64Data, mimeType, apiKey) {
    if (!apiKey) throw new Error("Gemini API key is required");

    const prompt = `Anda adalah pemeriksa budaya Indonesia yang sangat konservatif.
Hanya kenali objek budaya Indonesia yang benar-benar tampak pada gambar dan termasuk ${CULTURAL_SCOPE}.
Jika gambar menampilkan wajah, tangan, pakaian biasa, hewan, pemandangan, benda modern, gambar buram, atau Anda ragu, tolak.
Jangan pernah mengubah wajah atau objek nonbudaya menjadi batik.
Jika ragu, isi is_nusantara_culture=false, confidence_score maksimal 59, dan title/category "Bukan objek budaya Nusantara".
Jangan menjawab kalau bukan batik/rumah adat/pakaian adat/tarian/kerajinan/alat musik.
Jawaban harus singkat, jelas, spesifik, dan akurat secara budaya. Jangan mengarang asal, makna, fungsi, atau sumber.
Keluarkan HANYA JSON valid dengan bentuk:
{
  "is_nusantara_culture": true,
  "confidence_score": 0,
  "visual_match": 0,
  "cultural_match": 0,
  "image_quality": 0,
  "title": "",
  "origin": "",
  "category": "",
  "hallmarks": "",
  "function": "",
  "philosophy": "",
  "fun_fact": "",
  "reference": ""
}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [
          { text: prompt },
          { inline_data: { mime_type: mimeType, data: base64Data } }
        ] }]
      })
    });

    if (!response.ok) throw new Error(`Gemini Vision API Error: ${response.status}`);
    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!rawText) throw new Error("Gemini returned an empty Vision response");
    return JSON.parse(rawText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim());
  }

  async function askMpu(query, apiKey) {
    if (!apiKey) throw new Error("Gemini API key is required");
    const prompt = `Anda adalah Mpu Nusantara, pakar sejarah dan budaya Indonesia.
Jawab hanya pertanyaan tentang Indonesia: sejarah kerajaan, pahlawan, suku, bahasa, rumah adat, pakaian, tarian, alat musik, makanan, wisata, tradisi, seni, aksara, atau peninggalan sejarah.
Jika pertanyaan di luar Indonesia, jawab singkat: Maaf, saya khusus menjawab tentang budaya & sejarah Indonesia.
Gunakan fakta yang dapat dipertanggungjawabkan. Jangan mengarang tanggal, asal daerah, makna, atau sumber. Jawaban singkat dan padat.
Keluarkan HANYA JSON valid: {"answer":"...","category":"...","region":"...","source":"...","confidence":0.0}
Pertanyaan: ${query}`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!response.ok) throw new Error(`Gemini MPU API Error: ${response.status}`);
    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!rawText) throw new Error("Gemini returned an empty MPU response");
    return JSON.parse(rawText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim());
  }

  window.GeminiService = { analyzeVision, askMpu };
})();
