import { FC } from "react";
import Image from "next/image";

const AboutSection: FC = () => {
  const IconCard: FC<{ imageUrl: string; name: string }> = ({
    imageUrl,
    name,
  }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative aspect-square w-16">
          <Image src={imageUrl} alt={"Logo"} fill objectFit="cover" />
        </div>
        <span className="text-xl">{name}</span>
      </div>
    );
  };

  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20 flex gap-10 flex-col md:flex-row md:items-start">
      <div className="md:basis-2/6 w-full relative max-w-xl aspect-square ">
        <Image
          src={"/my-photo.jpg"}
          alt={"My Photo"}
          objectFit="contain"
          fill
        />
      </div>
      <div className="md:basis-4/6 w-full">
        <p className="text-3xl md:text-3xl lg:text-4xl leading-[40px] md:leading-[50px] lg:leading-[60px]">
          Hello, I&apos;m Hemsundar, a freelancer based in India. I specialize
          in designing and developing Front-end web experiences. I am very
          passionate about improving web design and continuously learning new
          things to ensure I offer you the best.
        </p>
        <h2 className="text-3xl md:text-4xl mt-10">Technologies I use:</h2>
        <div className="flex">
          <IconCard imageUrl={"/react-logo.png"} name={"React"} />
          <IconCard
            imageUrl={"/9118036_nextjs_fill_icon.png"}
            name={"Nextjs"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
