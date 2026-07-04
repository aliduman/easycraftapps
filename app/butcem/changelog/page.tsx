import type { Metadata } from "next";
import ButcemChangelogContent from "../../../components/ButcemChangelogContent";

export const metadata: Metadata = {
  title: "Sürüm Notları — Bütçem",
  description: "Bütçem uygulamasının sürüm notları ve değişiklik geçmişi.",
};

export default function ButcemChangelog() {
  return <ButcemChangelogContent />;
}
