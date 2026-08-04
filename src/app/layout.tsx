import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yahia Saad — Software Engineer",
  description:
    "Software Engineer specializing in backend engineering, full-stack development, and cybersecurity. Building scalable, secure enterprise applications with clean architecture.",
  keywords: [
    "Yahia Saad",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "NestJS",
    "Next.js",
    "TypeScript",
    "React",
    "Cybersecurity",
    "Zero Trust",
    "Portfolio",
  ],
  authors: [{ name: "Yahia Saad" }],
  creator: "Yahia Saad",
  metadataBase: new URL("https://yahiasaad.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yahia Saad — Software Engineer",
    description:
      "Software Engineer specializing in backend engineering, full-stack development, and cybersecurity. Building scalable, secure enterprise applications.",
    siteName: "Yahia Saad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahia Saad — Software Engineer",
    description:
      "Software Engineer specializing in backend engineering, full-stack development, and cybersecurity.",
    creator: "@yahiasaad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
