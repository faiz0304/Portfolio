import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Faiz Ur Rehman Ashrafi — Agentic AI & ML Engineer",
  description:
    "Portfolio of Faiz Ur Rehman Ashrafi — Electronics Engineering graduate transitioning into Agentic AI & Machine Learning. Building impactful AI systems with Python, LangChain, FastAPI, and modern ML tools.",
  keywords: [
    "Faiz Ur Rehman Ashrafi",
    "AI Engineer",
    "Machine Learning",
    "Agentic AI",
    "LangChain",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Faiz Ur Rehman Ashrafi" }],
  openGraph: {
    title: "Faiz Ur Rehman Ashrafi — Agentic AI & ML Engineer",
    description:
      "Electronics Engineering graduate building impactful AI systems. Explore projects in LangChain, ML, and full-stack development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
