import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://itshem.dev'),
  title: {
    absolute: 'Hem | Developer',
    default: "'Hem | Developer'",
    template: '%s | Hem',
  },
  description:
    'Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems.',
  twitter: {
    card: 'summary',
  },
  openGraph: {
    images: {
      url: 'https://www.itshem.dev/hemsundar-paranthaman-2-compressed.jpeg',
      width: '300',
      height: '300',
      type: 'image/jpeg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
