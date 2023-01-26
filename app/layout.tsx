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
      <head>
        <title>Hem | Developer</title>

        <meta property="og:type" content="article" />
        <meta property="og:title" content={"Hem | Developer"} />
        <meta
          property="og:description"
          content={`I'm Hemsundar, a freelancer based in India. I specialize in
         designing and developing Front-end web experiences. I am very passionate
         about improving web design and continuously learning new things to
         ensure I offer you the best.`}
        />
        <meta
          property="og:image"
          content={`https://hemdev.vercel.app/_next/image?url=%2Fglitch-lab-app-2d0Mk82TGI8-unsplash.jpg&w=768&q=75`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={"Hem | Developer"} />
        <meta
          property="twitter:description"
          content={`I'm Hemsundar, a freelancer based in India. I specialize in
          designing and developing Front-end web experiences. I am very passionate
          about improving web design and continuously learning new things to
          ensure I offer you the best.`}
        />
        <meta
          property="twitter:image"
          content={`https://hemdev.vercel.app/_next/image?url=%2Fglitch-lab-app-2d0Mk82TGI8-unsplash.jpg&w=768&q=75`}
        />
      </head>
      <body className="max-w-[1680px] mx-auto">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
