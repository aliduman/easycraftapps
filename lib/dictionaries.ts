export type Lang = "tr" | "en";

const tr = {
  common: {
    siteName: "EasyCraft Apps",
    navAbout: "Hakkında",
    navApps: "Uygulamalar",
    footerCopyright: "© 2026 EasyCraft Apps - İstanbul'da ♥ ile yapıldı",
    footerPrivacy: "Gizlilik Politikası",
    footerTerms: "Kullanım Koşulları",
    footerContact: "İletişim",
    starsAria: "5 üzerinden {rating} yıldız",
  },
  home: {
    tagline:
      "Apple platformları için kaliteli deneyimler üreten bir uygulama stüdyosu",
    butcemDescription:
      "Kişisel bütçe takibi için yerel-öncelikli uygulama. Veriler Core Data ile cihazınızda saklanır; iCloud eşzamanlama isteğe bağlıdır.",
    placeholderTitle: "Yeni uygulama",
    placeholderDescription:
      "Sıradaki uygulamamız hazır olduğunda burada yer alacak.",
  },
  about: {
    title: "Hakkında",
    p1: "EasyCraft Apps, basit problemleri kolay ve kullanışlı deneyim tasarımıyla çözen, Apple platformları için uygulamalar geliştiren bir stüdyodur.",
    p2: "İlk uygulamamız Bütçem ile yola çıktık; sırada yeni uygulamalar var.",
    approachTitle: "Yaklaşımımız",
    approachText:
      "Karmaşık özellikler yerine, gündelik bir problemi gerçekten çözen sade arayüzler tasarlıyoruz.",
    platformTitle: "Platform",
    platformText:
      "Uygulamalarımızı Apple ekosistemi için — iPhone, iPad ve Mac'te doğal hissettirecek şekilde geliştiriyoruz.",
  },
  butcem: {
    heroTitle: "Gelir ve giderlerinizi kolayca takip edin",
    heroSubtitle:
      "Bütçem; işlemlerinizi, kategorilerinizi ve bütçenizi tek bir sade yerden yönetmenizi sağlayan, yerel-öncelikli kişisel bütçe uygulamasıdır.",
    download: "App Store'dan İndir",
    featuresTitle: "Özellikler",
    f1Title: "Aylık özet",
    f1Text:
      "Gelir, gider ve bakiyenizi tek bakışta görün; aylar arasında kolayca gezinin.",
    f2Title: "Hızlı işlem ekleme",
    f2Text:
      "Quick Add ile tutarı girin, kategoriyi seçin, kaydedin. Harcama eklemek saniyeler sürer.",
    f3Title: "Geçmiş ve filtreler",
    f3Text:
      "Tüm işlemlerinizi tür, hesap ve kategoriye göre filtreleyerek inceleyin.",
    f4Title: "Raporlar",
    f4Text:
      "Son 6 aylık gelir-gider grafiği ve kategori bazlı harcama dağılımıyla nereye harcadığınızı görün.",
    f5Title: "Çoklu para birimi",
    f5Text:
      "TRY, USD, EUR, GBP ve CHF desteği. Para biriminizi dilediğiniz zaman değiştirin.",
    f6Title: "Verileriniz cihazınızda",
    f6Text:
      "Yerel-öncelikli tasarım: veriler Core Data ile cihazınızda saklanır. iCloud/CloudKit eşzamanlama ve Google Sheets aktarımı isteğe bağlıdır.",
    f7Title: "Bütçe paylaşımı",
    f7Text:
      "Bütçenizi ailenizle paylaşın; harcamaları birlikte takip edin.",
    ctaTitle: "Bütçenizi bugün kontrol altına alın",
    otherApps: "EasyCraft Apps'in diğer uygulamalarına göz atın →",
    navChangelog: "Sürüm Notları",
    changelogTitle: "Sürüm Notları",
    clV1Version: "1.0.0",
    clV1Date: "Temmuz 2026",
    clV1I1: "İlk sürüm: gelir-gider takibi, kategoriler ve aylık özet.",
    clV1I2: "Raporlar: son 6 ay grafiği ve kategori bazlı harcama dağılımı.",
    clV1I3: "Çoklu para birimi (TRY, USD, EUR, GBP, CHF) ve iCloud yedekleme.",
  },
  contact: {
    title: "İletişim",
    p1: "Sorularınız, yorumlarınız veya geri bildirimleriniz için bize şu adresten ulaşabilirsiniz: ",
    p2: " En kısa sürede dönüş yapmaya çalışacağız.",
  },
};

const en: typeof tr = {
  common: {
    siteName: "EasyCraft Apps",
    navAbout: "About",
    navApps: "Apps",
    footerCopyright: "© 2026 EasyCraft Apps - Made with ♥ in Istanbul",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerContact: "Contact",
    starsAria: "{rating} out of 5 stars",
  },
  home: {
    tagline: "An app studio crafting quality experiences for Apple platforms",
    butcemDescription:
      "A local-first app for personal budget tracking. Data is stored locally with Core Data; iCloud sync is optional.",
    placeholderTitle: "New app",
    placeholderDescription: "Our next app will appear here once it's ready.",
  },
  about: {
    title: "About",
    p1: "EasyCraft Apps is a studio building apps for Apple platforms, solving simple problems with easy and useful experience design.",
    p2: "We started out with our first app, Bütçem — more apps are on the way.",
    approachTitle: "Our Approach",
    approachText:
      "Instead of complex features, we design simple interfaces that truly solve an everyday problem.",
    platformTitle: "Platform",
    platformText:
      "We build our apps for the Apple ecosystem — designed to feel native on iPhone, iPad and Mac.",
  },
  butcem: {
    heroTitle: "Easily track your income and expenses",
    heroSubtitle:
      "Bütçem is a local-first personal budgeting app that lets you manage your transactions, categories and budget from one simple place.",
    download: "Download on the App Store",
    featuresTitle: "Features",
    f1Title: "Monthly overview",
    f1Text:
      "See your income, expenses and balance at a glance, and move between months with ease.",
    f2Title: "Quick add",
    f2Text:
      "Enter the amount, pick a category, save. Adding an expense takes seconds.",
    f3Title: "History and filters",
    f3Text:
      "Browse all your transactions filtered by type, account and category.",
    f4Title: "Reports",
    f4Text:
      "See where your money goes with a 6-month income/expense chart and category breakdowns.",
    f5Title: "Multi-currency",
    f5Text:
      "TRY, USD, EUR, GBP and CHF supported. Change your currency anytime.",
    f6Title: "Your data stays on your device",
    f6Text:
      "Local-first by design: data is stored locally with Core Data. iCloud/CloudKit sync and Google Sheets export are optional.",
    f7Title: "Budget sharing",
    f7Text: "Share your budget with your family and track spending together.",
    ctaTitle: "Take control of your budget today",
    otherApps: "Check out other apps by EasyCraft Apps →",
    navChangelog: "Changelog",
    changelogTitle: "Changelog",
    clV1Version: "1.0.0",
    clV1Date: "July 2026",
    clV1I1: "Initial release: income/expense tracking, categories and monthly overview.",
    clV1I2: "Reports: 6-month chart and category-based expense breakdown.",
    clV1I3: "Multi-currency (TRY, USD, EUR, GBP, CHF) and iCloud backup.",
  },
  contact: {
    title: "Contact",
    p1: "If you have any questions, comments, or feedback, please feel free to reach out to us at ",
    p2: " We will do our best to get back to you as soon as possible.",
  },
};

export const dictionaries: Record<Lang, typeof tr> = { tr, en };
export type Dictionary = typeof tr;
