import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";

const Languages = () => {
  return (
    <Card>
      <CardTitle>Languages</CardTitle>
      <div className="mt-6 flex">
        {["Tamil", "English"].map((item, index) => (
          <p key={index} className="w-1/2 text-sm">
            {item}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default Languages;
