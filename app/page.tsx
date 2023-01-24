"use client";
import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import HeroSection from "../ui/HomePage/HeroSection";
import AboutSection from "../ui/HomePage/AboutSection";

const HomePage: FC = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
    </Fragment>
  );
};

export default HomePage;
