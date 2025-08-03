"use client";

import { useState } from "react";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Text from "@/components/text";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amrisha Rajkowa",
      company: "BuildDirect",
      position: "Senior Product Manager",
      testimonial: `I had the pleasure of managing Hemsundar during his six-month tenure as a Part-Time Developer at BuildDirect. Hemsundar stands out as an exceptionally quick learner with a genuine hunger for knowledge. What was most impressive was his professionalism and strong work ethic, which were on par with our seasoned full-time developers, despite him being a student at the time. He quickly became a valuable contributor, taking ownership of key initiatives. He was instrumental in building new Shopify stores from the ground up, redesigning our critical Product Display Page (PDP), and developing various new components for the core builddirect.com platform. Hemsundar's drive, technical aptitude, and ability to deliver quality results are truly impressive. He earns my highest recommendation, and I am confident he will be a tremendous asset to any team he joins.`,
    },
    {
      name: "Abel Dharmaraj",
      company: "JadeCore",
      position: "Senior Software Engineer",
      testimonial: `I had the pleasure of working with Hemsundar, and I was consistently impressed by his strong programming foundation and commitment to best practices. He has a clear passion for learning and doesn't hesitate to explore new technologies. Whether it was working with JavaScript, React, or Node.js, he always approached tasks with curiosity and a drive to solve challenges efficiently. His attitude and growth mindset make him a valuable asset to any development team.`,
    },
  ];

  type ItemProps = {
    item: {
      name: string;
      company: string;
      position: string;
      testimonial: string;
    };
  };

  const Item = ({ item }: ItemProps) => {
    const [readmore, setReadmore] = useState(false);

    return (
      <div className="flex flex-col">
        <h3 className="font-medium">{item.name}</h3>
        <Text className="opacity-70">
          {item.position} at {item.company}
        </Text>
        <Text className="mt-2">
          &quot;
          {readmore
            ? `${item.testimonial}"`
            : item.testimonial.slice(0, 400)}{" "}
          {!readmore && (
            <button
              className="opacity-100 text-white underline"
              onClick={() => setReadmore(!readmore)}
            >
              Read More...
            </button>
          )}
        </Text>
      </div>
    );
  };

  return (
    <Card>
      <CardTitle>Testimonials</CardTitle>
      <div className="mt-6 flex flex-col gap-6">
        {testimonials.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </Card>
  );
};

export default Testimonials;
