import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Harmonia — Online Music Academy",
    template: "%s · Harmonia",
  },
  description:
    "Learn an instrument, production or theory from working musicians. Structured courses for every level, taught online and at your own pace.",
  keywords: [
    "music school",
    "online music lessons",
    "music production course",
    "learn guitar",
    "vocal training",
  ],
  openGraph: {
    title: "Harmonia — Online Music Academy",
    description:
      "Structured music courses taught by working musicians. Learn at your own pace, from first chord to final master.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-ink antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-brand-strong focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
