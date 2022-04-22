import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const TextBox = () => {
  return (
    <div className="textbox">
      <h2 className="name">Hemsundar Paranthaman</h2>

      <div className="titleholder">
        <h1 className="title">UI Designer</h1>
        <div className="title__row--2">
          <span className="line"></span>
          <h1 className="title">Developer</h1>
        </div>
      </div>

      <div className="cta--1">
        <Link href="/works">
          <a className="cta__text">My Works</a>
        </Link>
        <div className="iconholder">
          <BsArrowRight className="icon"></BsArrowRight>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
