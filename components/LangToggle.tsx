"use client";

import { useI18n } from "../lib/i18n";
import type { Lang } from "../lib/dictionaries";

const langs: Lang[] = ["tr", "en"];

export default function LangToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: "inline-flex",
        border: "1px solid var(--border)",
        borderRadius: 8,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          style={{
            padding: "5px 10px",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.3px",
            border: "none",
            cursor: "pointer",
            background: lang === l ? "var(--card-bg)" : "transparent",
            color: lang === l ? "var(--fg)" : "var(--fg-tertiary)",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
