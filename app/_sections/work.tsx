import { Lora, Roboto } from 'next/font/google';
import Line from '../_components/line';
import Image from 'next/image';
import WorkCard from '../_components/workCard';

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

const WorkSection = () => {
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
    <section className="px-4 min-[480px]:p-6 md:px-10">
      <div className="max-w-(--breakpoint-xl) m-auto">
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
  );
};

export default WorkSection;
