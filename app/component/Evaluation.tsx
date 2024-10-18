import React from "react";

interface EvaluationAspectProps {
  aspect: string;
  methodology: string;
}

const EvaluationAspect: React.FC<EvaluationAspectProps> = ({
  aspect,
  methodology,
}) => (
  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{aspect}</h3>
    <p className="text-gray-700">{methodology}</p>
  </div>
);

export const Evaluation = () => {
  const evaluationAspects = [
    {
      aspect: "Classification models",
      methodology:
        "Perform offline testing and evaluate using metrics such as precision, recall, and F1-score.",
    },
    {
      aspect: "Matching Engine",
      methodology:
        "Conduct offline testing and assess performance with evaluation metrics like precision, recall, and F1-score.",
    },
    {
      aspect: "UI / UX evaluation",
      methodology:
        "Conduct usability testing and get user feedback for improvements.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Evaluation</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {evaluationAspects.map((item, index) => (
            <EvaluationAspect
              key={index}
              aspect={item.aspect}
              methodology={item.methodology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
