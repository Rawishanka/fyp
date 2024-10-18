import React from "react";

export const OntologyDesign = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ontology Design</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4">
            The purpose of designing the ontology is to better understand and
            organize the data. To design the ontology we will use:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Our domain analysis knowledge</li>
            <li>Review on how existing systems organize data</li>
          </ul>
          <p className="mb-4">
            When designing the ontology, we will focus on representing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Ad categories</h3>
              <ul className="list-disc pl-5">
                <li>Property</li>
                <li>Vehicle</li>
                <li>Electronics</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Transaction types</h3>
              <ul className="list-disc pl-5">
                <li>Buy</li>
                <li>Sell</li>
                <li>Rent</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Ad properties</h3>
              <ul className="list-disc pl-5">
                <li>Price</li>
                <li>Location</li>
                <li>Condition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
