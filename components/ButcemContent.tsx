"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButcemHeader from "./ButcemHeader";
import { useI18n } from "../lib/i18n";

const APP_STORE_URL = "https://apps.apple.com";

const screenshots = [
  "home",
  "reports",
  "quick-add",
  "history",
  "currency",
  "settings",
];

function CarouselButton({
  dir,
  onClick,
}: {
  dir: -1 | 1;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === -1 ? "Previous" : "Next"}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [dir === -1 ? "left" : "right"]: 12,
        zIndex: 10,
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
        color: "var(--fg)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: dir === -1 ? "rotate(180deg)" : undefined }}
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

function DownloadButton({ alt }: { alt: string }) {
  return (
    <a href={APP_STORE_URL} style={{ display: "inline-block" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/appstore_download.svg" alt={alt} style={{ height: 52 }} />
    </a>
  );
}

export default function ButcemContent() {
  const { t } = useI18n();
  const b = t.butcem;

  // Ekrana sığmadığında otomatik kayan carousel
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const check = () => {
      setCanScroll(el.scrollWidth > el.clientWidth + 8);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      if (el.scrollWidth <= el.clientWidth + 8) return; // sığıyorsa kaydırma
      const step = 236; // görsel genişliği + boşluk
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + step,
        behavior: "smooth",
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const scrollByStep = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 236, behavior: "smooth" });
  };

  // Masaüstünde fareyle sürükleyerek kaydırma (mobilde native touch scroll çalışır)
  const dragRef = useRef<{ startX: number; startLeft: number } | null>(null);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { startX: e.pageX, startLeft: el.scrollLeft };
    pause();
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !dragRef.current) return;
    e.preventDefault();
    el.scrollLeft = dragRef.current.startLeft - (e.pageX - dragRef.current.startX);
  };

  const onDragEnd = () => {
    dragRef.current = null;
  };

  const features = [
    { title: b.f1Title, text: b.f1Text },
    { title: b.f2Title, text: b.f2Text },
    { title: b.f3Title, text: b.f3Text },
    { title: b.f4Title, text: b.f4Text },
    { title: b.f5Title, text: b.f5Text },
    { title: b.f6Title, text: b.f6Text },
    { title: b.f7Title, text: b.f7Text },
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
      <ButcemHeader />

      {/* Hero */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 40px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Image
          src="/apps/butcem/logo-92.png"
          alt="Bütçem icon"
          width={92}
          height={92}
          priority
          style={{ borderRadius: 20, margin: "0 auto 24px" }}
        />
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.8px",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {b.heroTitle}
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--fg-secondary)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 28px",
          }}
        >
          {b.heroSubtitle}
        </p>
        <DownloadButton alt={b.download} />
      </section>

      {/* Screenshots — full width */}
      <section
        style={{
          width: "100%",
          padding: "16px 0 56px",
          position: "relative",
        }}
      >
        {canScroll && (
          <>
            <CarouselButton dir={-1} onClick={() => scrollByStep(-1)} />
            <CarouselButton dir={1} onClick={() => scrollByStep(1)} />
          </>
        )}
        <div
          ref={trackRef}
          onMouseEnter={pause}
          onMouseLeave={() => {
            onDragEnd();
            resume();
          }}
          onTouchStart={pause}
          onTouchEnd={resume}
          onPointerDown={pause}
          onPointerUp={resume}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onDragStart={(e) => e.preventDefault()}
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            padding: "0 24px 8px",
            WebkitOverflowScrolling: "touch",
            justifyContent: "safe center",
            scrollSnapType: "x proximity",
            cursor: canScroll ? "grab" : "default",
            userSelect: "none",
            touchAction: "pan-x pan-y",
          }}
        >
          {screenshots.map((name) => (
            // eslint-disable-next-line @next/next/no-img-element -- static 1x/2x srcset
            <img
              key={name}
              src={`/apps/butcem/${name}.png`}
              srcSet={`/apps/butcem/${name}.png 1x, /apps/butcem/${name}@2x.png 2x`}
              alt={`Bütçem — ${name}`}
              width={220}
              height={450}
              loading="lazy"
              style={{
                borderRadius: 18,
                flexShrink: 0,
                width: 220,
                height: "auto",
                scrollSnapAlign: "center",
              }}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        style={{
          maxWidth: 960,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px 56px",
          scrollMarginTop: 80,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            marginBottom: 24,
          }}
        >
          {b.featuresTitle}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: 22,
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--fg-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px 64px",
          textAlign: "center",
          flex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            marginBottom: 20,
          }}
        >
          {b.ctaTitle}
        </h2>
        <DownloadButton alt={b.download} />
        <p style={{ marginTop: 28 }}>
          <Link href="/" style={{ fontSize: 14, color: "var(--link)" }}>
            {b.otherApps}
          </Link>
        </p>
      </section>

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
