"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "../components/NavMenu";
import { useI18n } from "../lib/i18n";

function Stars({ rating, aria }: { rating: number; aria: string }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <span
      aria-label={aria}
      style={{ color: "var(--star)", fontSize: "11px", letterSpacing: "1px" }}
    >
      {"★".repeat(full)}
      {hasHalf ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

export default function Home() {
  const { t } = useI18n();

  const apps = [
    {
      icon: "/apps/butcem/logo-92.png",
      name: "Bütçem",
      href: "/butcem",
      rating: null as number | null,
      reviewCount: null as number | null,
      description: t.home.butcemDescription,
    },
  ];

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
        className="site-header"
        style={{
          maxWidth: 720,
          margin: "0 auto",
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
            <Image
              src="/logo-mark.png"
              alt="EasyCraft Apps logo"
              width={44}
              height={44}
              priority
              style={{ flexShrink: 0 }}
            />
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
          <NavMenu links={[{ href: "/about", label: t.common.navAbout }]} />
        </div>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            lineHeight: 1.55,
            maxWidth: 460,
          }}
        >
          {t.home.tagline}
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
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={64}
                height={64}
                style={{ borderRadius: 14, marginBottom: 12 }}
              />

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
                  <Stars
                    rating={app.rating}
                    aria={t.common.starsAria.replace(
                      "{rating}",
                      String(app.rating)
                    )}
                  />
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
                {t.home.placeholderTitle}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--fg-tertiary)",
                  lineHeight: 1.6,
                }}
              >
                {t.home.placeholderDescription}
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
            {t.common.footerCopyright}
          </span>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link
            href="/butcem/privacy"
            style={{
              fontSize: 13,
              color: "var(--fg-secondary)",
              textDecoration: "none",
            }}
          >
            {t.common.footerPrivacy}
          </Link>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link
            href="/contact"
            style={{
              fontSize: 13,
              color: "var(--fg-secondary)",
              textDecoration: "none",
            }}
          >
            {t.common.footerContact}
          </Link>
        </div>
      </footer>
    </div>
  );
}
