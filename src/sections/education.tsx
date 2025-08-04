import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";

const Education = () => {
  const education = [
    {
      date: "2025",
      title: "Bachelor of Computer Applications",
      college: "Hindustan College of Arts and Science",
      location: "Chennai, India",
    },
  ];

  return (
    <Card>
      <CardTitle>Education</CardTitle>
      <div className="mt-6 flex flex-col gap-6">
        {education.map((item, index) => (
          <div key={index} className="flex text-sm">
            <span className="w-[35%] opacity-70 relative">{item.date}</span>
            <div className="w-[65%] flex flex-col gap-2">
              <h3>
                {item.title}, {item.college}
              </h3>
              <h4 className="opacity-70">{item.location}</h4>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Education;
