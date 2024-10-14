import React from "react";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";
import Arrow from "../../assets/svg/Arrow";

const BenefitCard = ({ item }) => {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${item.backgroundUrl})`,
      }}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="flex items-center mt-auto">
          <img src={item.iconUrl} width={48} height={48} alt={item.title} />
          <button className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer">
            Explore more
          </button>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
};

export default BenefitCard;
