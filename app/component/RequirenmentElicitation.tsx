import React from "react";

interface RequirementListProps {
  title: string;
  items: string[];
}

const RequirementList: React.FC<RequirementListProps> = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const RequirementElicitation = () => {
  const functionalRequirements = [
    "Automatically collect data from various platforms.",
    "Categorize the collected data and extract key information.",
    "Match resource wanted ads and user requests with resource offering ads.",
    "Consider both text and image features in the matching process.",
  ];

  const nonFunctionalRequirements = [
    "Performance",
    "Accuracy",
    "Scalability",
    "Usability",
    "Reliability",
    "Maintainability",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Requirement Elicitation
        </h2>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <RequirementList
            title="Functional Requirements"
            items={functionalRequirements}
          />
          <RequirementList
            title="Non-Functional Requirements"
            items={nonFunctionalRequirements}
          />
        </div>
      </div>
    </section>
  );
};
