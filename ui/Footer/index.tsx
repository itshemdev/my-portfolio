import Image from "next/image";
import { FC } from "react";

const Footer = () => {
  const Icon: FC<{ link: string; imageUrl: string; alt?: string }> = ({
    link,
    imageUrl,
    alt = "",
  }) => {
    return (
      <a
        href={link}
        // href=""
        className="relative h-10 aspect-square lg:h-12"
      >
        <Image src={imageUrl} alt={alt} fill className="" />
      </a>
    );
  };

  return (
    <footer className="px-4 mt-10 bg-black text-white py-20 flex flex-col items-start lg:px-20">
      <h2 className="text-4xl md:text-5xl xl:text-6xl">Get in touch.</h2>
      <a
        className="mt-4 block text-2xl relative after:content-[''] after:w-0 after:h-0.5 after:left-0 hover:after:w-full after:bottom-[-2px] after:bg-white after:absolute after:transition-all md:text-4xl md:mt-6"
        href="mailto:hemsundar.paranthaman@outlook.com"
      >
        hemsundar.paranthaman@outlook.com
      </a>
      <div className="flex mt-6 gap-6 lg:mt-8">
        <Icon
          link={"https://github.com/Hemsundar15"}
          imageUrl={"/github-icon-white.png"}
        />
        <Icon
          link={"https://www.instagram.com/hemsundar_paranthaman/"}
          imageUrl={"/instagram-icon.png"}
        />
      </div>
    </footer>
  );
};

export default Footer;
