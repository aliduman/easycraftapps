"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { useI18n } from "../lib/i18n";

export default function ButcemHeader() {
  const { t } = useI18n();
  const b = t.butcem;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--bg) 72%, transparent)",
        WebkitBackdropFilter: "saturate(180%) blur(14px)",
        backdropFilter: "saturate(180%) blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "14px 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link
          href="/butcem"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
          <Image
            src="/apps/butcem/logo-92.png"
            alt="Bütçem logo"
            width={30}
            height={30}
            style={{ borderRadius: 7 }}
          />
          <span style={{ fontSize: 14, fontWeight: 600 }}>Bütçem</span>
        </Link>
        <NavMenu
          links={[
            { href: "/butcem#features", label: b.featuresTitle },
            { href: "/butcem/changelog", label: b.navChangelog },
          ]}
        />
      </div>
    </header>
  );
}
