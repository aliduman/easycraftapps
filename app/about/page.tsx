import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkında — EasyCraft Apps",
  description:
    "EasyCraft Apps, basit problemleri kolay ve kullanışlı deneyim tasarımıyla çözen bir uygulama stüdyosudur.",
};

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      {/* Header */}
      <header
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "56px 24px 40px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "var(--card-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              flexShrink: 0,
            }}
          >
            🛠️
          </div>
          <h1
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "-0.3px",
            }}
          >
            EasyCraft Apps
          </h1>
        </Link>
        <nav>
          <Link href="/" style={{ fontSize: 14, color: "var(--fg-secondary)" }}>
            Uygulamalar
          </Link>
        </nav>
      </header>

      {/* Divider */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
      </div>

      {/* Content */}
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 80px",
          width: "100%",
          flex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            marginBottom: 20,
          }}
        >
          Hakkında
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            lineHeight: 1.65,
            maxWidth: 540,
            marginBottom: 14,
          }}
        >
          EasyCraft Apps, basit problemleri kolay ve kullanışlı deneyim
          tasarımıyla çözen, Apple platformları için uygulamalar geliştiren
          bir stüdyodur.
        </p>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            lineHeight: 1.65,
            maxWidth: 540,
            marginBottom: 40,
          }}
        >
          İlk uygulamamız Bütçem ile yola çıktık; sırada yeni uygulamalar
          var.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: 22,
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
              Yaklaşımımız
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
              }}
            >
              Karmaşık özellikler yerine, gündelik bir problemi gerçekten
              çözen sade arayüzler tasarlıyoruz.
            </p>
          </div>
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: 22,
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
              Platform
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
              }}
            >
              Uygulamalarımızı Apple ekosistemi için — iPhone, iPad ve Mac&apos;te
              doğal hissettirecek şekilde geliştiriyoruz.
            </p>
          </div>
        </div>
      </main>

      {/* Divider */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
      </div>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            padding: "20px 0 36px",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 12px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "var(--fg-secondary)" }}>
            © 2026 EasyCraft Apps - İstanbul&apos;da ♥ ile yapıldı
          </span>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: "var(--fg-secondary)",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: "var(--fg-secondary)",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
