'use client';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import myPic from './../public/me_2.png';
import { Cardo, Inter, Lora } from 'next/font/google';
import Footer from './_components/footer';

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
          <section className="mt-24 pt-10 px-4 text-left">
            <motion.div
              className={`text-4xl ${lora.className} font-normal leading-[46px] vsm:text-5xl`}
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
            {/* <div className="h-0.5 w-full bg-black opacity-10 mb-14"></div> */}
            <h6
              className={`text-3xl ${lora.className} font-serif  mt-16 my-8 `}
            >
              Latest Work & Ventures
            </h6>
            {/* <p className="text-lg">
              Here are some of the projects I have recently worked.
            </p> */}
            {[
              {
                title: 'The AWM',
                subTitle: 'Development',
                imageUrl: '/the-awm.png',
                link: 'the-awm.com',
              },
            ].map((project) => (
              <WorkCard
                title={project.title}
                subTitle={project.subTitle}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </section>
          <Footer />
        </>
      )}
    </main>
  );
};

export default HomePage;
