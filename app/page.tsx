import { Header } from "@/app/component/Header";
import { Section } from "@/app/component/Section";
import Image from "next/image";
import welcome from "../public/welcome.png";
import { ResearchObjectives } from "./component/ResearchObjectives";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="flex items-center justify-center w-auto">
          <Image
            src="/welcome.png"
            alt="Welcome Image"
            width={1500} // Increased width
            height={500} // Increased height
            className="rounded-lg"
          />
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
        <ResearchObjectives />
      </main>
    </div>
  );
}
