import type { Metadata } from "next";
import ContactContent from "../../components/ContactContent";

export const metadata: Metadata = {
  title: "İletişim — EasyCraft Apps",
  description:
    "EasyCraft Apps hakkında soru, yorum ve geri bildirimleriniz için bizimle iletişime geçin.",
};

export default function Contact() {
  return <ContactContent />;
}
