"use client";

import Image from "next/image";
import Link from "next/link";
import ButcemHeader from "./ButcemHeader";
import { useI18n } from "../lib/i18n";

export default function ButcemPrivacyContent() {
  const { t } = useI18n();
  const p = t.privacy;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      {/* App header */}
      <ButcemHeader />

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
          <Image
            src="/apps/butcem/logo-92.png"
            alt="Bütçem icon"
            width={56}
            height={56}
            style={{ borderRadius: 12, flexShrink: 0 }}
          />
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
              {p.appName}
            </h1>
            <p style={{ fontSize: 14, color: "var(--fg-secondary)" }}>
              {p.title}
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
          {p.lastUpdated}
        </p>

        <div
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--fg)",
          }}
        >
          <p style={{ marginBottom: 24, color: "var(--fg-secondary)" }}>
            {p.intro}
          </p>

          <Section title={p.s1Title}>
            <p>{p.s1P1}</p>
            <p style={{ marginTop: 12 }}>{p.s1P2}</p>
          </Section>

          <Section title={p.s2Title}>
            <p>{p.s2P1}</p>
          </Section>

          <Section title={p.s3Title}>
            <p>{p.s3P1}</p>
            <p style={{ marginTop: 12 }}>{p.s3P2}</p>
            <ul
              style={{
                marginTop: 12,
                paddingLeft: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <li>{p.s3Li1}</li>
              <li>{p.s3Li2}</li>
              <li>{p.s3Li3}</li>
              <li>
                {p.s3Li4}
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
            <p style={{ marginTop: 12 }}>{p.s3P3}</p>
          </Section>

          <Section title={p.s4Title}>
            <p>{p.s4P1}</p>
          </Section>

          <Section title={p.s5Title}>
            <p>{p.s5P1}</p>
          </Section>

          <Section title={p.s6Title}>
            <p>{p.s6P1}</p>
          </Section>

          <Section title={p.s7Title} last>
            <p>
              {p.s7P1}
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
            {p.footerCopyright}
          </span>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link
            href="/butcem/privacy"
            style={{ fontSize: 13, color: "var(--fg-secondary)" }}
          >
            {t.common.footerPrivacy}
          </Link>
          <span style={{ fontSize: 13, color: "var(--fg-tertiary)" }}>·</span>
          <Link
            href="/butcem/contact"
            style={{ fontSize: 13, color: "var(--fg-secondary)" }}
          >
            {t.common.footerContact}
          </Link>
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
