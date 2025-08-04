"use client";

import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import Text from "@/components/text";
import Link from "next/link";

const Contact = () => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("hemsundar.paranthaman@outlook.com")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Card>
      <CardTitle>Contact</CardTitle>
      <Text className="mt-6">
        You can always reach me at{" "}
        <button
          onClick={copyToClipboard}
          className="underline hover:italic text-foreground opacity-100"
        >
          hemsundar.paranthaman@outlook.com
        </button>
        , or connect with me through{" "}
        <Link
          href="https://breezyworks.com"
          className="underline hover:italic opacity-100 text-foreground"
          target="_blank"
        >
          breezyworks.com
        </Link>
        .
      </Text>
    </Card>
  );
};

export default Contact;
