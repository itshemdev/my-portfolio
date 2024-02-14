'use client';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import myPic from './../public/me_2.png';
import {
  Cardo,
  Inter,
  Lora,
  Open_Sans,
  Montserrat,
  Roboto,
} from 'next/font/google';
import Footer from './_components/footer';
import Line from './_components/line';
import { stagger } from 'framer-motion';

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cardo',
});

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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

const WorkCard = ({
  title,
  subTitle,
  imageUrl,
  link,
}: {
  title: string;
  subTitle: string;
  imageUrl: string;
  link: string;
}) => {
  return (
    <div className="">
      <div className="relative w-full h-full aspect-square overflow-hidden">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="mt-1">
        <div className="flex flex-col">
          <h4 className={`text-xl ${inter.className}`}>{title}</h4>
          <h5 className={`text-xs ${inter.className}`}>{subTitle}</h5>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading, setLoading]);

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            className={`${cardo.className} absolute h-screen w-screen z-[1000] top-0 bg-black before:content-['Loading...!'] 
            before:text-white before:absolute before:text-2xl before:bottom-20 before:right-10`}
            initial={{ top: 0 }}
            exit={{
              top: '-100%',
              transition: { duration: 1, ease: 'easeIn' },
            }}
          />
        )}
      </AnimatePresence>

      <section className="pt-36 px-4 text-left w-full">
        <motion.div
          className={`text-3xl leading-[40px] min-[360px]:text-[8vw] min-[390px]:text-[8.9vw] min-[390px]:leading-[46px] min-[440px]:leading-[50px] ${lora.className} font-normal  vsm:text-5xl`}
        >
          {[
            "Hey, I'm Hemsundar",
            'a full-stack developer',
            'based in India.',
          ].map((string, index) => (
            <div key={string} className="overflow-hidden">
              <motion.h1
                className={``}
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
              </motion.h1>
            </div>
          ))}

          <div className="overflow-hidden">
            <motion.p
              className={`text-xl mt-8 opacity-80 font-serif ${inter.className} font-normal`}
              initial={{ y: 50 }}
              animate={{
                y: 0,
                transition: { delay: 1.7, duration: 0.7, ease: 'easeIn' },
              }}
            >
              I engineer digital solutions for businesses, startups worldwide.
            </motion.p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-12">
          <div className="relative w-full aspect-[2034/2928] max-w-[750px] overflow-hidden">
            <motion.div
              className="w-full h-full bg-white absolute z-[100]"
              initial={{ height: '100%' }}
              animate={{
                height: 0,
                transition: { duration: 0.7, delay: 2 },
              }}
            ></motion.div>
            <motion.div
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
            </motion.div>
          </div>
        </div>

        <p className={`${roboto.className} text-lg mt-10 opacity-90`}>
          I'm a budding computer application student with two years of freelance
          web development experience. My heart beats for technology, as I strive
          to stay ahead of the curve, constantly learning and innovating to make
          a mark in this dynamic field.
        </p>

        <Link href={'/about'} className={`mt-6 block ${roboto.className}`}>
          Wanna know more about me? <b>Click here.</b>
        </Link>
      </section>

      <section className="px-4">
        <Line className="mt-12" />
        <h2 className="text-3xl mt-12">Testimonials</h2>

        <div className="mt-8 w-[100%] flex flex-col gap-12">
          {[
            {
              description: `Hem's diverse skills in development and testing greatly benefit JadeCore. A crucial asset to our team.`,
              name: 'Abel',
              at: 'JadeCore',
              role: 'CEO',
            },
            {
              description: `Very fast and efficient. Great seller!`,
              name: 'Shahshauhin',
              at: 'Inner Balance Institute  ',
              role: 'CEO',
            },
            {
              description: `Hem went above and beyond what was required of the gig, very professional and much appreciated.`,
              name: 'Ryan',
              at: 'HypeDisco  ',
              role: 'CEO',
            },
          ].map((testimonial) => (
            <div className={`${inter.className} relative`} key={testimonial.at}>
              <p className="text-xl">"{testimonial.description}"</p>
              <p className="ml-0 text-sm mt-2 font-medium">
                - {`${testimonial.name} at ${testimonial.at}`}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 bg-blacks">
        <Line className="mt-12" />
        <h6 className={`text-3xl ${lora.className} font-serif  mt-12 my-10 `}>
          Latest Work & Ventures
        </h6>

        <div className="flex flex-col gap-8">
          {[
            {
              title: 'The AWM',
              subTitle: 'Development',
              imageUrl: '/the-awm.png',
              link: 'the-awm.com',
            },
            {
              title: 'All DigiApp',
              subTitle: 'Development',
              imageUrl: '/all-digiapp.png',
              link: 'all-digiapp.com',
            },
          ].map((project) => (
            <WorkCard
              key={project.title}
              title={project.title}
              subTitle={project.subTitle}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
