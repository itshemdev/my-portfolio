import Arrow from "@/components/arrow";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  const works = [
    {
      title: "The AWM",
      image: "/the-awm.png",
      link: "https://the-awm.com",
    },
    {
      title: "All DigiApp",
      image: "/all-digiapp-compressed.jpeg",
      link: "https://all-digiapp.com",
    },
  ];

  return (
    <Card className="mt-4">
      <CardTitle>Featured Works</CardTitle>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/*  */}
        {works.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-lg overflow-hidden"
            />
            <div className="mt-2 flex items-start justify-between">
              <div className="">
                <h3 className="text-md">{item.title}</h3>
                <Text>Development</Text>
              </div>
              <Link
                href={item.link}
                className="flex items-center gap-1 text-sm"
              >
                Visit <Arrow />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Works;
