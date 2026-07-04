import type { Metadata } from "next";
import ButcemContactContent from "../../../components/ButcemContactContent";

export const metadata: Metadata = {
  title: "İletişim — Bütçem",
  description:
    "Bütçem hakkında soru, yorum ve geri bildirimleriniz için bizimle iletişime geçin.",
};

export default function ButcemContact() {
  return <ButcemContactContent />;
}
