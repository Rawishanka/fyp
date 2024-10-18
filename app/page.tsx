import { Header } from "@/app/component/Header";
import { Section } from "@/app/component/Section";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="flex items-center justify-center w-auto">
          <div>
            <Image
              src="/classified_adv.png"
              alt="Welcome Image"
              width={600} // Increased width
              height={500} // Increased height
              className="rounded-lg"
            />
          </div>
          <div className="px-6">
            <h1 className="text-6xl">
              Resource Allocator/Mapper
              <br /> for
              <br /> Efficient Transactions
            </h1>
            <div className="mt-20">
              <ul>
                <li>Supervisor : Prof. Indika Perera</li>
                <li>
                Team Members:
                  <ul>
                    <li className="pl-16">Alwis L.W.D.D 200021T</li>
                    <li className="pl-16">Chathunka W.A.P 200089G</li>
                    <li className="pl-16">Rawishanka D.D.R.L 200540H</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="introduction" className="py-8">
          <div className="container mx-auto md:flex-row items-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              Introduction to Resource Allocation in Digital Marketplaces
            </h1>
            <p className="py-5 text-2xl text-orange-400">
              Involves the process of efficiently connecting users’ needs with
              available resources through various online platforms
            </p>
            <ul>
              <li>
                <b>User Empowerment:</b> Enhances the ability of individuals and
                businesses to quickly and accurately find what they need.
              </li>
              <li>
                <b>Economic Efficiency:</b> Optimizes market operations, drives
                economic growth, and improves the effectiveness of online
                transactions
              </li>
              <li>
                <b>Global Reach:</b> Facilitates access to resources on a global
                scale, bridging gaps between supply and demand in diverse
                markets.
              </li>
            </ul>
          </div>
        </section>
        <Section
          id="introduction"
          title="Introduction to Resource Allocation in Digital Marketplaces"
          content="Involves the process of efficiently connecting users’ needs with available resources through various online platforms."
        />
        <Section
          id="motivation"
          title="Motivation"
          content="Gathers ads from different sources into a unified platform, making finding relevant ads and requests easier."
        />
        <Section
          id="problem-statement"
          title="Problem Statement"
          content="Users face difficulties locating relevant ads and requests due to fragmented sources. Poor categorization makes it harder to find desired ads."
        />
        <Section
          id="objectives"
          title="Research Objectives"
          content="1. Develop a scraper to collect ads from multiple platforms. 2. Organize and categorize ads into a standard framework."
        />
      </main>
    </div>
  );
}
