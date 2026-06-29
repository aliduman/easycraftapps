import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bütçem — Gizlilik Politikası",
  description: "Bütçem uygulaması gizlilik politikası",
};

export default function ButcemPrivacy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      {/* Site header */}
      <header
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "32px 24px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 7,
              background: "var(--card-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            🛠️
          </div>
          <span style={{ fontSize: 14, fontWeight: 600 }}>EasyCraft Apps</span>
        </Link>
      </header>

      {/* Content */}
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* App identity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "var(--card-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              flexShrink: 0,
            }}
          >
            💰
          </div>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
              Bütçem
            </h1>
            <p style={{ fontSize: 14, color: "var(--fg-secondary)" }}>
              Gizlilik Politikası
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: 13,
            color: "var(--fg-tertiary)",
            marginBottom: 40,
          }}
        >
          Son güncelleme: 29 Haziran 2026
        </p>

        <div
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--fg)",
          }}
        >
          <p style={{ marginBottom: 24, color: "var(--fg-secondary)" }}>
            Bu gizlilik politikası, &ldquo;Bütçem&rdquo; mobil uygulamasının
            (&ldquo;Uygulama&rdquo;) kullanıcı verilerini nasıl ele aldığını
            açıklar.
          </p>

          <Section title="1. Toplanan Veriler">
            <p>
              Bütçem, kişisel bütçe takibi için tasarlanmış yerel-öncelikli
              (local-first) bir uygulamadır. Girdiğiniz tüm finansal veriler —
              işlemler, kategoriler, etiketler, hesaplar ve bütçeler — yalnızca
              cihazınızda saklanır.
            </p>
            <p style={{ marginTop: 12 }}>
              Uygulama; adınızı, e-posta adresinizi, konumunuzu veya benzeri
              kişisel kimlik bilgilerini toplamaz, sunucularımıza iletmez ve
              üçüncü taraflarla paylaşmaz.
            </p>
          </Section>

          <Section title="2. Verilerin Saklanması">
            <p>
              Tüm veriler cihazınızın yerel depolama alanında (SwiftData)
              tutulur. Bu verilere yalnızca siz erişebilirsiniz. Uygulamayı
              sildiğinizde, cihazda saklanan veriler de silinir.
            </p>
          </Section>

          <Section title="3. Üçüncü Taraf Servisleri">
            <p>
              Bütçem şu anda herhangi bir üçüncü taraf analiz, reklam veya
              takip servisi kullanmamaktadır.
            </p>
            <p style={{ marginTop: 12 }}>
              İleriki sürümlerde isteğe bağlı bir Google Sheets yedekleme
              özelliği sunulması planlanmaktadır. Bu özellik etkinleştirildiğinde:
            </p>
            <ul
              style={{
                marginTop: 12,
                paddingLeft: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <li>
                Yalnızca sizin açık onayınızla ve sizin Google hesabınıza
                bağlanılarak çalışır.
              </li>
              <li>
                Verileriniz yalnızca sizin sahibi olduğunuz Google E-Tablolar
                belgesine aktarılır.
              </li>
              <li>
                Google ile kimlik doğrulama, Google&apos;ın resmi OAuth akışı
                üzerinden yapılır; kimlik bilgileriniz uygulama tarafından
                saklanmaz.
              </li>
              <li>
                Bu özellik kullanıldığında Google&apos;ın kendi gizlilik
                politikası geçerli olur:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--link)" }}
                >
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Bu özellik kullanıma sunulduğunda bu politika güncellenecektir.
            </p>
          </Section>

          <Section title="4. Veri Güvenliği">
            <p>
              Verileriniz cihazınızda saklandığından, güvenlikleri büyük ölçüde
              cihazınızın güvenlik ayarlarına (ekran kilidi, cihaz şifrelemesi
              vb.) bağlıdır. Cihazınızı güncel ve güvenli tutmanızı öneririz.
            </p>
          </Section>

          <Section title="5. Çocukların Gizliliği">
            <p>
              Bütçem, 13 yaşın altındaki çocuklara yönelik değildir ve bilerek
              bu yaş grubundan veri toplamaz.
            </p>
          </Section>

          <Section title="6. Bu Politikadaki Değişiklikler">
            <p>
              Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler
              bu sayfada yayımlandığı tarihte geçerli olur.
            </p>
          </Section>

          <Section title="7. İletişim" last>
            <p>
              Sorularınız için:{" "}
              <a
                href="mailto:privacy@easycraftapps.com"
                style={{ color: "var(--link)" }}
              >
                privacy@easycraftapps.com
              </a>
            </p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            padding: "20px 0 32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 12px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "var(--fg-secondary)" }}>
            © 2026 EasyCraft Apps
          </span>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link
            href="/butcem/privacy"
            style={{ fontSize: 13, color: "var(--fg-secondary)" }}
          >
            Gizlilik Politikası
          </Link>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <a
            href="mailto:privacy@easycraftapps.com"
            style={{ fontSize: 13, color: "var(--fg-secondary)" }}
          >
            İletişim
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 36 }}>
      <h2
        style={{
          fontSize: 15,
          fontWeight: 600,
          marginBottom: 12,
          letterSpacing: "-0.2px",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
