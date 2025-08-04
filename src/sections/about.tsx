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
        A developer passionate about crafting fast, modern, and user‑friendly
        websites. I enjoy transforming ideas into digital products that help
        businesses grow — from sleek marketing sites to custom eCommerce
        solutions. Beyond just writing code, I focus on thoughtful design, clean
        user experiences, and building things that feel polished and purposeful.
      </Text>
    </Card>
  );
};

export default About;
