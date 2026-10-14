"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { useI18n } from "../lib/i18n";

export default function AboutContent() {
  const { t } = useI18n();

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
        </Link>
        <NavMenu links={[{ href: "/", label: t.common.navApps }]} />
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
          {t.about.title}
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
          {t.about.p1}
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
          {t.about.p2}
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
              {t.about.approachTitle}
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
              }}
            >
              {t.about.approachText}
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
              {t.about.platformTitle}
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
              }}
            >
              {t.about.platformText}
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
            {t.common.footerCopyright}
          </span>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link href="/butcem/terms" style={{ fontSize: 13, color: "var(--fg-secondary)" }}>
            {t.common.footerTerms}
          </Link>
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
