import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkında — EasyCraft Apps",
  description:
    "EasyCraft Apps, basit problemleri kolay ve kullanışlı deneyim tasarımıyla çözen bir uygulama stüdyosudur.",
};

export default function About() {
  return <AboutContent />;
}
