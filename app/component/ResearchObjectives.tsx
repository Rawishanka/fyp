import React from "react";

export const ResearchObjectives = () => {
  const objectives = [
    {
      title: "Develop a Scraper",
      description:
        "Create a robust scraper to collect ads from multiple platforms efficiently.",
    },
    {
      title: "Organize and Categorize",
      description:
        "Implement a system to organize and categorize ads from different platforms into a standard framework.",
    },
    {
      title: "Implement Matching Engine",
      description:
        "Develop a sophisticated matching engine to connect resource wanted ads with resource offering ads.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Research Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="bg-blue-600 text-white font-bold text-xl py-4 px-6">
                {objective.title}
              </div>
              <div className="p-6">
                <p className="text-gray-700">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
