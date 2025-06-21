import ProfileData from "@/data/ProfileData";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: ProfileData.name + " - " + ProfileData.slogan,
  description: ProfileData.description,
  keywords: ProfileData.keywords,
  openGraph: {
    title: ProfileData.name + " - " + ProfileData.slogan,
    description: ProfileData.description,
    url: ProfileData.links.find(l => l.title.toLowerCase().includes("site"))?.url || "https://belave.com.br",
    siteName: ProfileData.name,
    images: [
      {
        url: ProfileData.logo,
        width: 1200,
        height: 630,
        alt: ProfileData.name + " Logo",
      },
    ],
    locale: ProfileData.language || "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@" + ProfileData.socials?.twitter,
    creator: "@" + ProfileData.socials?.twitter,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang={ProfileData.language || "pt-BR"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
