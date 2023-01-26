import { FC } from "react";
import Image from "next/image";

const AboutSection: FC = () => {
  const SkillContainer: FC<{ title: string; skills: string[] }> = ({
    title,
    skills,
  }) => {
    return (
      <div>
        <h3 className="text-3xl">{title}</h3>
        <div className="flex flex-col mt-2">
          {skills.map((value) => {
            return (
              <div key={value} className={`flex items-center gap-2`}>
                <div className={`w-1.5 rounded-full aspect-square bg-black`} />
                <span key={value} className={`text-2xl font-light`}>
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="px-4 pt-10 lg:px-20 lg:pt-28 flex gap-10 flex-col md:flex-row md:items-start lg:gap-16">
      <div className="md:basis-2/6 w-full relative max-w-xl aspect-square ">
        <Image
          src={"/my-photo.jpg"}
          alt={"My Photo"}
          className="object-cover"
          fill
        />
      </div>
      <div className="md:basis-4/6 w-full">
        <p className="text-3xl md:text-3xl lg:text-4xl leading-[40px] md:leading-[50px] lg:leading-[55px]">
          I am Hemsundar Paranthaman, a student at Hindustan College of Arts and
          Science. I have been learning web for the past 2 years. I work as a
          junior developer at a startup, JadeCore, where I apply my knowledge
          and skills in a real-world project.
        </p>
        <p className="mt-10 text-3xl md:text-3xl lg:text-4xl leading-[40px] md:leading-[50px] lg:leading-[55px]">
          I have hands-on experience in web development and I am passionate
          about staying updated with the latest technologies and trends.
        </p>

        <h2 className="text-4xl md:text-4xl mt-10 font-semibold lg:mt-10">
          Skills
        </h2>
        <div className="h-0.5 w-full bg-black mt-4" />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillContainer
            title="Front-end technologies"
            skills={["HTML, CSS, Javascript", "Typescript", "React", "Nextjs"]}
          />
          <SkillContainer title="CMS" skills={["Sanity"]} />
          <SkillContainer
            title="Mobile Development"
            skills={["Dart", "Flutter", "Material Design"]}
          />
          <SkillContainer
            title="Others"
            skills={["VS Code", "Git", "GitHub"]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
