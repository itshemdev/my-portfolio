import Project from "./Project";

import myPortfolio from "../../../assets/project-thumbnails/my-portfolio.jpg";
import sunnySideAgency from "../../../assets/project-thumbnails/sunny-side-agency.jpg";

const Works = () => {
  return (
    <div className="work">
      <h1 className="work__title">My Works</h1>

      {/* Container */}
      <div className="work__container">
        <div className="row row--1">
          <Project
            imageSrc={myPortfolio}
            projectTitle="My Portfolio"
            projectLink="https://hemdev.vercel.app"
            isDesign={true}
            isDevelopment={true}
            className="project--1"
            data-scroll
            data-scroll-speed="2"
          ></Project>
        </div>
        <div className="row row--2">
          <Project
            className="project--2"
            imageSrc={sunnySideAgency}
            projectTitle="Sunny Side Agency"
            isDesign={false}
            isDevelopment={true}
            projectLink={"https://sunnyside-agency-solution.vercel.app/"}
            data-scroll
            data-scroll-speed="4"
          ></Project>
        </div>
      </div>
    </div>
  );
};

export default Works;
