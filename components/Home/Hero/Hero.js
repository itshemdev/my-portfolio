import Image from "next/image";

import TextBox from "./TextBox";
import sideImage from "../../../assets/background.jpg";

const Home = () => {
  return (
    <section className="hero" data-scoll-section>
      <TextBox />
      <div className="imageholder">
        <Image
          src={sideImage}
          alt="Some abstract illustrations"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
    </section>
  );
};

export default Home;
