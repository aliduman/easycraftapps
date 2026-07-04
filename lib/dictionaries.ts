export type Lang = "tr" | "en";

const tr = {
  common: {
    siteName: "EasyCraft Apps",
    navAbout: "Hakkında",
    navApps: "Uygulamalar",
    footerCopyright: "© 2026 EasyCraft Apps - İstanbul'da ♥ ile yapıldı",
    footerPrivacy: "Gizlilik Politikası",
    footerContact: "İletişim",
    starsAria: "5 üzerinden {rating} yıldız",
  },
  home: {
    tagline:
      "Apple platformları için kaliteli deneyimler üreten bir uygulama stüdyosu",
    butcemDescription:
      "Kişisel bütçe takibi için yerel-öncelikli uygulama. Tüm veriler yalnızca cihazınızda saklanır.",
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
      "Yerel-öncelikli tasarım: veriler yalnızca cihazınızda saklanır. iCloud yedekleme ve Google Sheets aktarımı isteğe bağlıdır.",
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
  privacy: {
    appName: "Bütçem",
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 29 Haziran 2026",
    intro:
      "Bu gizlilik politikası, “Bütçem” mobil uygulamasının (“Uygulama”) kullanıcı verilerini nasıl ele aldığını açıklar.",
    s1Title: "1. Toplanan Veriler",
    s1P1: "Bütçem, kişisel bütçe takibi için tasarlanmış yerel-öncelikli (local-first) bir uygulamadır. Girdiğiniz tüm finansal veriler — işlemler, kategoriler, etiketler, hesaplar ve bütçeler — yalnızca cihazınızda saklanır.",
    s1P2: "Uygulama; adınızı, e-posta adresinizi, konumunuzu veya benzeri kişisel kimlik bilgilerini toplamaz, sunucularımıza iletmez ve üçüncü taraflarla paylaşmaz.",
    s2Title: "2. Verilerin Saklanması",
    s2P1: "Tüm veriler cihazınızın yerel depolama alanında (SwiftData) tutulur. Bu verilere yalnızca siz erişebilirsiniz. Uygulamayı sildiğinizde, cihazda saklanan veriler de silinir.",
    s3Title: "3. Üçüncü Taraf Servisleri",
    s3P1: "Bütçem şu anda herhangi bir üçüncü taraf analiz, reklam veya takip servisi kullanmamaktadır.",
    s3P2: "İleriki sürümlerde isteğe bağlı bir Google Sheets yedekleme özelliği sunulması planlanmaktadır. Bu özellik etkinleştirildiğinde:",
    s3Li1: "Yalnızca sizin açık onayınızla ve sizin Google hesabınıza bağlanılarak çalışır.",
    s3Li2: "Verileriniz yalnızca sizin sahibi olduğunuz Google E-Tablolar belgesine aktarılır.",
    s3Li3: "Google ile kimlik doğrulama, Google'ın resmi OAuth akışı üzerinden yapılır; kimlik bilgileriniz uygulama tarafından saklanmaz.",
    s3Li4: "Bu özellik kullanıldığında Google'ın kendi gizlilik politikası geçerli olur: ",
    s3P3: "Bu özellik kullanıma sunulduğunda bu politika güncellenecektir.",
    s4Title: "4. Veri Güvenliği",
    s4P1: "Verileriniz cihazınızda saklandığından, güvenlikleri büyük ölçüde cihazınızın güvenlik ayarlarına (ekran kilidi, cihaz şifrelemesi vb.) bağlıdır. Cihazınızı güncel ve güvenli tutmanızı öneririz.",
    s5Title: "5. Çocukların Gizliliği",
    s5P1: "Bütçem, 13 yaşın altındaki çocuklara yönelik değildir ve bilerek bu yaş grubundan veri toplamaz.",
    s6Title: "6. Bu Politikadaki Değişiklikler",
    s6P1: "Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlandığı tarihte geçerli olur.",
    s7Title: "7. İletişim",
    s7P1: "Sorularınız için: ",
    footerCopyright: "© 2026 EasyCraft Apps",
  },
};

const en: typeof tr = {
  common: {
    siteName: "EasyCraft Apps",
    navAbout: "About",
    navApps: "Apps",
    footerCopyright: "© 2026 EasyCraft Apps - Made with ♥ in Istanbul",
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact",
    starsAria: "{rating} out of 5 stars",
  },
  home: {
    tagline: "An app studio crafting quality experiences for Apple platforms",
    butcemDescription:
      "A local-first app for personal budget tracking. All your data is stored only on your device.",
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
      "Local-first by design: data is stored only on your device. iCloud backup and Google Sheets export are optional.",
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
  privacy: {
    appName: "Bütçem",
    title: "Privacy Policy",
    lastUpdated: "Last updated: June 29, 2026",
    intro:
      "This privacy policy explains how the “Bütçem” mobile application (the “App”) handles user data.",
    s1Title: "1. Data We Collect",
    s1P1: "Bütçem is a local-first app designed for personal budget tracking. All financial data you enter — transactions, categories, tags, accounts and budgets — is stored only on your device.",
    s1P2: "The App does not collect your name, email address, location or similar personally identifiable information, does not transmit it to our servers, and does not share it with third parties.",
    s2Title: "2. Data Storage",
    s2P1: "All data is kept in your device's local storage (SwiftData). Only you can access this data. When you delete the App, the data stored on the device is deleted as well.",
    s3Title: "3. Third-Party Services",
    s3P1: "Bütçem currently does not use any third-party analytics, advertising or tracking services.",
    s3P2: "An optional Google Sheets backup feature is planned for future releases. When this feature is enabled:",
    s3Li1: "It works only with your explicit consent and by connecting to your own Google account.",
    s3Li2: "Your data is exported only to a Google Sheets document that you own.",
    s3Li3: "Authentication with Google is performed through Google's official OAuth flow; your credentials are never stored by the App.",
    s3Li4: "When this feature is used, Google's own privacy policy applies: ",
    s3P3: "This policy will be updated when the feature becomes available.",
    s4Title: "4. Data Security",
    s4P1: "Since your data is stored on your device, its security largely depends on your device's security settings (screen lock, device encryption, etc.). We recommend keeping your device up to date and secure.",
    s5Title: "5. Children's Privacy",
    s5P1: "Bütçem is not directed at children under the age of 13 and does not knowingly collect data from this age group.",
    s6Title: "6. Changes to This Policy",
    s6P1: "This privacy policy may be updated from time to time. Changes take effect on the date they are published on this page.",
    s7Title: "7. Contact",
    s7P1: "For questions: ",
    footerCopyright: "© 2026 EasyCraft Apps",
  },
};

export const dictionaries: Record<Lang, typeof tr> = { tr, en };
export type Dictionary = typeof tr;
