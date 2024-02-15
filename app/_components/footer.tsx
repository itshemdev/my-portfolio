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
    <footer className="bg-[#000000] py-14 mt-16 px-4 min-[480px]:px-6 md:px-10 text-white">
      <div className="max-w-screen-xl m-auto">
        <h2 className={`text-4xl ${lora.className}`}>Hem.</h2>

        {/* <a
          href="mailto:hemsundar.paranthaman@outlook.com"
          className={`${roboto.className} text-xl mt-6 block`}
        >
          hemsundar.paranthaman@outlook.com
        </a> */}

        <div className="mt-8 flex flex-row gap-4">
          {[
            { site: 'Github', link: 'https://github.com/itshemdev' },
            { site: 'Twitter', link: 'https://github.com/itshemdev' },
            { site: 'LinkedIn', link: 'https://github.com/itshemdev' },
          ].map((item) => (
            <a
              key={item.site}
              href={item.link}
              className={`text-xl ${roboto.className}`}
            >
              {item.site}
            </a>
          ))}
        </div>
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
