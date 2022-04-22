import { Fragment, useRef } from "react";
import Head from "next/head";

import Works from "../components/Home/Works/Works";
import Footer from "../components/layout/Footer/Footer";

import useLocoScroll from "../hooks/useLocoScroll";

const WorksPage = () => {
  const ref = useRef(null);
  useLocoScroll();

  return (
    <Fragment>
      <Head>
        <title>Hem | Works</title>
      </Head>
      <main
        id="main-container"
        style={{ paddingTop: "clamp(100px, 22.5vh, 200px)" }}
        ref={ref}
      >
        <Works></Works>
        <Footer></Footer>
      </main>
    </Fragment>
  );
};

export default WorksPage;
