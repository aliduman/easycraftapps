"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderControls from "./HeaderControls";

type NavLink = { href: string; label: string };

export default function NavMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop */}
      <nav className="nav-desktop">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{ fontSize: 14, color: "var(--fg-secondary)" }}
          >
            {l.label}
          </Link>
        ))}
        <HeaderControls />
      </nav>

      {/* Mobile */}
      <div className="nav-mobile" style={{ position: "relative", zIndex: 70 }}>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          style={{
            width: 34,
            height: 34,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border)",
            borderRadius: 9,
            background: "transparent",
            color: "var(--fg)",
            cursor: "pointer",
          }}
        >
          {open ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {open && (
          <>
            {/* Ekranın kalanını blur'layan overlay */}
            <div
              onClick={close}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 60,
                background: "color-mix(in srgb, var(--bg) 30%, transparent)",
                WebkitBackdropFilter: "blur(6px)",
                backdropFilter: "blur(6px)",
              }}
            />
            {/* Dropdown panel */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                zIndex: 70,
                width: "min(300px, calc(100vw - 48px))",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
                padding: 12,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                animation: "menuIn 0.18s ease-out",
              }}
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  style={{
                    padding: "11px 12px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--fg)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  margin: "8px 0",
                }}
              />
              <div style={{ padding: "2px 4px 6px" }}>
                <HeaderControls />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
