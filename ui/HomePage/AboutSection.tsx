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
          <Image src={imageUrl} alt={"Logo"} fill />
        </div>
        <span className="text-xl">{name}</span>
      </div>
    );
  };

  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20 flex gap-10 flex-col md:flex-row md:items-start lg:gap-16">
      <div className="md:basis-2/6 w-full relative max-w-xl aspect-square ">
        <Image
          src={"/my-photo.jpg"}
          alt={"My Photo"}
          className="object-cover"
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
        <h2 className="text-4xl md:text-4xl mt-10 font-semibold">Skills</h2>
        <div className="h-0.5 w-full bg-black mt-4" />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl">Front-end Technologies</h3>
            <div className="flex flex-col mt-2">
              {["HTML, CSS, Javascript", "Typescript", "React", "Nextjs"].map(
                (value) => {
                  return (
                    <div key={value} className={`flex items-center gap-2`}>
                      <div
                        className={`w-2 h-2 rounded-full aspect-square bg-black`}
                      />
                      <span key={value} className={`text-2xl font-light`}>
                        {value}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div>
            <h3 className="text-3xl">CMS</h3>
            <div className="flex flex-col mt-2">
              {["Sanity"].map((value) => {
                return (
                  <div key={value} className={`flex items-center gap-2`}>
                    <div
                      className={`w-2 h-2 rounded-full aspect-square bg-black`}
                    />
                    <span key={value} className={`text-2xl font-light`}>
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-3xl">Mobile Development</h3>
            <div className="flex flex-col mt-2">
              {["Dart", "Flutter"].map((value) => {
                return (
                  <div key={value} className={`flex items-center gap-2`}>
                    <div
                      className={`w-2 h-2 rounded-full aspect-square bg-black`}
                    />
                    <span key={value} className={`text-2xl font-light`}>
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
