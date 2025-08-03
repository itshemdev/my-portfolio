import Card from "@/components/card";
import Image from "next/image";
import Text from "@/components/text";

const About = () => {
  return (
    <Card>
      <div className="flex">
        <Image
          src={"/hemsundar-paranthaman-1.jpeg"}
          alt="Photo of Hemsundar Paranthaman"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center ml-4">
          <h1 className="text-xl font-medium">Hemsundar Paranthaman</h1>
          <h2 className="opacity-70">Software Engineer</h2>
        </div>
      </div>

      <Text className="mt-6">
        A passionate developer with expertise in both front-end and back-end
        technologies. My programming journey began in 11th grade, focusing on
        React.js, Next.js, and Redux. After completing 12th grade, I joined
        JadeCore, where I contributed to SaaS applications and expanded into
        back-end work with Node.js, Express, and MySQL.
      </Text>
    </Card>
  );
};

export default About;
