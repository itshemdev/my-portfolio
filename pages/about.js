import { Fragment, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import Footer from "../components/layout/Footer/Footer";

import useLocoScroll from "../hooks/useLocoScroll";

const AboutPage = () => {
  const ref = useRef(null);
  useLocoScroll();

  const toolsTechs = [
    "Figma",
    "Adobe XD",
    "HTML5",
    "CSS3/SCSS",
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "Next",
    "Nodejs",
    "Express",
    "MongoDB",
    "Firebase",
    "Sanity IO",
  ];

  return (
    <Fragment>
      <Head>
        <title>Hem | About</title>
      </Head>

      <main ref={ref} id="main-container">
        <div className="aboutpage">
          {/* <h1 className="name">Page under Constrction</h1> */}
          <div className="aboutpage__titleholder">
            <h1 className="aboutpage__title">A little bit</h1>
            <h1 className="aboutpage__title">about myself.</h1>
          </div>
          <div className="description__wrapper">
            <div className="description__inside">
              <p className="description">
                Hello, I&apos;m Hemsundar, a freelancer based in India. I
                specialize in designing and developing Front-end web
                experiences. I am very passionate about improving web design and
                continuously learning new things to ensure I offer you the best.
              </p>

              <div className="techs__wrapper">
                {toolsTechs.map((tool, index) => (
                  <span className="techs" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
              {/* <p>
                I am open for freelance work.{" "}
                <Link href="/contact">
                  <a>Contact me!</a>
                </Link>
              </p> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </Fragment>
  );
};

export default AboutPage;
