import Image from 'next/image';
import Link from 'next/link';
import { Lora, Roboto } from 'next/font/google';
import myPic from './../../public/hemsundar-paranthaman-1.png';
import Motion from '../_components/motion';

const sans = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const serif = Lora({
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const HeroSection = () => {
  return (
    <section className="pt-36 px-4 text-left w-full min-[480px]:px-6 md:pt-20 md:px-10">
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-10 ">
          <Motion
            className={` 
              md:basis-7/12
              font-serif font-normal`}
          >
            {[
              "Hey, I'm Hemsundar",
              'a full-stack developer',
              'based in India.',
            ].map((string, index) => (
              <div key={string} className="overflow-hidden">
                <Motion
                  className={`text-3xl leading-[40px] min-[360px]:text-[8vw] min-[390px]:text-[8.9vw]
                    min-[390px]:leading-[46px] min-[440px]:leading-[50px]
                    md:text-4xl md:leading-[46px] lg:text-[350%] lg:leading-[68px]
                    ${serif.className}
                    `}
                  initial={{ y: 60 }}
                  animate={{
                    y: 0,
                    transition: {
                      delay: 1.5 + index * 0.1,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  {string}
                </Motion>
              </div>
            ))}

            <div className="overflow-hidden">
              <Motion
                className={`text-xl mt-8 opacity-80 font-serif ${sans.className} font-normal lg:text-2xl`}
                initial={{ y: 50 }}
                animate={{
                  y: 0,
                  transition: { delay: 1.7, duration: 0.7, ease: 'easeIn' },
                }}
              >
                I engineer digital solutions for businesses, startups worldwide.
              </Motion>
            </div>
          </Motion>

          <div className="flex justify-center w-full md:basis-5/12">
            <div className="relative w-full aspect-[2034/2928] max-w-[750px] max-h-[700] overflow-hidden">
              <Motion
                className="w-full h-full bg-white absolute z-[100]"
                initial={{ height: '100%' }}
                animate={{
                  height: 0,
                  transition: { duration: 0.7, delay: 2 },
                }}
              ></Motion>
              <Motion
                className="relative w-full h-full"
                initial={{ transform: 'scale(1.25)' }}
                animate={{
                  transform: 'scale(1)',
                  transition: {
                    duration: 0.75,
                  },
                }}
              >
                <Image
                  priority={true}
                  src={myPic}
                  alt="My photo"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Motion>
            </div>
          </div>
        </div>

        <div
          className={`${sans.className} text-lg mt-10 opacity-90 md:text-2xl  md:mt-20 lg:text-2xl lg:leading-[40px] lg:max-w-[80%] m-auto`}
        >
          <p className={``}>
            I'm a budding computer application student with two years of
            freelance web development experience. My heart beats for technology,
            as I strive to stay ahead of the curve, constantly learning and
            innovating to make a mark in this dynamic field.
          </p>

          <Link
            href={'/pdfs/hemsundar_paranthaman_resume.pdf'}
            className={`mt-6 block ${sans.className}`}
          >
            Wanna look at my Resume? <b>Click here.</b>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
