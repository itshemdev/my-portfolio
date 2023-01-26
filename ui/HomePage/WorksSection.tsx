import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const WorksSection = () => {
  const WorkCard: FC<{
    title: string;
    subTitle: string;
    imageUrl: string;
    githubUrl?: string;
    url: string;
    isEven?: boolean;
  }> = ({ title, subTitle, githubUrl, url, imageUrl, isEven }) => {
    return (
      <div
        className={`basis-full md:basis-1/2 ${isEven && "md:mt-20 lg:mt-40"}`}
      >
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={"aspect-sqaure w-full object-cover h-80"}
          />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-xl font-medium md:text-2xl">{title}</div>
            <div className="text-sm md:text-xl">{subTitle}</div>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a href={githubUrl} className="relative h-8 aspect-square">
                <Image
                  src={"/211904_social_github_icon.png"}
                  alt={"Github icon"}
                  fill
                />
              </a>
            )}
            <a href={url} className="relative h-8 aspect-square">
              <Image
                src={"/4829868_arrow_right_up_icon.png"}
                alt={"Github icon"}
                fill
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20">
      <h2 className="text-5xl md:text-6xl font-medium">My Works</h2>

      <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-16 mt-10">
        <WorkCard
          title={"The AWM"}
          subTitle={"Development"}
          url={"www.the-awm.com"}
          imageUrl="/the-awm.png"
        />
        <WorkCard
          isEven={true}
          title="My Portfolio"
          subTitle="Design + Development"
          imageUrl="/my-portfolio.png"
          githubUrl="https://github.com/Hemsundar15/my-portfolio"
          url="https://hemdev.vercel.app"
        />
      </div>
    </section>
  );
};

export default WorksSection;
