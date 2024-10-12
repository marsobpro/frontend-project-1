import React from "react";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { brainwaveSymbol } from "../../assets";
import { collabApps } from "../../constants";

const SkillsCircle = () => {
  return (
    <div
      className={
        "relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100"
      }
    >
      {/* Inner circle */}
      <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
          <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
            <img src={brainwaveSymbol} height={48} width={48} alt="brainwave" />
          </div>
        </div>
      </div>
      <ul>
        {collabApps.map((app, index) => (
          <li
            key={app.id}
            className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
              index * 45
            }`}
          >
            <div
              className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                index * 45
              }`}
            >
              <img
                className="m-auto"
                width={app.width}
                height={app.width}
                src={app.icon}
                alt={app.title}
              />
            </div>
          </li>
        ))}
      </ul>
      <LeftCurve />
      <RightCurve />
    </div>
  );
};

export default SkillsCircle;
