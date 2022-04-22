import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Project = ({
  imageSrc,
  projectTitle,
  projectLink,
  isDesign,
  isDevelopment,
  className,
  ...rest
}) => {
  return (
    <div className={`project ${className}`} {...rest}>
      <div className="project__imageholder">
        <Image
          src={imageSrc}
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="project__description">
        <div>
          <h1>{projectTitle}</h1>
          <div className="whatidid">
            {isDesign ? <h2 className="">UI Design</h2> : null}
            {isDesign ? <h2>+</h2> : null}
            {isDevelopment ? <h2 className="">Development</h2> : null}
          </div>
        </div>
        <a href={projectLink} className="iconholder">
          <BsArrowRight className="icon"></BsArrowRight>
        </a>
      </div>
    </div>
  );
};

export default Project;
