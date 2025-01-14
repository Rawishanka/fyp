import { Header } from "@/app/component/Header";
import { Section } from "@/app/component/Section";
import { ResearchObjectives } from "./component/ResearchObjectives";
import { MethodologyOverview } from "./component/Methodology";
import { RequirementElicitation } from "./component/RequirenmentElicitation";
import { OntologyDesign } from "./component/OntologyDesign";
import { SystemDesignImplementation } from "./component/SystemDesignImplementation";
import { Evaluation } from "./component/Evaluation";
import ExistingSystems from "./component/ExistingSystems";
import { Welcome } from "./component/Welcome";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <section id="introduction" className="py-8">
          <div className="container mx-auto md:flex-row items-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              Introduction to Resource Allocation in Digital Marketplaces
            </h1>
            <p className="py-5 text-2xl text-sky-700">
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
          id="motivation"
          title="Motivation"
          content="Gathers ads from different sources into a unified platform, making finding relevant ads and requests easier."
        />
        <Section
          id="problem-statement"
          title="Problem Statement"
          content="Users face difficulties locating relevant ads and requests due to fragmented sources. Poor categorization makes it harder to find desired ads."
        />

        <ResearchObjectives />
        <MethodologyOverview />
        <RequirementElicitation />
        <OntologyDesign />
        <SystemDesignImplementation />
        <Evaluation />
        <ExistingSystems/>
      </main>
    </div>
  );
}
