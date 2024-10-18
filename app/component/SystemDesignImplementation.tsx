import React from "react";
import Image from "next/image";

interface ImplementationStepProps {
  title: string;
  description: string;
}

const ImplementationStep: React.FC<ImplementationStepProps> = ({ title, description }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export const SystemDesignImplementation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          System Design and Implementation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImplementationStep
              title="Scraper Bot"
              description="It will go through selected data sources and will collect the data. As data sources we can use general classifieds websites, real estate and automotive classifieds websites."
            />
            <ImplementationStep
              title="Content Analyzer"
              description="This module will identify the categories, subcategories and transaction types the ads and user requests belong to. It will identify attributes belonging to those data. For categorizing data from different platforms, we can use classification models and for simpler cases we can do category mapping."
            />
            <ImplementationStep
              title="Matching Engine"
              description="It will consist of two stages: 1. Retrieval Stage and 2. Ranking Stage. Matching ads can be retrieved using the embedding-based retrieval technique and ranked based on factors like similarity score, categories, location proximity and ad freshness."
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Two Tower Neural Network Architecture
            </h3>
            <div className="bg-gray-200 p-4 rounded-lg">
              <Image
                src="/two-tower-architecture.png"
                alt="Two Tower Neural Network Architecture"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
