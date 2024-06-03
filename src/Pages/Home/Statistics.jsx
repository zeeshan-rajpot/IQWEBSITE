import React from "react";
import DistributionIq from "./DistributionI";
import DistributionAge from "./DistributionAge";
import Studylevl from "./Studylevl";
import StudyLevelsecond from "./StudyLevelsecond";

const Statistics = () => {
  return (
    <>
      <section id="statistics">
        <div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  pt-10   mx-auto">
          <div className="text-center">
            <h2 className="text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold py-10">
              Our Statistics
            </h2>
            <p className="lg:text-xl font-normal text-ptheme ">
              The IQ results include personalized statistics that rank the
              candidate based on several parameters (population, age group,
              level of study, field of study). Our following statistics are
              derived from our studies of all the candidates on the global scale
              over several years and can evolve, depending on the new results
              recorded.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 pt-14">
            <div className="col-span-3">
              {/* <img src="/Frame 31.png" alt="" /> */}
              <DistributionIq />
            </div>
            <div className="col-span-3">
              <DistributionAge />
            </div>
            <div className="col-span-3">
              <Studylevl />
            </div>
            <div className="col-span-3">
              <StudyLevelsecond />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
