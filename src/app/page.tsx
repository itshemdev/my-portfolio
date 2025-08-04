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

export default function Home() {
  return (
    <div className="max-w-[1100px] mx-auto gap-4 py-4 px-4">
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
    </div>
  );
}
