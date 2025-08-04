import Testimonials from "@/sections/testimonials";
import Column from "@/components/column";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import About from "@/sections/about";
import Courses from "@/sections/courses";
import Skills from "@/sections/skills";
import Works from "@/sections/works";

export default function Home() {
  return (
    <div className="max-w-[1100px] mx-auto gap-4 py-4 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Column className="">
          <About />
          <Experience className={"md:hidden"} />
          <Testimonials className={"!bg-[#F2AA47] text-[#222]"} />
          <Skills />
        </Column>
        <Column>
          <Experience className={"hidden md:block !bg-[#867CE1]"} />

          <Courses />
        </Column>
      </div>
      <Works />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Column className="">
          <Contact />
        </Column>
        <Column></Column>
      </div>
    </div>
  );
}
