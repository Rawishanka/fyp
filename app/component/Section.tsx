interface SectionProps {
    id: string;
    title: string;
    content: string;
  }
  
  export const Section = ({ id, title, content }: SectionProps) => {
    return (
      <section id={id} className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{content}</p>
        </div>
      </section>
    );
  };
  