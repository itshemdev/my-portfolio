import { ReactNode } from 'react';
import Image from 'next/image';

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
    <div>
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

const HomePage = () => {
  return (
    <main>
      <section className="text mt-16 py-20 px-2 text-left">
        <h1 className="text-4xl text-black/80 leading-[44px]">
          Hey, I'm <span className="text-black/100">Hemsundar Paranthaman</span>, a{' '}
          <span className="text-black/100">full-stack</span> developer based in India.
        </h1>
        <div className="flex justify-center mt-12">
          <div className="relative w-full aspect-[2034/2928] max-w-[750px]">
            <Image src={'/me_2.png'} alt="My photo" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <p className="text-2xl  mt-10">
          <span className="ml-10">A</span> student at Hindustan College of Arts and Science. I have been learning web
          for the past 3 years. I work as a junior developer at a startup, JadeCore, where I apply my knowledge and
          skills in a real-world project.
        </p>
      </section>
      <section className="px-2">
        <h2 className="text-4xl text-left       mb-10 mt-10">Selected Works</h2>
        <WorkCard title="My Portfolio" subTitle="Designer + Developer" imageUrl="/my-portfolio.png" link="" />
      </section>
    </main>
  );
};

export default HomePage;
