import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Arrow from "@/components/arrow";

const Handles = () => {
  const links = [
    {
      title: "Github",
      href: "https://github.com/itshemdev",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/hemsundar-paranthaman/",
    },
    {
      title: "X",
      href: "https://x.com/hemmssss",
    },
  ];

  return (
    <Card>
      <CardTitle>Handles</CardTitle>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="underline hover:underline flex items-center gap-2 text-sm mt-2"
          >
            {link.title}
            <Arrow />
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Handles;
