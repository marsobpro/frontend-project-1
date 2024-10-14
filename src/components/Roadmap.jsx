import Button from "./Button";
import Heading from "./ui/Heading";
import Section from "./Section";
import Tagline from "./ui/Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import RoadmapCard from "./ui/RoadmapCard";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      {/* Cards */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return <RoadmapCard item={item} key={item.id} />;
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
