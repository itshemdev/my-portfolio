import Image from 'next/image';
import { Roboto, Lora } from 'next/font/google';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const Footer = () => {
  return (
    <footer className="bg-black py-14 mt-16 px-4">
      <h2 className={`text-4xl text-white ${lora.className}`}>Hem.</h2>

      <div className="mt-8 flex flex-row gap-4">
        {[
          { site: 'Github', link: 'https://github.com/itshemdev' },
          { site: 'Twitter', link: 'https://github.com/itshemdev' },
          { site: 'LinkedIn', link: 'https://github.com/itshemdev' },
        ].map((item) => (
          <a
            key={item.site}
            href={item.link}
            className={`text-white text-xl ${roboto.className}`}
          >
            {item.site}
          </a>
        ))}
      </div>

      {/* <div>{[{ link: 'https://github.com/itshemdsev', icon:  }]}</div> */}
      {/* <div className="mt-8 flex gap-6">
        <a
          href="https://github.com/itshemdev"
          className="relative w-10 aspect-square block"
        >
          <Image src={'/icons/github-light-icon.png'} alt="Github icon" fill />
        </a>
        <a
          href="https://github.com/itshemdev"
          className="relative w-10 aspect-square block"
        >
          <Image src={'/icons/twitter-icon.png'} alt="Twitter icon" fill />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
