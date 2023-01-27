import TitleText from "../Common/TitleText";
import Image from "next/image";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full hero--container">
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .hero--container {
            min-height: clamp(600px, 100vh, 800px);
          }

          .image--container {
            background: red;
            min-height: clamp(600px, 100vh, 800px);
          }
        }

        .cta:hover::after {
          width: 100%;
        }

        .cta::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: black;
          bottom: -4px;
          transition: 0.4s;
        }
      `}</style>

      <div className="text-left py-20 px-4 md:text-left md:basis-1/2 md:w-1/2 lg:px-20 flex flex-col items-start justify-center">
        <h2 className="text-2xl lg:text-3xl">Hemsundar Paranthaman</h2>
        <TitleText text={"Front-end"} styles={`mt-4`} />
        <TitleText text={"Developer "} styles={`ml-20`} />
        <Link to="worksSection" smooth={true}>
          <a className="cta relative cursor-pointer flex items-center mt-6 md:mt-8 lg:mt-10 gap-2 lg:gap-4">
            <span className="text-2xl block">My Works</span>
            <svg
              width="31"
              height="16"
              viewBox="0 0 31 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                fill="black"
              />
            </svg>
          </a>
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
