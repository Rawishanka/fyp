import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => (
  <div className="mb-8 flex justify-between items-center w-full right-timeline">
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">{date}</h1>
    </div>
    <div className="order-1 bg-blue-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
        {description}
      </p>
    </div>
  </div>
);

export const Timeline = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto w-full h-full">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Project Timeline
        </h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          <TimelineItem
            date="1"
            title="Project Initiation"
            description="Define project scope, objectives, and initial requirements gathering."
          />
          <TimelineItem
            date="2"
            title="Design Phase"
            description="Develop system architecture, design user interface, and plan database structure."
          />
          <TimelineItem
            date="3"
            title="Development"
            description="Implement core functionality, including web scraping, data analysis, and matching algorithm."
          />
          <TimelineItem
            date="4"
            title="Testing"
            description="Conduct thorough testing, including unit tests, integration tests, and user acceptance testing."
          />
          <TimelineItem
            date="5"
            title="Deployment"
            description="Launch the initial version of the platform and gather user feedback."
          />
        </div>
      </div>
    </section>
  );
};
