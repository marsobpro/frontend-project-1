import React from "react";
import { pricing } from "../constants";
import PricingCard from "./ui/PricingCard";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <PricingCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default PricingList;
