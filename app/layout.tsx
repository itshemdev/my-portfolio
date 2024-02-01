import '../styles/globals.css';
import Header from './_components/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <div className="bg-black text-white text-center w-full">Site is under maintenance</div> */}

        <Header />
        {children}
      </body>
    </html>
  );
}
