"use client";

import Image from "next/image";
import Link from "next/link";
import ContactBody from "./ContactBody";
import NavMenu from "./NavMenu";
import { useI18n } from "../lib/i18n";

export default function ContactContent() {
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
      {/* Header — EasyCraft */}
      <header
        className="site-header"
        style={{
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
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

      <ContactBody />

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
