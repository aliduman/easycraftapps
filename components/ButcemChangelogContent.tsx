"use client";

import Image from "next/image";
import Link from "next/link";
import ButcemHeader from "./ButcemHeader";
import { useI18n } from "../lib/i18n";

export default function ButcemChangelogContent() {
  const { t } = useI18n();
  const b = t.butcem;

  const releases = [
    {
      version: b.clV1Version,
      date: b.clV1Date,
      items: [b.clV1I1, b.clV1I2, b.clV1I3],
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
      <ButcemHeader />

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <Image
            src="/apps/butcem/app_icon.png"
            alt="Bütçem icon"
            width={56}
            height={56}
            style={{ borderRadius: 12, flexShrink: 0 }}
          />
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
              Bütçem
            </h1>
            <p style={{ fontSize: 14, color: "var(--fg-secondary)" }}>
              {b.changelogTitle}
            </p>
          </div>
        </div>

        {releases.map((r) => (
          <div key={r.version} style={{ marginBottom: 36 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <h2 style={{ fontSize: 17, fontWeight: 700 }}>v{r.version}</h2>
              <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>
                {r.date}
              </span>
            </div>
            <ul
              style={{
                paddingLeft: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--fg-secondary)",
              }}
            >
              {r.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {/* Divider */}
      <div
        style={{
          maxWidth: 960,
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
          maxWidth: 960,
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
            href="/butcem/contact"
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
