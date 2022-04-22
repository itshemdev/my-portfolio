import { Fragment, useRef } from "react";
import Head from "next/head";

import Footer from "../components/layout/Footer/Footer";

import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import Works from "../components/Home/Works/Works";

import useLocoScroll from "./../hooks/useLocoScroll";

const Index = () => {
  const ref = useRef(null);
  useLocoScroll();

  return (
    <Fragment>
      <Head>
        <title>Hem | Designer & Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <main id="main-container" data-scroll-container ref={ref}>
          <Hero></Hero>
          <About></About>
          <Works></Works>
          <Footer></Footer>
        </main>
      </Fragment>
    </Fragment>
  );
};

export default Index;
