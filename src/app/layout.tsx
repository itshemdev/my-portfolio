import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hem | Software Engineer",
  description:
    "Helping businesses grow online through modern web apps, custom WordPress & Shopify solutions, and digital products crafted to elevate your brand.",
  openGraph: {
    type: "website",
    title: "Hem | Software Engineer",
    description:
      "Helping businesses grow online through modern web apps, custom WordPress & Shopify solutions, and digital products crafted to elevate your brand.",
    url: "https://itshem.dev",
    siteName: "Hem | Software Engineer",
    images: [
      {
        url: "https://itshem.dev/open-graph--image.jpeg",
        width: 1200,
        height: 630,
        alt: "Hem | Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
