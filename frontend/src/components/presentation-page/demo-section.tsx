import { ArrowRight, Play } from "lucide-react";
import React from "react";

export const DemoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gradient-to-r from-blue-100 to-violet-100">
      <div className="flex gap-10 w-[90vw]">
        <div className="flex flex-col gap-4 w-[50%] rounded-sm p-4">
          <h2 className="text-4xl font-bold">
            See{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 text-transparent bg-clip-text">
              RemasteringDB
            </span>{" "}
            in action
          </h2>
          <p className="text-lg text-gray-600">
            Discover how you can design complex database schemas in minutes, not
            hours. Our intuitive interface makes database management accessible
            to everyone.
          </p>
          <ul className="list-disc ml-8 text-lg">
            <li>Intuitive drag & drop interface</li>
            <li>Automatic relationships</li>
            <li>Real-time validation</li>
            <li>Multiple export formats</li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 py-2 rounded-md cursor-pointer">
              <Play className="w-4 h-4" /> Watch Interactive Demo
            </button>
            <button className="flex  bg-white items-center gap-4 border border-gray-200 px-4 py-2 rounded-md cursor-pointer">
              Start for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="imagen w-[50%]">
          <div className="imagen bg-gray-600">
            <p className="text-center h-100">Here the reference image</p>
          </div>
        </div>
      </div>
    </div>
  );
};
