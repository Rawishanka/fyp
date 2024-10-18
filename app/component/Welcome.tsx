import React from "react";
import Image from "next/image";

export const Welcome = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/classified_adv.png"
              alt="Classified Advertisements"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-800">
              Resource Allocator/Mapper
              <br /> for
              <br /> Efficient Transactions
            </h1>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Project Team
              </h2>
              <p className="mb-2 text-gray-600">
                <span className="font-semibold">Supervisor:</span> Prof. Indika
                Perera
              </p>
              <p className="font-semibold mb-2 text-gray-700">Team Members:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>
                  Alwis L.W.D.D <span className="text-gray-500">200021T</span>
                </li>
                <li>
                  Chathunka W.A.P <span className="text-gray-500">200089G</span>
                </li>
                <li>
                  Rawishanka D.D.R.L{" "}
                  <span className="text-gray-500">200540H</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
