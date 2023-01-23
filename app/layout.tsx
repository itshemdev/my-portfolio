/* eslint-disable @next/next/no-head-element */
import Header from "../ui/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="max-w-screen-xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
