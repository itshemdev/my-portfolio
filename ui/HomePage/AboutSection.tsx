import { FC } from "react";
import Image from "next/image";

const AboutSection: FC = () => {
  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20">
      {/* <h1>About me</h1> */}
      <p className="text-3xl md:text-4xl lg:text-5xl leading-[40px] lg:leading-[60px]">
        Hello, I&apos;m Hemsundar, a freelancer based in India. I specialize in
        designing and developing Front-end web experiences. I am very passionate
        about improving web design and continuously learning new things to
        ensure I offer you the best.
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt-10">
        Technologies I use:
        <div>
          <div>
            <div className="relative aspect-square h-28">
              <Image
                src={"/1174949_js_react js_logo_react_react native_icon-2.png"}
                alt={"React Logo"}
                fill
                objectFit={"cover"}
              />
            </div>
            <span>React</span>
          </div>
        </div>
      </h2>
    </section>
  );
};

export default AboutSection;
