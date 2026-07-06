import type { Metadata } from "next";
import ButcemContent from "../../components/ButcemContent";

export const metadata: Metadata = {
  title: "Bütçem — Kişisel Bütçe Takibi",
  description:
    "Gelir ve giderlerinizi kolayca takip edin. Bütçem, verilerinizi cihazınızda saklayan yerel-öncelikli kişisel bütçe uygulamasıdır.",
  openGraph: {
    title: "Bütçem — Kişisel Bütçe Takibi",
    description:
      "Gelir ve giderlerinizi kolayca takip edin. Yerel-öncelikli kişisel bütçe uygulaması.",
    images: ["/apps/butcem/app_icon.png"],
  },
};

export default function ButcemPage() {
  return <ButcemContent />;
}
