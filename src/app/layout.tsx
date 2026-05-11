import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/layout/Masthead";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Whose Intelligence? — Building Agentic AI in Africa · DLI 2026",
  description:
    "Building Agentic AI in Africa without frontier-model dependency. A workshop at Deep Learning Indaba 2026, hosted by ML Collective.",
  icons: { icon: "/mlc.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Masthead />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
