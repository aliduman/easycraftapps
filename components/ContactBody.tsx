"use client";

import { useI18n } from "../lib/i18n";

export const CONTACT_EMAIL = "info@easycraftapps.com";

export default function ContactBody() {
  const { t } = useI18n();

  return (
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
        {t.contact.title}
      </h2>
      <p
        style={{
          fontSize: 15,
          color: "var(--fg-secondary)",
          lineHeight: 1.65,
          maxWidth: 540,
        }}
      >
        {t.contact.p1}
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--link)" }}>
          {CONTACT_EMAIL}
        </a>
        .{t.contact.p2}
      </p>
    </main>
  );
}
