const LANGUAGE_GROUPS = [
  { name: "English", dialects: [["en", "Default"], ["en-GB", "United Kingdom"]] },
  { name: "Chinese", dialects: [["zh-CN", "Mandarin (Simplified)"], ["zh-TW", "Mandarin (Traditional)"], ["yue", "Cantonese"]] },
  { name: "Spanish", dialects: [["es", "Spain"], ["es-419", "Latin America"]] },
  { name: "Portuguese", dialects: [["pt-BR", "Brazil"], ["pt-PT", "Portugal"]] },
  { name: "French", dialects: [["fr", "France"], ["fr-CA", "Canada"]] },
  { name: "Afrikaans", dialects: [["af", "Standard"]] },
  { name: "Albanian", dialects: [["sq", "Standard"]] },
  { name: "Amharic", dialects: [["am", "Standard"]] },
  { name: "Arabic", dialects: [["ar", "Standard"]] },
  { name: "Armenian", dialects: [["hy", "Standard"]] },
  { name: "Azerbaijani", dialects: [["az", "Standard"]] },
  { name: "Basque", dialects: [["eu", "Standard"]] },
  { name: "Belarusian", dialects: [["be", "Standard"]] },
  { name: "Bengali", dialects: [["bn", "Standard"]] },
  { name: "Bosnian", dialects: [["bs", "Standard"]] },
  { name: "Bulgarian", dialects: [["bg", "Standard"]] },
  { name: "Catalan", dialects: [["ca", "Standard"]] },
  { name: "Cebuano", dialects: [["ceb", "Standard"]] },
  { name: "Chichewa", dialects: [["ny", "Standard"]] },
  { name: "Corsican", dialects: [["co", "Standard"]] },
  { name: "Croatian", dialects: [["hr", "Standard"]] },
  { name: "Czech", dialects: [["cs", "Standard"]] },
  { name: "Danish", dialects: [["da", "Standard"]] },
  { name: "Dutch", dialects: [["nl", "Standard"]] },
  { name: "Esperanto", dialects: [["eo", "Standard"]] },
  { name: "Estonian", dialects: [["et", "Standard"]] },
  { name: "Filipino", dialects: [["tl", "Tagalog"]] },
  { name: "Finnish", dialects: [["fi", "Standard"]] },
  { name: "Frisian", dialects: [["fy", "Western"]] },
  { name: "Galician", dialects: [["gl", "Standard"]] },
  { name: "Georgian", dialects: [["ka", "Standard"]] },
  { name: "Greek", dialects: [["el", "Standard"]] },
  { name: "Gujarati", dialects: [["gu", "Standard"]] },
  { name: "Haitian Creole", dialects: [["ht", "Standard"]] },
  { name: "Hausa", dialects: [["ha", "Standard"]] },
  { name: "Hawaiian", dialects: [["haw", "Standard"]] },
  { name: "Hebrew", dialects: [["iw", "Standard"]] },
  { name: "Hindi", dialects: [["hi", "Standard"]] },
  { name: "Hmong", dialects: [["hmn", "Standard"]] },
  { name: "Hungarian", dialects: [["hu", "Standard"]] },
  { name: "Icelandic", dialects: [["is", "Standard"]] },
  { name: "Igbo", dialects: [["ig", "Standard"]] },
  { name: "Indonesian", dialects: [["id", "Standard"]] },
  { name: "Irish", dialects: [["ga", "Standard"]] },
  { name: "Italian", dialects: [["it", "Standard"]] },
  { name: "Japanese", dialects: [["ja", "Standard"]] },
  { name: "Javanese", dialects: [["jw", "Standard"]] },
  { name: "Kannada", dialects: [["kn", "Standard"]] },
  { name: "Kazakh", dialects: [["kk", "Standard"]] },
  { name: "Khmer", dialects: [["km", "Standard"]] },
  { name: "Kinyarwanda", dialects: [["rw", "Standard"]] },
  { name: "Korean", dialects: [["ko", "Standard"]] },
  { name: "Kurdish", dialects: [["ku", "Kurmanji"]] },
  { name: "Kyrgyz", dialects: [["ky", "Standard"]] },
  { name: "Lao", dialects: [["lo", "Standard"]] },
  { name: "Latin", dialects: [["la", "Classical"]] },
  { name: "Latvian", dialects: [["lv", "Standard"]] },
  { name: "Lithuanian", dialects: [["lt", "Standard"]] },
  { name: "Luxembourgish", dialects: [["lb", "Standard"]] },
  { name: "Macedonian", dialects: [["mk", "Standard"]] },
  { name: "Malagasy", dialects: [["mg", "Standard"]] },
  { name: "Malay", dialects: [["ms", "Standard"]] },
  { name: "Malayalam", dialects: [["ml", "Standard"]] },
  { name: "Maltese", dialects: [["mt", "Standard"]] },
  { name: "Maori", dialects: [["mi", "Standard"]] },
  { name: "Marathi", dialects: [["mr", "Standard"]] },
  { name: "Mongolian", dialects: [["mn", "Cyrillic"]] },
  { name: "Myanmar", dialects: [["my", "Burmese"]] },
  { name: "Nepali", dialects: [["ne", "Standard"]] },
  { name: "Norwegian", dialects: [["no", "Standard"]] },
  { name: "Odia", dialects: [["or", "Standard"]] },
  { name: "Pashto", dialects: [["ps", "Standard"]] },
  { name: "Persian", dialects: [["fa", "Farsi"]] },
  { name: "Polish", dialects: [["pl", "Standard"]] },
  { name: "Punjabi", dialects: [["pa", "Gurmukhi"]] },
  { name: "Romanian", dialects: [["ro", "Standard"]] },
  { name: "Russian", dialects: [["ru", "Standard"]] },
  { name: "Samoan", dialects: [["sm", "Standard"]] },
  { name: "Scots Gaelic", dialects: [["gd", "Standard"]] },
  { name: "Serbian", dialects: [["sr", "Cyrillic"]] },
  { name: "Sesotho", dialects: [["st", "Standard"]] },
  { name: "Shona", dialects: [["sn", "Standard"]] },
  { name: "Sindhi", dialects: [["sd", "Standard"]] },
  { name: "Sinhala", dialects: [["si", "Standard"]] },
  { name: "Slovak", dialects: [["sk", "Standard"]] },
  { name: "Slovenian", dialects: [["sl", "Standard"]] },
  { name: "Somali", dialects: [["so", "Standard"]] },
  { name: "Sundanese", dialects: [["su", "Standard"]] },
  { name: "Swahili", dialects: [["sw", "Standard"]] },
  { name: "Swedish", dialects: [["sv", "Standard"]] },
  { name: "Tajik", dialects: [["tg", "Standard"]] },
  { name: "Tamil", dialects: [["ta", "Standard"]] },
  { name: "Tatar", dialects: [["tt", "Standard"]] },
  { name: "Telugu", dialects: [["te", "Standard"]] },
  { name: "Thai", dialects: [["th", "Standard"]] },
  { name: "Turkish", dialects: [["tr", "Standard"]] },
  { name: "Turkmen", dialects: [["tk", "Standard"]] },
  { name: "Ukrainian", dialects: [["uk", "Standard"]] },
  { name: "Urdu", dialects: [["ur", "Standard"]] },
  { name: "Uyghur", dialects: [["ug", "Standard"]] },
  { name: "Uzbek", dialects: [["uz", "Standard"]] },
  { name: "Vietnamese", dialects: [["vi", "Standard"]] },
  { name: "Welsh", dialects: [["cy", "Standard"]] },
  { name: "Xhosa", dialects: [["xh", "Standard"]] },
  { name: "Yiddish", dialects: [["yi", "Standard"]] },
  { name: "Yoruba", dialects: [["yo", "Standard"]] },
  { name: "Zulu", dialects: [["zu", "Standard"]] }
];

const RTL_BASES = new Set(["ar", "iw", "he", "fa", "ur", "ps", "sd", "ug", "yi"]);

const CACHE_LIMIT = 4000;

function cacheKey(target) {
  return "trCache:" + target;
}

function loadCache(target) {
  try {
    return JSON.parse(localStorage.getItem(cacheKey(target)) || "{}");
  } catch {
    return {};
  }
}

function saveCache(target, cache) {
  try {
    const keys = Object.keys(cache);
    if (keys.length > CACHE_LIMIT) {
      localStorage.removeItem(cacheKey(target));
    } else {
      localStorage.setItem(cacheKey(target), JSON.stringify(cache));
    }
  } catch {}
}

async function gtxRequest(texts, target) {
  const params = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: target,
    dt: "t"
  });
  params.set("q", texts.join("\n"));
  const res = await fetch(
    "https://translate.googleapis.com/translate_a/single?" + params.toString()
  );
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  if (!data || !Array.isArray(data[0])) throw new Error("bad response");
  return data[0].map((seg) => seg[0]).join("");
}

function chunkTexts(texts, maxChars, maxItems) {
  const chunks = [];
  let cur = [];
  let size = 0;
  for (const t of texts) {
    if (cur.length >= maxItems || size + t.length > maxChars) {
      chunks.push(cur);
      cur = [];
      size = 0;
    }
    cur.push(t);
    size += t.length + 1;
  }
  if (cur.length) chunks.push(cur);
  return chunks;
}

async function translateTexts(texts, target, setStatus) {
  const uniq = [...new Set(texts)];
  const cache = loadCache(target);
  const todo = uniq.filter((t) => !(t in cache));

  for (const chunk of chunkTexts(todo, 1200, 50)) {
    try {
      const out = await gtxRequest(chunk, target);
      const parts = out.split("\n");
      if (parts.length === chunk.length) {
        chunk.forEach((t, i) => (cache[t] = parts[i]));
      } else {
        throw new Error("split mismatch");
      }
    } catch {
      await Promise.all(
        chunk.map(async (t) => {
          try {
            cache[t] = (await gtxRequest([t], target)).trim();
          } catch {}
        })
      );
    }
  }

  saveCache(target, cache);
  return Object.fromEntries(uniq.map((t) => [t, cache[t] ?? t]));
}

const origMap = new WeakMap();

function splitWhitespace(text) {
  const start = text.length - text.trimStart().length;
  const end = text.length - text.trimEnd().length;
  return [
    text.slice(0, start),
    text.slice(start, text.length - end),
    text.slice(text.length - end)
  ];
}

async function translatePage() {
  const app = document.getElementById("app");
  if (!app) return;

  const target = localStorage.getItem("prefLang") || "en";
  const base = target.split("-")[0];
  document.documentElement.lang = target;
  document.body.dir = RTL_BASES.has(base) ? "rtl" : "ltr";

  const status = document.getElementById("tr-status");

  const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.textContent.trim() &&
      !n.parentElement.closest(".no-translate")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  if (base === "en") {
    nodes.forEach((n) => {
      if (origMap.has(n)) n.textContent = origMap.get(n);
    });
    if (status) status.textContent = "";
    return;
  }

  if (status) status.textContent = "…";
  try {
    const map = await translateTexts(
      nodes.map((n) => n.textContent.trim()),
      target,
      status
    );
    nodes.forEach((n) => {
      if (!origMap.has(n)) origMap.set(n, n.textContent);
      const [lead, core, trail] = splitWhitespace(n.textContent);
      const translated = map[core];
      if (translated) n.textContent = lead + translated + trail;
    });
    if (status) status.textContent = "";
  } catch {
    if (status) status.textContent = "⚠︎";
  }
}

function buildLanguageBar() {
  const bar = document.createElement("header");
  bar.className = "lang-bar no-translate";
  bar.innerHTML = `
    <label for="lang-select">🌐 Language</label>
    <select id="lang-select">
      ${LANGUAGE_GROUPS.map(
        (g) => `
        <optgroup label="${g.name}">
          ${g.dialects
            .map(([code, label]) => `<option value="${code}">${g.name} — ${label}</option>`)
            .join("")}
        </optgroup>`
      ).join("")}
    </select>
    <span id="tr-status" aria-live="polite"></span>
  `;
  document.body.insertBefore(bar, document.getElementById("app"));

  const select = bar.querySelector("#lang-select");
  select.value = localStorage.getItem("prefLang") || "en";
  select.addEventListener("change", () => {
    localStorage.setItem("prefLang", select.value);
    if (typeof rerender === "function") rerender();
  });
}

buildLanguageBar();
