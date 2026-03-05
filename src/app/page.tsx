"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Testimonials from "@/sections/testimonials";
import Column from "@/components/column";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import About from "@/sections/about";
import Courses from "@/sections/courses";
import Skills from "@/sections/skills";
import Works from "@/sections/works";
import Languages from "@/sections/languages";
import Education from "@/sections/education";
import Handles from "@/sections/handles";
import { Signature } from "@/components/signature";

const LOADER_DURATION_MS = 2500;
const FADE_DURATION_S = 0.5;

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLoader ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 rounded-2xl p-6 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
        >
          <Signature text="Hem." fontSize={16} color="#0156FE" />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          className="max-w-[1100px] mx-auto gap-4 py-4 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_DURATION_S, ease: "easeInOut" }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <Column className="">
              <About />
              <Experience className={"md:hidden"} />
              <Testimonials />
              <Skills />
              <Education />
            </Column>
            <Column>
              <Experience className={"hidden md:block"} />
              <Courses />
              <Languages />
            </Column>
          </div>
          <Works />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Contact />
            <Handles />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
