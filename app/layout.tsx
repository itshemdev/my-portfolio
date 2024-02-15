import '../styles/globals.css';
import Header from './_components/header';
import Footer from './_components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
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
    images: { url: '/hemsundar-paranthaman-2-compressed.jpeg' },
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
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
