import React from "react";

interface MethodologyStepProps {
  title: string;
  description: string;
}

const MethodologyStep: React.FC<MethodologyStepProps> = ({
  title,
  description,
}) => (
  <div className="flex items-center mb-4">
    <div className="bg-blue-500 rounded-full p-2 mr-4">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export const MethodologyOverview = () => {
  const steps = [
    {
      title: "Requirement Elicitation",
      description: "Gathering and analyzing project requirements",
    },
    {
      title: "Ontology Design",
      description: "Structuring and organizing data representation",
    },
    {
      title: "System Design and Implementation",
      description: "Developing the core system components",
    },
    {
      title: "Evaluation",
      description: "Testing and assessing system performance",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Methodology</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {steps.map((step, index) => (
            <MethodologyStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
