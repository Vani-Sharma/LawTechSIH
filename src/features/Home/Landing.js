import React from "react";
import img from "../../img/cuate.jpg";
import lawyer from "../../img/lawyers.png";
import { FeaturesComponent } from "./features";
import { SearchLawyerComponent } from "./searchLawyer";
import { DivAnimatedSteps } from "./steps";
export const LandingPageComponent = () => {
  return (
    <div className="flex-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-auto px-8 py-2">
          <div className="text-5xl font-semibold">
            Match Your Legal Needs With the Perfect Lawyer
          </div>
          <div className="mt-5">
            Skilled attorneys are just a search away. Start browsing by legal
            issue, practice area, or location for free.
          </div>
          <div className="flex flex-auto mt-12">
            <input
              class="bg-[#F6F7FA] p-3 rounded focus:outline-none"
              placeholder="Practice area, legal issue"
              type="text"
              name="search"
            />
            <input
              class="bg-[#F6F7FA] p-3 border-solid border-l-2 rounded w-24 lg:w-64 focus:outline-none"
              placeholder="State, city"
              type="text"
              name="search"
            />
            <button className="bg-[#3D00B7] text-white rounded px-2">
              Find a Lawyer
            </button>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <img src={img} className="object-contain" alt="hiii" />
        </div>
      </div>
      <FeaturesComponent />
      <DivAnimatedSteps />
      <SearchLawyerComponent />
      <div class="flex-auto mt-10 mb-10 mx-8 bg-[#F2F2FE] rounded">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-8 items-start lg:ml-12">
            <div className="text-2xl font-semibold">Are You a Lawyer?</div>
            <div className="mt-3">
              Check out how we can get you more leads for free. Build your brand
              and become more visible online.
            </div>
            <button className="bg-[#3D00B7] text-white p-2 rounded lg:mt-8 mt-5">
              Get Started
            </button>
          </div>
          <div className="py-4 px-6 flex flex-auto justify-center">
            <img src={lawyer} className="object-contain" alt="hiii" />
          </div>
        </div>
      </div>
    </div>
  );
};
