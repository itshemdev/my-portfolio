"use client";
import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import HeroSection from "../ui/HomePage/HeroSection";
import AboutSection from "../ui/HomePage/AboutSection";
import WorksSection from "../ui/HomePage/WorksSection";

const HomePage: FC = () => {
  return (
    <Fragment>
      <HeroSection />
      <WorksSection />
      <AboutSection />
    </Fragment>
  );
};

export default HomePage;
