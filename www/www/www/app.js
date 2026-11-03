const translations = {
  ar: {
    greeting: "مرحباً بك في عالم أكثر خضرة",
    welcome: "اصنع فرقاً يبدأ منك!",
    subtitle: "كل خطوة صغيرة تصنع مستقبلاً أفضل لكوكبنا.",
    pointsLabel: "نقاطك البيئية",
    actionsTitle: "ماذا تريد أن تفعل؟",
    recycle: "إعادة التدوير",
    report: "الإبلاغ عن المخلفات",
    map: "أماكن التدوير",
    rewards: "المكافآت",
    activityTitle: "نشاطك الأخير",
    activity: "مرحباً بك في بصمة خضراء",
    note: "* الأرقام المعروضة تجريبية وليست قياسات فعلية."
  },
  en: {
    greeting: "Welcome to a greener world",
    welcome: "Make a difference starting with you!",
    subtitle: "Every small step creates a better future.",
    pointsLabel: "Your Green Points",
    actionsTitle: "What would you like to do?",
    recycle: "Recycling",
    report: "Report Waste",
    map: "Recycling Locations",
    rewards: "Rewards",
    activityTitle: "Recent Activity",
    activity: "Welcome to Green Footprint",
    note: "* Displayed figures are demo values."
  }
};

let language = "ar";

function changeLanguage() {
  language = language === "ar" ? "en" : "ar";

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  const t = translations[language];

  document.getElementById("greeting").textContent = t.greeting;
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("pointsLabel").textContent = t.pointsLabel;
  document.getElementById("actionsTitle").textContent = t.actionsTitle;
  document.getElementById("activityTitle").textContent = t.activityTitle;
  document.getElementById("activity").textContent = t.activity;
  document.getElementById("note").textContent = t.note;

  document.getElementById("a1").textContent = t.recycle;
  document.getElementById("a2").textContent = t.report;
  document.getElementById("a3").textContent = t.map;
  document.getElementById("a4").textContent = t.rewards;

  document.getElementById("langBtn").textContent =
    language === "ar" ? "English" : "العربية";
}

document.getElementById("langBtn").addEventListener("click", changeLanguage);

const pages = {
  recycle: {
    ar: "♻️ دليل إعادة التدوير: افصل الورق والبلاستيك والمعادن والزجاج قبل تسليمها لمراكز التجميع.",
    en: "♻️ Recycling guide: Separate paper, plastic, metals and glass before collection."
  },
  report: {
    ar: "📸 الإبلاغ عن المخلفات: هذه الخاصية ستحتاج ربط خدمة لاستقبال البلاغات والصور.",
    en: "📸 Waste reports: A backend service is required to receive reports and photos."
  },
  map: {
    ar: "📍 خريطة نقاط التدوير: سيتم ربطها بمواقع حقيقية بعد توفير مصدر بيانات.",
    en: "📍 Recycling map: Real locations will appear after connecting a data source."
  },
  rewards: {
    ar: "🏆 المكافآت: النقاط الحالية تجريبية. سنربط نظام مكافآت حقيقي لاحقاً.",
    en: "🏆 Rewards: Current points are demo values. A real rewards system will be added later."
  }
};

function showPage(page) {
  const result = document.getElementById("result");
  const content = pages[page];

  if (!content) return;

  result.hidden = false;
  result.textContent = content[language];

  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

document.getElementById("homeBtn").addEventListener("click", () => {
  document.getElementById("result").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
