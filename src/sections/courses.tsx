import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Link from "next/link";
import Arrow from "@/components/arrow";

const Courses = () => {
  const courses = [
    {
      title: "Javascript Pro: Mastering Advanced Concepts and Techniques",
      date: "2025",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0e4ef8a9-76ac-462f-9fcc-f2d52d90d7de",
    },
    {
      title: "Typescript: The Complete Developer's Guide",
      date: "2025",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-c4f4b88c-18ff-4226-89d1-154a37dd75c2/",
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      date: "2024",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-ee2ce285-fb06-4060-9fb6-349c80d14f1b/",
    },
    {
      title: "The Web Developer Bootcamp",
      date: "2022",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-98aaf29e-9023-464d-aef6-85f849791561/",
    },
  ];

  return (
    <Card className="!bg-[#FD34C1]">
      <CardTitle>Courses</CardTitle>
      <div className="mt-6 flex flex-col gap-6">
        {courses.map((item, index) => (
          <div key={index} className="flex text-sm">
            <span className="w-[35%] opacity-70 relative">
              {item.date}
              {/* <Image
                src="/certifications/something.jpg"
                alt=""
                width={200}
                height={200}
                className="max-w-[80%]"
              /> */}
            </span>
            <div className="w-[65%] flex flex-col gap-2">
              <h4 className="opacity-70">{item.provider}</h4>
              <h3>{item.title}</h3>

              <Link
                href={item.link}
                className="underline flex items-center gap-1"
              >
                View Certificate
                <Arrow />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Courses;
