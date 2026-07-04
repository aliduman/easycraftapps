"use client";

import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

export default function HeaderControls() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <LangToggle />
      <ThemeToggle />
    </div>
  );
}
