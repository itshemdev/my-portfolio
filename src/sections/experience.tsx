import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Link from "next/link";
import Arrow from "@/components/arrow";

const Experience = ({ className }: { className?: string }) => {
  const experience = [
    {
      date: "Present",
      title: "Founder",
      company: "Breezy Works",
      location: "Tamil Nadu, India",
      link: "https://breezyworks.com",
    },
    {
      date: "2024 - 2025",
      title: "E-commerce Analyst",
      company: "BuildDirect",
      location: "Vancouver, Canada",
      link: "https://builddirect.com",
    },
    {
      date: "2022 -2024",
      title: "Technical Analyst",
      company: "JadeCore",
      location: "Tamil Nadu, India",
      link: "https://jadecore.in",
    },
  ];

  return (
    <Card className={`${className}`}>
      <CardTitle>Experience</CardTitle>
      <div className="mt-6 flex flex-col gap-4">
        {experience.map((item, index) => (
          <div key={index} className="flex text-sm">
            <span
              className={`w-[35%] opacity-70 ${
                item.date === "Present" && "text-blue-500 opacity-100"
              }`}
            >
              {item.date}
            </span>
            <div className="w-[65%] flex flex-col gap-2">
              <h3>{item.title}</h3>
              <Link
                href={item.link}
                className="underline flex items-center gap-2"
              >
                {item.company}
                <Arrow />
              </Link>
              <h4 className="opacity-70">{item.location}</h4>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Experience;
