import React from "react";
import { features } from "./data";

export const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="flex flex-col gap-10 w-[80vw]">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-center font-bold">Powerful <span className="bg-gradient-to-r from-blue-500 to-violet-600 text-transparent bg-clip-text">Features</span></h1>
          <p className="text-lg text-center text-gray-500">
            All you need to manage your databases quickly, efficiently and
            professionally
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature) => (
            <div className="flex flex-col gap-4 bg-white rounded-sm p-4 min-h-[200px] border border-gray-200 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center justify-start">
                <div className="bg-gradient-to-br from-blue-500 to-violet-600 rounded-sm p-2 text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p className="text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
