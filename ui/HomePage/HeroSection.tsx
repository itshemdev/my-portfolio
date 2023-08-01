import TitleText from "../Common/TitleText";
import Image from "next/image";
import { Link } from "react-scroll";
import ArrowIcon from "./../Common/icons/arrowIcon.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full hero--container">
      <div className="text-left py-28 px-4 md:text-left md:basis-1/2 md:w-1/2 lg:px-20 flex flex-col items-start justify-center">
        <h2 className="text-2xl lg:text-3xl">Hemsundar Paranthaman</h2>
        <TitleText text={"Full-stack"} styles={`mt-4`} />
        <TitleText
          text={"Developer "}
          styles={`ml-12 md:ml-16 lg:ml-20`}
          delay={0.15}
        />
        <Link
          to="worksSection"
          offset={-130}
          duration={1000}
          smooth={true}
          className="cta relative cursor-pointer flex items-center mt-6 md:mt-8 lg:mt-10 gap-2 lg:gap-4"
        >
          <span className="text-2xl block">My Works</span>
          <ArrowIcon />
        </Link>
      </div>
      <div className="image--container md:basis=1/2 relative w-full md:w-1/2 h-80 md:h-full">
        <Image
          src={"/hero-image.jpg"}
          alt={"Developer hero image"}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
