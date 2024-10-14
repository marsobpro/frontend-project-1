import BenefitCard from "./BenefitCard";
import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <BenefitCard item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
