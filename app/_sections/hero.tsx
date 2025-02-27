import Image from 'next/image';
import Link from 'next/link';
import { Lora, Roboto } from 'next/font/google';
import myPic from './../../public/hemsundar-paranthaman-4.jpg';
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
      <div className="max-w-(--breakpoint-xl) m-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-10 ">
          <div
            className={` 
            md:basis-7/12
            font-serif font-normal`}
          >
            <p className={`${sans.className} text-lg mb-2`}>
              Hemsundar Paranthaman - Full-Stack Developer
            </p>
            <div>
              {[
                'Building bridges',
                'between imagination',
                'and functionality.',
              ].map((string, index) => (
                <div key={string} className="overflow-hidden">
                  <Motion
                    className={`text-3xl leading-[40px] min-[360px]:text-[8vw] min-[390px]:text-[8.9vw]
                    min-[390px]:leading-[48px] min-[440px]:leading-[50px]
                    md:text-3xl md:leading-[46px] lg:text-[350%] lg:leading-[68px] md:hidden
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
            </div>
            {/* ${serif.className} */}
            <div>
              {[
                'Building bridges between',
                'imagination and',
                'functionality.',
              ].map((string, index) => (
                <div key={string} className="overflow-hidden">
                  <Motion
                    className={`hidden md:flex text-3xl leading-[40px] min-[360px]:text-[8vw] min-[390px]:text-[8.9vw]
                    min-[390px]:leading-[46px] min-[440px]:leading-[50px]
                    md:text-3xl md:leading-[46px] lg:text-[350%] lg:leading-[68px]
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
            </div>
            {/* <Motion
              initial={{ y: 60 }}
              className={`text-3xl leading-[40px] min-[360px]:text-[8vw] min-[390px]:text-[8.9vw]
                    min-[390px]:leading-[46px] min-[440px]:leading-[50px]
                    md:text-4xl md:leading-[46px] lg:text-[350%] lg:leading-[68px]
                    ${serif.className}`}
            >
              Building bridges between imagination and functionality.
            </Motion> */}
            <div className="overflow-hidden">
              <Motion
                className={`text-xl mt-8 opacity-80 font-serif ${sans.className} font-normal xl:text-2xl`}
                initial={{ y: 50 }}
                animate={{
                  y: 0,
                  transition: { delay: 1.7, duration: 0.7, ease: 'easeIn' },
                }}
              >
                I engineer digital solutions for businesses, startups worldwide.
              </Motion>
            </div>
          </div>

          <div className="flex justify-center w-full md:basis-5/12">
            <div className="relative w-full aspect-2034/2928 max-w-[750px] max-h-[700px] overflow-hidden">
              <Motion
                className="w-full h-full bg-white absolute z-100"
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
          className={`${sans.className} text-lg mt-10 opacity-90 md:text-xl  md:mt-20 lg:text-2xl lg:leading-[40px] lg:max-w-[80%] flex flex-col gap-6 md:gap-8`}
        >
          <p className={``}>
            I'm Hemsundar Paranthaman, a passionate developer with expertise in
            both front-end and back-end technologies. My programming journey
            began in 11th grade, focusing on React.js, Next.js, and Redux. After
            completing 12th grade, I joined JadeCore, where I contributed to
            SaaS applications and expanded into back-end work with Node.js,
            Express, and MySQL.
          </p>
          <p>
            Currently, I work part-time as both a developer at JadeCore and an
            eCommerce Analyst at BuildDirect, a leading platform based in
            Vancouver. I leverage my technical skills to enhance eCommerce
            strategies and build impactful, user-centric solutions.
          </p>
          {/* <p>
            In addition to my role at JadeCore, I took on a new challenge as an
            eCommerce Analyst at BuildDirect, a prominent eCommerce platform
            headquartered in Vancouver, Canada, that serves customers across the
            US. In this role, I leverage my technical background to analyze and
            enhance eCommerce strategies, bridging the gap between technical
            development and business objectives.
          </p>
          <p>
            With a strong foundation in both front-end and back-end development
            and a keen analytical mindset, I am driven by the desire to create
            impactful and user-centric solutions. I am always eager to learn and
            grow, embracing new challenges and opportunities in the tech world.
          </p> */}
          <p>
            If you'd like to learn more about my experience, feel free to check
            out my
            <Link
              href={'/pdfs/hemsundar_paranthaman_resume.pdf'}
              className="text-green-600"
            >
              {' '}
              resume.{' '}
            </Link>
            I’m always open to networking and collaboration!
          </p>

          {/* <Link
            href={'/pdfs/hemsundar_paranthaman_resume.pdf'}
            className={`mt-6 block ${sans.className}`}
          >
            Wanna look at my Resume? <b>Click here.</b>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
