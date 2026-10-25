export const butcemLegal = {
  "tr": {
    "privacy": {
      "title": "Gizlilik Politikası",
      "sections": [
        {
          "title": "Veriler ve kullanım amaçları",
          "paragraphs": [
            "Bütçem, EasyCraft Apps tarafından sunulan kişisel bütçe uygulamasıdır. İşlemler, kategoriler, etiketler, hesaplar ve bütçeler; bütçe takibi, raporlama ve seçtiğiniz eşzamanlama veya aktarım işlevleri için işlenir.",
            "Uygulama Sign in with Apple ve Google Sign-In seçenekleri sunar. Giriş sırasında ad, e-posta adresi, sağlayıcı kullanıcı kimliği ve isteğe bağlı profil fotoğrafı adresi işlenebilir. Bu bilgiler oturumu yönetmek ve kullanıcı profilini göstermek amacıyla cihazda saklanır."
          ]
        },
        {
          "title": "Core Data ve isteğe bağlı iCloud eşzamanlama",
          "paragraphs": [
            "Finansal veriler varsayılan olarak cihazda Core Data ile saklanır. Kullanıcı iCloud eşzamanlamasını etkinleştirirse veriler Apple CloudKit aracılığıyla kullanıcının özel iCloud hesabında saklanabilir ve kullanıcının cihazları arasında eşzamanlanabilir. Paylaşılan hanelere ait kayıtlar ise kullanıcının seçtiği paylaşım ve katılımcı izinlerine göre CloudKit paylaşımı kapsamında diğer katılımcılara açılabilir.",
            "iCloud kullanımı Apple hesabınıza, iCloud ayarlarına, bağlantıya ve Apple hizmetlerinin kullanılabilirliğine bağlıdır. Eşzamanlamayı kapatmak, daha önce buluta aktarılmış kayıtları kendiliğinden silmez."
          ]
        },
        {
          "title": "Google Sign-In ve Sign in with Apple",
          "paragraphs": [
            "Google Sign-In, Google hesabınızla kimlik doğrulama ve Google Sheets bağlantısı için kullanılır. Google’ın izin ekranında onayladığınız erişimler geçerlidir. Uygulama Google hesabınızın parolasını almaz; bağlantı için kullanılan yetkilendirme belirteçleri parolanızdan farklıdır.",
            "Sign in with Apple, Apple hesabınız üzerinden kimlik doğrular. Apple’ın paylaştığı ad ve e-posta bilgisi kullanılabilir; “E-postamı Gizle” seçilirse Apple’ın yönlendirme adresi kullanılabilir. Apple bu giriş yöntemiyle profil fotoğrafı sağlamaz. Uygulama Apple hesabınızın parolasını almaz.",
            "Bu giriş yöntemleri, finansal kayıtların kendiliğinden Google’a aktarılması anlamına gelmez. iCloud eşzamanlaması ayrı bir özelliktir."
          ]
        },
        {
          "title": "Google Sheets aktarımı",
          "paragraphs": [
            "Google Sheets özelliği uygulamada mevcuttur. Kullanıcı isteğe bağlı olarak Google hesabını bağlayabilir ve finansal verilerini kendi Google E-Tablolar belgesine aktarabilir. Bu işlem yalnızca kullanıcının açık talebiyle gerçekleştirilir. Uygulama drive.file (https://www.googleapis.com/auth/drive.file) yetkisini kullanır ve yalnızca uygulama tarafından oluşturulan veya kullanıcı tarafından seçilip uygulamaya erişim izni verilen ilgili dosyalara erişir; Google Drive’daki tüm dosyalara genel erişim istemez. E-tabloya verdiğiniz paylaşım izinleri, aktarılan kayıtlara kimlerin erişebileceğini belirler.",
            "Google bağlantısını kaldırmak, önceden oluşturulan e-tabloları silmez. Google ve Apple, kendi hizmetlerinde verileri kendi gizlilik politikalarına göre işler."
          ]
        },
        {
          "title": "Kullanılan üçüncü taraf servisleri",
          "paragraphs": [
            "Google servisleri: Google Sign-In ve Google OAuth kimlik doğrulama ve kullanıcı izinlerini yönetmek için; Google Sheets API finansal verileri e-tabloya aktarmak için; Google Drive API ilgili dosyalara drive.file yetkisi kapsamında erişmek için kullanılır. Google Gizlilik Politikası bağlantısı aşağıda yer alır.",
            "Apple servisleri: Sign in with Apple giriş için; iCloud/CloudKit isteğe bağlı eşzamanlama ve hane paylaşımı için; StoreKit ve App Store abonelikleri Premium satın alma ve doğrulama için kullanılır. Apple’ın push notification altyapısı (APNs), CloudKit değişiklik bildirimleri ve eşzamanlama için kullanılabilir. Bildirim ve eşzamanlama davranışı cihaz ve iCloud ayarlarına bağlıdır.",
            "Bu servisler kullanıldığında ilgili kimlik doğrulama, dosya, eşzamanlama veya işlem bilgileri seçtiğiniz işlev için ilgili sağlayıcı tarafından işlenebilir. Apple ve Google’ın kendi gizlilik politikaları ilgili hizmetlere ayrıca uygulanır."
          ]
        },
        {
          "title": "Premium abonelik ve ödeme bilgileri",
          "paragraphs": [
            "Premium abonelik satın alma ve doğrulama işlemleri Apple StoreKit üzerinden gerçekleştirilir. Ödeme bilgileri uygulama geliştiricisi tarafından görülmez veya saklanmaz. Uygulama, Premium erişimini belirlemek için Apple’ın sağladığı satın alma ve abonelik durumu bilgilerini kullanır. Abonelik iptali ve iade işlemleri Kullanım Koşulları’nda açıklanır."
          ]
        },
        {
          "title": "Veri, profil ve bağlantı silme",
          "paragraphs": [
            "Kullanıcı Profil > Verileri Silme bölümündeki “Hesabımı ve Verilerimi Sil” seçeneğini kullanabilir; misafir kullanımında seçenek “Tüm Verilerimi Sil” olarak görünür. İşlem tamamlandığında cihazdaki kullanıcı profili ile gelir, gider, hesap, bütçe, tekrarlayan işlem, kategori, etiket ve hane kayıtları kalıcı olarak silinir ve oturum kapatılır. Uygulamayı yalnızca arşivlemek/boşaltmak, bu silme işlemiyle aynı değildir.",
            "iCloud eşzamanlaması açıksa kullanıcının özel CloudKit veritabanındaki Bütçem kayıtlarının silinmesi CloudKit’e gönderilir ve bağlı cihazlara eşzamanlanır. Kullanıcı bir hanenin sahibiyse hanenin kök kaydının silinmesi paylaşımı sona erdirir; kullanıcı yalnızca katılımcıysa paylaşımdan ayrılır ve hane sahibinin verileri silinmez. Çevrimdışı başlatılan silme işleminin buluta ve diğer cihazlara yansıması bağlantı ve CloudKit eşzamanlaması tamamlandığında gerçekleşir. Sağlayıcı yedeklerinin saklama süreleri ayrıca geçerli olabilir.",
            "Google ile giriş kullanılıyorsa uygulamanın Google bağlantısı kaldırılır ve yerel yetkilendirme verileri temizlenir. Daha önce oluşturulmuş Google Sheets dosyaları kullanıcının Google Drive hesabında kalır; bunları kaldırmak için Google Drive/Sheets üzerinden silip çöp kutusunu boşaltın. Apple ile Giriş kullanılıyorsa silme sırasında Bütçem, Apple’ın token iptal servisine başvurarak bu uygulamaya verilen yetkiyi kaldırır ve cihazdaki profil ile oturum verilerini siler. Apple Hesabı > Apple ile Giriş bölümünden bağlantıyı ayrıca kontrol edebilirsiniz. Erişimi kaldırmak bulut kayıtlarını veya dışa aktarılmış dosyaları tek başına silmez.",
            "Bütçem profilinin ve uygulamayla ilişkili kişisel verilerin silinmesi veya silme işlemlerinde yardım için privacy@easycraftapps.com adresine başvurabilirsiniz. Talebin size ait olduğu doğrulanabilir; yalnızca cihazınızda veya kişisel bulut hesabınızda bulunan kopyalar için işlemi sizin tamamlamanız gerekebilir. Apple veya Google hesabınızı silmeniz gerekmez.",
            "Oturumu kapatmak, uygulamayı silmek veya profil silme talebi göndermek App Store aboneliğini iptal etmez. Aboneliği Apple hesabınızın Abonelikler bölümünden ayrıca iptal edin."
          ]
        },
        {
          "title": "Saklama, güvenlik ve haklarınız",
          "paragraphs": [
            "Yerel veriler silinene kadar cihazda; iCloud ve Sheets kopyaları ise ilgili hizmette silinene kadar saklanabilir. Sağlayıcıların yedekleme ve saklama kuralları ayrıca geçerlidir. Cihazınızı ve hesaplarınızı koruyun; hiçbir saklama veya eşzamanlama yöntemi mutlak güvenlik ya da kesintisizlik garantisi vermez.",
            "Türkiye’deki kullanıcılar uygulanabilir KVKK hükümleri kapsamında; Avrupa Birliği’ndeki kullanıcılar ise uygulanabilir GDPR hükümleri kapsamında verilerine erişim, düzeltme ve silme taleplerini privacy@easycraftapps.com adresine iletebilir. Başvurunun size ait olduğunu doğrulamak için gerekli bilgiler istenebilir. Talepler uygulanabilir mevzuattaki koşullar ve süreler çerçevesinde değerlendirilir. Genel destek için info@easycraftapps.com adresine ulaşabilirsiniz. Destek yazışmalarında paylaştığınız bilgiler talebinizi yanıtlamak için kullanılır."
          ]
        },
        {
          "title": "Çocuklar ve politika değişiklikleri",
          "paragraphs": [
            "Uygulama 13 yaşın altındaki çocuklara yönelik değildir. Politika güncellemeleri bu sayfada tarihleriyle yayımlanır; gerekli bildirimler ve izinler uygulanabilir mevzuata göre sağlanır."
          ]
        }
      ]
    },
    "terms": {
      "title": "Kullanım Koşulları",
      "sections": [
        {
          "title": "Kapsam ve kullanım",
          "paragraphs": [
            "Bu koşullar, EasyCraft Apps tarafından sunulan Bütçem uygulamasının kullanımını düzenler. Uygulamayı hukuka uygun olarak kullanmalı, hesabınızın güvenliğini sağlamalı ve girdiğiniz verilerin doğruluğunu kontrol etmelisiniz.",
            "Bütçem kişisel bütçe takibi aracıdır; yatırım, vergi, muhasebe veya finans danışmanlığı hizmeti sunmaz. Raporlar girdiğiniz verilere dayanır."
          ]
        },
        {
          "title": "Kullanım lisansı ve üçüncü taraf hizmetleri",
          "paragraphs": [
            "Uygulamayı kişisel kullanımınız için sınırlı, devredilemez bir lisansla kullanabilirsiniz. Uygulamayı hukuka aykırı amaçlarla kullanamaz veya başkalarının haklarını ihlal edemezsiniz. App Store üzerinden edinilen uygulamanın lisansı için Apple’ın Standart Son Kullanıcı Lisans Sözleşmesi (EULA) ayrıca geçerlidir.",
            "Google Sign-In, Sign in with Apple, iCloud/CloudKit ve Google Sheets kullanımı ilgili sağlayıcıların koşullarına, izinlere ve hizmet kullanılabilirliğine bağlıdır. Verilerin işlenmesi Gizlilik Politikası’nda açıklanır."
          ]
        },
        {
          "title": "Abonelik, ödeme ve iptal",
          "paragraphs": [
            "Ücretli özellikler, abonelik süresi, fiyatı, varsa deneme süresi ve yenileme koşulları satın almadan önce uygulamanın abonelik ekranında ve App Store onayında gösterilir. Ödeme Apple hesabınız üzerinden alınır.",
            "Otomatik yenilenen abonelikler iptal edilmedikçe yenilenir. Yenilemeyi Apple hesabınızın Abonelikler bölümünden yönetin; bir sonraki ücretlendirmeyi önlemek için dönem bitmeden iptal edin. Deneme aboneliğinde Apple’ın bildirdiği iptal süresine uyun. Olağan iptalde erişim ödenmiş dönemin sonuna kadar devam eder.",
            "Uygulamayı veya profili silmek aboneliği iptal etmez. Satın alımları aynı Apple hesabıyla geri yükleyebilirsiniz. İade talepleri Apple’ın iade kanalı üzerinden iletilebilir; kanundan doğan haklarınız saklıdır."
          ]
        },
        {
          "title": "Hizmetin değiştirilmesi ve sonlandırılması",
          "paragraphs": [
            "Bütçem’in süresiz çalışacağı veya her cihaz ve işletim sistemiyle sürekli uyumlu kalacağı taahhüt edilmez. EasyCraft Apps, uygulanabilir hukuk ve mevcut abonelik yükümlülükleri saklı kalmak üzere hizmeti değiştirme veya sonlandırma hakkını saklı tutar.",
            "Planlı kapanışta en az 31 gün önceden bildirim yapılır. Yeni abonelikler ve yenilemeler durdurulur; aylık ve daha kısa planlarda satıştan kaldırma ile kapanış arasında en az 31 gün bırakılır. Ödenmiş dönem boyunca hizmet sağlanır. Daha uzun planlarda dönem tamamlanamıyorsa Apple ile iletişime geçilerek sunulamayan hizmet için uygun iade süreci yürütülür.",
            "Kapanış duyurusunda verilerinizi dışa aktarma ve silme yöntemleri açıklanır. Acil güvenlik veya hukuki zorunluluk nedeniyle kesinti gerekse bile ödenmiş hizmete ilişkin haklarınız korunur."
          ]
        },
        {
          "title": "Veriler, sorumluluk ve tüketici hakları",
          "paragraphs": [
            "Verilerinizi düzenli olarak dışa aktarmanız ve yedeklemeniz önerilir. Ağ, cihaz veya üçüncü taraf hizmet sorunları eşzamanlama ve erişimi etkileyebilir.",
            "Bu koşullar, emredici mevzuattan doğan haklarınızı, ayıplı hizmete ilişkin taleplerinizi veya kanunen sınırlandırılamayan sorumlulukları ortadan kaldırmaz. Uygun durumlarda bedel indirimi, yeniden ifa, sözleşmeden dönme ve iade gibi yasal haklar kullanılabilir. Türkiye’de yetkili tüketici hakem heyetlerine ve tüketici mahkemelerine başvuru hakkınız saklıdır."
          ]
        },
        {
          "title": "Değişiklikler ve iletişim",
          "paragraphs": [
            "Koşulların güncel hali bu sayfada yayımlanır. Mevcut ücretli döneme ilişkin kazanılmış hakları geriye dönük kaldıran değişiklikler yapılmaz; mevzuat veya platform kuralları gerektiriyorsa ayrıca bildirim ve onay sağlanır. Sorularınız için /butcem/contact sayfasını kullanabilirsiniz."
          ]
        }
      ]
    }
  },
  "en": {
    "privacy": {
      "title": "Privacy Policy",
      "sections": [
        {
          "title": "Data and purposes",
          "paragraphs": [
            "Bütçem is a personal budgeting app provided by EasyCraft Apps. Transactions, categories, tags, accounts and budgets are processed for budget tracking, reporting, and the sync or export features you choose.",
            "The app offers Sign in with Apple and Google Sign-In. During sign-in, your name, email address, provider user identifier and optional profile photo URL may be processed. This information is stored on your device to manage your session and display your profile."
          ]
        },
        {
          "title": "Core Data and optional iCloud sync",
          "paragraphs": [
            "Financial data is stored on your device using Core Data by default. If you enable iCloud sync, data may be stored in your private iCloud account through Apple CloudKit and synced between your devices. Shared household records may also be made available to participants through CloudKit sharing according to your sharing choices and participant permissions.",
            "iCloud depends on your Apple Account, settings, connectivity and Apple service availability. Disabling sync does not automatically delete records already uploaded."
          ]
        },
        {
          "title": "Google Sign-In and Sign in with Apple",
          "paragraphs": [
            "Google Sign-In authenticates your Google account and connects Google Sheets. Access depends on the permissions you approve on Google’s consent screen. The app does not receive your Google password; authorization tokens used for the connection are distinct from your password.",
            "Sign in with Apple authenticates through your Apple Account. The name and email shared by Apple may be used; Hide My Email may supply a relay address. Apple does not provide a profile photo through this sign-in method. The app does not receive your Apple password.",
            "Signing in does not automatically export financial records to Google. iCloud sync is a separate feature."
          ]
        },
        {
          "title": "Google Sheets export",
          "paragraphs": [
            "Google Sheets is an existing feature. You may optionally connect your Google account and export financial data to your own Google spreadsheet. Export takes place only at your explicit request. The app uses the drive.file scope (https://www.googleapis.com/auth/drive.file) and accesses only relevant files created by the app or selected by you and authorized for the app; it does not request general access to every file in Google Drive. Spreadsheet sharing permissions determine who can access exported records.",
            "Disconnecting Google does not delete existing spreadsheets. Google and Apple process data within their services under their respective privacy policies."
          ]
        },
        {
          "title": "Third-party services used",
          "paragraphs": [
            "Google services: Google Sign-In and Google OAuth are used for authentication and permissions; the Google Sheets API exports financial data to spreadsheets; the Google Drive API accesses relevant files within the drive.file scope. A link to the Google Privacy Policy is provided below.",
            "Apple services: Sign in with Apple is used for sign-in; iCloud/CloudKit for optional sync and household sharing; StoreKit and App Store subscriptions for Premium purchases and verification. Apple’s push notification infrastructure (APNs) may be used for CloudKit change notifications and synchronization. Notification and sync behavior depends on device and iCloud settings.",
            "When these services are used, relevant authentication, file, sync or transaction information may be processed by the provider for the function you choose. Apple’s and Google’s privacy policies also apply to their respective services."
          ]
        },
        {
          "title": "Premium subscriptions and payment information",
          "paragraphs": [
            "Premium subscription purchases and verification are performed through Apple StoreKit. Payment details are not viewed or stored by the app developer. The app uses purchase and subscription status information supplied by Apple to determine Premium access. Subscription cancellation and refund procedures are described in the Terms of Use."
          ]
        },
        {
          "title": "Deleting data, profiles and connections",
          "paragraphs": [
            "Use “Delete My Account and Data” under Profile > Data Deletion; in guest mode the option is shown as “Delete All My Data.” When the process completes, the on-device user profile and all income, expense, account, budget, recurring transaction, category, tag and household records are permanently deleted and the session is closed. Merely offloading the app is not the same as using this deletion process.",
            "When iCloud sync is enabled, deletion of Bütçem records in the user’s private CloudKit database is submitted to CloudKit and synchronized to connected devices. If the user owns a household, deleting its root record ends the share; a participant instead leaves the share and does not delete the owner’s data. A deletion initiated offline reaches the cloud and other devices after connectivity and CloudKit synchronization resume. Provider backup retention periods may still apply.",
            "For Google sign-in, the app disconnects Google access and clears local authorization data. Existing Google Sheets files remain in the user’s Google Drive account; delete them in Google Drive/Sheets and empty the trash if desired. For Sign in with Apple, deletion revokes the app’s authorization through Apple’s token revocation service and then deletes the local profile and session data. You can also review the connection under Apple Account > Sign in with Apple. Revoking access alone does not erase cloud records or exported files.",
            "To request deletion of your Bütçem profile and associated personal data, or help with deletion, contact privacy@easycraftapps.com. We may verify that the request is yours; you may need to remove copies held solely on your device or personal cloud account yourself. You do not need to delete your Google or Apple account.",
            "Signing out, deleting the app or requesting profile deletion does not cancel an App Store subscription. Cancel it separately in your Apple Account’s Subscriptions settings."
          ]
        },
        {
          "title": "Retention, security and your rights",
          "paragraphs": [
            "Local records may remain until deleted on your device; iCloud and Sheets copies may remain until deleted in those services. Provider retention and backup rules also apply. Protect your device and accounts; no storage or sync method guarantees absolute security or uninterrupted availability.",
            "Users in Türkiye may send access, correction and deletion requests under applicable KVKK provisions, and users in the European Union may send such requests under applicable GDPR provisions, to privacy@easycraftapps.com. Information necessary to verify that the request is yours may be requested. Requests are assessed subject to the conditions and deadlines of applicable law. For general support, contact info@easycraftapps.com. Information shared in support correspondence is used to respond to your request."
          ]
        },
        {
          "title": "Children and policy updates",
          "paragraphs": [
            "The app is not directed at children under 13. Updates are published here with their dates; any required notices and consent are provided under applicable law."
          ]
        }
      ]
    },
    "terms": {
      "title": "Terms of Use",
      "sections": [
        {
          "title": "Scope and use",
          "paragraphs": [
            "These terms govern use of Bütçem, provided by EasyCraft Apps. Use the app lawfully, secure your account and check the accuracy of the data you enter.",
            "Bütçem is a personal budgeting tool and does not provide investment, tax, accounting or financial advice. Reports depend on your entries."
          ]
        },
        {
          "title": "License and third-party services",
          "paragraphs": [
            "You receive a limited, non-transferable license for personal use. Do not use the app unlawfully or infringe others’ rights. Apple’s Standard End User License Agreement (EULA) also applies to the license for the app obtained through the App Store.",
            "Google Sign-In, Sign in with Apple, iCloud/CloudKit and Google Sheets depend on provider terms, permissions and availability. Data handling is described in the Privacy Policy."
          ]
        },
        {
          "title": "Subscriptions, payments and cancellation",
          "paragraphs": [
            "Paid features, subscription duration, price, any trial and renewal terms are shown before purchase on the subscription screen and App Store confirmation. Payments are charged through your Apple Account.",
            "Auto-renewable subscriptions renew unless cancelled. Manage renewal in your Apple Account’s Subscriptions settings and cancel before the period ends to avoid the next charge. Follow Apple’s cancellation deadline for trials. Ordinary cancellation leaves access available through the paid period.",
            "Deleting the app or profile does not cancel your subscription. You can restore purchases using the same Apple Account. Refund requests may be submitted through Apple’s refund channel; statutory rights remain unaffected."
          ]
        },
        {
          "title": "Service changes and discontinuation",
          "paragraphs": [
            "Bütçem is not guaranteed to operate indefinitely or remain compatible with every device or operating system. EasyCraft Apps reserves the right to change or discontinue the service, subject to applicable law and existing subscription obligations.",
            "Planned closure is announced at least 31 days ahead. Sales and renewals stop; monthly and shorter plans have at least 31 days between removal from sale and closure. Service continues through paid periods. If longer plans cannot be fulfilled, we contact Apple to arrange an appropriate refund process for unprovided service.",
            "Closure notices explain data export and deletion. Emergency security or legal interruptions do not remove rights relating to paid service."
          ]
        },
        {
          "title": "Data, liability and consumer rights",
          "paragraphs": [
            "Regularly export and back up your data. Network, device or third-party service issues may affect sync and access.",
            "These terms do not remove mandatory consumer rights, remedies for defective service or liability that cannot legally be limited. Where applicable, remedies include price reductions, repeat performance, termination and refunds. Consumers in Türkiye retain access to competent consumer arbitration committees and consumer courts."
          ]
        },
        {
          "title": "Updates and contact",
          "paragraphs": [
            "Updated terms are published here. Changes do not retroactively remove rights acquired for an existing paid period; additional notice and consent are provided where required by law or platform rules. For questions, use /butcem/contact."
          ]
        }
      ]
    }
  }
};
