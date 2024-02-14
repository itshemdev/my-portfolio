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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className="bg-black text-white text-center w-full">Site is under maintenance</div> */}

        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
