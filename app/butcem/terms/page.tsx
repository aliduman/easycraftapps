import type { Metadata } from "next";
import ButcemLegalContent from "../../../components/ButcemLegalContent";

export const metadata: Metadata = {
  title: "Bütçem — Kullanım Koşulları",
  description: "Bütçem kullanım koşulları, abonelik, iptal ve hizmetin sonlandırılması hakkında bilgiler.",
};

export default function ButcemTerms() {
  return <ButcemLegalContent kind="terms" />;
}
