import Link from "next/link";

const apps = [
  {
    icon: "💰",
    name: "Bütçem",
    href: "https://apps.apple.com",
    rating: null,
    reviewCount: null,
    description:
      "Kişisel bütçe takibi için yerel-öncelikli uygulama. Tüm veriler yalnızca cihazınızda saklanır.",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      style={{ color: "var(--star)", fontSize: "11px", letterSpacing: "1px" }}
    >
      {"★".repeat(full)}
      {hasHalf ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

export default function Home() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
          </div>
          <nav>
            <Link
              href="/about"
              style={{ fontSize: 14, color: "var(--fg-secondary)" }}
            >
              Hakkında
            </Link>
          </nav>
        </div>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            lineHeight: 1.55,
            maxWidth: 460,
          }}
        >
          An app studio crafting quality experiences for Apple platforms
        </p>
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

      {/* App Grid */}
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "40px 24px",
          width: "100%",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: "36px 28px",
          }}
        >
          {apps.map((app) => (
            <article key={app.name}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  background: "var(--card-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 12,
                }}
              >
                {app.icon}
              </div>

              <a
                href={app.href}
                style={{
                  display: "block",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--link)",
                  marginBottom: 5,
                  textDecoration: "none",
                }}
              >
                {app.name}
              </a>

              {app.rating !== null && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginBottom: 8,
                  }}
                >
                  <Stars rating={app.rating} />
                  <span style={{ fontSize: 12, color: "var(--fg-secondary)" }}>
                    {app.rating} ({app.reviewCount})
                  </span>
                </div>
              )}

              <p
                style={{
                  fontSize: 13,
                  color: "var(--fg-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {app.description}
              </p>
            </article>
          ))}

          {/* Yakında gelecek uygulamalar için yer tutucular */}
          {[1, 2].map((i) => (
            <article key={`placeholder-${i}`} style={{ opacity: 0.6 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  background: "var(--bg)",
                  border: "1px dashed var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  color: "var(--fg-tertiary)",
                  marginBottom: 12,
                }}
              >
                +
              </div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--fg-tertiary)",
                  marginBottom: 5,
                }}
              >
                Yeni uygulama
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--fg-tertiary)",
                  lineHeight: 1.6,
                }}
              >
                Sıradaki uygulamamız hazır olduğunda burada yer alacak.
              </p>
            </article>
          ))}
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
