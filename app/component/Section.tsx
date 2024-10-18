import Image from 'next/image';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const Section = ({ id, title, content, imageUrl, imageAlt }: SectionProps) => {
  return (
    <section id={id} className="py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{content}</p>
        </div>
        {imageUrl && (
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <Image src={imageUrl} alt={imageAlt || title} width={500} height={300} className="rounded-lg" />
          </div>
        )}
      </div>
    </section>
  );
};
