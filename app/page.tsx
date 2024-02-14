'use client';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import myPic from './../public/me_2.png';
import { Cardo, Inter, Lora } from 'next/font/google';
import Footer from './_components/footer';
import Line from './_components/line';

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

  // if (loading) {
  //   return (
  //     <AnimatePresence>
  //       <motion.section
  //         className="h-screen w-screen z-[1000] bg-black flex items-center justify-center"
  //         exit={{ y: '-100%' }}
  //       >
  //         <div className="text-3xl text-white">Hello there!</div>
  //       </motion.section>
  //     </AnimatePresence>
  //   );
  // }

  return (
    <main>
      {!loading && (
        <>
          <section className="mt-24 pt-10 px-4 text-left w-full">
            <motion.div
              className={`text-[8.9vw] ${lora.className} font-normal leading-[46px] vsm:text-5xl`}
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
                        delay: index * 0.1,
                        ease: [0.6, 0.01, -0.05, 0.9],
                      },
                    }}
                  >
                    {string}
                  </motion.h1>
                </div>
              ))}

              <p
                className={`text-xl mt-6 opacity-80 font-serif ${inter.className} font-normalu`}
              >
                I craft visual solutions for brands, studios, and agencies
                worldwide.
              </p>
            </motion.div>

            <div className="flex justify-center mt-10">
              <div className="relative w-full aspect-[2034/2928] max-w-[750px] overflow-hidden">
                <motion.div
                  className="w-full h-full bg-white absolute z-[100]"
                  initial={{ height: '100%' }}
                  animate={{
                    height: 0,
                    transition: { duration: 0.5, delay: 0.35 },
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
          </section>
          <section className="px-4 bg-blacks">
            <h6
              className={`text-3xl ${lora.className} font-serif  mt-16 my-10 `}
            >
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
                  title={project.title}
                  subTitle={project.subTitle}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              ))}
            </div>
          </section>
          <section className="px-4">
            {/* <Line className="mt-8" /> */}
            <h2 className="text-3xl mt-16">Testimonials</h2>

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
                <div className={`${inter.className} relative`}>
                  <p className="text-xl">"{testimonial.description}"</p>
                  <p className="ml-0 text-sm mt-2 font-medium">
                    - {`${testimonial.name} at ${testimonial.at}`}
                  </p>

                  {/* <div className="relative mt-3">
                    <p className="ml-3">"{testimonial.description}"</p>
                    <div className="h-full w-1 bg-black absolute opacity-20 top-0"></div>
                  </div> */}
                </div>
              ))}
            </div>
          </section>
          {/* <Footer /> */}
        </>
      )}
    </main>
  );
};

export default HomePage;
