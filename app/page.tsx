'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Inter, Lora, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import myPic from './../public/hemsundar-paranthaman-1.png';
import Footer from './_components/footer';
import Line from './_components/line';
import Link from 'next/link';
import WorkCard from './_components/workCard';

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

const serif = Lora({
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/georgia-estate.ttf',
      weight: '400',
    },
  ],
  variable: '--font-poppins',
});

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading, setLoading]);

  const works = [
    {
      title: 'The AWM',
      subTitle: 'Development',
      imageUrl: '/the-awm.png',
      link: 'https://www.the-awm.com/',
    },
    {
      title: 'All DigiApp',
      subTitle: 'Development',
      imageUrl: '/all-digiapp.png',
      link: 'https://all-digiapp.com',
    },
  ];

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            className={`${lora.className} absolute h-screen w-screen z-[1000] top-0 bg-black before:content-['Loading...!'] 
            before:text-white before:absolute before:text-2xl before:bottom-20 before:right-10`}
            initial={{ top: 0 }}
            exit={{
              top: '-100%',
              transition: { duration: 1, ease: 'easeIn' },
            }}
          />
        )}
      </AnimatePresence>

      <section className="pt-36 px-4 text-left w-full min-[480px]:px-6 md:pt-20 md:px-10">
        <div className="max-w-screen-xl m-auto">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-10 ">
            <motion.div
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
                  <motion.h1
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
                  </motion.h1>
                </div>
              ))}

              <div className="overflow-hidden">
                <motion.p
                  className={`text-xl mt-8 opacity-80 font-serif ${roboto.className} font-normal lg:text-2xl`}
                  initial={{ y: 50 }}
                  animate={{
                    y: 0,
                    transition: { delay: 1.7, duration: 0.7, ease: 'easeIn' },
                  }}
                >
                  I engineer digital solutions for businesses, startups
                  worldwide.
                </motion.p>
              </div>
            </motion.div>

            <div className="flex justify-center w-full md:basis-5/12">
              <div className="relative w-full aspect-[2034/2928] max-w-[750px] max-h-[700] overflow-hidden">
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
          </div>

          <div
            className={`${roboto.className} text-lg mt-10 opacity-90 md:text-2xl  md:mt-20 lg:text-2xl lg:leading-[40px] lg:max-w-[80%] m-auto`}
          >
            <p className={``}>
              I'm a budding computer application student with two years of
              freelance web development experience. My heart beats for
              technology, as I strive to stay ahead of the curve, constantly
              learning and innovating to make a mark in this dynamic field.
            </p>

            <Link
              href={'/pdfs/hemsundar_paranthaman_resume.pdf'}
              className={`mt-6 block ${roboto.className}`}
            >
              Wanna look at my Resume? <b>Click here.</b>
            </Link>
            {/* <Link href={'/about'} className={`mt-6 block ${roboto.className}`}>
              Wanna know more about me? <b>Click here.</b>
            </Link> */}
          </div>
        </div>
      </section>

      <section className="px-4 min-[480px]:p-6 md:px-10">
        <div className="max-w-screen-xl m-auto">
          <Line className="mt-12" />
          <h2 className={`text-3xl lg:text-4xl mt-12 ${poppins.variable}`}>
            Testimonials
          </h2>

          {/* <div className="mt-8 w-[100%] flex flex-col gap-12 md:flex-row">
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
              <div
                className={`${roboto.className} w-1/2 relative w-full lg:w-full`}
                key={testimonial.at}
              >
                <p className="text-xl">"{testimonial.description}"</p>
                <p className="ml-0 text-sm mt-2 font-medium">
                  - {`${testimonial.name} at ${testimonial.at}`}
                </p>
              </div>
            ))}
          </div> */}
          <div className="mt-8 w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \ gap-10 md:gap-y-16">
            {[
              {
                description: `Hem's diverse skills in development and testing greatly benefit JadeCore. A crucial asset to our team.`,
                name: 'Abel',
                at: 'JadeCore',
                role: 'CEO',
              },
              {
                description: `Hem went above and beyond what was required of the gig, very professional and much appreciated.`,
                name: 'Ryan',
                at: 'HypeDisco  ',
                role: 'CEO',
              },
              {
                description: `Very fast and efficient. Great seller!`,
                name: 'Shahshauhin',
                at: 'Inner Balance Institute  ',
                role: 'CEO',
              },
            ].map((testimonial, index) => (
              <div
                className={`${
                  roboto.className
                } relative w-full h-full lg:w-full flex flex-col justify-between ${
                  index === 2 &&
                  'md:col-start-1 md:col-end-3 md:w-1/2 md:m-auto lg:col-start-3 lg:col-end-4'
                }`}
                key={testimonial.at}
              >
                <p className="text-xl">"{testimonial.description}"</p>
                <p className="ml-0 text-sm mt-2 font-medium">
                  - {`${testimonial.name} at ${testimonial.at}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 min-[480px]:p-6 md:px-10">
        <div className="max-w-screen-xl m-auto">
          <Line className="mt-12" />
          <h6
            className={`text-3xl lg:text-4xl ${lora.className} font-serif  mt-12 `}
          >
            Latest Work & Ventures
          </h6>
          <p className={`${roboto.className} mt-2`}>
            Here are some of my recent projects.
          </p>

          <div className="flex flex-col md:flex-row mt-12  gap-10">
            <div className="basis-1/2">
              {works.map((project, index) => {
                if (index % 2 === 0)
                  return (
                    <WorkCard
                      key={project.title}
                      title={project.title}
                      subTitle={project.subTitle}
                      imageUrl={project.imageUrl}
                      link={project.link}
                    />
                  );
              })}
            </div>
            <div className="gap-8 basis-1/2 md:mt-20 md:mt-40">
              {works.map((project, index) => {
                if (index % 2 !== 0) {
                  return (
                    <WorkCard
                      key={project.title}
                      title={project.title}
                      subTitle={project.subTitle}
                      imageUrl={project.imageUrl}
                      link={project.link}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 min-[480px]:px-6 md:px-10">
        <div className="max-w-screen-xl m-auto">
          <Line className="mb-16 mt-16" />
          <div className="flex items-center gap-20">
            <div className="relative hidden basis-5/12 aspect-square md:flex overflow-hidden rounded-full">
              <Image
                src={'/hemsundar-paranthaman-2.jpeg'}
                alt="Photo of Hemsundar Paranthaman."
                fill
              />
            </div>
            <div className="basis-full md:basis-5/12 lg:p-10">
              <h1 className="text-4xl lg:text-5xl">Get In Touch.</h1>
              <p className={`${roboto.className} mt-2`}>
                I would love to collaborate for something.
              </p>

              <div className={`mt-10 flex flex-col  gap-4 ${roboto.className}`}>
                <input
                  type="text"
                  placeholder="Name"
                  className={`border-2 rounded-lg p-2 w-full `}
                />
                <input
                  type="email"
                  placeholder="Mail"
                  className={`border-2 rounded-lg p-2 w-full ${roboto.className}`}
                />
                <textarea
                  name=""
                  id=""
                  className="border-2 w-full rounded-lg p-2"
                  placeholder="Write something here."
                ></textarea>
                <button
                  className={`block bg-black text-white px-4 py-2 rounded-lg`}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
