"use client";

import Link from "next/link";
import ButcemHeader from "./ButcemHeader";
import { useI18n } from "../lib/i18n";
import { butcemLegal } from "../lib/butcem-legal";

export default function ButcemLegalContent({ kind }: { kind: "privacy" | "terms" }) {
  const { lang, t } = useI18n();
  const content = butcemLegal[lang][kind];
  const tr = lang === "tr";
  const links = kind === "privacy" ? [
    { href: "https://www.apple.com/legal/privacy/", label: tr ? "Apple Gizlilik Politikası" : "Apple Privacy Policy" },
    { href: "https://policies.google.com/privacy", label: tr ? "Google Gizlilik Politikası" : "Google Privacy Policy" },
    { href: "https://myaccount.google.com/connections", label: tr ? "Google bağlantılarını yönet" : "Manage Google connections" },
  ] : [
    { href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", label: tr ? "Apple Standart EULA" : "Apple Standard EULA" },
    { href: "https://support.apple.com/118428", label: tr ? "Abonelik iptali" : "Cancel a subscription" },
    { href: "https://reportaproblem.apple.com/", label: tr ? "Apple iade başvurusu" : "Apple refund requests" },
    { href: "https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-availability-for-an-auto-renewable-subscription", label: tr ? "Apple: Abonelik hizmetini sonlandırma" : "Apple: Discontinuing subscription services" },
    { href: "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/abonelik-sozlesmeleri-hakkinda-bilgilendirme", label: tr ? "Ticaret Bakanlığı: Abonelik sözleşmeleri" : "Türkiye Ministry of Trade: Subscription contracts" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
      <ButcemHeader />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px", fontSize: 15, lineHeight: 1.7 }}>
        <p style={{ color: "var(--fg-secondary)", marginBottom: 8 }}>Bütçem · EasyCraft Apps</p>
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3 }}>{content.title}</h1>
        <p style={{ fontSize: 13, color: "var(--fg-tertiary)", marginTop: 16, marginBottom: 40 }}>
          {tr ? "Son güncelleme: 14 Ekim 2026" : "Last updated: October 14, 2026"}
        </p>
        {content.sections.map((section, index) => (
          <section key={section.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{index + 1}. {section.title}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph} style={{ marginBottom: 12 }}>{paragraph}</p>)}
          </section>
        ))}
        <section>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{tr ? "İletişim ve ilgili bağlantılar" : "Contact and related links"}</h2>
          <p><a href="mailto:privacy@easycraftapps.com" style={{ color: "var(--link)", overflowWrap: "anywhere" }}>privacy@easycraftapps.com</a></p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            {links.map(link => <li key={link.href} style={{ marginBottom: 8 }}><a href={link.href} style={{ color: "var(--link)" }}>{link.label}</a></li>)}
          </ul>
        </section>
      </main>
      <footer style={{ maxWidth: 720, margin: "0 auto", padding: "24px", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: "12px 20px", fontSize: 13 }}>
        <span>{t.common.footerCopyright}</span>
        <Link href="/butcem/privacy">{t.common.footerPrivacy}</Link>
        <Link href="/butcem/terms">{t.common.footerTerms}</Link>
        <Link href="/butcem/contact">{t.common.footerContact}</Link>
      </footer>
    </div>
  );
}
