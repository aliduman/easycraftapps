import type { Metadata } from "next";
import ButcemPrivacyContent from "../../../components/ButcemPrivacyContent";

export const metadata: Metadata = {
  title: "Bütçem — Gizlilik Politikası",
  description: "Bütçem uygulaması gizlilik politikası",
};

export default function ButcemPrivacy() {
  return <ButcemPrivacyContent />;
}
