import { Header } from "@/app/component/Header";
import { Section } from "@/app/component/Section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="px-20 py-20 text-orange-600">
          <h1 className="text-5xl">Resource Allocator/Mapper for Efficient Transactions</h1>
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
