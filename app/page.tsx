'use client';
import { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <div className="mt-10">
      <div className="relative w-full h-full aspect-square">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="mt-1">
        <div className="flex flex-col">
          <h4 className="text-2xl">{title}</h4>
          <h5>{subTitle}</h5>
        </div>
      </div>
    </div>
  );
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const HomePage = () => {
  return (
    <main>
      <section className="text mt-16 pt-20 px-2 text-left">
        {/* <motion.h1 className="text-4xl text-black/80 leading-[44px]">
          Hey, I'm <span className="text-black/100">Hemsundar Paranthaman</span>, a{' '}
          <span className="text-black/100">full-stack</span> developer based in India.
        </motion.h1> */}
        {/* <motion.span
          className="text-4xl relative text-black/80 leading-[44px] overflow-hidden"
          variants={banner}
          initial="initial"
          animate="animate"
        >
          {"Hey, I'm Hemsundar Paranthaman, a full-stack developer based in India."
            .split('')
            .map((letter, index) => (
              <motion.span
                key={letter + index}
                variants={letterAni}
                className="inline-block whitespace-nowrap"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
        </motion.span> */}
        <motion.h1
          className="text-4xl text-black/80 leading-[46px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.75,
            },
          }}
        >
          Hey, I'm <span className="text-black/100">Hemsundar Paranthaman</span>
          , a <span className="text-black/100">full-stack</span> developer based
          in India.
        </motion.h1>
        {/* <div className="flex justify-center mt-12">
          <div className="relative w-full aspect-[2034/2928] max-w-[750px]">
            <Image
              src={'/me_2.png'}
              alt="My photo"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div> */}
        <div className="flex justify-center mt-12">
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
              initial={{ transform: 'scale(1.5)' }}
              animate={{
                transform: 'scale(1)',
                transition: {
                  duration: 0.75,
                },
              }}
            >
              <Image
                src={'/me_2.png'}
                alt="My photo"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
        <p className="text-2xl  mt-10">
          <span className="ml-10">A</span> student at Hindustan College of Arts
          and Science. I have been learning web for the past 3 years. I work as
          a junior developer at a startup, JadeCore, where I apply my knowledge
          and skills in a real-world project.
        </p>
      </section>
      <section className="px-2">
        <p className="text-2xl  mt-6">Here is some of my works.</p>
        {/* <h2 className="text-4xl text-left       mb-10 mt-10">Selected Works</h2> */}
        <WorkCard
          title="The AWM"
          subTitle="Developer"
          imageUrl="/the-awm.png"
          link=""
        />
        <WorkCard
          title="All DigiApp"
          subTitle="Developer"
          imageUrl="/all-digiapp.png"
          link=""
        />
      </section>
    </main>
  );
};

export default HomePage;
